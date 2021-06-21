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
        html: '<a href="https://google.com">Google</a>',
        getInput: '',
        result: ''
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
        },
        handleKeyup: function (e) {
            console.log((e.target.value));
        },
        handleFormSubmit: function (e) {
            // e.preventDefault();
            console.log('Form Submitted');
        },
        getDouble: function () {
            this.result = this.getInput * 2;
        },
        getSquare: function () {
            this.result = this.getInput * this.getInput;
        },
        addTen: function () {
          this.result = this.getInput + 10;
        },
        reset: function () {
            this.result = "";
            this.getInput = "";
        }
    }
});