import { defineComponent, ref } from "vue";
import {
  Card,
  Form,
  Select,
  Input,
  Button,
  Table,
  Space,
  Popconfirm,
} from "ant-design-vue";
import { ButtonModal, ButtonModalInstance } from "@/components";

export default defineComponent({
  setup() {
    const editRef = ref<ButtonModalInstance>();
    return () => (
      <Card
        extra={
          <ButtonModal
            ref={editRef}
            layoutType="drawer"
            buttonProps={{
              children: "新增",
              type: "primary",
            }}
            drawerProps={{
              children: (
                <Form
                  labelCol={{
                    span: 4,
                  }}
                >
                  <Form.Item label="字典键">
                    <Input />
                  </Form.Item>
                  <Form.Item label="字典键">
                    <Input />
                  </Form.Item>
                  <Form.Item label="字典键">
                    <Input />
                  </Form.Item>
                </Form>
              ),
            }}
          />
        }
        title={
          <Form layout="inline">
            <Form.Item>
              <Select />
            </Form.Item>
            <Form.Item>
              <Input placeholder="请输入字段" />
            </Form.Item>
            <Form.Item>
              <Button type="primary">查询</Button>
            </Form.Item>
          </Form>
        }
      >
        <Table
          dataSource={[
            {
              key: "2222",
            },
          ]}
          columns={[
            {
              title: "字典键",
              dataIndex: "key",
            },
            {
              title: "字典值",
              dataIndex: "1",
            },
            {
              title: "归属组织",
              dataIndex: "1",
            },
            {
              title: "排序编号",
              dataIndex: "1",
            },
            {
              title: "是否启用",
              dataIndex: "1",
            },
            {
              title: "备注",
              dataIndex: "1",
            },
            {
              title: "备注",
              dataIndex: "1",
            },
            {
              title: "操作",
              customRender: () => (
                <Space>
                  <a
                    onClick={() => {
                      editRef.value?.setVisible(true);
                    }}
                  >
                    编辑
                  </a>
                  <Popconfirm title="确定删除该条吗?" onConfirm={() => {}}>
                    <a>删除</a>
                  </Popconfirm>
                </Space>
              ),
            },
          ]}
        />
      </Card>
    );
  },
});
