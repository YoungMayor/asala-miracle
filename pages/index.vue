<template>
    <div>
        <section
            id="introduction"
            :xxxstyle="{
                height: `calc(90vh - ${this.$vuetify.application.top}px)`,
                maxHeight: '400px',
            }"
            class="d-flex py-16"
        >
            <div class="align-self-end mt-16">
                <div class="text-h1 font-weight-bold mt-16">
                    hi, I'm {{ $profile.name }}.
                </div>

                <div class="job-title-text grey--text mt-4">
                    {{ $profile.job_title }}
                </div>

                <div class="mt-2">
                    <v-btn color="primary" outlined to="/about" rounded>
                        <span> Read More </span>

                        <v-icon right> mdi-arrow-right </v-icon>
                    </v-btn>
                </div>

                <!-- <v-row
                    class="mx-auto"
                    justify="space-around"
                    :style="{
                        maxWidth: '500px',
                    }"
                >
                    <v-col
                        v-for="([brand, label], index) in $profile.brands"
                        :key="index"
                        cols="3"
                        class="d-flex flex-column align-center"
                    >
                        <component
                            :is="`brand-${brand}`"
                            fill="grey"
                            :style="{
                                maxWidth: '50%',
                                height: 'auto',
                            }"
                        ></component>

                        <span
                            class="
                                text-caption
                                grey--text
                                font-weight-bold
                                pa-2
                            "
                        >
                            {{ label }}
                        </span>
                    </v-col>
                </v-row> -->
            </div>
        </section>

        <section id="top-works" class="px-2 py-16">
            <div
                class="
                    text-h3
                    grey--text
                    font-weight-medium
                    mb-4
                    d-flex
                    align-baseline
                    justify-space-between
                "
            >
                <span> Designs </span>

                <v-btn small plain>
                    <span> View All </span>

                    <v-icon small right> mdi-arrow-right </v-icon>
                </v-btn>
            </div>

            <v-row>
                <v-col
                    v-for="(design, index) in $profile.designs"
                    :key="index"
                    cols="12"
                    sm="6"
                >
                    <v-hover>
                        <template v-slot:default="{ hover }">
                            <v-card class="ma-md-4">
                                <v-img
                                    :src="design.image"
                                    height="320px"
                                ></v-img>

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
                                    </v-overlay>
                                </v-fade-transition>
                            </v-card>
                        </template>
                    </v-hover>
                </v-col>
            </v-row>
        </section>
    </div>
</template>

<script>
export default {
    name: "IndexPage",

    data() {
        return {
            //
        };
    },

    computed: {
        //
    },
};
</script>
