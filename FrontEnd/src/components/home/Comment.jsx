import React, { useState, useContext } from 'react';
import '../../assets/css/comment.css';
import { Context } from '../../context/Context';
import LayoutRow from '../../components/home/LayoutRow';
import commentIconsLogo from '../../assets/images/commentIconsLogos.jpg';

const Comment = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    onSent,

    showResult,
    loading,
    resultsData,
  } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    let comment = document.getElementById('comment-input').value;

    let finalComment = `
I want you to rewrite this comment/reply to a social media post/image/etc: ${comment}
Create 3 separate options for the comment.
Fix any grammatical errors and make it more engaging.
I would like it to sound more intelligent, but still casual.
This should be a comment that will get people to interact with it.

Feel free to add humor if appropriate.

Feel free to add some emojis or other fun elements to the comment to make it more dynamic.

Make sure it is platform-neutral.

I would like the response to be in this format:
Option1: (1st option for the comment)
Option2: (2nd option for the comment)
Option3: (3rd option for the comment)
`;
    console.log(finalComment);
    const sendComment = JSON.stringify(finalComment);
    onSent(sendComment);
  };

  return (
    <>
      {!submitted ? (
        <div className="generator__container comment">
          {!loading ? (
            <form className="comment-container">
              <LayoutRow
                name="social"
                title="Upscale Your Comments/Replies too!"
                image={commentIconsLogo}
                imageAlt="Social Media Icons"
              ></LayoutRow>
              <textarea
                name="comment"
                id="comment-input"
                defaultValue={resultsData}
              ></textarea>
              <button className="btn btn-comment" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          ) : (
            <>
              <h2>loading... please wait</h2>
              <div className="loader">
                <hr />
              </div>
            </>
          )}
        </div>
      ) : null}
    </>
  );
};

export default Comment;
