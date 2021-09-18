import Room from '../models/room';
import ErrorHandler from '../utils/errorHandler';

//create all rooms /api/rooms

const allRooms = async (req, res) => {
  try {
    const rooms = await Room.find();

    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

//create new room /api/rooms
const newRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);

    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

//get room details /api/rooms/:id
const getSingleRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.query.id);

    if (!room) {
      return next(new ErrorHandler('Room not found with this id'), 404);
    }

    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

//update room details /api/rooms/:id
const updateRoom = async (req, res) => {
  try {
    let room = await Room.findById(req.query.id);

    if (!room) {
      return res.status(404).json({
        success: false,
        error: 'Room not found',
      });
    }

    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

//delete room details /api/rooms/:id
const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id);

    if (!room) {
      return res.status(404).json({
        success: false,
        error: 'Room not found',
      });
    }

    await room.remove();

    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: 'Room is deleted',
    });
  }
};

export { allRooms, newRoom, getSingleRoom, updateRoom, deleteRoom };
