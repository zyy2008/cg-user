import { defineComponent } from "vue";
import { Row, Col, Card } from "ant-design-vue";
import { Tree, View, Table } from "./components";

export default defineComponent({
  setup() {
    return () => (
      <Row gutter={[16, 16]}>
        <Col span={5}>
          <Tree />
        </Col>
        <Col span={19}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <View />
            </Col>
            <Col span={24}>
              <Table />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  },
});
