import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as userActions from "../../actions/usersActions";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";
import Table from "../Users/Table";

function Users(props) {
  useEffect(() => {
    props.getAll();
  }, []);

  let ponerContenido = () => {
    if (props.loading) {
      return <Spinner />;
    }

    if (props.error) {
      return <Fatal message={props.error} />;
    }

    return <Table />;
  };

  return (
    <div>
      <h1>Users:</h1>
      {ponerContenido()}
    </div>
  );
}

const mapStatetoProps = (reducers) => {
  return reducers.userReducer;
};

export default connect(mapStatetoProps, userActions)(Users);
