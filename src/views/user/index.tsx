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
              title: "姓名",
              dataIndex: "name",
            },
            {
              title: "性别",
              dataIndex: "1",
            },
            {
              title: "手机号",
              dataIndex: "1",
            },
            {
              title: "邮箱地址",
              dataIndex: "1",
            },
            {
              title: "是否锁定",
              dataIndex: "1",
            },
            {
              title: "是否具有登录账号",
              dataIndex: "1",
            },
            {
              title: "登录账号",
              dataIndex: "1",
            },
            {
              title: "登录密码",
              dataIndex: "1",
            },
            {
              title: "操作",
              customRender: () => (
                <Space>
                  <a
                    onClick={() => {
                      editRef.value?.setTitle("编辑用户");
                    }}
                  >
                    编辑
                  </a>
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
