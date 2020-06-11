import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as userActions from "../../actions/usersActions";
import * as postActions from "../../actions/postsActions";

const Posts = (props) => {
  console.log(props);

  useEffect(() => {
    async function fetchData() {
      if (!props.userReducer.users.length) {
        await props.usersGetAll();
      }
      props.getPostByUser(props.match.params.key);
    }
    fetchData();
  }, []);

  console.log(props);

  return (
    <div>
      <h1>Posts from </h1>
      {props.match.params.key}
    </div>
  );
};

const mapStateToProps = ({ userReducer, postReducer }) => {
  return { userReducer, postReducer };
};

const mapDispatchToProps = {
  ...userActions,
  ...postActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
