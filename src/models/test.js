import produce from 'immer';

export default {
  state: {
    text: 'hello rematch'
  },

  reducers: {
    save: (state, payload) =>
      produce(state, draft => {
        draft = { ...state, ...payload };
        return draft;
      })
  },

  effects: {
    query(text) {
      this.save({
        text: '测试-' + text,
      });
    }
  }
};
