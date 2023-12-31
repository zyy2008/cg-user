import { defineComponent, ref } from "vue";
import { Card, Table, Space } from "ant-design-vue";
import { Edit, EditInstance, Access } from "./components";

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
              title: "菜单名称",
              dataIndex: "name",
            },
            {
              title: "菜单编码",
              dataIndex: "1",
            },
            {
              title: "图标",
              dataIndex: "1",
            },
            {
              title: "资源地址",
              dataIndex: "1",
            },
            {
              title: "授权标识",
              dataIndex: "1",
            },
            {
              title: "是否隐藏",
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
                  <a>删除</a>
                </Space>
              ),
            },
          ]}
        />
      </Card>
    );
  },
});
