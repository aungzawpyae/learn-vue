import axios from "axios";
import { get } from "lodash";
export default {
    state () {
        return {
          todos:[]
        }
      },
    getters: {
        myTodos(state){
           return state.todos
        }
    },
    mutations: {
        setTodos(state, todos) {
            state.todos = todos;
          },
        setTodo(state,newTodo){

            state.todos.unshift(newTodo)
        }
    },
    actions: {

    async getTodos({ commit }) {
      let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      let todos = res.data;
      commit("setTodos", todos);
        },
        async addTodo({ commit }, newTodo) {
            let res = await axios.post(
              "https://jsonplaceholder.typicode.com/todos",
              newTodo
            );
            console.log(res.data)
            commit("setTodo", res.data);
        
        // commit.commit('setTodo', res.data)
        
    }
    },

  };