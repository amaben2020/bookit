import Room from '../models/room';

const allRooms = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'All rooms',
  });
};

//create new room /api/rooms
const newRoom = async (req, res) => {
  const room = await Room.create(req.body);
};

export { allRooms };
