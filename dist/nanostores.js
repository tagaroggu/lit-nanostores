var i = Object.defineProperty;
var h = (e, t, s) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var o = (e, t, s) => (h(e, typeof t != "symbol" ? t + "" : t, s), s);
class r {
  constructor(t, s) {
    o(this, "host");
    o(this, "store");
    o(this, "value");
    o(this, "unbind");
    (this.host = t).addController(this), this.store = s;
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
export {
  r as default
};
