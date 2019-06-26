import React from 'react';


const CommentDetail = props => {
  //console.log(props)
  //when passing information from parent down to child use "props"
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.pic}/>
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.time}</span>
        </div>
        <div className="text">{props.comm}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
