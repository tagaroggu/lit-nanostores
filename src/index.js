import { LitUseNanostores, LitUsePreactSignals, LitUseVueReactivity } from '../lib/lit-stores';

import { html, LitElement } from 'lit';

import { atom as nAtom } from 'nanostores';
import { ref as vRef, reactive as vReactive, toRef } from '@vue/reactivity';
import { signal as pSignal } from '@preact/signals-core';

const nCount = nAtom(0);
const vCount = vRef(0);
const vReactiveCount = vReactive({ count: 0 });
const pCount = pSignal(0);

customElements.define('x-nanostores-atom', class extends LitElement {
    constructor() {
        super();
        this.counter = new LitUseNanostores(this, nCount);
    }

    render() {
        return html`<button @click=${() => { this.counter.store.set(this.counter.value + 1) }}>Nanostores atom: ${this.counter.value}</button>`;
    }
});

customElements.define('x-vue-ref', class extends LitElement {
    constructor() {
        super();
        this.counter = new LitUseVueReactivity(this, vCount);
    }

    render() {
        return html`<button @click=${() => {this.counter.store.value++}}>Vue ref: ${this.counter.value}</button>`;
    }
});

customElements.define('x-vue-reactive', class extends LitElement {
    constructor() {
        super();
        this.counter = new LitUseVueReactivity(this, toRef(vReactiveCount, 'count'));
    }

    render() {
        return html`<button @click=${() => {this.counter.store.value++}}>Vue reactive: ${this.counter.value}</button>`;
    }
});

customElements.define('x-preactsignals', class extends LitElement {
    constructor() {
        super();
        this.count = new LitUsePreactSignals(this, pCount);
    }
    render() {
        return html`<button @click=${() => {this.count.store.value++}}>Preact signals: ${this.count.value}</button>`;
    }
});

document.body.append(...['nanostores-atom', 'vue-ref', 'vue-reactive', 'preactsignals'].map(name => document.createElement(`x-${name}`))
);