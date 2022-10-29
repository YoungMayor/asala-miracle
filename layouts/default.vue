<template>
    <v-app dark>
        <v-app-bar
            fixed
            app
            xxxcolor="#00000052"
            class="semi-transparent-dark bg-blur"
            xxxflat
            elevate-on-scroll
        >
            <nuxt-link
                to="/"
                class="d-flex mx-auto"
                :style="{
                    maxWidth: '45vw',
                }"
            >
                <InscriptionAcme
                    :fill="$vuetify.theme.isDark ? '#f8f5ff' : '#181129'"
                />
            </nuxt-link>

            <template v-if="!screenIsSmall">
                <v-spacer />

                <template>
                    <v-btn
                        v-for="(item, i) in items"
                        :key="i"
                        class="ma-1"
                        color="transparent"
                        dark
                        :to="item.to"
                    >
                        <v-icon small left> {{ item.icon }} </v-icon>

                        <span> {{ item.title }} </span>
                    </v-btn>
                </template>
            </template>

            <template v-slot:extension v-if="screenIsSmall">
                <v-tabs centered show-arrows optional>
                    <v-tabs-slider color="white"></v-tabs-slider>

                    <v-tab
                        v-for="(item, i) in items"
                        :key="i"
                        :to="item.to"
                        exact
                    >
                        <v-icon small left> {{ item.icon }} </v-icon>

                        <span> {{ item.title }} </span>
                    </v-tab>
                </v-tabs>
            </template>

            <!-- <v-btn class="ma-1" color="primary_gradient" dark small>
                <v-icon left> mdi-download </v-icon>
                <span> Download CV </span>
            </v-btn> -->
        </v-app-bar>

        <v-main>
            <v-container>
                <Nuxt />
            </v-container>
        </v-main>

        <v-footer dark class="px-6 py-16">
            <div>
                <div class="grey--text text-caption text-center">
                    I can be reached via my social handles below
                </div>

                <v-row justify="center" dense class="pa-2">
                    <v-col
                        v-for="(link, index) in $profile.links"
                        :key="index"
                        cols="auto"
                    >
                        <v-btn
                            plain
                            :color="link.color"
                            small
                            :href="link.link"
                            target="_blank"
                        >
                            <span>
                                {{ link.label }}
                            </span>

                            <v-icon right small> mdi-open-in-new </v-icon>
                        </v-btn>
                    </v-col>

                    <v-col cols="12" class="mt-2">
                        <v-btn
                            block
                            plain
                            :href="`mailto:${$profile.email}`"
                            target="_blank"
                        >
                            <span>
                                {{ $profile.email }}
                            </span>

                            <v-icon right small> mdi-email-edit </v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </div>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    name: "DefaultLayout",

    data() {
        return {
            items: [
                {
                    icon: "mdi-account",
                    title: "About",
                    to: "/about",
                },
                // {
                //     icon: "mdi-apps",
                //     title: "Skills",
                //     to: "/#skills",
                // },
                {
                    icon: "mdi-brush",
                    title: "Designs",
                    to: "/designs",
                },
                // {
                //     icon: "mdi-apps",
                //     title: "Reviews",
                //     to: "/#reviews",
                // },
                {
                    icon: "mdi-email-fast",
                    title: "Contact",
                    to: "/contact",
                },
            ],
        };
    },

    computed: {
        screenIsSmall() {
            return this.$vuetify.breakpoint.xs;
        },
    },
};
</script>
