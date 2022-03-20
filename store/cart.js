export const state = () => ({
  list: [],
  totalCost: 0,
});

export const mutations = {
  add(state, text) {
    if (state.list.length === 0) {
      state.list.push({
        name: text.name,
        cost: text.cost,
        qty: 1,
      });
    } else {
      let inCart = false;
      for (const product of state.list) {
        if (product.name === text.name) {
          inCart = true;
          product.qty++;
          break;
        }
      }
      if (!inCart) {
        state.list.push({
          name: text.name,
          cost: text.cost,
          qty: 1,
        });
      }
    }
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1);
  },
  toggle(state, todo) {
    todo.done = !todo.done;
  },
  sum(state) {
    state.list.reduce((a, b) => a + b);
  },
  update(state, withGST) {
    state.totalCost = withGST;
  },
};
