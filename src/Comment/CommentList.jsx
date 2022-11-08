// // import React from "react";

// // //CommentList.jsx
// // import Comment from "./Comment";

// // function CommentList(props) {

// //     return (
// //         <div>
// //             <Comment name2 ="서봉진 대표님" comment="안녕하세요"/>
// //             <h1>여기는 CommentList 입니다</h1>
// //         </div>
// //     );
// // }

// // export default CommentList;

// import React from "react";
// import Comment from "./Comment";

// const comments = [
//     {
//         name : "하상우",
//         comment : "첫댓글입니다"
//     },
//     {
//         name : "박성우",
//         comment : "두번째 댓글입니다"
//     },
//     {
//         name : "사재빈",
//         comment : "세번째 댓글입니다"
//     }

// ]

// function CommentList(props) {

//     return (
//         <div>
// 	        <Comment name= {comments.name} comment={comments.comment} />

//         </div>
//     );
// }

// export default CommentList;

import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name : "하상우",
        comment : "첫댓글입니다"
    },
    {
        name : "박성우",
        comment : "두번째 댓글입니다"
    },
    {
        name : "사재빈",
        comment : "세번째 댓글입니다"
    }

]

function CommentList(props) {

    return (
        <div>
            {comments.map(
                
                (comment) => {
                return (
                    <Comment name= {comment.name} comment={comment.comment} />
                )
            }
            
            )}
        </div>
    );
}

export default CommentList;