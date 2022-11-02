export enum RelationsEnum {
  equal = "equal", // 等于
  unequal = "unequal", // 不等于
  gt = "greaterThan", // 大于
  gte = "greaterThanOrEqualTo", // 大于等于
  lt = "lessThan", // 小于
  lte = "lessThanOrEqualTo", // 小于等于
  include = "include", // 包含
  exclude = "exclude", // 不包含
  before = "before", // 在之前
  after = "after", // 在之后
}

export const RelationConfig = [
  {
    value: RelationsEnum.equal,
    label: '等于'
  },
  {
    value: RelationsEnum.unequal,
    label: '不等于'
  },
  {
    value: RelationsEnum.gt,
    label: '大于'
  },
  {
    value: RelationsEnum.gte,
    label: '大于等于'
  },
  {
    value: RelationsEnum.lt,
    label: '小于'
  },
  {
    value: RelationsEnum.lte,
    label: '小于等于'
  },
  {
    value: RelationsEnum.include,
    label: '包含'
  },
  {
    value: RelationsEnum.exclude,
    label: '不包含'
  },
  {
    value: RelationsEnum.before,
    label: '在之前'
  },
  {
    value: RelationsEnum.after,
    label: '在之后'
  },
]

export function getRelationLabel(relation: RelationsEnum|null|undefined) {
 let target = RelationConfig.find(item => item.value == relation)
 return target ? target.label : ""
}

export enum SearchComponents {
  Input = "Input",
  InputNumber = "InputNumber",
  DatePicker = "DatePicker",
  Select = "Select",
  Checkbox = "Checkbox"
}

export const defaultConfig = [
  {
    id: 1,
    title: "人名",
    relations: [RelationsEnum.equal, RelationsEnum.unequal],
    placeholder: "多个人名用;隔开",
    component: SearchComponents.Input, // 也是默认的组件
  },
  {
    id: 2,
    title: "年龄",
    relations: [RelationsEnum.gt, RelationsEnum.equal, RelationsEnum.lt],
    placeholder: "请输入数字",
    component: SearchComponents.InputNumber,
  },
  {
    id: 3,
    title: "时间",
    relations: [RelationsEnum.before, RelationsEnum.after],
    placeholder: "哈哈哈，选日期了",
    component: SearchComponents.DatePicker,
  },
  {
    id: 4,
    title: "性别",
    relations: [RelationsEnum.equal, RelationsEnum.unequal],
    component: SearchComponents.Select,
    props: {
      options: [
        {
          value: 1,
          label: "男",
        },
        {
          value: 2,
          label: "女",
        },
      ],
    },
  },
  {
    id: 5,
    title: "优先级",
    relations: [RelationsEnum.include, RelationsEnum.exclude],
    component: SearchComponents.Checkbox,
    props: {
      options: [
        {
          value: 1,
          label: "高",
        },
        {
          value: 2,
          label: "中",
        },
        {
          value: 3,
          label: "低",
        },
      ],
    },
  },
];
