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
                this.tasks.unshift({text: this.newTask, done: false})
            }
            this.newTask = ''
        },
        removeTask(index) {
            this.tasks.splice(index, 1)
        }
    },
    
}).mount('#app')