const initialState = {
    lang: "th"
}

export default (state = initialState, action) => {
  switch (action.type) {
  
  case 'SET_LOCALE':
    return { 
      lang: action.lang
    };

  default:
    return state
  }
}


