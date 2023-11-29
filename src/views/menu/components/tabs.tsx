import { defineComponent, ref } from "vue";
import { Tabs, Table, Space, Card, FormInstance } from "ant-design-vue";
import { ButtonModal, ButtonModalInstance } from "@/components";
import { createForm } from "@formily/core";
import { createSchemaField } from "@formily/vue";
import {
  Form,
  FormItem,
  Input,
  Switch,
  Select,
  FormLayout,
} from "@formily/antdv-x3";
import { schema } from "./schema";

const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Switch,
    Input,
    Select,
  },
});

const ButtonPane = defineComponent({
  setup() {
    const title = ref<string>("新增按钮");
    const formRef = ref<FormInstance>();
    const editRef = ref<ButtonModalInstance>();
    return () => (
      <Card
        size="small"
        title={
          <ButtonModal
            ref={editRef}
            buttonProps={{
              children: "新增按钮",
              type: "primary",
            }}
            modalProps={{
              title: title.value,
              okButtonProps: {
                loading: true,
              },
              onOk: () => {
                formRef.value?.validateFields().then((res) => {
                  console.log(res);
                });
              },

              children: (
                <Form ref={formRef}>
                  <Form.Item label="按钮编码">
                    <Input />
                  </Form.Item>
                  <Form.Item label="按钮名称">
                    <Input />
                  </Form.Item>
                  <Form.Item label="授权标识">
                    <Input />
                  </Form.Item>
                  <Form.Item label="按钮说明">
                    <Input.TextArea rows={6} />
                  </Form.Item>
                </Form>
              ),
            }}
          />
        }
      >
        <Table
          dataSource={[
            {
              code: "2",
            },
          ]}
          columns={[
            {
              title: "按钮编码",
              dataIndex: "code",
            },
            {
              title: "按钮名称",
              dataIndex: "2",
            },
            {
              title: "授权标识",
              dataIndex: "3",
            },
            {
              title: "按钮说明",
              dataIndex: "4",
            },
            {
              title: "操作",
              customRender: () => {
                return (
                  <Space>
                    <a
                      onClick={() => {
                        title.value = "编辑按钮";
                        editRef.value?.setVisible(true);
                      }}
                    >
                      编辑
                    </a>
                    <a>删除</a>
                  </Space>
                );
              },
            },
          ]}
        />
      </Card>
    );
  },
});

const DataPane = defineComponent({
  setup() {
    const title = ref<string>("新增数据");
    const formRef = ref<FormInstance>();
    const editRef = ref<ButtonModalInstance>();
    const form = createForm();
    return () => (
      <Card
        size="small"
        title={
          <ButtonModal
            ref={editRef}
            buttonProps={{
              children: "新增数据",
              type: "primary",
            }}
            modalProps={{
              title: title.value,
              okButtonProps: {
                loading: true,
              },
              onOk: () => {
                formRef.value?.validateFields().then((res) => {
                  console.log(res);
                });
              },

              children: (
                <Form form={form} ref={formRef}>
                  <FormLayout labelCol={6}>
                    <SchemaField schema={schema} />
                  </FormLayout>
                </Form>
              ),
            }}
          />
        }
      >
        <Table
          dataSource={[
            {
              code: "2",
            },
          ]}
          columns={[
            {
              title: "按钮编码",
              dataIndex: "code",
            },
            {
              title: "按钮名称",
              dataIndex: "2",
            },
            {
              title: "授权标识",
              dataIndex: "3",
            },
            {
              title: "按钮说明",
              dataIndex: "4",
            },
            {
              title: "操作",
              customRender: () => {
                return (
                  <Space>
                    <a
                      onClick={() => {
                        title.value = "编辑数据";
                        editRef.value?.setVisible(true);
                      }}
                    >
                      编辑
                    </a>
                    <a>删除</a>
                  </Space>
                );
              },
            },
          ]}
        />
      </Card>
    );
  },
});

export default defineComponent({
  setup() {
    return () => {
      return (
        <Tabs>
          <Tabs.TabPane key={1} tab="按钮权限">
            <ButtonPane />
          </Tabs.TabPane>
          <Tabs.TabPane key={2} tab="数据范围权限">
            <DataPane />
          </Tabs.TabPane>
          <Tabs.TabPane key={3} tab="展示字段权限">
            展示字段权限
          </Tabs.TabPane>
        </Tabs>
      );
    };
  },
});
