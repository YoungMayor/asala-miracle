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

            <v-spacer v-if="!$vuetify.breakpoint.xs" />
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
};
</script>

