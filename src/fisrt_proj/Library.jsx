import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="처음만난 파이썬" numOfPage={101010} />
            <Book name="처음만난 afdhsadfa" numOfPage={300} />
            <Book name="처음만난 React" numOfPage={300} />
        </div>
    );
}

export default Library;

