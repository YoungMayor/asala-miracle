<template>
    <v-form v-model="form_valid" ref="contact_form">
        <v-text-field
            v-model="form.name"
            :rules="
                new $validator(form.name)
                    .required()
                    .name('Please enter a valid name')
                    .validate()
            "
            :counter="64"
            label="Name"
            required
            color="secondary"
        ></v-text-field>

        <v-text-field
            v-model="form.email"
            type="email"
            :rules="
                new $validator(form.email)
                    .required()
                    .email('Please enter a valid email address')
                    .validate()
            "
            label="Email"
            hint="My response would be sent to the email you provide"
            required
            color="secondary"
        ></v-text-field>

        <v-text-field
            v-model="form.title"
            :rules="
                new $validator(form.title).required().min(4).max(128).validate()
            "
            label="Title"
            counter="128"
            required
            color="secondary"
        ></v-text-field>

        <v-textarea
            v-model="form.message"
            :rules="
                new $validator(form.message)
                    .required()
                    .min(4)
                    .max(1024)
                    .validate()
            "
            label="Message"
            rows="3"
            required
            color="secondary"
        ></v-textarea>

        <v-btn
            class="mt-8"
            type="submit"
            color="secondary"
            large
            block
            depressed
            :loading="form.busy()"
            :disabled="form.busy() || !form_valid"
            @click="submit"
        >
            Submit
        </v-btn>
    </v-form>
</template>

<script>
export default {
    name: "ContactForm",

    data() {
        return {
            form: new this.$form({
                name: "",
                email: "",
                title: "",
                message: "",
            }),
            form_valid: false,
        };
    },

    methods: {
        async submit() {
            if (!this.form_valid) {
                this.$swalToast.fire({
                    icon: "warning",
                    text: "Please fill all inputs provided in the form!",
                });

                return;
            }

            if (this.form.busy()) {
                return;
            }

            this.form.loader.start();

            const data = this.form.data();

            await this.$slack.sendContactFormMessage(this.form.data());

            this.$swalToast.fire({
                icon: "success",
                title: "Message Sent",
                text: "Your message has been successfully sent, I will respond to you shortly",
            });

            this.$refs.contact_form.reset();

            this.form.loader.stop();
        },
    },
};
</script>
