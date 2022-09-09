import type { PropType, ExtractPropTypes } from "vue";
import { defineComponent, computed } from "vue";
import "./style.less"

export type Size = number | "default" | "large" | "small";

type CBKValue = String | Number | undefined | null;

export type CBK = (value: CBKValue) => void;

// 这个_props就是真的定义组件时的props写法
const _props = {
  size: {
    type: [String, Number] as PropType<Size>,
  },
  msg: {
    type: String,
    default: "msg default value in comp",
  },
  cbk: Function as PropType<CBK>,
  src: String,
};

// 这个HelloVueProps就是_props所对应的类型声明
export type HelloVueProps = ExtractPropTypes<typeof _props>;

export default defineComponent({
  name: "HelloVue",
  props: _props,
  setup(props) {
    console.log("when HelloVue setup", props);

    const doCBK = (value: CBKValue) => {
      if (props.cbk) {
        props.cbk(value);
      } else {
        console.log("---> no cbk in props");
      }
    };

    const sizeV = computed(() => {
      let _num = 0;
      switch (props.size) {
        case "default":
          _num = 60;
          break;
        case "large":
          _num = 120;
          break;
        case "small":
          _num = 36;
          break;
        default:
          _num = props.size as number;
          break;
      }
      return _num;
    });

    return {
      doCBK,
      sizeV,
    };
  },
  render() {
    const { sizeV, msg, src, doCBK } = this;

    const imgStyle = {
      width: `${sizeV}px`,
      height: `${sizeV}px`
    }

    return (<div class="hello-vue">
      <div>{msg}</div>
      <button onClick={() => doCBK(msg)}>do cbk</button>
      <img src={src} alt={src} class="img" style={imgStyle}/>
      
    </div>)
  },
});
