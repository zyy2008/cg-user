import { defineComponent } from "vue";
import { Row, Col, Form, Input, Switch, Button, Upload } from "ant-design-vue";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons-vue";

const ImgUpload = defineComponent({
  props: ["value", "onChange"],
  setup() {
    return ({ value }: any) => (
      <Upload showUploadList={false} listType="picture-card">
        {value ? (
          <img src={value} alt="avatar" />
        ) : (
          <div>
            <PlusOutlined></PlusOutlined>
            <div class="ant-upload-text">Upload</div>
          </div>
        )}
      </Upload>
    );
  },
});

export default defineComponent({
  setup() {
    return () => (
      <Form
        labelCol={{
          span: 5,
        }}
      >
        <div
          style={{
            width: "400px",
          }}
        >
          <Form.Item label="系统名称">
            <Input placeholder="请输入菜单名称" />
          </Form.Item>
          <Form.Item label="系统LOGO">
            <ImgUpload />
          </Form.Item>
          <Form.Item label="业务手册">
            <Upload>
              <Button>
                <UploadOutlined />
                上传文件
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item label="是否锁定" name="1">
            <Switch checkedChildren="是" unCheckedChildren="否" />
          </Form.Item>
        </div>
        <Row
          style={{
            width: "700px",
          }}
        >
          <Col span={7}>
            <Form.Item
              label="系统默认密码"
              name="1"
              labelCol={{
                span: 12,
              }}
            >
              <Switch checkedChildren="是" unCheckedChildren="否" />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item
              label="用户登录验证码"
              name="1"
              labelCol={{
                span: 13,
              }}
            >
              <Switch checkedChildren="是" unCheckedChildren="否" />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item
              label="是否允许初始密码"
              name="1"
              labelCol={{
                span: 14,
              }}
            >
              <Switch checkedChildren="是" unCheckedChildren="否" />
            </Form.Item>
          </Col>
        </Row>
        <div
          style={{
            textAlign: "right",
          }}
        >
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </div>
      </Form>
    );
  },
});
