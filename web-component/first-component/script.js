"use strict";

class IevgenComponent extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' });
        this.div = document.createElement('div');
        this.shadow.appendChild(this.div);
        this.textContentComponent = 'Hi! Ievgen Component';
        this.shadow = this.attachShadow;
    }

    connecteCallback() {
        console.log('Add IevgenCompnent to DOM');
        const newDiv = document.createElement('div');
    }

    disconnectedCallback() {
        console.log('Remove IevgenComponent from DOM');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'from') {
            this.from = newValue;
        }

        if (name === 'age') {
            this.age = newValue;
        }

        this.div.textContent = `${this.textContentComponent} from: ${this.from} age: ${this.age}`;
        console.log('Change Properties', name, oldValue, newValue, this.oneVariable);
    }

    static get observedAttributes() {
        return ['from', 'age']
    }
}

customElements.define('ievgen-component', IevgenComponent);



