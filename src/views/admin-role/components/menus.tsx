import { defineComponent, ref } from "vue";
import { Card, Tree, Modal } from "ant-design-vue";
import Tabs from "./tabs";

export default defineComponent({
  setup() {
    const selectedKeys = ref<string[]>([]);
    return () => (
      <Card title={<span>菜单选择：</span>}>
        <Tree
          checkable
          defaultExpandAll
          v-model:selectedKeys={selectedKeys.value}
          v-slots={{
            title: ({ title }: any) => {
              return <div>{title}</div>;
            },
          }}
          treeData={[
            {
              title: "parent 1",
              key: "0-0",
              children: [
                {
                  title: "parent 1-0",
                  key: "0-0-0",
                  children: [{ title: "leaf", key: "0-0-0-1" }],
                },
                {
                  title: "parent 1-1",
                  key: "0-0-1",
                  children: [{ key: "0-0-1-0", title: "sss" }],
                },
              ],
            },
          ]}
        />
        <Modal
          visible={selectedKeys.value?.length > 0}
          onCancel={() => {
            selectedKeys.value = [];
          }}
          onOk={() => {}}
        >
          <Tabs />
        </Modal>
      </Card>
    );
  },
});
