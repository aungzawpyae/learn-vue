
  
import {createApp} from 'vue';

import Vuex from 'vuex';

createApp(Vuex);

import Todos from './modules/Todos'

export default new Vuex.Store({
    modules: { Todos },
  });