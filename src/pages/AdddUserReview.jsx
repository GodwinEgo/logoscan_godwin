import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Navbar from "../components/navbar";

const AddUserReview = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement submit logic
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 d-flex flex-column  justify-content-center align-items-center">
        <div className="bg-light rounded-lg overflow-hidden">
          <img
            className="w-100 h-96"
            src="https://images.unsplash.com/photo-1542831376-3a31eb0e0d8a"
            alt="Product"
          />
        </div>
        <form onSubmit={handleSubmit} className="mt-4 w-100 max-w-lg">
          <div className="d-flex justify-content-center">
            {[...Array(5)].map((_, index) => (
              <AiFillStar
                key={index}
                className={`w-6 h-6 cursor-pointer ${
                  index < rating ? "text-warning" : "text-secondary"
                }`}
                onClick={() => handleRatingChange(index + 1)}
              />
            ))}
          </div>
          <div className="mt-4">
            <label htmlFor="comment" className="visually-hidden">
              Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              rows="4"
              className="form-control"
              placeholder="Write your review here..."
              value={comment}
              onChange={handleCommentChange}
            ></textarea>
          </div>
          <div className="mt-4 d-flex justify-content-center">
            <button type="submit" className="btn btn-danger">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddUserReview;
