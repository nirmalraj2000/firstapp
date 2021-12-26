import React from "react";
import ReactDOM from "react-dom";

// CSS

import "./indeex.css";
import { bookListObjects } from "./books";

export const bookListData = [
  {
    imageUrl:
      "https://www.rd.com/wp-content/uploads/2019/11/shutterstock_509582812-e1574100998595-scaled.jpg?resize=700,466",
    bookName: "Best Book",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.`,
  },
  {
    imageUrl:
      "https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg",
    bookName: "Book of Magic",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.`,
  },
  {
    imageUrl:
      "https://media.istockphoto.com/photos/school-picture-id1016131800?k=20&m=1016131800&s=170667a&w=0&h=qEJXSSFd2Peteh8BDvd83gBm8KmVoqtx_YfgDB7F4pE=",
    bookName: "Book of Knowledge",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.`,
  },
];

function Greeting() {
  // return <Book></Book>;
  return <BookList></BookList>;
}

function BookList() {
  return (
    <section className="bookList">
      {bookListObjects.map((bookData) => {
        return <Book key={bookData.id} {...bookData}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  // const data = props.
  return (
    <article
      className="book"
      // onMouseOver={() => {
      //   console.log("Hello World!!!");
      // }}
      onMouseEnter={
        // console.log("");
        () => {
          console.log("Mouse Entered");
        }
      }
      onMouseLeave={() => {
        console.log("Mouse Leave");
      }}
      onMouseMove={() => {
        console.log("Mouse Move");
      }}
    >
      <img
        // src="https://thumbs.dreamstime.com/b/demo-computer-key-to-download-version-software-trial-64543995.jpg"
        src={props.imageUrl}
        alt=""
      />
      <h1
        onClick={() => {
          alert("Hello Heading.");
        }}
      >
        {props.title}
      </h1>
      <h3>{props.description}</h3>
      <button
        type="button"
        onClick={() => {
          alert("Hello World!");
        }}
      >
        Click Me
      </button>
    </article>
  );
};

ReactDOM.render(<Greeting />, document.getElementById("root"));
