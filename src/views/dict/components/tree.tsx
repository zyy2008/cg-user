import { defineComponent, ref } from "vue";
import { Card, Tree, Space, Button, Form, Input } from "ant-design-vue";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons-vue";
import { ButtonModal, ButtonModalInstance } from "@/components";

export default defineComponent({
  setup() {
    const title = ref<string>("新增字典");
    const editRef = ref<ButtonModalInstance>();
    const selectedKeys = ref<string[]>([]);
    return () => (
      <Card
        title="字典"
        extra={
          <Space>
            <ButtonModal
              ref={editRef}
              buttonProps={{
                icon: <PlusOutlined />,
                type: "primary",
                size: "small",
              }}
              modalProps={{
                width: 600,
                title: title.value,

                children: (
                  <Form
                    labelCol={{
                      span: 6,
                    }}
                  >
                    <Form.Item label="类型编码">
                      <Input placeholder="请输入类型编码" />
                    </Form.Item>
                    <Form.Item label="类型名称">
                      <Input placeholder="请输入类型名称" />
                    </Form.Item>
                    <Form.Item label="结构类型">
                      <Input placeholder="请输入结构类型" />
                    </Form.Item>
                    <Form.Item label="是否关联组织">
                      <Input placeholder="请输入是否关联组织" />
                    </Form.Item>
                    <Form.Item label="关联字典类型">
                      <Input placeholder="请输入关联字典类型" />
                    </Form.Item>
                  </Form>
                ),
              }}
            />
            <Button
              size="small"
              icon={<EditOutlined />}
              type="primary"
              disabled={selectedKeys.value.length === 0}
              onClick={() => {
                title.value = "修改字典";
                editRef.value?.setVisible(true);
              }}
            />
            <Button
              size="small"
              icon={<DeleteOutlined />}
              type="primary"
              disabled={selectedKeys.value.length === 0}
            />
          </Space>
        }
      >
        <Tree
          v-model:selectedKeys={selectedKeys.value}
          defaultExpandAll
          treeData={[
            {
              title: "0-0",
              key: "0-0",
              children: [
                {
                  title: "0-0-0",
                  key: "0-0-0",
                  children: [
                    { title: "0-0-0-0", key: "0-0-0-0" },
                    { title: "0-0-0-1", key: "0-0-0-1" },
                    { title: "0-0-0-2", key: "0-0-0-2" },
                  ],
                },
                {
                  title: "0-0-1",
                  key: "0-0-1",
                  children: [
                    { title: "0-0-1-0", key: "0-0-1-0" },
                    { title: "0-0-1-1", key: "0-0-1-1" },
                    { title: "0-0-1-2", key: "0-0-1-2" },
                  ],
                },
              ],
            },
          ]}
        />
      </Card>
    );
  },
});
