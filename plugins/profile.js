import { faker } from "@faker-js/faker";

export default ({}, inject) => {
    inject('profile', {
        name: "MimX",
        job_title: "UI/UX Designer",
        brands: [
            ["adobe-xd", "Adobe XD"],
            ["corel-draw", "CorelDraw"],
            ["figma", "Figma"],
            ["photoshop", "Photoshop"],
        ],
        about: faker.lorem.paragraph(),
        phone: faker.phone.number("+234### ### ####"),
        email: faker.internet.email('Asala', 'Miracle', 'gmail.com'),
        skills: [{
                name: "Figma",
                value: 4.4,
            },
            {
                name: "Adobe XD",
                value: 3.9,
            },
            {
                name: "Photoshop",
                value: 3.9,
            },
            {
                name: "CorelDraw",
                value: 3.2,
            },
            {
                name: "MS Office",
                value: 3.9,
            },
        ],
        designs: Array.from({ length: 4 }, () => {
            return {
                title: faker.commerce.productName(),
                text: faker.commerce.productDescription(),
                image: faker.image.business(640, 480, true),
            };
        }),
        links: [{
                label: 'Twitter',
                color: 'light-blue lighten-2',
                link: faker.internet.url(),
            },
            {
                label: 'Behance',
                color: 'blue accent-3',
                link: faker.internet.url(),
            },
            {
                label: 'LinkedIn',
                color: 'blue',
                link: faker.internet.url(),
            },
            {
                label: 'Dribble',
                color: 'pink darken-1',
                link: faker.internet.url(),
            },
            {
                label: 'WhatsApp',
                color: 'green accent-3',
                link: faker.internet.url(),
            },
            {
                label: 'Telegram',
                color: 'blue darken-3',
                link: faker.internet.url(),
            }
        ]
    })
}
