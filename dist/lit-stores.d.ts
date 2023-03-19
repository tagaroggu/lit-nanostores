import { ReactiveController } from 'lit';
export interface LitUseStore<T> extends ReactiveController {
    store: unknown;
    value: T;
    unbind: () => void;
}
export { default as LitUseNanostores } from './nanostores';
export { default as LitUseVueReactivity } from './vue-reactivity';
export { default as LitUsePreactSignals } from './preact-signals';
