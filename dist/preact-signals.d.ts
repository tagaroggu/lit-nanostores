import { Signal } from '@preact/signals-core';
import { ReactiveControllerHost } from 'lit';
import { LitUseStore } from './lit-stores';
export default class LitUsePreactSignals<T> implements LitUseStore<T> {
    host: ReactiveControllerHost;
    value: T;
    store: Signal<T>;
    unbind: () => void;
    constructor(host: ReactiveControllerHost, store: Signal<T>);
    hostConnected(): void;
    hostDisconnected(): void;
}
