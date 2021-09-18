import nc from 'next-connect';
import onError from '../../../middlewares/errors';
import dbConnect from '../../../config/dbConnect';
import {
  updateRoom,
  getSingleRoom,
  deleteRoom,
} from '../../../controllers/roomControllers';
const handler = nc({ onError });

dbConnect();

handler.get(getSingleRoom);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;
