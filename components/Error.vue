<template>
    <div
        class="error-page my-auto ma-n3 d-flex justify-center align-center"
        :style="{
            background: 'url(/layered-waves-haikei.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            minHeight: `calc(100vh - ${$vuetify.application.top}px)`,
        }"
        v-bind="$attrs"
    >
        <v-card
            dark
            class="pa-6 transparent bg-blur"
            elevation="1"
            width="90%"
            max-width="375px"
        >
            <v-card-title
                class="
                    text-h1
                    d-block
                    text-center
                    font-weight-black
                    primary--text
                    textshadow-3dblock
                "
            >
                <slot name="status">
                    {{ status_code }}
                </slot>
            </v-card-title>

            <v-card-subtitle class="text-h6 text-center">
                {{ title }}
            </v-card-subtitle>

            <v-card-text class="text-center text-caption">
                {{ message }}
            </v-card-text>

            <slot name="action">
                <div class="text-center mt-8 mb-4">
                    <v-btn large color="primary" :to="action_path">
                        <v-icon left> mdi-arrow-left </v-icon>
                        <span> {{ action_text }} </span>
                    </v-btn>
                </div>
            </slot>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "Error",

    props: {
        status_code: {
            type: [Number, String],
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        action_text: {
            type: String,
            default: "Go Home",
        },
        action_path: {
            type: String,
            default: "/",
        },
    },
};
</script>
