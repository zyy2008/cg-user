import { defineComponent } from "vue";
import { Card, Tree, Space, Button } from "ant-design-vue";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons-vue";
import { ButtonModal } from "@/components";

export default defineComponent({
  setup() {
    return () => (
      <Card
        title="字典"
        extra={
          <Space>
            <ButtonModal
              buttonProps={{
                icon: <PlusOutlined />,
                type: "primary",
                size: "small",
              }}
            />
            <Button size="small" icon={<EditOutlined />} type="primary" />
            <Button size="small" icon={<DeleteOutlined />} type="primary" />
          </Space>
        }
      >
        <Tree
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
