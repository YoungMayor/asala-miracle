<template>
    <v-hover>
        <template v-slot:default="{ hover }">
            <v-card class="ma-md-4">
                <v-img :src="design.image" height="320px"></v-img>

                <v-fade-transition>
                    <v-overlay
                        v-if="hover"
                        absolute
                        color="#000"
                        :opacity="0.7"
                    >
                        <v-card-title>
                            {{ design.title }}
                        </v-card-title>

                        <v-card-text>
                            {{ design.text }}
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn text :href="design.link" target="_blank">
                                View More...
                            </v-btn>
                        </v-card-actions>
                    </v-overlay>
                </v-fade-transition>
            </v-card>
        </template>
    </v-hover>
</template>

<script>
export default {
    name: "CardDesign",

    props: {
        design: {
            type: Object,
            required: true,
        },
    },
};
</script>
