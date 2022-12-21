/** Reactive controller that updates the host upon changes to store, while host is connected */
export default class LitNanostore {
    host;
    store;
    state;
    unbind;
    constructor(host, nanostore) {
        (this.host = host).addController(this);
        this.store = nanostore;
    }
    hostConnected() {
        this.unbind = this.store.listen(this.storeChange);
        this.state = this.store.get();
    }
    hostDisconnected() {
        this.unbind();
    }
    storeChange(state) {
        this.state = state;
        this.host.requestUpdate();
    }
}
//# sourceMappingURL=nanostores.js.map