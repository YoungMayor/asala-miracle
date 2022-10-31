const axios = require('axios');
import { faker } from "@faker-js/faker";
class Slack {
    constructor() {
        const slackWebhookURL = process.env.NUXT_ENV_SLACK_WEBHOOK_URL;

        if (!slackWebhookURL) {
            throw Error("Slack Webhook not configured");
        }

        let slackAxios = axios.create({
            baseURL: slackWebhookURL
        });

        this.slackAxios = slackAxios;
    }

    async sendNotification(payload) {
        try {
            return await this.slackAxios.post("", payload, {
                headers: {
                    'Content-Type': 'text/plain;charset=UTF-8',
                }
            })
        } catch (error) {
            const status = error.response.status;
            console.error(`There was an error, HTTP status code: ${status}`);
        }
    }

    sendContactFormMessage(details) {
        return this.sendNotification({
            username: "MimX Message Alert",
            icon_emoji: ":incoming_envelope:",
            attachments: [{
                    fallback: "",
                    color: "#00D000",
                    fields: [{
                        "title": "Sender",
                        "value": `${details.name} <mailto:${details.email}|${details.email}>`,
                    }, ]
                },
                {
                    fallback: "",
                    color: "#ffffff",
                    fields: [{
                        "title": "Title",
                        "value": details.title,
                    }, ]
                },
                {
                    fallback: "",
                    color: "#00D000",
                    fields: [{
                        "title": "Message",
                        "value": details.message,
                    }]
                },
            ]
        })
    }

    demoContactForm() {
        return this.sendContactFormMessage({
            email: faker.internet.email(),
            name: faker.name.fullName(),
            title: faker.lorem.paragraph(1),
            message: faker.lorem.paragraph()
        })
    }
}

export default ({}, inject) => {
    inject('slack', new Slack())
}
