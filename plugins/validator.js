import collect from "collect.js"

class Validator {
    constructor(value) {
        this.value = value

        this.response = {}
    }

    transform(transformer) {
        this.value = transformer(this.value)

        return this
    }

    required(message) {
        this.response.required = !!this.value || message || 'Required'

        return this
    }

    accepted(message) {
        this.response.required = this.value === true || message ||
            'Must be accepted'

        return this
    }

    length(length = 8, message) {
        this.response.length = String(this.value).length === length ||
            message ||
            `Length of value must be exactly ${length} character(s)`

        return this
    }

    min(min = 8, message) {
        this.response.min = (['string', 'number'].includes(typeof(this.value)) &&
                String(this.value).length >= min) ||
            message ||
            `Minimum of ${min} characters required`

        return this
    }

    num_min(min = 1, message) {
        this.response.num_min = (Number(this.value) >= Number(min)) ||
            message || `Minimum is ${min}`

        return this
    }

    max(max = 128, message) {
        this.response.max = (['string', 'number'].includes(typeof(this.value)) &&
                String(this.value).length <= max) ||
            message ||
            `Maximum of ${max} characters allowed`

        return this
    }

    num_max(max = 100, message) {
        this.response.num_max = (Number(this.value) <= Number(max)) ||
            message || `Maximum is ${max}`

        return this
    }

    clean_min(min = 8, message) {
        this.response.clean_min = (['string', 'number'].includes(typeof(
                this.value)) &&
            String(this.value).replace(/\s+/g, ' ').trim().length >=
            min) || message || `Minimum of ${min} characters required`

        return this
    }

    url(message) {
        if (!this.value) {
            return this;
        }

        let isValid = (() => {
            let url;

            try {
                url = new URL(this.value)
            } catch (_) {
                return false;
            }

            return url.protocol === "http:" ||
                url.protocol === "https:";
        })()

        this.response.url = isValid || message || "Invalid URL"

        return this;
    }

    pattern(pattern, message, type = 'pattern') {
        this.response[type] = pattern.test(this.value) || message ||
            "Does not match allowed pattern"

        return this
    }

    email(message) {;
        return this.pattern(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message || "Invalid email",
            'email'
        );
    }

    alpha(message) {
        return this.pattern(
            /^([A-z]+)$/,
            message || "Only alphabets allowed",
            'alpha'
        );
    }

    alphanumeric(message) {
        return this.pattern(
            /^([A-z0-9]+)$/,
            message || "Only alphabetic and numeric characters allowed",
            'alphanumeric'
        );
    }

    alphanumeric_dash(message) {
        return this.pattern(
            /^([A-z0-9\-\_]+)$/,
            message || "Only alphabets, numbers and hyphen (-) allowed",
            'alphanumeric_dash'
        );
    }

    numeric(message) {
        this.response.numeric = !isNaN(this.value) || message ||
            "Must be a number"

        return this
    }

    same(other, message) {
        this.response.same = (this.value == other) || message ||
            "Fields do not match"

        return this
    }

    secure_password(message) {
        return this.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,\-./:;<=>?@\[\]^_`{|}~])[A-Za-z\s\d!"#$%&'()*+,\-./:;<=>?@\[\]^_`{|}]{8,}$/,
            message ||
            "Password must contain a minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
            'secure_password'
        )
    }

    name(message) {
        return this.pattern(
            /^[A-Z][a-zA-Z\s]{2,32}$/,
            message ||
            "Name must begin with a capital letter and contain between 2 and 32 letters",
            'name'
        )
    }

    in (values, message) {
        if (!values instanceof Array) {
            return "Invalid list of possible values"
        }

        this.response.in = values.includes(this.value) || message ||
            `Value must be one of '${collect(values).join("', '", "' and '")}'`

        return this;
    }

    notIn(values, message) {
        if (!values instanceof Array) {
            return "Invalid list of exempted values";
        }

        this.response.notIn = !values.includes(this.value) || message ||
            `Value cannot be ${this.value}`

        return this;
    }

    date(message) {
        this.response.date = Boolean((new Date(this.value)).getTime()) ||
            message || "Invalid Date"

        return this;
    }

    phone(message) {
        return this.pattern(
            /^(((\+)?(234))|0)?([\d]{10})$/,
            message || "Phone number format invalid",
            'phone'
        )
    }

    file_size_between(min = 512, max = 2048, min_message, max_message) {
        try {
            const size = this.value.size / 1000

            if (size < min) {
                this.response.file_size_between = min_message ||
                    `File too small`
            }

            if (size > max) {
                this.response.file_size_between = max_message ||
                    `File too large`
            }
        } catch (err) {
            this.response.file_size_between = "File is required!"
        }

        return this
    }



    validate() {
        return Object.values(this.response)
    }
}

export default ({}, inject) => {
    inject('validator', Validator)
};
