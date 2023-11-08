import { Button, Modal, ButtonProps, ModalProps } from "ant-design-vue";
import { defineComponent, PropType, VNode, ref } from "vue";

const props = {
  buttonProps: Object as PropType<
    Omit<ButtonProps, "onClick"> & { children: VNode }
  >,
  modalProps: Object as PropType<
    Omit<ModalProps, "visible"> & { children: VNode }
  >,
};

export default defineComponent({
  props,
  setup({ buttonProps, modalProps }) {
    const visible = ref<boolean>(false);
    return () => (
      <>
        <Button
          {...buttonProps}
          onClick={() => {
            visible.value = true;
          }}
          v-slots={{
            default: buttonProps?.children,
          }}
        />
        <Modal
          {...modalProps}
          visible={visible.value}
          onCancel={() => (visible.value = false)}
          v-slots={{
            default: modalProps?.children,
          }}
        />
      </>
    );
  },
});
