import { ISchema } from "@formily/vue";

export const schema: ISchema = {
  type: "object",
  properties: {
    ddd: {
      type: "string",
      title: "输入框4",
      required: true,
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
  },
};
