
const app = new Vue({
    el: '#app',
    data: {
        tittle: 'GYM con Vue.js',
        exercises: [],
        newExercise: '',

    },
    methods:{
        addToDo(){
            this.exercises.push({
                exercise: this.newExercise,
                state: false
            })
            this.newExercise = '';
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        editToDo(index){
            this.exercises[index].state = true;
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        deleteToDo(index){
            this.exercises.splice(index, 1);
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
    },
    created() {
        let DBData = JSON.parse(localStrage.getItem('gym-vue'));
        if (DBData === null) {
            this.exercises = [];
        }else{
            this.exercises = DBData;
        }
    },
})