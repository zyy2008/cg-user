import { defineComponent } from "vue";
import { Row, Col, Card, Form } from "ant-design-vue";

export default defineComponent({
  setup() {
    return () => (
      <Card>
        <Form>
          <Row>
            <Col span={6}>
              <Form.Item label="类型编码"></Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="类型名称"></Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="结构类型"></Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="是否关联组织"></Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="关联字典类型"></Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="字典属性"></Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    );
  },
});
