"use strict";

class FormasDeMovimientos {
    constructor(flyTicketNumber, whatsApp, creditCardNumber) {
        this.flyTicketNumber = flyTicketNumber;
        this.whatsApp = whatsApp;
        this.creditCardNumber = creditCardNumber;
    };

    get flyTicketNumber() {
        return this._flyTicketNumber;
    }

    set flyTicketNumber(newValue) {
        this._flyTicketNumber = newValue;
    }

    get whatsApp() {
        return this._whatsApp;
    }

    set whatsApp(newValue) {
        this._whatsApp = newValue;
    }

    get creditCardNumber() {
        return this._creditCardNumber;
    }

    set creditCardNumber(newValue) {
        this._creditCardNumber = newValue;
    }

    twoWeelsTransport(_creditCardNumber) {
        console.log(`You have chosen the Bike rent. \n Mark the bike you like and write your credit card number: ${_creditCardNumber}\n\n`);
    }

    fourWeelsTransport(_creditCardNumber) {
        console.log(`You have chosen the Taxi Or Busses movement \n Select the destination and your credit card number: ${_creditCardNumber}\n\n`);
    }

    miltyWheelsTransport(_flyTicketNumber, _whatsApp) {
        console.log(`You have chosen the movement inside of the airport \n Write your fly ticket number:  ${_flyTicketNumber}\n  and  what's app: ${_whatsApp} and we will send the the map of metro with needness terminal\n\n`);
    }

    airTransport(_flyTicketNumber, _whatsApp) {
        console.log(`Write your fly ticket number:  ${_flyTicketNumber} and what's App: ${_whatsApp} and we will send detailed map to get your connection flight\n\n`);
    }
}

class Vehículos extends FormasDeMovimientos {
    constructor() {
        super();
    }

    bike(_creditCardNumber) {
        this.twoWeelsTransport(_creditCardNumber);
    }

    taxi(_creditCardNumber) {
        this.fourWeelsTransport(_creditCardNumber);
    };

    bus(_creditCardNumber) {
        this.fourWeelsTransport(_creditCardNumber);
    }

    metro(_flyTicketNumber, _whatsApp) {
        this.miltyWheelsTransport(_flyTicketNumber, _whatsApp);
    }

    plane(_flyTicketNumber, _whatsApp) {
        this.airTransport(_flyTicketNumber, _whatsApp);
    }
}

const clientRequest = new Vehículos();

clientRequest.bike(1234);
clientRequest.taxi(2345);
clientRequest.bus(3456);
clientRequest.metro(11111, 7778777);
clientRequest.plane(987987, 52555768970);