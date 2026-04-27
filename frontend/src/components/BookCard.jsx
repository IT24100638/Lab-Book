import { Link } from "react-router-dom";
import { deleteBook } from "../api/bookApi.js";

function BookCard({ book, onDelete }) {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        await deleteBook(book._id);
        onDelete(book._id);
      } catch (error) {
        console.error("Failed to delete book:", error);
      }
    }
  };
  return (
    <div className="card">
      <img
        src={book.imageUrl || "https://via.placeholder.com/400x220?text=Book"}
        alt={book.title}
        className="card-image"
      />
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Description:</strong> {book.description}</p>

      <div className="card-actions">
        <Link className="btn secondary" to={`/edit-book/${book._id}`}>Edit</Link>
        <button className="btn danger" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default BookCard;
