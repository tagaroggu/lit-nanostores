import { effect, unref, stop, isRef, ref } from '@vue/reactivity';
import type { Ref } from '@vue/reactivity';
import type {  ReactiveControllerHost } from 'lit';
import type { LitUseStore } from './lit-stores';

export default class LitUseVueReactivity<T> implements LitUseStore<T> {
    host: ReactiveControllerHost;
    value: T;
    store: Ref<T>;
    unbind: () => void;

    constructor(host: ReactiveControllerHost, store: Ref<T>) {
        (this.host = host).addController(this);
        // @ts-ignore
        this.store = store;
    }

    hostConnected(): void {
        let e = effect(() => { this.value = unref(this.store); this.host.requestUpdate(); });
        this.unbind = () => stop(e);
        this.value = unref(this.store);
    }

    hostDisconnected(): void {
        this.unbind();
    }
}