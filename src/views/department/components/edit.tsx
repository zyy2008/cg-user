import { defineComponent, reactive, ref } from "vue";
import { ButtonModal, ButtonModalInstance } from "@/components";
import { EditInstance } from "./index";
import { FormDrawer, FormLayout, FormItem, Input } from "@formily/antdv-x3";
import { createSchemaField } from "@formily/vue";
import { schema } from "./schema";

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Input,
  },
});

export default defineComponent({
  setup(_, { expose }) {
    return () => {
      return (
        <FormLayout labelCol={6} wrapperCol={10}>
          <SchemaField schema={schema} />
        </FormLayout>
      );
    };
  },
});
