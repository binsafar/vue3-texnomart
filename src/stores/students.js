import {defineStore} from 'pinia'

export const useStudentsStore = defineStore({
    id: 'counter',
    state: () => ({
        students: []
    }),
    getters: {
        doubleCount: (state) => state.counter * 2
    },
    actions: {
        register(student) {
            this.students.push(student)
            console.log(this.students)
        }
    }
})
