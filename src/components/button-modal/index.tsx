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
    ButtonProps & { children: VNode | string; style?: CSSProperties }
  >,
  modalProps: Object as PropType<
    Omit<ModalProps, "visible" | "onCancel"> & { children: VNode | string }
  >,
  drawerProps: Object as PropType<
    Omit<DrawerProps, "visible" | "onClose"> & {
      children: VNode | string;
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
      buttonProps,
      modalProps,
      drawerProps,
      layoutType = "modal",
      onClose,
    }: ButtonModalProps) => {
      return (
        <>
          <Button
            {...buttonProps}
            style={buttonProps?.style}
            onClick={(e) => {
              visible.value = true;
              buttonProps?.onClick?.(e);
            }}
            v-slots={{
              default: buttonProps?.children,
            }}
          />
          {layoutType === "modal" ? (
            <Modal
              {...modalProps}
              visible={visible.value}
              onCancel={() => {
                visible.value = false;
                onClose?.();
              }}
              v-slots={{
                default: modalProps?.children,
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
              {...drawerProps}
              visible={visible.value}
              onClose={() => {
                visible.value = false;
                onClose?.();
              }}
              v-slots={{
                default: drawerProps?.children,
              }}
            />
          )}
        </>
      );
    };
  },
});
