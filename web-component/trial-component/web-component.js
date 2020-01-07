"use strict";


//STANDARD TEMPLATE WEB COMPONENTS
/*
class NuevoElementoWeb extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const div = document.createElement('div');
        div.textContent('Developer Yevgeniy');
        shadow.appendChild(div);
    };
    connectedCallback() {
        console.log('Load NuevoElementoWeb agregado');
    };

    disconnectedCallback() {
        console.log('Removiendo NuevoElementoWeb');
    };

    attributeChangeCallBack(name, oldValue, newValue){
        console.log('Cambian propiedades', name, oldValue, newValue);
    }

    static get observedattributes() {
        return ['c', 'l'];
    }
};

customElements.define("nuevo-elemento-web", NuevoElementoWeb);
*/

class IevgenComponent extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' });
        this.div = document.createElement('div');
        this.shadow.appendChild(this.div);
        this.textContentComponent = 'Hello World of Web-Components';
        this.shadow = this.attachShadow;
    }

    connecteCallback() {
        console.log('Add IevgenCompnent to DOM');
    }

    disconnectedCallback() {
        console.log('Remove IevgenComponent from DOM');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'country') {
            this.country = newValue;
        }

        if (name === 'city') {
            this.city = newValue;
        }

        this.div.textContent = `${this.textContentComponent} from country: ${this.country},  city: ${this.city}!`;
        console.log('name, oldValue, newValue', name, oldValue, newValue);
    }

    static get observedAttributes() {
        return ['country', 'city'];
    }
}

customElements.define('ievgen-component', IevgenComponent);