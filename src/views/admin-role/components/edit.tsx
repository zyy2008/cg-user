import { defineComponent, reactive, ref } from "vue";
import { ButtonModal, ButtonModalInstance } from "@/components";
import {
  Form,
  Input,
  Radio,
  Switch,
  FormInstance,
  TreeSelect,
} from "ant-design-vue";
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
              title.value = "新增用户";
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
                  span: 5,
                }}
              >
                <Form.Item label="部门" name="1">
                  <TreeSelect placeholder="请选择部门" />
                </Form.Item>
                <Form.Item label="姓名" name="1">
                  <Input placeholder="请输入姓名" />
                </Form.Item>
                <Form.Item label="性别" name="1">
                  <Radio.Group>
                    <Radio>男</Radio>
                    <Radio>女</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="手机号" name="1">
                  <Input placeholder="请输入手机号码" />
                </Form.Item>
                <Form.Item label="邮箱地址" name="1">
                  <Input placeholder="请输入邮箱地址" />
                </Form.Item>
                <Form.Item label="是否锁定" name="1">
                  <Switch checkedChildren="是" unCheckedChildren="否" />
                </Form.Item>
                <Form.Item label="是否有登录账号" name="1">
                  <Switch checkedChildren="是" unCheckedChildren="否" />
                </Form.Item>
                <Form.Item label="登录账号" name="1">
                  <Input placeholder="请输入登录账号" />
                </Form.Item>
                <Form.Item label="登录密码" name="1">
                  <Input.Password placeholder="请输入登录密码" />
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
