var _ = require('lodash');
import collect from 'collect.js';
import moment from "moment";
import copy from 'copy-to-clipboard';

export default ({}, inject) => {
    inject('_', _)
    inject('collectjs', collect)
    inject('copyToClipboard', copy)
    inject('moment', moment)
}
