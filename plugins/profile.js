import { faker } from "@faker-js/faker";

export default ({}, inject) => {
    inject('profile', {
        name: "Miracle Asala",
        nickname: "MimX",
        personality_title: "Drummer, Guitarist, Swimmer and UI/UX Designer",
        job_title: "UI/UX Designer",
        avatar: faker.image.people(480, 640),
        brands: [
            ["adobe-xd", "Adobe XD"],
            ["corel-draw", "CorelDraw"],
            ["figma", "Figma"],
            ["photoshop", "Photoshop"],
        ],
        about: faker.lorem.paragraph(9),
        foot_about: faker.lorem.paragraph(),
        phone: faker.phone.number("+23480# ### ####"),
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
                link: "https://www.behance.net/miracleasala/projects"
            };
        }),
        links: [
            // {
            //     label: 'Twitter',
            //     color: 'light-blue lighten-2',
            //     link: faker.internet.url(),
            // },
            // {
            //     label: 'Figma',
            //     color: 'light-blue lighten-2',
            //     link: faker.internet.url(),
            // },
            {
                label: 'LinkedIn',
                icon: 'mdi-linkedin',
                color: 'blue',
                link: faker.internet.url(),
                show: 'icon',
            },
            {
                label: 'Behance',
                color: 'blue accent-3',
                link: faker.internet.url(),
                show: 'label'
            },
            {
                label: 'WhatsApp',
                color: 'green accent-3',
                icon: 'mdi-whatsapp',
                link: faker.internet.url(),
                show: 'icon',
            },
            // {
            //     label: 'Dribble',
            //     color: 'pink darken-1',
            //     link: faker.internet.url(),
            // },
            // {
            //     label: 'Telegram',
            //     color: 'blue darken-3',
            //     link: faker.internet.url(),
            // }
        ]
    })
}
