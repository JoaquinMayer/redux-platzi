import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as userActions from "../../actions/usersActions";
import * as postActions from "../../actions/postsActions";

import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";

const Posts = (props) => {
  console.log(props);
  const {
    usersGetAll,
    getPostByUser,
    match: {
      params: { key },
    },
  } = props;

  useEffect(() => {
    async function fetchData() {
      if (!props.userReducer.users.length) {
        await usersGetAll();
      }

      if (props.userReducer.error === "") {
        return;
      }

      if (!("posts_key" in props.userReducer.users[key])) {
        await getPostByUser(key);
      }
    }
    fetchData();
  }, []);

  let putPosts = () => {
    const {
      userReducer,
      userReducer: { users },
      postReducer,
      postReducer: posts,
      match: {
        params: { key },
      },
    } = props;

    if (users.length) return;

    if (userReducer.error) return;

    if (postReducer.loading) {
      return <Spinner />;
    }

    if (postReducer.error) return <Fatal message={userReducer.error} />;
    if (!posts.length) return;
    if (!("posts_key" in users[key])) return;

    const { posts_key } = users[key];
    return posts[posts_key].map((post) => (
      <div>
        <h2>{post.title}</h2>
        <h3>{post.body}</h3>
      </div>
    ));
  };

  let putUser = () => {
    const {
      userReducer,
      match: {
        params: { key },
      },
    } = props;

    if (userReducer.error) {
      return <Fatal message={userReducer.error} />;
    }

    if (!userReducer.users.length || userReducer.loading) {
      return <Spinner />;
    }

    const name = userReducer.users[key].name;
    return <h1>Posts from {name}</h1>;
  };

  return (
    <div>
      {putUser()}
      {putPosts()}
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
