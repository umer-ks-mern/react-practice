import "./App.css";
import "./Book.css";

function Book(props) {
  return (
    <div className="book-card App">
      {
        <>
          <img className="book-image" src={props.image} alt="not found" />
          <div className="book-details">
            <h3>{props.title}</h3>
            <p className="book-description">{props.description}</p>
          </div>
        </>
      }
    </div>
  );
}

export default Book;
