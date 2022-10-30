class Slack {
    constructor(axios) {
        // Create a custom axios instance
        const api = axios.create({
            headers: {
                common: {
                    'Accept': 'text/plain, application/json, */*',
                    'Access-Control-Allow-Headers': '*',
                    // 'Access-Control-Allow-Methods': '*',
                    'Access-Control-Allow-Origin': '*'
                }
            }
        })


        this.axios = api
        this.url =
            "https://hooks.slack.com/services/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";
    }

    notify(text) {
        return this.axios.post(this.url, {
            text
        })
    }
}

export default ({ $axios }, inject) => {
    inject('slack', new Slack($axios))
}
