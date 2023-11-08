import { defineComponent } from "vue";
import { Card, Button } from "ant-design-vue";
import { ButtonModal } from "@/components";
import "./index.less";

export default defineComponent({
  setup() {
    return () => (
      <Card
        title={
          <ButtonModal
            buttonProps={{
              type: "primary",
              children: <div>123</div>,
            }}
            modalProps={{
              children: <div>123</div>,
            }}
          />
        }
      ></Card>
    );
  },
});
