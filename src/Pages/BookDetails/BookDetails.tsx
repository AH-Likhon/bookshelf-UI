import Card from '@/Components/Card';
import { Link } from 'react-router-dom';

const BookDetails = () => {
  return (
    <div className="py-10 md:py-20 px-12">
      {/* <div className="w-1/2 mx-auto">
        <Card />
      </div> */}
      <div className="hero">
        <div className="hero-content items-start flex-col lg:flex-row">
          <img
            src="https://bookpresstheme.com/multiauthor/wp-content/uploads/2022/05/book-mockup13-600x795.png"
            className="w-96 rounded-lg shadow-2xl mr-16 object-fill"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-3xl font-bold">Title: </h1>
            <h1 className="text-lg lg:text-xl">Author: </h1>
            <h1 className="text-lg lg:text-xl">Genre: </h1>
            <h1 className="text-lg lg:text-xl">Published Date:</h1>
            <div className="w-full flex gap-2">
              <Link to={`/edit`}>
                <button className="w-full btn btn-primary">Edit</button>
              </Link>
              <button className="w-1/2 btn btn-warning">Delete</button>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-12 w-1/2 mx-auto">
        <div className="input-group mb-4">
          <input
            type="text"
            placeholder="Add a comment..."
            className="input input-bordered w-full focus:outline-none"
          />
          <button className="btn btn-square btn-neutral">Add</button>
        </div>

        <h2 className="text-2xl font-bold">User Reviews</h2>
        <div className="flex gap-4 mt-2">
          <h2>User: </h2>
          <h2>comment: </h2>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
