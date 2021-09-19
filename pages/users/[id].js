import React from 'react';
import Link from 'next/dist/client/link';
const UserDetails = ({ user }) => {
  return (
    <>
      {' '}
      <table id="users">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone No</th>
          <th>Website</th>
        </tr>

        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.website}</td>
        </tr>
      </table>
      <Link href="/">Go Back</Link>
    </>
  );
};

export default UserDetails;

//USE THE FIRST
// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${context.params.id}`
//   );

//   const user = await res.json();

//   return {
//     props: {
//       user,
//     },
//   };
// };

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${context.params.id}`
//   );

//   const users = await res.json();

//   return {
//     props: {
//       users,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

//   const users = await res.json();

//   const ids = users.map((user) => user.id);

//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
