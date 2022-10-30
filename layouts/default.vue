<template>
    <v-app dark>
        <v-app-bar
            fixed
            app
            class="semi-transparent-dark bg-blur"
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
                <v-tabs
                    centered
                    show-arrows
                    optional
                    slider-color="grey darken-4"
                >
                    <v-tab
                        v-for="(item, i) in items"
                        :key="i"
                        :to="item.to"
                        active-class="tab-active secondary--text"
                    >
                        <v-icon small left> {{ item.icon }} </v-icon>

                        <span> {{ item.title }} </span>
                    </v-tab>
                </v-tabs>
            </template>
        </v-app-bar>

        <v-main>
            <v-container>
                <Nuxt />
            </v-container>
        </v-main>

        <v-footer dark class="px-12 py-16">
            <div
                class="mx-auto"
                :style="{
                    maxWidth: '400px',
                }"
            >
                <div class="text-center">
                    <InscriptionAcme />
                </div>

                <div class="text-center grey--text text-caption mt-2">
                    {{ $profile.foot_about }}
                </div>

                <div class="text-center mt-4">
                    <v-btn
                        v-for="(link, index) in $profile.links"
                        :key="index"
                        :icon="link.show == 'icon'"
                        :plain="link.show == 'label'"
                        :outlined="link.show == 'label'"
                        :color="link.show == 'label' ? 'white' : link.color"
                        :href="link.link"
                        target="_blank"
                        class="ma-2"
                    >
                        <span v-if="link.show == 'label'">
                            {{ link.label }}
                        </span>

                        <v-icon v-if="link.show == 'icon'">
                            {{ link.icon }}
                        </v-icon>
                    </v-btn>
                </div>
            </div>
        </v-footer>

        <v-footer class="black">
            <div class="copyright-text text-caption mx-auto">
                Copyright &copy;2022
                <a
                    href="https://www.youngmayor.dev"
                    target="_blank"
                    class="
                        secondary--text
                        text-decoration-none
                        font-weight-bold
                    "
                >
                    Meyoron Aghogho
                </a>
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
                    to: "/#about-summary",
                },
                // {
                //     icon: "mdi-apps",
                //     title: "Skills",
                //     to: "/#skills",
                // },
                {
                    icon: "mdi-brush",
                    title: "Designs",
                    to: "/#top-designs",
                },
                // {
                //     icon: "mdi-apps",
                //     title: "Reviews",
                //     to: "/#reviews",
                // },
                {
                    icon: "mdi-email-fast",
                    title: "Contact",
                    to: "/#contact-form",
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

<style scoped>
.tab-active {
    background-color: #121212;
}
</style>
