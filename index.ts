import type { Store } from "nanostores";
import type { ReactiveControllerHost, ReactiveController } from 'lit';

/** Reactive controller that updates the host upon changes to store, while host is connected */
export default class LitNanostore<T> implements ReactiveController{
    host: ReactiveControllerHost;
    store: Store<T>
    state: T
    unbind: () => void;
    constructor(host: ReactiveControllerHost, nanostore: Store<T>) {
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
