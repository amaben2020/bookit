import Room from '../models/room';
import ErrorHandler from '../utils/errorHandler';
import catchAsyncErrors from '../middlewares/catchAsyncErrors';
import APIFeatures from '../utils/apiFeatures';
//create all rooms /api/rooms

const allRooms = catchAsyncErrors(async (req, res) => {
  const resPerPage = 4;

  const roomsCount = await Room.countDocuments();

  const apiFeatures = new APIFeatures(Room.find(), req.query).search().filter();

  let rooms = await apiFeatures.query;
  //number of documents that are filtered
  let filteredRoomsCount = rooms.length;

  apiFeatures.pagination(resPerPage);
  rooms = await apiFeatures.query;

  res.status(200).json({
    success: true,
    roomsCount,
    resPerPage,
    filteredRoomsCount,
    rooms,
  });
});

//create new room /api/rooms
const newRoom = catchAsyncErrors(async (req, res) => {
  const room = await Room.create(req.body);

  res.status(200).json({
    success: true,
    room,
  });
});

//get room details /api/rooms/:id
const getSingleRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler('Room not found with this id'), 404);
  }

  res.status(200).json({
    success: true,
    room,
  });
});

//update room details /api/rooms/:id
const updateRoom = catchAsyncErrors(async (req, res) => {
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
});

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
