import { defineComponent, ref } from "vue";
import { Row, Col, Card, Table, Space } from "ant-design-vue";
import { Edit, EditInstance, Access } from "./components";

export default defineComponent({
  setup() {
    const editRef = ref<EditInstance>();
    return () => (
      <Card title={<Edit ref={editRef} />}>
        <Table
          dataSource={[
            {
              code: "2",
            },
          ]}
          columns={[
            {
              title: "角色编码",
              dataIndex: "code",
            },
            {
              title: "角色名称",
              dataIndex: "2",
            },
            {
              title: "角色说明",
              dataIndex: "2",
            },
            {
              title: "操作",
              customRender: () => {
                return (
                  <Space>
                    <a
                      onClick={() => {
                        editRef.value?.setTitle("编辑角色");
                      }}
                    >
                      编辑
                    </a>
                    <Access />
                    <a>删除</a>
                  </Space>
                );
              },
            },
          ]}
        />
      </Card>
    );
  },
});
