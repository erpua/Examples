'use strict'

class JuegoGatoComponent extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })

    this.counterForPaintingSymbol = 1
    this.counterForPlayerTurn = 0

    this.div = document.createElement('div')
    this.div.className = 'container'

    let link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('type', 'text/css')
    link.setAttribute('href', './styles.css')

    this.shadow.append(this.div, link)
  }

  get side() {
    return this.getAttribute('side')
  }
  set side(newSideValue) {
    this.setAttribute('side', newSideValue)
  }

  gameProcess(event) {
    event.preventDefault()
    this.counterForPlayerTurn++
    if (this.counterForPlayerTurn === 1) this.firstPlayerRequest()
    else if (this.counterForPlayerTurn === 2) this.secondPlayerRequest()
    if (this.counterForPaintingSymbol % 2 !== 0) event.target.innerHTML = this.firstPlayerSymbol
    if (this.counterForPaintingSymbol % 2 === 0) event.target.innerHTML = this.secondPlayerSymbol
    this.counterForPaintingSymbol++
    this.checkWinner(event)
  }

  checkWinner(event) {
    event.preventDefault()
    let variableX = 0
    let variableO = 0

    //method of checking all horizontals
    for (let i = 0; i < this.amountOfSquaresDefault; i++) {
      for (let j = 0; j < this.amountOfSquaresDefault; j++) {
        if (this.arrayOfBlocks[i][j].innerHTML === this.firstPlayerSymbol) {
          variableX += 1
          if (variableX == this.amountOfSquaresDefault) {
            alert(`The winner is the first player ${this.firstPlayerSymbol.toUpperCase()}`)
            this.newGameRequest()
          }
        } else variableX = 0
        if (this.arrayOfBlocks[i][j].innerHTML === this.secondPlayerSymbol) {
          variableO += 1
          if (variableO == this.amountOfSquaresDefault) {
            alert(`The winner is the second player ${this.secondPlayerSymbol.toUpperCase()}`)
            this.newGameRequest()
          }
        } else variableO = 0
      }
    }

    //method of checking all verticals
    for (let i = 0; i < this.amountOfSquaresDefault; i++) {
      for (let j = 0; j < this.amountOfSquaresDefault; j++) {
        if (this.arrayOfBlocks[j][i].innerHTML === this.firstPlayerSymbol) {
          variableX += 1
          if (variableX == this.amountOfSquaresDefault) {
            alert(`The winner is the first player ${this.firstPlayerSymbol.toUpperCase()}`)
            this.newGameRequest()
          }
        } else variableX = 0
        if (this.arrayOfBlocks[j][i].innerHTML === this.secondPlayerSymbol) {
          variableO += 1
          if (variableO == this.amountOfSquaresDefault) {
            alert(`The winner is the second player ${this.secondPlayerSymbol.toUpperCase()}`)
            this.newGameRequest()
          }
        } else variableO = 0
      }
    }

    //method of checking LEFT-TO-WRIGHT diagonal
    for (let i = 0; i < this.amountOfSquaresDefault; i++) {
      if (this.arrayOfBlocks[i][i].innerHTML === this.firstPlayerSymbol) {
        console.log('this.arrayOfBlocks[i][i].innerHTML:', this.arrayOfBlocks[i][i].innerHTML)
        variableX += 1
        if (variableX == this.amountOfSquaresDefault) {
          alert(`The winner is the first player ${this.firstPlayerSymbol.toUpperCase()}`)
          this.newGameRequest()
        }
      } else variableX = 0
      if (this.arrayOfBlocks[i][i].innerHTML === this.secondPlayerSymbol) {
        variableO += 1
        if (variableO == this.amountOfSquaresDefault) {
          alert(`The winner is the second player ${this.secondPlayerSymbol.toUpperCase()}`)
          this.newGameRequest()
        }
      } else variableO = 0
    }

    //method of cheking RIGHT-TO-LEFT diagonal
    for (let k = 0; k < this.amountOfSquaresDefault; k++) {
      let i = k
      let j = 0
      while (i >= 0) {
        if (this.arrayOfBlocks[i][j].innerHTML === this.firstPlayerSymbol) {
          console.log('this.arrayOfBlocks[i][j].innerHTML:', this.arrayOfBlocks[i][j].innerHTML)
          variableX += 1
          if (variableX == this.amountOfSquaresDefault) {
            alert(`The winner is the first player ${this.firstPlayerSymbol.toUpperCase()}`)
            this.newGameRequest()
          }
        } else variableX = 0
        if (this.arrayOfBlocks[i][j].innerHTML === this.secondPlayerSymbol) {
          variableO += 1
          if (variableO == this.amountOfSquaresDefault) {
            alert(`The winner is the second player ${this.secondPlayerSymbol.toUpperCase()}`)
            this.newGameRequest()
          }
        } else variableO = 0
        i += -1
        j += 1
      }
    }

  }

  showPromptInit() {
    let amountOfSquaresUser = prompt('How many squares would you like to have?')
    this.amountOfSquaresDefault = amountOfSquaresUser
  }

  firstPlayerRequest() {
    this.firstPlayerSymbol = prompt('Choose symbol for the first player')
    return this.firstPlayerSymbol
  }

  secondPlayerRequest() {
    this.secondPlayerSymbol = prompt('Choose symbol for the second player')
    return this.secondPlayerSymbol
  }

  createGame() {
    for (let i = 0; i < this.amountOfSquaresDefault; i++) {
      this.arrayOfBlocks[i] = []
      for (let j = 0; j < this.amountOfSquaresDefault; j++) {
        console.log('the row is ' + '[', i, ']', 'and the column is ' + '[', j, ']')
        this.button = document.createElement('button')
        this.button.className = 'cell-Size'
        this.button.addEventListener('click', this.gameProcess.bind(this))
        this.div.appendChild(this.button)
        this.arrayOfBlocks[i].push(this.button)
      }
      this.paragraph = document.createElement('br')
      this.div.appendChild(this.paragraph)
    }
  }

  newGameRequest() {
    let newRequest = prompt('Would you like to play once again? y / n')
    if (newRequest === 'y') {
      let otherRequest = prompt('How many squares would you like to have?')
      console.log('otherRequest:', otherRequest)
      this.side = otherRequest
    }
    else if (newRequest === 'n') alert('It´s been a pleasure!')
    else {
      alert('Wrong input value')
      this.reloadPage()
    }
  }

  reloadPage() {
    document.location.reload(true)
  }

  attributeChangedCallback(nameOfAttribute, oldValue, newValue) {
    console.log(`nameOfAttribute: ${nameOfAttribute}, oldValue: ${oldValue}, newValue: ${newValue}`)
    this.arrayOfBlocks = []
    if (this.side == 3) {
      this.amountOfSquaresDefault = prompt('Input amount of squares')
      this.createGame()
    } else {
      this.div.remove(this.button)
      this.div = document.createElement('div')
      this.div.className = 'container'
      this.shadow.appendChild(this.div)
      this.amountOfSquaresDefault = newValue
      this.createGame()
    }
  }

  static get observedAttributes() {
    return ['side', 'container', 'cell-Size']
  }

}

customElements.define('juego-gato-component', JuegoGatoComponent)