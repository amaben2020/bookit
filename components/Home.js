import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import RoomItem from './room/RoomItem';

import { clearErrors } from '../redux/reducers/actions/roomActions';
const Home = () => {
  const { rooms, error } = useSelector((state) => state.allRooms);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  });

  const dispatch = useDispatch();

  return (
    <section id="rooms" className="container mt-5">
      <h2 className="mb-3 ml-2 stays-heading">Stays in New York</h2>

      <a href="#" className="ml-2 back-to-search">
        {' '}
        <i className="fa fa-arrow-left"></i> Back to Search
      </a>
      <div className="row">
        {rooms.length === 0 ? (
          <div>No rooms</div>
        ) : (
          rooms.map((room) => <RoomItem key={room.id} room={room} />)
        )}
      </div>
    </section>
  );
};

export default Home;
