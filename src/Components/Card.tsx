const Card = () => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="w-1/2 h-full">
        <img
          className="h-full"
          src="https://bookpresstheme.com/multiauthor/wp-content/uploads/2022/07/book-mockup4.png"
          alt="Movie"
        />
      </figure>
      <div className="w-1/2 card-body">
        <h2 className="card-title">Title</h2>
        <span>Author:</span>
        <span>Genre:</span>
        <p>Publication Date:</p>
        <div className="card-actions justify-end">
          <button className="btn btn-neutral">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
