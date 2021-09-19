import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from './components/layout/Layout';
import Home from './components/Home';
import Link from 'next/link';
import { getRooms } from '../redux/reducers/actions/roomActions';
import { wrapper } from './../store';
import { Provider } from 'react-redux';
export default function Index() {
  return (
    <Layout>
      <Home />
      {/* <table id="users">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Details</th>
        </tr>

        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <Link href={`/users/${user.id}`}>
              <a> View Details</a>
            </Link>
          </tr>
        ))}
      </table> */}
    </Layout>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');

//   const users = await res.json();

//   return {
//     props: {
//       users,
//     },
//   };
// };

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      await store.dispatch(getRooms(req));
    }
);
