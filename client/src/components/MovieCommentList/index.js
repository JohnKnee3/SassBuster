import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";

import edit from "../../assets/edit.png";
import trashcan from "../../assets/delete-img.png";

import MovieCommentForm from "../../components/MovieCommentForm";
import Auth from "../../utils/auth";
import { QUERY_ONE_PRODUCT, QUERY_USER } from "../../utils/queries";
import {
  DELETE_MOVIE_COMMENT,
  UPDATE_MOVIE_COMMENT,
} from "../../utils/mutations";

function MovieCommentList(id) {
  // get a productId from the URL
  const { id: productId } = useParams();

  // work on getting username from user
  const { data: userData } = useQuery(QUERY_USER);
  // console.log("I am {data: userData}", { data: userData });

  let username;
  //   console.log("I am outer username", username);

  if (userData) {
    // console.log("I am userData", userData);
    username = userData.user.username;
    // console.log("I am username", username);
  }

  // create mutation to excute the DELETE_MOVIE_COMMENT mutation
  const [deleteMovieComment] = useMutation(DELETE_MOVIE_COMMENT);

  // create mutation to excute the UPDATE_MOVIE_COMMENT mutation
  const [updateMovieComment] = useMutation(UPDATE_MOVIE_COMMENT);

  // use useQuery to excute the ONE_PRODUCT query with a productId
  const { data } = useQuery(QUERY_ONE_PRODUCT, {
    variables: { id: productId },
  });

  // save ONE_PRODUCT query to comments variable
  const comments = data?.product.movieComments || {};

  // set state for movieCommentText
  const [formState, setFormState] = useState();
  const [characterCount, setCharacterCount] = useState(0);

  // set state for editmode
  const [editState, setEditState] = useState(false);
  //   console.log("I am editState", editState);

  //the text of the comment when the edit button is clicked
  const [commentTextState, setCommentTextState] = useState();
  console.log("I am commentTextState", commentTextState);

  //the id of the comment when the edit button is clicked
  const [commentIdState, setCommentIdState] = useState();
  console.log("I am commentIdState", commentIdState);

  // create function that accepts the commentId value as param and delete the movieCommentText from the database
  const handleDeleteComment = async (_id) => {
    // get a comment id from the clicked comment
    const commentId = _id;

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    // check if there is a loggedin user
    if (!token) {
      return false;
    }

    try {
      await deleteMovieComment({
        variables: { _id: commentId },
      });
    } catch (e) {
      console.error(e);
    }

    window.location.reload();
  };

  //   let currentCommentId;
  //   //   console.log("I am outer currentCommentId", currentCommentId);
  //   let currentCommentText;

  //   const currentComment = (_id, movieCommentText) => {
  //     currentCommentId = _id;
  //     currentCommentText = movieCommentText;

  //     console.log("current comment id", currentCommentId);
  //     console.log("current comment text", currentCommentText);

  //     // renderEditForm(currentCommentId, currentCommentText)
  //   };

  // create function that accepts the movieComment id value as param and update the movieCommentText from the database
  const handleUpdateComment = async (currentCommentId) => {
    // get a comment id from the clicked comment
    // const commentId = currentCommentId;
    // get a movieCommentText from the clicked comment
    // const updatedComment = movieCommentText;
    console.log("handle form", currentCommentId);
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    // check if there is a loggedin user
    if (!token) {
      return false;
    }

    try {
      await updateMovieComment({
        variables: {
          _id: currentCommentId,
          movieCommentText: formState.updatedCommentText,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
      setCharacterCount(event.target.value.length);
    }
  };
  //create function that render comment edit form
  const renderEditForm = () => {
    // console.log("I am currentCommentId inner", currentCommentId);
    // console.log("I am currentCommentText inner", currentCommentText);
    console.log("I am commentIdState in the function", commentIdState);
    console.log("I am commentTextState in the function", commentTextState);

    return (
      <div className="container">
        <h3>Edit Your Comment</h3>
        <p
          className={`count-form ${characterCount === 280 ? "text-error" : ""}`}
        >
          Character Count: {characterCount}/280
        </p>
        <form>
          <textarea
            className="form-input"
            required
            name="updatedCommentText"
            // placeholder={commentTextState}
            onChange={handleChange}
          >
            {commentTextState}
          </textarea>
          <button
            id="submit"
            type="submit"
            onClick={() => handleUpdateComment(commentIdState)}
          >
            Done
          </button>
        </form>
      </div>
    );
  };

  function showCommentForm() {
    if (Auth.loggedIn()) {
      return <MovieCommentForm id={id.id} />;
    } else {
      return (
        <ul className="container flex-row">
          <li className="mx-1">
            <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link>{" "}
            to comment.
          </li>
        </ul>
      );
    }
  }

  // const renderCommentEdit = (_id, movieCommentText) => {
  //     // get a comment id from the clicked comment
  //     const commentId = _id;
  //     // get a movieCommentText from the clicked comment
  //     const oldComment = movieCommentText;
  //     console.log(oldComment)
  //     console.log(commentId)

  //     return (
  //         <form ref="editForm">
  //             <textarea ref="editText" required>{oldComment}</textarea>
  //             <button id="submit" type="submit" onClick={() => handleUpdateComment()}>Done</button>
  //         </form>
  //     )

  // };

  if (!comments.length) {
    return (
      <div className="container">
        <h3>No Comments Yet</h3>
        {showCommentForm()}
      </div>
    );
  }

  if (editState) {
    return <div>{renderEditForm()}</div>;
  } else {
    return (
      <div className="container my-1">
        {comments &&
          comments.map((comment) => (
            // console.log("I am comments", comments),
            // console.log("I am cooments.username", comments.username),

            <div key={comment._id} className="comment-color mb-3">
              <div key={comment._id} className="comment-list">
                <p className="comment-username">{comment.username}</p>
                <p className="comment-time">
                  {comment.createdAt}
                  {username === comment.username && (
                    <>
                      <button
                        className="edit-icons"
                        onClick={() => {
                          setCommentIdState(comment._id);
                          setCommentTextState(comment.movieCommentText);
                          // currentComment(comment._id, comment.movieCommentText);
                          setEditState(true);
                        }}
                      >
                        <img src={edit} alt="edit" />
                      </button>
                      <button
                        onClick={() => handleDeleteComment(comment._id)}
                        className="delete-icons"
                      >
                        <img src={trashcan} alt="delete" />
                      </button>
                    </>
                  )}
                  {username === "Admin" && (
                    <>
                      <button
                        className="edit-icons"
                        onClick={() => {
                          setCommentIdState(comment._id);
                          setCommentTextState(comment.movieCommentText);
                          // currentComment(comment._id, comment.movieCommentText);
                          setEditState(true);
                        }}
                      >
                        <img src={edit} alt="edit" />
                      </button>
                      <button
                        className="delete-icons"
                        onClick={() => handleDeleteComment(comment._id)}
                      >
                        <img src={trashcan} alt="delete" />
                      </button>
                    </>
                  )}
                </p>
                <p className="comment-text">{comment.movieCommentText}</p>
              </div>
            </div>
          ))}
        {showCommentForm()}
      </div>
    );
  }
}

export default MovieCommentList;
