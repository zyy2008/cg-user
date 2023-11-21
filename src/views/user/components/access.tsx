import { defineComponent, reactive, ref } from "vue";
import { ButtonModal, ButtonModalInstance } from "@/components";
import { Form, TreeSelect, FormInstance, Select } from "ant-design-vue";
import { EditInstance } from "./index";

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const Content = defineComponent({
  setup() {
    return () => (
      <Form
        labelCol={{
          span: 4,
        }}
      >
        <Form.Item label="岗位选择">
          <Select placeholder="请选择岗位" />
        </Form.Item>
        <Form.Item label="菜单选择">
          <TreeSelect placeholder="请选择菜单" />
        </Form.Item>
      </Form>
    );
  },
});

export default defineComponent({
  setup(_, { expose }) {
    const title = ref<string>("新增");
    const editRef = ref<ButtonModalInstance>();
    const formRef = ref<FormInstance>();
    const formState = reactive<FormState>({
      username: "",
      password: "",
      remember: false,
    });
    expose({
      setTitle: (val) => {
        title.value = val;
        editRef.value?.setVisible(true);
      },
    } as EditInstance);
    return () => {
      return (
        <ButtonModal
          ref={editRef}
          buttonProps={{
            type: "link",
            children: "权限",
            onClick: () => {
              title.value = "权限";
            },
            style: {
              padding: 0,
            },
          }}
          layoutType="drawer"
          drawerProps={{
            title: title.value,
            children: <Content />,
            onOk: () => {
              formRef.value?.validateFields().then((res) => {
                console.log(res);
              });
            },
          }}
          onClose={() => {
            formRef.value?.resetFields();
          }}
        />
      );
    };
  },
});
