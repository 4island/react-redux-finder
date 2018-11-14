export const reducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD-LIST":
      {
        return [...action.value]
      }
    default:
      {
        return state
      }
  }
}