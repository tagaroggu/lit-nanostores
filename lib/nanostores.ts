import type { Store } from "nanostores";
import type { ReactiveControllerHost } from 'lit';
import { LitUseStore } from "./lit-stores";

/** Reactive controller that updates the host upon changes to store, while host is connected */
export default class LitUseNanostores<T> implements LitUseStore<T> {
    host: ReactiveControllerHost;
    store: Store<T>
    value: T
    unbind: () => void;

    constructor(host: ReactiveControllerHost, nanostore: Store<T>) {
        (this.host = host).addController(this);
        this.store = nanostore;
    }

    hostConnected(): void {
        this.unbind = this.store.listen((value) => { this.value = value; this.host.requestUpdate(); });
        this.value = this.store.get();
    }

    hostDisconnected(): void {
        this.unbind();
    }
}