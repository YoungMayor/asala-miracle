export default function({ $axios, }) {
    $axios.onError((error) => {
        if (!error.response) {
            //
        }

        const error_code = parseInt(error.response.status);
        const payload = error.response.data;

        if (error_code >= 400 && error_code <= 500) {
            // title: payload.statusText,
            // text: payload.message,
        }

        if (error_code === 500) {
            //
        }
    })
}
