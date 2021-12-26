// import React from "react";
// import ReactDOM from "react-dom";

export class ListData {
  // var title ;
  // var description;
  // var imageUrl;

  constructor(id, title, description, imageUrl) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.id = id;
  }
}

export const bookListObjects = [
  new ListData(
    1,
    "Best Book",
    `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.`,
    "https://www.rd.com/wp-content/uploads/2019/11/shutterstock_509582812-e1574100998595-scaled.jpg?resize=700,466"
  ),
  new ListData(
    2,
    "Book of Magic",
    `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.`,
    "https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg"
  ),
  new ListData(
    3,
    "Book of Knowledge",
    `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.`,
    "https://media.istockphoto.com/photos/school-picture-id1016131800?k=20&m=1016131800&s=170667a&w=0&h=qEJXSSFd2Peteh8BDvd83gBm8KmVoqtx_YfgDB7F4pE="
  ),
  new ListData(
    4,
    "Book of Knowledge V2",
    `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.`,
    "https://media.istockphoto.com/photos/school-picture-id1016131800?k=20&m=1016131800&s=170667a&w=0&h=qEJXSSFd2Peteh8BDvd83gBm8KmVoqtx_YfgDB7F4pE="
  ),
];
