import {
  Button,
  Modal,
  ButtonProps,
  ModalProps,
  DrawerProps,
  Drawer,
  Space,
} from "ant-design-vue";
import {
  defineComponent,
  PropType,
  VNode,
  ref,
  ExtractPropTypes,
  CSSProperties,
} from "vue";

const props = {
  buttonProps: Object as PropType<
    ButtonProps & { children?: VNode | string; style?: CSSProperties }
  >,
  modalProps: Object as PropType<
    Omit<ModalProps, "visible" | "onCancel"> & { children?: VNode | string }
  >,
  drawerProps: Object as PropType<
    Omit<DrawerProps, "visible" | "onClose"> & {
      children?: VNode | string;
      onOk?: () => void;
    }
  >,
  layoutType: String as PropType<"modal" | "drawer">,
  onClose: Function as PropType<() => void>,
};

export type ButtonModalProps = Partial<ExtractPropTypes<typeof props>>;

export type ButtonModalInstance = {
  setVisible: (T: boolean) => void;
};

export default defineComponent({
  props,
  setup(_, { expose }) {
    const visible = ref<boolean>(false);
    expose({
      setVisible: (val) => {
        visible.value = val;
      },
    } as ButtonModalInstance);
    return ({
      buttonProps = {},
      modalProps = {},
      drawerProps = {},
      layoutType = "modal",
      onClose,
    }: ButtonModalProps) => {
      const {
        children: btnNode,
        onClick: onBtnClick,
        ...btnProps
      } = buttonProps;
      const { children: modNode, ...modProps } = modalProps;
      const { children: draNode, ...draProps } = drawerProps;
      return (
        <>
          <Button
            {...btnProps}
            onClick={(e) => {
              visible.value = true;
              onBtnClick?.(e);
            }}
            v-slots={{
              default: () => btnNode,
            }}
          />
          {layoutType === "modal" ? (
            <Modal
              {...modProps}
              visible={visible.value}
              onCancel={() => {
                visible.value = false;
                onClose?.();
              }}
              v-slots={{
                default: () => modNode,
              }}
            />
          ) : (
            <Drawer
              width={600}
              footer={
                <Space>
                  <Button
                    onClick={() => {
                      visible.value = false;
                      onClose?.();
                    }}
                  >
                    关闭
                  </Button>
                  <Button type="primary" onClick={drawerProps?.onOk}>
                    确定
                  </Button>
                </Space>
              }
              footerStyle={{
                textAlign: "right",
              }}
              {...draProps}
              visible={visible.value}
              onClose={() => {
                visible.value = false;
                onClose?.();
              }}
              v-slots={{
                default: () => draNode,
              }}
            />
          )}
        </>
      );
    };
  },
});
