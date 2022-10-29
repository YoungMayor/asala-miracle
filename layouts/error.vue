<template>
    <Error
        :status_code="error.statusCode"
        :title="error.title || defaultError.title"
        :message="error.message || defaultError.message"
    />
</template>

<script>
export default {
    name: "ErrorLayout",

    layout: 'empty',

    props: {
        error: {
            type: Object,
            default: null,
        },
    },

    data() {
        return {
            //
        };
    },

    computed: {
        defaultError() {
            const preset = {
                400: {
                    title: "Invalid action",
                    message:
                        "The action you attempted is not valid! Please review your request.",
                },
                401: {
                    title: "Unauthenticated",
                    message:
                        "You need to be authenticated to access the requested resource",
                },
                403: {
                    title: "Unauthorised",
                    message:
                        "You are not authorised to access the requested resource",
                },
                404: {
                    title: "Page not found",
                    message:
                        "The link you clicked points to a page that may have been broken, renamed or removed",
                },
                406: {
                    title: "Not acceptable",
                    message: "Action is not acceptable",
                },
                500: {
                    title: "Server Error",
                    message:
                        "Something is wrong and it's not you, it's us. Our engineers are working on it at the moment",
                },
            };

            if (preset.hasOwnProperty(this.error.statusCode)) {
                return preset[this.error.statusCode];
            }

            return {
                title: "An error occurred",
            };
        },
    },

    head() {
        const title = this.defaultError.title;

        return {
            title,
        };
    },
};
</script>
