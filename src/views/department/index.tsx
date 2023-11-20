import { defineComponent, ref } from "vue";
import { Card, Table, Space, Popconfirm, Modal } from "ant-design-vue";
import { Edit, EditInstance, Access } from "./components";
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  setup() {
    const editRef = ref<EditInstance>();
    return () => (
      <Card title={<Edit ref={editRef} />}>
        <Table
          dataSource={[
            {
              name: "2",
            },
          ]}
          columns={[
            {
              title: "部门名称",
              dataIndex: "name",
            },
            {
              title: "部门编码",
              dataIndex: "1",
            },
            {
              title: "操作",
              customRender: () => (
                <Space>
                  <a
                    onClick={() => {
                      editRef.value?.setTitle("编辑");
                    }}
                  >
                    编辑
                  </a>
                  <a>详情</a>
                  <Access />
                  <Popconfirm
                    title="确定删除该条吗?"
                    onConfirm={() => {
                      Modal.confirm({
                        title: "删除部门",
                        icon: <ExclamationCircleOutlined />,
                        content:
                          "该部门关联了用户、岗位、角色、菜单，请先取消关联，才能删除该部门！",
                        onOk() {
                          console.log("OK");
                        },
                      });
                    }}
                  >
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