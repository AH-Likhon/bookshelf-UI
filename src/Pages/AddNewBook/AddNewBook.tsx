const genres = [
  'Fiction',
  'Mystery',
  'Science Fiction',
  'Fantasy',
  'Romance',
  'Adventure',
  'Historical Fiction',
  'Biography',
  'Self-Help',
  'Poetry',
  'Comedy',
  'Drama',
  'Young Adult',
  'Graphic Novel',
  'Cookbook',
  'Science',
  'History',
  'Philosophy',
  'Art',
  'Sports',
  'Business',
];

const AddNewBook = () => {
  return (
    <div className="py-10 md:py-20 px-12">
      <h2 className="text-center font-semibold text-xl md:text-2xl lg:text-3xl mb-12">
        Add a new book here
      </h2>
      <form className="w-1/1 md:w-[85%] lg:w-1/2 mx-auto flex flex-col gap-2">
        <div className="form-control w-full flex-row">
          <label className="label items-start w-1/3">
            <span className="text-base font-semibold ">Book Author:</span>
          </label>
          <div className="w-full">
            <input
              type="text"
              className="input input-bordered w-full focus:outline-none"
              placeholder="Enter author..."
            />
            <p className="text-red-600">errors.author</p>
          </div>
        </div>
        <div className="form-control w-full flex-row">
          <label className="label items-start w-1/3">
            <span className="text-base font-semibold ">Book Title:</span>
          </label>
          <div className="w-full">
            <input
              type="text"
              className="input input-bordered w-full focus:outline-none"
              placeholder="Enter title..."
            />
            <p className="text-red-600">errors.title</p>
          </div>
        </div>
        <div className="form-control w-full flex-row">
          <label className="label items-start w-1/3">
            <span className="text-base font-semibold ">Publication Year:</span>
          </label>
          <div className="w-full">
            <select
              className="select select-bordered focus:outline-none w-full"
              name="genre"
            >
              <option value="">Publication Year</option>
              {genres &&
                genres.length > 0 &&
                genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
            </select>
            <p className="text-red-600">errors.publicationYear</p>
          </div>
        </div>
        <div className="form-control w-full flex-row">
          <label className="label items-start w-1/3">
            <span className="text-base font-semibold ">Publication Date:</span>
          </label>
          <div className="w-full">
            <input
              type="date"
              className="input input-bordered w-full focus:outline-none"
            />
            <p className="text-red-600 mt-3">errors.publicationDate</p>
          </div>
        </div>
        <div className="form-control w-full flex-row">
          <label className="label items-start w-1/3">
            <span className="text-base font-semibold ">Cover Image:</span>
          </label>
          <div className="w-full">
            <input
              type="file"
              className="file-input input-bordered w-full focus:outline-none"
            />
            <p className="text-red-600 mt-3">errors.cover</p>
          </div>
        </div>
        <button className="w-full btn btn-neutral mt-2" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddNewBook;
