const initialState = {
  rain: false,
  wind: false,
  fire: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_PLAYING_STATUS":
      const sound = action.payload;
      return { ...state, [sound]: !state[sound] };
    default:
      return state;
  }
}

export default reducer;
