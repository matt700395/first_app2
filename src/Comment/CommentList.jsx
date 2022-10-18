import React from "react";


//CommentList.jsx
import Comment from "./Comment";

function CommentList(props) {

    return (
        <div>
            <Comment name ="하상우" comment="안녕하세요"/>
            <h1>여기는 CommentList 입니다</h1>
        </div>
    );
}

export default CommentList;