class Helper {
    constructor() {
        //
    }

    formatMoney(amount, currency = "NGN") {
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency,
            // currencyDisplay: 'symbol'
        }).format(amount)
    }
}

export default ({}, inject) => {
    inject('helper', new Helper())
}
