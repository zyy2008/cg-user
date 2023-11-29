import { ISchema } from "@formily/vue";

export const schema: ISchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "规则名称",
      required: true,
      "x-decorator": "FormItem",
      "x-component": "Input",
      "x-component-props": {
        placeholder: "请输入",
      },
    },
    condition: {
      type: "number",
      title: "条件规则",
      required: true,
      enum: [
        {
          label: "大于",
          value: 1,
        },
        {
          label: "小于",
          value: 2,
        },
        {
          label: "不等于",
          value: 3,
        },
        {
          label: "等于",
          value: 4,
        },
        {
          label: "大于等于",
          value: 5,
        },
        {
          label: "小于等于",
          value: 6,
        },
        {
          label: "左模糊",
          value: 7,
        },
        {
          label: "右模糊",
          value: 8,
        },
        {
          label: "模糊",
          value: 9,
        },
        {
          label: "包含",
          value: 10,
        },
        {
          label: "自定义SQL",
          value: 11,
        },
      ],
      "x-decorator": "FormItem",
      "x-component": "Select",
      "x-component-props": {
        placeholder: "请输入",
      },
    },
    field: {
      type: "string",
      title: "规则字段",
      required: true,
      "x-decorator": "FormItem",
      "x-component": "Input",
      "x-component-props": {
        placeholder: "请输入",
      },
      "x-reactions": {
        dependencies: ["condition"],
        fulfill: {
          schema: {
            "x-visible": "{{$deps[0] != 11 && $deps[0] != undefined}}",
          },
        },
      },
    },
    dataCode: {
      type: "string",
      title: "数据编码",
      required: true,
      "x-decorator": "FormItem",
      "x-component": "Input",
      "x-component-props": {
        placeholder: "请输入",
      },
      "x-reactions": {
        dependencies: ["condition"],
        fulfill: {
          schema: {
            "x-visible": "{{$deps[0] === 11 && $deps[0] != undefined}}",
          },
        },
      },
    },
    dataName: {
      type: "string",
      title: "数据名称",
      required: true,
      "x-decorator": "FormItem",
      "x-component": "Input",
      "x-component-props": {
        placeholder: "请输入",
      },
      "x-reactions": {
        dependencies: ["condition"],
        fulfill: {
          schema: {
            "x-visible": "{{$deps[0] === 11 && $deps[0] != undefined}}",
          },
        },
      },
    },
    dataSQL: {
      type: "string",
      title: "数据SQL",
      required: true,
      "x-decorator": "FormItem",
      "x-component": "Input.TextArea",
      "x-component-props": {
        placeholder: "请输入",
      },
      "x-reactions": {
        dependencies: ["condition"],
        fulfill: {
          schema: {
            "x-visible": "{{$deps[0] === 11 && $deps[0] != undefined}}",
          },
        },
      },
    },
    dataExplanation: {
      type: "string",
      title: "数据说明",
      required: true,
      "x-decorator": "FormItem",
      "x-component": "Input.TextArea",
      "x-component-props": {
        placeholder: "请输入",
      },
      "x-reactions": {
        dependencies: ["condition"],
        fulfill: {
          schema: {
            "x-visible": "{{$deps[0] === 11 && $deps[0] != undefined}}",
          },
        },
      },
    },

    is: {
      type: "string",
      title: "是否关联人-星",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-component-props": {
        checkedChildren: "是",
        unCheckedChildren: "否",
      },
    },
    way: {
      type: "string",
      title: "关联方式",
      "x-decorator": "FormItem",
      "x-component": "Input",
      "x-component-props": {
        placeholder: "请输入",
      },
    },
  },
};
