const {
  SHOWS_FAILED,
  SHOWS_LOADING,
  SHOWS_SUCCES
} = require('_redux/types')


const initialState = {
  isLoading: true,
  list: [],
}

const Reducer = (state = initialState, action) => {
  switch (action.type){
    case SHOWS_SUCCES:
      return {
        ...state,
        list: action.payload,
        isLoading: false
      }
    default:
      return state
  }
}

export default Reducer