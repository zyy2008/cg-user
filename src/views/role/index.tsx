import { defineComponent } from "vue";
import { Row, Col, Card, Tree, Table } from "ant-design-vue";
import { Edit, DepartTree } from "./components";

export default defineComponent({
  setup() {
    return () => (
      <Row gutter={24}>
        <Col span={4}>
          <Card title="部门">
            <DepartTree />
          </Card>
        </Col>
        <Col span={20}>
          <Card title={<Edit />}>
            <Table />
          </Card>
        </Col>
      </Row>
    );
  },
});
