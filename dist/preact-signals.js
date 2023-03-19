var i = Object.defineProperty;
var h = (e, t, s) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var o = (e, t, s) => (h(e, typeof t != "symbol" ? t + "" : t, s), s);
import { effect as n } from "@preact/signals-core";
class d {
  constructor(t, s) {
    o(this, "host");
    o(this, "value");
    o(this, "store");
    o(this, "unbind");
    (this.host = t).addController(this), this.store = s;
  }
  hostConnected() {
    this.unbind = n(() => {
      this.value = this.store.value, this.host.requestUpdate();
    });
  }
  hostDisconnected() {
    this.unbind();
  }
}
export {
  d as default
};
