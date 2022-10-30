<template>
    <section
        id="top-designs"
        class="px-2"
        :style="{
            paddingTop: `${$vuetify.application.top}px`,
            paddingBottom: `${$vuetify.application.top}px`,
        }"
    >
        <div class="mb-4 d-flex align-baseline justify-space-between">
            <div>
                <div class="text-h4 font-weight-bold">Designs</div>

                <div class="text-caption grey--text">
                    Here are some of my top Designs
                </div>
            </div>

            <v-btn x-small plain to="/designs">
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
                <CardDesign :design="design" />
            </v-col>
        </v-row>
    </section>
</template>

<script>
export default {
    name: "SectionTopDesigns",
};
</script>
