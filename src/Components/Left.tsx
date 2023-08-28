const Left = () => {
  return (
    <div className="w-1/1 md:w-1/3  lg:w-1/4 flex flex-col gap-2">
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered w-full focus:outline-none"
          />
          <button className="btn btn-square btn-neutral">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <select
        className="select select-bordered focus:outline-none w-full"
        name="genre"
      >
        <option value="">All Genres</option>
        <option value="">New</option>
      </select>
      <select
        className="select select-bordered focus:outline-none w-full"
        name="genre"
      >
        <option value="">Publication Year</option>
        <option value="">New</option>
      </select>
    </div>
  );
};

export default Left;
