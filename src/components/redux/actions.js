import axios from "axios";

const GET_PARIS='http://api.openweathermap.org/data/2.5/air_pollution?lat=48.6&lon=2.3&appid=f1d8a4d595c7a03c5224b9f44ae09d6d'



export const getParis = (payload) => ({ type: GET_PARIS, payload });

const dataReducer=(state = [], action)=>{
    
    if (action.type === GET_PARIS) {
        return action.payload
    } else {
        return state
    }

}
export default dataReducer;

export const fetchParis = () => async (dispatch) => {
    const response = await axios.get(GET_PARIS);
    const data = await response.data.list[0].components;
    dispatch(getParis(data));
  };
