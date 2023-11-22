import { defineComponent } from "vue";
import { Row, Col, Card } from "ant-design-vue";
import { Config, Log } from "./components";

export default defineComponent({
  setup() {
    return () => (
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card title="系统及安全配置">
            <Config />
          </Card>
        </Col>
        <Col span={24}>
          <Card
            title="系统日志"
            bordered={false}
            bodyStyle={{
              padding: 0,
            }}
          >
            <Log />
          </Card>
        </Col>
      </Row>
    );
  },
});
