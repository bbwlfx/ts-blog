
export const demo = {
  state: {},
  reducers: {
    '@init': (state, init) => {
      return { ...state, ...init };
    }, 
    add(state) {
      return {
        count: state.count + 1
      }
    },
    reverse(state) {
      return {
        outstr: state.outstr.split('').reverse().join('')
      }
    }
  }
}
