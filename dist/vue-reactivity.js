var h = Object.defineProperty;
var n = (e, t, s) => t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var o = (e, t, s) => (n(e, typeof t != "symbol" ? t + "" : t, s), s);
import { effect as r, unref as i, stop as u } from "@vue/reactivity";
class c {
  constructor(t, s) {
    o(this, "host");
    o(this, "value");
    o(this, "store");
    o(this, "unbind");
    (this.host = t).addController(this), this.store = s;
  }
  hostConnected() {
    let t = r(() => {
      this.value = i(this.store), this.host.requestUpdate();
    });
    this.unbind = () => u(t), this.value = i(this.store);
  }
  hostDisconnected() {
    this.unbind();
  }
}
export {
  c as default
};
