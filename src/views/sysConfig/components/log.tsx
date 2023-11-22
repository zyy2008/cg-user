import { defineComponent } from "vue";
import { Form, Input, Button, Card, RangePicker, Table } from "ant-design-vue";

export default defineComponent({
  setup() {
    return () => (
      <Card
        title={
          <Form layout="inline">
            <Form.Item>
              <Input placeholder="日志内容" />
            </Form.Item>
            <Form.Item>
              <RangePicker />
            </Form.Item>
            <Form.Item>
              <Button type="primary">查询</Button>
            </Form.Item>
          </Form>
        }
      >
        <Table
          columns={[
            { dataIndex: "1", title: "姓名" },
            { dataIndex: "1", title: "操作时间" },
            { dataIndex: "1", title: "操作IP" },
            { dataIndex: "1", title: "操作内容" },
          ]}
        />
      </Card>
    );
  },
});
