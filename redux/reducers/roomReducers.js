import {
  ALL_ROOM_SUCCESS,
  ALL_ROOM_FAIL,
  CLEAR_ERRORS,
  ROOM_DETAIL_SUCCESS,
  ROOM_DETAIL_FAIL,
} from './actions/constants/roomConstants';

//All rooms reducer
export const allRoomsReducer = (state = { rooms: [] }, action) => {
  switch (action.type) {
    case ALL_ROOM_SUCCESS:
      return {
        ...state,
        roomsCount: action.payload.roomsCount,
        resPerPage: action.payload.resPerPage,
        filteredRoomsCount: action.payload.filteredRoomsCount,
        rooms: action.payload.rooms,
      };
    case ALL_ROOM_FAIL:
      return {
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const roomDetailsReducer = (state = { room: {} }, action) => {
  switch (action.type) {
    case ALL_ROOM_SUCCESS:
      return {
        room: action.payload,
      };
    case ALL_ROOM_FAIL:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};
