const utils = {
  className(obj) {
    const set = new Set();
    if (!Array.isArray(obj)) {
      obj = [obj];
    }
    obj.forEach(o => {
      if (typeof o === "string") {
        set.add(o);
      } else {
        Object.keys(o).forEach(key => {
          if (o[key]) {
            set.add(key);
          }
        });
      }
    });
    return Array.from(set.values()).join(" ");
  },
  bindMethods(methods: string[], obj: object): void {
    methods.forEach(method => {
      if (typeof obj[method] === "function") {
        obj[method] = obj[method].bind(obj);
      } else {
        console.warn(
          `This Object don't own the method [${method}], please remove it from the methods list`
        );
      }
    });
  },
  fetchData(props, fn) {
    const { location, url } = props;
    if (!location || !url) {
      fn();
      return;
    }
    if (location.pathname !== url) {
      fn();
    }
  }
};

export default utils;
