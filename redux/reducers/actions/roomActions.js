import axios from 'axios';
import absoluteUrl from 'next-absolute-url';
import {
  ALL_ROOM_SUCCESS,
  ALL_ROOM_FAIL,
  CLEAR_ERRORS,
} from './constants/roomConstants.js';

//Get All Rooms
export const getRooms = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    console.log(origin);
    const { data } = await axios.get(`${origin}/api/rooms`);

    dispatch({
      type: ALL_ROOM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: ALL_ROOM_FAIL, payload: error.response.data.message });
  }
};

//CLEAR Errors
export const clearErrors = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
