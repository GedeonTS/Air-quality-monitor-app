const GET_COORD = 'https://api.openweathermap.org/data/2.5/air_pollution?lat=50.8476&lon=4.3572&appid=f1d8a4d595c7a03c5224b9f44ae09d6d';

const coordReducer = (state = [], action = { type: '' }) => {
  switch (action.type) {
    case GET_COORD:
      return action.payload;
    default:
      return state;
  }
};

export default coordReducer;
