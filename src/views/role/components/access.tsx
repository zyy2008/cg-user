import { defineComponent, reactive, ref } from "vue";
import { ButtonModal, ButtonModalInstance } from "@/components";
import { Form, Input, Radio, Switch, FormInstance } from "ant-design-vue";
import { EditInstance } from "./index";
import Tabs from "./tabs";

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

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
            children: <Tabs />,
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
