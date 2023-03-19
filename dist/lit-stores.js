var h = Object.defineProperty;
var n = (o, t, e) => t in o ? h(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var s = (o, t, e) => (n(o, typeof t != "symbol" ? t + "" : t, e), e);
import { effect as r, unref as i, stop as u } from "@vue/reactivity";
import { effect as d } from "@preact/signals-core";
class v {
  constructor(t, e) {
    s(this, "host");
    s(this, "store");
    s(this, "value");
    s(this, "unbind");
    (this.host = t).addController(this), this.store = e;
  }
  hostConnected() {
    this.unbind = this.store.listen((t) => {
      this.value = t, this.host.requestUpdate();
    }), this.value = this.store.get();
  }
  hostDisconnected() {
    this.unbind();
  }
}
class b {
  constructor(t, e) {
    s(this, "host");
    s(this, "value");
    s(this, "store");
    s(this, "unbind");
    (this.host = t).addController(this), this.store = e;
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
class f {
  constructor(t, e) {
    s(this, "host");
    s(this, "value");
    s(this, "store");
    s(this, "unbind");
    (this.host = t).addController(this), this.store = e;
  }
  hostConnected() {
    this.unbind = d(() => {
      this.value = this.store.value, this.host.requestUpdate();
    });
  }
  hostDisconnected() {
    this.unbind();
  }
}
export {
  v as LitUseNanostores,
  f as LitUsePreactSignals,
  b as LitUseVueReactivity
};
