import axios from 'axios';

const GET_PARIS = 'https://api.openweathermap.org/data/2.5/air_pollution?lat=48.8566&lon=2.3522&appid=f1d8a4d595c7a03c5224b9f44ae09d6d';
const GET_LONDON = 'https://api.openweathermap.org/data/2.5/air_pollution?lat=51.5072&lon=0.1276&appid=f1d8a4d595c7a03c5224b9f44ae09d6d';
const GET_LISBON = 'https://api.openweathermap.org/data/2.5/air_pollution?lat=38.7223&lon=9.1393&appid=f1d8a4d595c7a03c5224b9f44ae09d6d';
const GET_MADRID = 'https://api.openweathermap.org/data/2.5/air_pollution?lat=40.4168&lon=3.7038&appid=f1d8a4d595c7a03c5224b9f44ae09d6d';
const GET_ROME = 'https://api.openweathermap.org/data/2.5/air_pollution?lat=41.9028&lon=12.4964&appid=f1d8a4d595c7a03c5224b9f44ae09d6d';
const GET_BARCELONA = 'https://api.openweathermap.org/data/2.5/air_pollution?lat=41.3874&lon=2.1686&appid=f1d8a4d595c7a03c5224b9f44ae09d6d';
const GET_WARSAW = 'https://api.openweathermap.org/data/2.5/air_pollution?lat=52.2297&lon=21.0122&appid=f1d8a4d595c7a03c5224b9f44ae09d6d';
const GET_BRUSSELS = 'https://api.openweathermap.org/data/2.5/air_pollution?lat=50.8476&lon=4.3572&appid=f1d8a4d595c7a03c5224b9f44ae09d6d';
const GET_COORD = 'https://api.openweathermap.org/data/2.5/air_pollution?lat=50.8476&lon=4.3572&appid=f1d8a4d595c7a03c5224b9f44ae09d6d';
const GET_EUROPE = 'https://api.openweathermap.org/data/2.5/air_pollution?lat=54.5260&lon=15.2551&appid=f1d8a4d595c7a03c5224b9f44ae09d6d';

export const getData = (payload) => ({ type: GET_PARIS, payload });
export const getCoord = (payload) => ({ type: GET_COORD, payload });

const dataReducer = (state = {}, action = { type: '' }) => {
  switch (action.type) {
    case GET_PARIS:
      return action.payload;
    default:
      return state;
  }
};
export default dataReducer;

export const fetchData = () => async (dispatch) => {
  const data = [];
  const coord = [];

  const responseParis = await axios.get(GET_PARIS);
  data.push(responseParis.data.list[0].components);
  coord.push(responseParis.data.coord.lon);
  coord.push(responseParis.data.coord.lat);

  const responseLondon = await axios.get(GET_LONDON);
  data.push(responseLondon.data.list[0].components);
  coord.push(responseLondon.data.coord.lon);
  coord.push(responseLondon.data.coord.lat);

  const responseLisbon = await axios.get(GET_LISBON);
  data.push(responseLisbon.data.list[0].components);
  coord.push(responseLisbon.data.coord.lon);
  coord.push(responseLisbon.data.coord.lat);

  const responseMadrid = await axios.get(GET_MADRID);
  data.push(responseMadrid.data.list[0].components);
  coord.push(responseMadrid.data.coord.lon);
  coord.push(responseMadrid.data.coord.lat);

  const responseRome = await axios.get(GET_ROME);
  data.push(responseRome.data.list[0].components);
  coord.push(responseRome.data.coord.lon);
  coord.push(responseRome.data.coord.lat);

  const responseBarcelone = await axios.get(GET_BARCELONA);
  data.push(responseBarcelone.data.list[0].components);
  coord.push(responseBarcelone.data.coord.lon);
  coord.push(responseBarcelone.data.coord.lat);

  const responseWarsaw = await axios.get(GET_WARSAW);
  data.push(responseWarsaw.data.list[0].components);
  coord.push(responseWarsaw.data.coord.lon);
  coord.push(responseWarsaw.data.coord.lat);

  const responseBrussels = await axios.get(GET_BRUSSELS);
  data.push(responseBrussels.data.list[0].components);
  coord.push(responseBrussels.data.coord.lon);
  coord.push(responseBrussels.data.coord.lat);

  const responseEurope = await axios.get(GET_EUROPE);
  data.push(responseEurope.data.list[0].components);
  coord.push(responseEurope.data.coord.lon);
  coord.push(responseEurope.data.coord.lat);

  dispatch(getCoord(coord));
  dispatch(getData(data));
};
