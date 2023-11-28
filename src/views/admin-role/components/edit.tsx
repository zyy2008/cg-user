import { defineComponent, reactive, ref, onMounted, onUnmounted } from "vue";
import { ButtonModal, ButtonModalInstance } from "@/components";
import { Form, Input, Radio, Switch, FormInstance } from "ant-design-vue";
import { EditInstance } from "./index";
import { on, off } from "./bus";

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

export default defineComponent({
  setup(_, { expose }) {
    const title = ref<string>("新增");
    const disabled = ref<boolean>(true);
    const editRef = ref<ButtonModalInstance>();
    const formRef = ref<FormInstance>();
    const formState = reactive<FormState>({
      username: "",
      password: "",
      remember: false,
    });
    const listener = (val: string[]) => {
      disabled.value = val.length === 0;
    };
    onMounted(() => {
      on(listener);
    });
    onUnmounted(() => {
      off(listener);
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
            type: "primary",
            children: "新增",
            disabled: disabled.value,
            onClick: () => {
              title.value = "新增岗位";
            },
          }}
          layoutType="drawer"
          drawerProps={{
            title: title.value,
            children: (
              <Form
                ref={formRef}
                model={formState}
                labelCol={{
                  span: 4,
                }}
              >
                <Form.Item
                  label="岗位编码"
                  name="username"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input v-model:value={formState.password} />
                </Form.Item>
                <Form.Item
                  label="岗位名称"
                  name="1"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item label="岗位说明" name="1">
                  <Input.TextArea rows={6} />
                </Form.Item>
              </Form>
            ),
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
