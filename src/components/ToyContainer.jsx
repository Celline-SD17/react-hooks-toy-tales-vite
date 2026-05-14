import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({
  toys,
  onDelete,
  onLike,
}) {
  const toyCards = toys.map((toy)=> {
    return (
      <ToyCard
        key={toy.id}
        toy={toy}
        onDelete={onDelete}
        onLike={onLike}
        />
    );
  });
  return (
    <div id="toy-collection">{toyCards}
    </div>
  );
}

export default ToyContainer;
