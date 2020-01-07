"use strict";


class NuevoElementoWeb extends HTMLElement {
    constructor() {
        super();
        this.div = document.createElement('div');
        this.init();
        //this.getPromt();
    }

    init() {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.div);
        this.createGame(this.getPromt(), this.div)
    }

    getPromt() {
        console.log("super Pancho");
        return window.prompt('Dame me un valor')
    }

    createGame(cells = 1, parentNode) {
        let randomNumber = this.obtainRandomByOneNumber(cells);
        parentNode.innerHTML = '';
        console.log('randomNumber:', randomNumber);
        for (let i = 0; i < cells; i += 1) {
            let divCasillas = document.createElement('div');
            divCasillas.style.backgroundColor = 'lightgrey';
            if (randomNumber === i) {
                divCasillas.textContent = i + 1;
                divCasillas.className = 'especial';
                divCasillas.addEventListener("click", () => {
                    divCasillas.textContent = 'Winner';
                    divCasillas.style.backgroundColor = 'blue';
                    divCasillas.style.color = 'white';
                    setTimeout(() => {
                        this.createGame(this.getPromt(), this.div);
                    }, 1);
                });
            } else {
                divCasillas.textContent = i + 1;
                divCasillas.addEventListener("click", () => {
                    divCasillas.textContent = 'Try it next time';
                    divCasillas.style.backgroundColor = 'red';
                    //console.log('Wrong input value');
                });
            }
            parentNode.appendChild(divCasillas);
        }
        /*  setTimeout(() => {
              parentNode.textContent = 'Ievgen';
          }, 5000); */
    }

    obtainRandomByOneNumber(number) {
        return Math.floor(Math.random() * Math.floor(number));
    }

    connectedCallback() {
        console.log('Load NuevoElementoWeb agregado');
    }

    disconnectedCallback() {
        console.log('Removiendo NuevoElementoWeb');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        //console.log('Cambian propiedades', name, oldValue, newValue);
        //if (name === 'casillas') {
           // this.createGame(newValue, this.div);
        //}
    }

    static get observedAttributes() {
        return ['casillas'];
    }
}

customElements.define('nuevo-elemento-web', NuevoElementoWeb);