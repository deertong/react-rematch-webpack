
import moment from 'moment';

export default {
  state: {
    todoList: [],
    detailInfo: {}
  },

  reducers: {
    pushTodo: (state, payload) => {
      return { ...state, ...payload }
    }
  },
  effects: {
    update(value) {
      this.pushTodo({
        todoList: value
      });
    },
    getDetail(value) {
      this.pushTodo({
        detailInfo: value
      });
    }
  }
};
