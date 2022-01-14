import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const details = [
  {
    name: "Falastin: A Cookbook",
    img: "https://images-na.ssl-images-amazon.com/images/I/510jRw3ge1L._SX366_BO1,204,203,200_.jpg",
    author: "Yotam Ottolenghi",
    cuisine: "Palestinian",
  },
  {
    name: "Chetna's 30-minute Indian",
    img: "https://images-eu.ssl-images-amazon.com/images/I/51EANtvJyQS._SX218_BO1,204,203,200_QL40_ML2_.jpg",
    author: "Chetna Makan",
    cuisine: "Indian",
  },
  {
    name: "Simply",
    img: "https://images-eu.ssl-images-amazon.com/images/I/415uTXV96RL._SX218_BO1,204,203,200_QL40_ML2_.jpg",
    author: "Sabrina Ghayour",
    cuisine: "Persian",
  },
  {
    name: "Fruits",
    img: "https://images-na.ssl-images-amazon.com/images/I/51gcAJb1F1L._SX415_BO1,204,203,200_.jpg",
    author: "Cedric Grolet",
    cuisine: "French",
  },
];

function BookList() {
  return (
    <main>
      <Book
        name={details[0].name}
        img={details[0].img}
        author={details[0].author}
        cuisine={details[0].cuisine}
      />
      <Book
        name={details[1].name}
        img={details[1].img}
        author={details[1].author}
        cuisine={details[1].cuisine}
      />
      <Book
        name={details[2].name}
        img={details[2].img}
        author={details[2].author}
        cuisine={details[2].cuisine}
      />
      <Book
        name={details[3].name}
        img={details[3].img}
        author={details[3].author}
        cuisine={details[3].cuisine}
      />
    </main>
  );
}

const Book = (props) => {
  return (
    <article>
      <h1>{props.name}</h1>
      <h2>{props.author}</h2>
      <h3>{props.cuisine}</h3>
      <img src={props.img} alt="Cookbook" />
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
