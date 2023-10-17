import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

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
    <div className="container mx-auto w-100 mt-8 h-80vh flex flex-col justify-center items-center">
      <div className="bg-gray-100 rounded-lg overflow-hidden">
        <img
          className="w-full h-96 object-cover"
          src="https://images.unsplash.com/photo-1542831376-3a31eb0e0d8a"
          alt="Product"
        />
      </div>
      <form onSubmit={handleSubmit} className="mt-8 w-full max-w-lg">
        <div className="flex items-center justify-center">
          {[...Array(5)].map((_, index) => (
            <AiFillStar
              key={index}
              className={`w-6 h-6 cursor-pointer ${
                index < rating ? "text-yellow-400" : "text-gray-300"
              }`}
              onClick={() => handleRatingChange(index + 1)}
            />
          ))}
        </div>
        <div className="mt-4">
          <label htmlFor="comment" className="sr-only">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            rows="4"
            className="w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Write your review here..."
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-indigo-600 border rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUserReview;
