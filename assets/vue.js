import Vue from 'vue';
new Vue({
    el: '#app',
    delimiters: ['${', '}'],
    data:{
        name: 'Zahid Hasan',
        href: 'https://vuejs.org/',
        customStyle: {color: 'gray'},
        number: 0
    },
    methods: {
        showName: function () {
            return this.name;
        },
        increment: function (event) {
            this.number ++;
            console.log(event);
        },
        decrement: function (event) {
            this.number --;
            console.log(event);
        }
    }
});