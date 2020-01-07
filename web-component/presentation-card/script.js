"use strict";

class PresentationCard extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.div = document.createElement('div')
    this.shadow.appendChild(this.div)
  }

  get name() {
    return this.getAttribute('name').toLowerCase()
  }
  set name(newValue) {
    this.setAttribute('name', newValue).toLowerCase()
  }
  get lastName() {
    return this.getAttribute('lastName').toLowerCase()
  }
  set lastName(newValue) {
    this.setAttribute('lastName', newValue).toLowerCase()
  }
  get email() {
    return this.getAttribute('email')
  }
  set email(newValue) {
    this.setAttribute('email', newValue)
  }

  attributeChangedCallback(nameOfAttribute, oldValue, newValue) {
    console.log(`nameOfAttribute: ${nameOfAttribute}, oldValue: ${oldValue}, newValue: ${newValue}`)
    switch (nameOfAttribute) {
      case 'name':
        if (this.name === "ievgen") {
          this.div.textContent = 'Soy yo'
        } else {
          this.div.textContent = `Hola ${this.name} ${this.secondName}`
        }
      case 'email':
        if (this.email.search('@') !== -1) {
          if (this.email.includes('gmail.com') && this.name === "ievgen") {
            this.div.textContent = 'Soy yo, estoy parte de skynet'
          } else if (!this.email.includes('gmail.com') && this.name === "ievgen") {
            this.div.textContent = `Soy yo y mi otro correo es ${this.email}`
          } else if (this.email.includes('gmail.com') && this.name !== "ievgen") {
            this.div.textContent = `Hola ${this.name.charAt(0).toUpperCase() + this.name.slice(1)} ${this.lastName.charAt(0).toUpperCase() + this.lastName.slice(1)} y eres parte de skynet`
          } else {
            this.div.textContent = `Hola ${this.name.charAt(0).toUpperCase() + this.name.slice(1)} ${this.lastName.charAt(0).toUpperCase() + this.lastName.slice(1)} y es tu correo ${this.email}`
          }
        }
    }
  }
  static get observedAttributes() {
    return ['name', 'lastName', 'email']
  }
}
customElements.define('presentation-card-intn', PresentationCard)

/*
  switch (nameOfAttribute) {
      case 'name':
        if (this.name === "ievgen") {
          this.div.textContent = 'Soy yo'
        } else {
          this.div.textContent = `Hola ${this.name} ${this.secondName}`
        }
      case 'email':
        if (this.email.search('@') !== -1) {
          if (this.email.includes('gmail.com') && this.name === "ievgen") {
            if (this.name === 'ievgen') {
              this.div.textContent = 'Soy yo, estoy parte de skynet'
            } else {
              this.div.textContent = `Hola ${this.name} ${this.lastName}, eres parte de skynet`
            }
          } else {
            this.div.textContent = `Hola ${this.name} ${this.lastName} y es tu correo ${this.email}`
          }
       }
    }
*/

/*
class PresentationCard extends HTMLElement {
constructor() {
    super()
    this.name = this.name
    this.email = this.email

    this.shadow = this.attachShadow({mode: 'open'})
    // this.checkDates(this._name, this._email, this.shadow)
}

checkDates(name, email, shadowParent){
    shadowParent.innerHTML = ""
    let divDatos = document.createElement('div')
    let divDato = document.createElement('div')

    if(name.toUpperCase() === 'MIRIAM'){
        divDatos.textContent = 'Soy yo'
    }else{
        divDatos.textContent = `Hola ${name}`;
    }
    if (email.search('@') !== -1) {
        if (email.includes('gmail.com')) {
            divDato.textContent = 'Perteneces a Skynet'
        } else {
            divDato.textContent = `Y tu correo es ${email}`
        }
    } else {
        alert('Revisa el formato del correo')
    }
    shadowParent.appendChild(divDatos)
    shadowParent.appendChild(divDato)

}

get name() {
    // console.log(this.getAttribute('name'))
    return this.getAttribute('name')
}
set name (value) {
    // console.log('(SET) name ' + value)
    this.setAttribute('name', value)
}

get email() {
    return this.getAttribute('email')
}
set email (value) {
    this._email = value
}

attributeChangedCallback(name, oldValue, newValue) {
    // console.log('Cambian propiedades', name, oldValue, newValue)
    this.checkDates(this.name, this.email, this.shadow)
}

static get observedAttributes() {
    return ['name', 'email']
}

}
customElements.define('presentacion-card-mnms', PresentationCard);
*/
/*
    if (nameOfAttribute === 'name' || nameOfAttribute === 'email') {
      let requestEnding = '@gmail.com'
      let emailReversedEnding = newValue.split('').reverse()
      let newArray = []
      for (let i = 0; i < 10; i++) {
        newArray.push(emailReversedEnding[i])
      }
      let emailOfUser = newArray.reverse().join('')
      if (emailOfUser == requestEnding) {
        if (this.name.toLowerCase() === 'ievgen') {
          this.div.textContent = 'Soy yo, estoy parte de skynet'
        } else {
          this.div.textContent = `Hola ${this.name} ${this.lastName}, eres parte de skynet`
        }
      } else {
        this.div.textContent = `Hola ${this.name} ${this.lastName} y es tu correo ${this.email}`
      }
    }

    ///////////////////////
     switch (nameOfAttribute) {
      case 'name':
        if (this.name === "ievgen") {
          this.div.textContent = 'Soy yo'
        } else {
          this.div.textContent = `Hola ${this.name} ${this.secondName}`
        }
      case 'email':
        let requestEnding = '@gmail.com'

        let emailReversedEnding = newValue.split('').reverse()

        let newArray = []

        for (let i = 0; i < 10; i++) {
          newArray.push(emailReversedEnding[i])
        }

        let emailOfUser = newArray.reverse().join('')
        if (emailOfUser == requestEnding) {
          if (this.name === 'ievgen') {
            this.div.textContent = 'Soy yo, estoy parte de skynet'
          } else {
            this.div.textContent = `Hola ${this.name} ${this.lastName}, eres parte de skynet`
          }
        } else {
          this.div.textContent = `Hola ${this.name} ${this.lastName} y es tu correo ${this.email}`
        }
    }

//////////

    Here is a quick code snippet for the JavaScript version of ucfirst. This code snippet will allow you to capitalize the first letter of a string using JavaScript.

<br></br>
function jsUcfirst(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
<br></br>
This code snippet will use the JavaScript function charAt to get the character at a certain index.


var firstLetter = string.charAt(0);
Next we use the uppercase function in JavaScript to set this string to be in capitals.


var uppercaseFirstLetter = string.charAt(0).toUpperCase();
Then we can add the rest of the string on to this capital letter by using the function slice() which will allow us to get the rest of the string and remove the first letter.


var stringWithoutFirstLetter = string.slice(1)
Putting this altogether we get the JavaScript ucfirst() alternative.

function jsUcfirst(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
*/