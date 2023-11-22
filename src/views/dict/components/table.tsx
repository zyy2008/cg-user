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
import { ButtonModal } from "@/components";

export default defineComponent({
  setup() {
    return () => (
      <Card
        extra={
          <ButtonModal
            layoutType="drawer"
            buttonProps={{
              children: "新增",
              type: "primary",
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
          columns={[
            {
              title: "字典键",
              dataIndex: "1",
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
                      // editRef.value?.setTitle("编辑用户");
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
