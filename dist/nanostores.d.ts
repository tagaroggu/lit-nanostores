import type { Store } from "nanostores";
import type { ReactiveControllerHost, ReactiveController } from 'lit';
/** Reactive controller that updates the host upon changes to store, while host is connected */
export default class LitNanostore<T> implements ReactiveController {
    host: ReactiveControllerHost;
    store: Store<T>;
    state: T;
    unbind: () => void;
    constructor(host: ReactiveControllerHost, nanostore: Store<T>);
    hostConnected(): void;
    hostDisconnected(): void;
    storeChange(state: any): void;
}
