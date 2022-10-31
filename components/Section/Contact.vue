<template>
    <section
        id="contact-form"
        class="px-2"
        :style="{
            paddingTop: `${$vuetify.application.top}px`,
            paddingBottom: `${$vuetify.application.top}px`,
        }"
    >
        <header
            class="
                text-center text-h4 text-md-h3 text-lg-h2
                font-weight-bold
                mb-8
            "
        >
            Get in touch with me
        </header>

        <v-row justify="center" align="center">
            <v-col cols="12" sm="5" md="4" lg="3" xl="2">
                <div class="accent rounded-xl pa-8">
                    <header class="text-h5 font-weight-bold mb-6">
                        Contact Info
                    </header>

                    <div class="my-4">
                        <div class="text-subtitle-2 grey--text">
                            <v-icon small left> mdi-account </v-icon>
                            <span> Name </span>
                        </div>

                        <div class="text-body-1">
                            {{ $profile.name }}
                        </div>
                    </div>

                    <div class="my-4">
                        <div class="text-subtitle-2 grey--text">
                            <v-icon small left> mdi-email-variant </v-icon>
                            <span> Email </span>
                        </div>

                        <div class="text-body-1">
                            {{ $profile.email }}
                        </div>
                    </div>

                    <div class="my-4">
                        <div class="text-subtitle-2 grey--text">
                            <v-icon small left> mdi-phone </v-icon>
                            <span> Phone </span>
                        </div>

                        <div class="text-body-1">
                            {{ $profile.phone }}
                        </div>
                    </div>
                </div>
            </v-col>

            <v-col cols="12" sm="7" md="8" lg="7" xl="6">
                <div class="pa-8">
                    <header class="text-h5 font-weight-bold mb-6">
                        Send me a message
                    </header>

                    <ContactForm />
                </div>
            </v-col>
        </v-row>
    </section>
</template>

<script>
export default {
    name: "SectionContact",
};
</script>
