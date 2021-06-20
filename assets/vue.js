import Vue from 'vue';
new Vue({
    el: '#app',
    delimiters: ['${', '}'],
    data:{
        name: 'Zahid Hasan',
        href: 'https://vuejs.org/',
        customStyle: {color: 'gray'},
        number: 0,
        visitor: 'Zahid Hasan',
        html: '<a href="https://google.com">Google</a>'
    },
    methods: {
        showName: function () {
            return this.name;
        },
        increment: function (event, amount) {
            this.number = this.number + amount;
            console.log(event);
        },
        decrement: function (event, amount) {
            this.number = this.number - amount;
            console.log(event);
        }
    }
});