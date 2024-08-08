import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    get amount() {
        return this._amount;
    }

    set amount(newAmount) {
        if (typeof newAmount !== 'number') {
            throw new TypeError('Amount must be a number');
        }
        this._amount = newAmount;
    }

    get currency() {
        return this._currency;
    }

    set currency(newCurrency) {
        if (!(newCurrency instanceof Currency)) {
            throw new TypeError('Currency must be a Currency');
        }
        this._currency = newCurrency;
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.displayFullCurrency()}`;
    }

    static convertPrice(amount, conversionRate) {
        if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
            throw new TypeError('Amount and conversion rate must be numbers');
        }
        return amount * conversionRate;
    }
    
}