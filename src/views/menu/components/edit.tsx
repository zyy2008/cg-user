import { defineComponent, reactive, ref } from "vue";
import { ButtonModal, ButtonModalInstance } from "@/components";
import { Form, Input, Radio, Switch, FormInstance } from "ant-design-vue";
import { EditInstance } from "./index";

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
            type: "primary",
            children: "新增",
            onClick: () => {
              title.value = "新增";
            },
          }}
          layoutType="drawer"
          drawerProps={{
            title: title.value,

            children: (
              <Form ref={formRef} model={formState}>
                <Form.Item
                  label="菜单名称"
                  name="username"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input v-model:value={formState.password} />
                </Form.Item>
                <Form.Item label="菜单编码" name="1">
                  <Input />
                </Form.Item>
                <Form.Item label="菜单类型" name="1">
                  <Radio.Group>
                    <Radio value={0}>一级菜单</Radio>
                    <Radio value={1}>子菜单</Radio>
                    <Radio value={2}>按钮/权限</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="菜单图标" name="1"></Form.Item>
                <Form.Item label="资源地址" name="1">
                  <Input />
                </Form.Item>
                <Form.Item label="请求参数" name="1">
                  <Input />
                </Form.Item>
                <Form.Item label="授权标识" name="1">
                  <Input />
                </Form.Item>
                <Form.Item label="是否隐藏" name="1">
                  <Switch checkedChildren="是" unCheckedChildren="否" />
                </Form.Item>
                <Form.Item label="菜单说明" name="1">
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
