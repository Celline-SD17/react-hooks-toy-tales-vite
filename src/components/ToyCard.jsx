import React from "react";

function ToyCard({
  toy,
  onDelete, 
  onLike,
  }) {
    function handleLike() {

    fetch(`http://localhost:3001/toys/${toy.id}`, {

      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: toy.likes + 1,
      }),

    })
      .then((response) => response.json())
      .then((updatedToy) => {

        onLike(updatedToy);

      });

  }

  return (

    <div
      className="card"
      data-testid="toy-card"
    >

      <h2>{toy.name}</h2>

      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />

      <p>{toy.likes} Likes </p>

      <button
        className="like-btn"
        onClick={handleLike}
      >
        Like {"<3"}
      </button>

      <button
        className="delete-button"
        onClick={() => onDelete(toy.id)}
      >
        Donate to GoodWill
      </button>

    </div>

  );
}

export default ToyCard;
