const { createApp } = Vue

createApp({
    data() {
        return {
            newTask: '',
            tasks: [],
        }
    },
    methods: {
        addTask() {
            if (this.newTask !== '') {
                this.tasks.push({text: this.newTask, done: false})
            }
            this.newTask = ''
        },
    },
    
}).mount('#app')