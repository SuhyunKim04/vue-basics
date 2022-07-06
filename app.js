// create app instance
const app = Vue.createApp({
    data: function (){
        return {
            title: 'Hello, Vue!',
            link: 'http://vuejs.org',
            colors: [
                'blue',
                'red',
                'black',
                'green',
                'brown'
            ]
        }
    }
})

// mount app to html
const vm = app.mount('#app')

// select element using js
// getElementById('app')
// querySelector('#app')