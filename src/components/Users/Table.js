import React from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";

const Table = (props) => {
  let ponerFilas = () =>
    props.users.map((user, idx) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
        <td>
          <Link to={`/posts/${idx}`}>
            <div className="eye-solid icon"></div>
          </Link>
        </td>
      </tr>
    ));

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>{ponerFilas()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.userReducer;
};

export default connect(mapStateToProps, null)(Table);
