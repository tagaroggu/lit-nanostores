import type { Ref } from '@vue/reactivity';
import type { ReactiveControllerHost } from 'lit';
import type { LitUseStore } from './lit-stores';
export default class LitUseVueReactivity<T> implements LitUseStore<T> {
    host: ReactiveControllerHost;
    value: T;
    store: Ref<T>;
    unbind: () => void;
    constructor(host: ReactiveControllerHost, store: Ref<T>);
    hostConnected(): void;
    hostDisconnected(): void;
}
