<template>
    <section
        id="introduction"
        :style="{
            minHeight: `calc(100vh - ${$vuetify.application.top}px)`,
        }"
        class="d-flex"
    >
        <div class="align-self-center">
            <div class="font-weight-bold">
                <span class="text-h2 font-weight-bold"> hi, I'm </span>
                <span class="text-h1 font-weight-bold primary--text">
                    {{ $profile.nickname }}.
                </span>
            </div>

            <div class="mt-1">
                <v-btn color="white" text outlined to="/about" rounded small>
                    <span> Read More About Me </span>

                    <v-icon small right> mdi-arrow-right </v-icon>
                </v-btn>
            </div>

            <div class="job-title-text grey--text mt-8 text-h4">
                I'm a
                <span class="secondary--text font-weight-bold">
                    {{ $profile.job_title }}
                </span>
            </div>

            <div class="mt-1">
                <v-btn
                    color="white"
                    text
                    outlined
                    to="/#top-designs"
                    rounded
                    small
                >
                    <span> See Top Designs </span>

                    <v-icon small right> mdi-arrow-down </v-icon>
                </v-btn>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "SectionIntroduction",
};
</script>
