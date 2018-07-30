interface stateType {
  count?: number,
  outstr?: string
};

export const demo = {
  state: {},
  reducers: {
    '@init': (state: stateType, init: stateType) => {
      return { ...state, ...init };
    }, 
    add(state: stateType, num) {
      return {
        ...state,
        count: state.count + (num | 1)
      };
    },
    reverse(state: stateType) {
      return {
        ...state,
        outstr: state.outstr.split('').reverse().join('') 
      };
    }
  }
}
