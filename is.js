
const is = {




    num: function (num) {

        if ((typeof num) == "number") {
            return true
        } else {
            return false
        }
    },


    nan: function (nan) {

        if ((typeof nan) == "NaN") {
            return true
        } else {
            return false
        }
    },

    str: function (str) {

        if ((typeof str) == "string") {
            return true
        } else {
            return false
        }
    },

    bool: function (bool) {

        if ((typeof bool) == "boolean") {
            return true
        } else {
            return false
        }
    },

    undef: function (undef) {

        if ((typeof undef) == "undefined") {
            return true
        } else {
            return false
        }
    },

    def: function (def) {

        if ((typeof def) == "NaN") {
            return true
        } else {
            return false
        }
    },

    arr: function (arr) {

        if ((typeof num) == "array") {
            return true
        } else {
            return false
        }
    },

    obj: function (obj) {

        if ((typeof obj) == "object") {
            return true
        } else {
            return false
        }
    },


     fun: function (fun) {

        if ((typeof fun) == "function") {
            return true
        } else {
            return false
        }
    },

     truthy: function (truthy) {

        if ((typeof truthy) == "truthy") {
            return true
        } else {
            return false
        }
    },


     falsy: function (falsy) {

        if ((typeof falsy) == "falsy") {
            return true
        } else {
            return false
        }
    },









}


