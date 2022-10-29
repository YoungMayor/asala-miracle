class Form {
    constructor(data) {
        this._keys = Object.keys(data);

        this._default_data = data

        this._keys.forEach((key) => {
            this[key] = data[key]
        })

        this._props = {
            _meta: {
                busy: false
            },
            _errors: this._expand(this._keys, []),
            _response: {
                status: '',
                message: ''
            },
            _keys: this._keys
        };
    }

    data() {
        let res = {}

        this._props._keys.forEach((key) => {
            if (this[key]) {
                res[key] = this[key]
            }
        })

        return res;
    }

    formData() {
        var formData = new FormData()

        this._props._keys.forEach((key) => {
            if (this[key]) {
                formData.append(key, this[key])
            }
        })

        return formData;
    }

    loader = {
        start: () => {
            this.loader._setLoading(true)
        },
        stop: () => {
            this.loader._setLoading(false)
        },
        loading: () => {
            return this._props._meta.busy
        },
        _setLoading: (value) => {
            this._props._meta.busy = value
        }
    }

    busy() {
        return this.loader.loading()
    }

    errors = {
        get: (key = false) => {
            return key ?
                this._props._errors[key] :
                this._props._errors
        },
        set: (key, errors) => {
            this._props._errors[key] = errors
        },
        add: (key, error) => {
            this._props._errors[key] = [
                ...this._props._errors[key],
                error
            ]
        },
        clear: (key = false) => {
            key ?
                this._props._errors[key] = [] :
                this._props._errors = this._expand(this._keys, [])
        }
    }

    reset() {
        this._keys.forEach((key) => {
            this[key] = this._default_data[key]
        })
        this.errors.clear()
    }

    async pasteFromClipboard(field) {
        const text = await navigator.clipboard.readText();
        console.log(`now pasting ${text} to ${field}`)

        this[field] = text
    }

    _expand(keys, defValue = "") {
        let res = {}
        keys.forEach((key) => {
            res[key] = defValue
        })
        return res;
    }
}

export default ({}, inject) => {
    inject('form', Form)
}
