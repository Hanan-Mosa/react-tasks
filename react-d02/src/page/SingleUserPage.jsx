import React, { useEffect } from 'react';
import useUserStore from '../store/users';
import { useParams } from 'react-router-dom';


const SingleUserPage = () => {
  const { user, getUser,isLoading, hasErrors } = useUserStore();
  const userId = useParams();
  useEffect(() => {
    getUser({ ['id']: userId.id });
  }, []);
  if (isLoading) return <>loading</>;
  if (hasErrors) {
    console.error(hasErrors);
    return <> something went wrong</>;
  }
  if (!user) return <>User not found</>;
  return (
    <>
    <div className="container text-center d-flex flex-column justify-content-center align-items-center mt-5">
      <h1 className="mb-4">User Details</h1>
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">Username: {user.username}</p>
          <p className="card-text">Email: {user.email}</p>
          <p className="card-text">Phone: {user.phone}</p>
          <p className="card-text">Company: {user.company?.name}</p>
          <p className="card-text">Website: {user.website}</p>
          <p className="card-text">Zipcode: {user.address?.zipcode}</p>
          <p className="card-text">Catch Phrase: {user.company?.catchPhrase}</p>
          <p className="card-text">BS: {user.company?.bs}</p>
          <p className="card-text">Latitude: {user.address?.geo?.lat}</p>
          <p className="card-text">Longitude: {user.address?.geo?.lng}</p>
          <p className="card-text mb-3">Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode} </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default SingleUserPage;
