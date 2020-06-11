import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as userActions from "../../actions/usersActions";
import Spinner from '../General/Spinner'

function Users(props) {
  useEffect(() => {
    props.getAll();
  }, []);

  let ponerContenido = () => {
    if(props.loading){
      return <Spinner />
    }

    return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Enlace</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )};

  return <div>
    {ponerContenido()}
  </div>;
}

const mapStatetoProps = (reducers) => {
  return reducers.userReducer;
};

export default connect(mapStatetoProps, userActions)(Users);
