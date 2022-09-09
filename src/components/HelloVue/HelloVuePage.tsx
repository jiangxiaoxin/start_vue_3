import { defineComponent, ref } from "vue"
import HelloVue from "./HelloVue";
import type { CBK, Size } from "./HelloVue"

export default defineComponent({
  name: "HelloVuePage",
  setup() {
    const src = ref("https://images.unsplash.com/photo-1662529739712-930d83814dac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&w=1000&q=80")

    const size = ref<Size>("large");

    const cb: CBK = (value) => {
      alert('do call cbk:' + value);
    }

    const msg = ref("hello,vue");

    return {
      src,
      size,
      cb,
      msg
    }

  },
  render() {
    const {src, size, cb, msg} = this;
    return <HelloVue src={src} size={size} cbk={cb} msg={msg}/>
  }
})