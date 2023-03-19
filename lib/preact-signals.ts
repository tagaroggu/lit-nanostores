import { effect, Signal } from '@preact/signals-core';
import { ReactiveControllerHost } from 'lit';
import { LitUseStore } from './lit-stores';

export default class LitUsePreactSignals<T> implements LitUseStore<T> {
    host: ReactiveControllerHost;
    value: T;
    store: Signal<T>;
    unbind: () => void;
    constructor(host: ReactiveControllerHost, store: Signal<T>) {
        (this.host = host).addController(this);
        this.store = store;
    }

    hostConnected(): void {
        this.unbind = effect(() => { this.value = this.store.value; this.host.requestUpdate() });
    }

    hostDisconnected(): void {
        this.unbind();
    }
}