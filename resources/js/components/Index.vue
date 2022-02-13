
<template>
  <div>
    <h1>
      Vue x
    </h1>
    <div class="container">
      <div class="max-w-5x mx-auto ">
        <add-todo/>
      </div>
      <div class="grid grid-cols-4 gap-6">
        <div 
          class="col bg-gray-400 py-3 px-2 "
          v-for="todo in myTodos"
          :key="todo"
        
        >
          <p class="">
            {{ todo.title }}
          </p>
        </div>
        
      </div>
    </div>
  </div>
</template>


<script>

  import { mapActions, mapGetters,mapMutations } from 'vuex'

  import addTodo from './AddTodo'


export default {
  data() {
    return {

    }
  },
  components:{
    addTodo
    
  },
  computed: {
    
    ...mapGetters([

      "myTodos"

    ])

  },
  
methods: {
    ...mapActions([
      "getTodos"
    ]),
    
  },
  mounted(){
    this.getTodos();

  },
}
</script>


<style scoped>
button {
  font-weight: bold;
}
</style>
