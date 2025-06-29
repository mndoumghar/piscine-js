function flow(funcs) {
  return function(...a) {

    let result = funcs[0](...a)

    for (let i = 1; i < funcs.length; i++) {

      result = funcs[i](result)
    }

    return result
  }

}
