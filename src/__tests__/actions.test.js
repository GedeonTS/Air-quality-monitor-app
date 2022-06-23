import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

function getData() {
  const GET_PARIS = 'http://api.openweathermap.org/data/2.5/air_pollution?lat=48.8566&lon=2.3522&appid=f1d8a4d595c7a03c5224b9f44ae09d6d';

  return {
    type: GET_PARIS,
  };
}

function fetchData() {
  return (dispatch) => fetch('/data.json')
    .then(() => dispatch(getData()));
}

it('should execute fetch data', () => {
  const store = mockStore({});

  return store.dispatch(fetchData())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(getData());
    });
});

function getCoord() {
  const GET_COORD = 'http://api.openweathermap.org/data/2.5/air_pollution?lat=50.8476&lon=4.3572&appid=f1d8a4d595c7a03c5224b9f44ae09d6d';

  return {
    type: GET_COORD,
  };
}

function fetchCoord() {
  return (dispatch) => fetch('/coords.json')
    .then(() => dispatch(getCoord()));
}

it('should execute fetch coords', () => {
  const store = mockStore({});

  return store.dispatch(fetchCoord())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(getCoord());
    });
});
