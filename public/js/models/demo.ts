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
    add(state: stateType) {
      return {
        ...state,
        count: state.count + 1
      }
    },
    reverse(state: stateType) {
      return {
        ...state,
        outstr: state.outstr.split('').reverse().join('')
      }
    }
  }
}
