import { defineComponent, ref, watch } from "vue";
import { Row, Col, Card, Tree, Table } from "ant-design-vue";

export default defineComponent({
  setup() {
    const selectedKeys = ref<string[]>([]);
    watch([selectedKeys], () => {
      console.log(selectedKeys.value);
    });
    return () => (
      <Tree
        // v-modal:selectedKeys={selectedKeys}
        defaultExpandAll
        treeData={[
          {
            title: "parent 1",
            key: "0-0",
            children: [
              {
                title: "parent 1-0",
                key: "0-0-0",
                children: [
                  {
                    title: "leaf",
                    key: "0-0-0-0",
                  },
                  {
                    title: "leaf",
                    key: "0-0-0-1",
                  },
                  {
                    title: "leaf",
                    key: "0-0-0-2",
                  },
                ],
              },
              {
                title: "parent 1-1",
                key: "0-0-1",
                children: [
                  {
                    title: "leaf",
                    key: "0-0-1-0",
                  },
                ],
              },
              {
                title: "parent 1-2",
                key: "0-0-2",
                children: [
                  {
                    title: "leaf",
                    key: "0-0-2-0",
                  },
                  {
                    title: "leaf",
                    key: "0-0-2-1",
                  },
                ],
              },
            ],
          },
        ]}
      />
    );
  },
});
