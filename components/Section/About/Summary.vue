<template>
    <section
        id="about-summary"
        class="px-6"
        :style="{
            paddingTop: `${$vuetify.application.top}px`,
            paddingBottom: `${$vuetify.application.top}px`,
        }"
    >
        <v-row justify="center" align="end">
            <v-col cols="12" sm="6" md="5" xl="4">
                <div class="hey-text text-h5">Hey There!</div>

                <div class="titles text-h3 font-weight-bold">
                    {{ $profile.personality_title }}
                </div>
            </v-col>

            <v-col cols="12" sm="6" md="7" xl="4">
                <v-img
                    :src="$profile.avatar"
                    max-width="400px"
                    class="mx-auto"
                ></v-img>
            </v-col>
        </v-row>
    </section>
</template>

<script>
export default {
    name: "SectionAboutSummary",
};
</script>
