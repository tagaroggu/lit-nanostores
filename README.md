# lit-nanostores
A Lit controller for listening to nanostores

- Automatically updates while element is in DOM
- Automatically disconnects when element is removed from DOM
- Has Typescript support

Example usage:

```js
import { atom } from 'nanostores';
import { html, LitElement } from 'lit';

import litNanostore from 'lit-nanostores'; // Default export

const count = atom(0); // or use map() from nanostores to create a reactive object

class ReactiveCounter extends LitElement {
	constructor() {
		super();
		this.counter = new litNanostore(this, count);
	}
	render() {
		return html`<button @click=${this.handleClick}>${this.counter.state}</button>`;
	}
	
	handleClick() {
		this.counter.store.set(this.counter.state); // You can directly access the nanostore within the controller, if need be.
	}
}

customElements.define('reactive-counter', ReactiveCounter);

document.body.appendChild(new ReactiveCounter);
```
