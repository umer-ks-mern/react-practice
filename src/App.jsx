import Book from "./Book";
import "./App.css";

function App() {
  const books = [
    {
      title: "Book 1",
      description: "Description of Book 1",
      image:
        "https://www.rd.com/wp-content/uploads/2021/05/books_quote1.jpg?resize=768%2C768",
    },
    {
      title: "Book 2",
      description: "Description of Book 2",
      image:
        "https://www.rd.com/wp-content/uploads/2021/05/books_quote1.jpg?resize=768%2C768",
    },
    {
      title: "Book 3",
      description: "Description of Book 3",
      image:
        "https://www.rd.com/wp-content/uploads/2021/05/books_quote1.jpg?resize=768%2C768",
    },
    {
      title: "Book 4",
      description: "Description of Book 4",
      image:
        "https://www.rd.com/wp-content/uploads/2021/05/books_quote1.jpg?resize=768%2C768",
    },
    {
      title: "Book 5",
      description: "Description of Book 5",
      image:
        "https://www.rd.com/wp-content/uploads/2021/05/books_quote1.jpg?resize=768%2C768",
    },
    {
      title: "Book 6",
      description: "Description of Book 6",
      image:
        "https://www.rd.com/wp-content/uploads/2021/05/books_quote1.jpg?resize=768%2C768",
    },
    {
      title: "Book 7",
      description: "Description of Book 7",
      image:
        "https://www.rd.com/wp-content/uploads/2021/05/books_quote1.jpg?resize=768%2C768",
    },
    {
      title: "Book 8",
      description: "Description of Book 8",
      image:
        "https://www.rd.com/wp-content/uploads/2021/05/books_quote1.jpg?resize=768%2C768",
    },
    {
      title: "Book 9",
      description: "Description of Book 9",
      image:
        "https://www.rd.com/wp-content/uploads/2021/05/books_quote1.jpg?resize=768%2C768",
    },
    {
      title: "Book 10",
      description: "Description of Book 10",
      image:
        "https://www.rd.com/wp-content/uploads/2021/05/books_quote1.jpg?resize=768%2C768",
    },
  ];

  return (
    <>
      <header className="App-header">
        <h1>My Book Library</h1>
      </header>
      <body className="App">
        <div>
          {books.map((elem) => {
            return (
              <Book
                title={elem.title}
                description={elem.description}
                image={elem.image}
              />
            );
          })}
        </div>
      </body>
    </>
  );
}

export default App;
