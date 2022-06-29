import React from "react";

export default function Review({text, author}) {
  return (
    <section className="review--section">
      <p className="review--text">
       {text}
      </p>
      <div className="review--info">
        <p className="reviewer">-  {author}</p>
        <p className="read--more">read more</p>
      </div>
    </section>
  );
}
