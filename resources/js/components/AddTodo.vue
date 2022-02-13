<template>
  <div>
      <h1>Add Todo {{newTodo.title}}</h1>
      <br>
      <input type="text" v-model="newTodo.title" placeholder="Add Todo" class="px-4 py-2 border border-gray-200">
      <button class="bg-blue-400 px-4 py-2" @click="addTodo(newTodo)">Add Todo</button>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  data(){
    return{
      newTodo:{
        title:"",
      }
    }
  },
 
 methods: {
    ...mapActions([
      "addTodo"
    ]),
    
  },
  
}
</script>

<style>

</style>