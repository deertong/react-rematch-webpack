
import moment from 'moment';

export default {
  state: {
    todoList: [],
  },

  reducers: {
    pushTodo: (state, payload) => {
      return { ...state, ...payload }
    }
  },

  effects: {
    update(value) {
      this.pushTodo({
        todoList:value
      });
    }
  }
};
