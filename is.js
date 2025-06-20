


is.num = function (num) {

    if ((typeof num) === "number") {
        return true
    } else {
        return false
    }
}


is.nan = function (nan) {

    if (Number.isNaN(nan)) {
        return true
    } else {
        return false
    }
}

is.str = function (str) {

    if ((typeof str) === "string") {
        return true
    } else {
        return false
    }
}

is.bool = function (bool) {

    if ((typeof bool) === "boolean") {
        return true
    } else {
        return false
    }
}

is.undef = function (undef) {

    if ((typeof undef) === "undefined") {
        return true
    } else {
        return false
    }
}

is.def = function (def) {

    if ((typeof def) != "undefined") {
        return true
    } else {
        return false
    }
}

is.arr = function (arr) {

    if (Array.isArray(arr)) {
        return true
    } else {
        return false
    }
}

is.obj = function (obj) {

    if ((typeof obj) === "object" && obj != null && !Array.isArray(obj)) {
        return true
    } else {
        return false
    }
}


is.fun = function (fun) {

    if ((typeof fun) === "function") {
        return true
    } else {
        return false
    }
}

is.truthy = function (truthy) {

    return !!truthy
}


is.falsy = function (falsy) {

    return !falsy

}






