import { wrapper } from '../../store';
import RoomDetails from '../../components/room/RoomDetails';
import { getRoomDetails } from '../../redux/reducers/actions/roomActions';
import Layout from '../../components/layout/Layout';

import { clearErrors } from '../../redux/reducers/actions/roomActions';
export default function RoomDetailsPage() {
  return (
    <Layout>
      <RoomDetails />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, params }) => {
      await store.dispatch(getRoomDetails(req, params.id));
    }
);
