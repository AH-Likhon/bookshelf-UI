const Wishlist = () => {
  return (
    <div className="py-10 md:py-20 px-12">
      <h2 className="text-center font-semibold text-xl md:text-2xl lg:text-3xl mb-12">
        Wishlist
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="w-1/2 h-full">
            <img
              className="h-full object-fill"
              src="http://dummyimage.com/212x100.png/dddddd/000000"
              alt="Movie"
            />
          </figure>
          <div className="w-1/2 card-body">
            <h2 className="card-title">Title</h2>
            <span>Author:</span>
            <span>Genre:</span>
            <p>Publication Date:</p>
            <div className="card-actions justify-end">
              <button className="btn btn-neutral">Remove</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="w-1/2 h-full">
            <img
              className="h-full object-fill"
              src="http://dummyimage.com/212x100.png/dddddd/000000"
              alt="Movie"
            />
          </figure>
          <div className="w-1/2 card-body">
            <h2 className="card-title">Title</h2>
            <span>Author:</span>
            <span>Genre:</span>
            <p>Publication Date:</p>
            <div className="card-actions justify-end">
              <button className="btn btn-neutral">Remove</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="w-1/2 h-full">
            <img
              className="h-full object-fill"
              src="http://dummyimage.com/212x100.png/dddddd/000000"
              alt="Movie"
            />
          </figure>
          <div className="w-1/2 card-body">
            <h2 className="card-title">Title</h2>
            <span>Author:</span>
            <span>Genre:</span>
            <p>Publication Date:</p>
            <div className="card-actions justify-end">
              <button className="btn btn-neutral">Remove</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="w-1/2 h-full">
            <img
              className="h-full object-fill"
              src="http://dummyimage.com/212x100.png/dddddd/000000"
              alt="Movie"
            />
          </figure>
          <div className="w-1/2 card-body">
            <h2 className="card-title">Title</h2>
            <span>Author:</span>
            <span>Genre:</span>
            <p>Publication Date:</p>
            <div className="card-actions justify-end">
              <button className="btn btn-neutral">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
