import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);
const SwalToast = Vue.swal.mixin({
    toast: true,
    position: 'top-end',
    timer: 7500,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Vue.swal.stopTimer);
        toast.addEventListener('mouseleave', Vue.swal.resumeTimer);
    }
});

export default ({}, inject) => {
    inject('swal', Vue.swal);
    inject('swalToast', SwalToast);
}
