﻿Bridge.Class.extend('Bridge.ArrayEnumerator', {
    $init: function (array) {
        this.array = array;
        this.reset();
    },

    moveNext: function () {
        this.index++;
        return this.index < this.array.length;
    },

    getCurrent: function () {
        return this.array[this.index];
    },

    reset: function () {
        this.index = -1;
    }
});