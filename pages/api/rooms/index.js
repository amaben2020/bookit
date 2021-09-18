import nc from 'next-connect';
import { allRooms } from '../../../controllers/roomControllers';
import dbConnect from '../../../config/dbConnect';
import { newRoom } from '../../../controllers/roomControllers';
const handler = nc();

dbConnect();

handler.get(allRooms);
handler.post(newRoom);

export default handler;
