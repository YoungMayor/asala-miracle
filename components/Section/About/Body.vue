<template>
    <section
        id="about-body"
        class="px-6 pb-16 grey--text"
        :style="{
            fontSize: '18px',
            lineHeight: 2,
            letterSpacing: '1px',
            wordSpacing: '2px',
        }"
    >
        {{ $profile.about }}
    </section>
</template>

<script>
export default {
    name: "SectionAboutBody",
};
</script>
