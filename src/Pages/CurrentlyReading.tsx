const CurrentlyReading = () => {
  return (
    <div className="py-10 md:py-20 px-12">
      <h2 className="text-center font-semibold text-xl md:text-2xl lg:text-3xl mb-12">
        Currently Reading
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="w-1/2 h-full">
            <img
              className="h-full object-fill"
              src="http://dummyimage.com/212x100.png/dddddd/000000"
              alt="Movie"
            />
          </figure>
          <div className="w-1/2 card-body px-6 py-10">
            <h2 className="card-title">Title</h2>
            <span>Author:</span>
            <span>Genre:</span>
            <p>Publication Date:</p>
            <span className="font-semibold">
              Reading Status:{' '}
              <small className="text-green-500"> Finished Reading</small>
              <small className="text-blue-500"> book.status</small>
            </span>
            <select>
              <option>Change the reading status</option>
              <option value="reading">Reading</option>
            </select>
            <select>
              <option>Change the reading status</option>
              <option value="reading-completed">Finished Reading</option>
            </select>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-neutral">Remove</button>
            </div> */}
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
          <div className="w-1/2 card-body px-6 py-10">
            <h2 className="card-title">Title</h2>
            <span>Author:</span>
            <span>Genre:</span>
            <p>Publication Date:</p>
            <span className="font-semibold">
              Reading Status:{' '}
              <small className="text-green-500"> Finished Reading</small>
              <small className="text-blue-500"> book.status</small>
            </span>
            <select>
              <option>Change the reading status</option>
              <option value="reading">Reading</option>
            </select>
            <select>
              <option>Change the reading status</option>
              <option value="reading-completed">Finished Reading</option>
            </select>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-neutral">Remove</button>
            </div> */}
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
          <div className="w-1/2 card-body px-6 py-10">
            <h2 className="card-title">Title</h2>
            <span>Author:</span>
            <span>Genre:</span>
            <p>Publication Date:</p>
            <span className="font-semibold">
              Reading Status:{' '}
              <small className="text-green-500"> Finished Reading</small>
              <small className="text-blue-500"> book.status</small>
            </span>
            <select>
              <option>Change the reading status</option>
              <option value="reading">Reading</option>
            </select>
            <select>
              <option>Change the reading status</option>
              <option value="reading-completed">Finished Reading</option>
            </select>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-neutral">Remove</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentlyReading;
