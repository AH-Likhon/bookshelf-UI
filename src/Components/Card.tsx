import { IBook } from '@/Types/types';
import { Link } from 'react-router-dom';

const Card = (props: { book: IBook }) => {
  const { book } = props;

  console.log(book?.image);

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="w-1/2 h-full">
        <img
          src={
            'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-8.jpg'
          }
          alt={book?.title}
        />
      </figure>

      <div className="w-1/2 card-body py-3 px-[10px]">
        {/* <h2 className="card-title break-words	">{book?.title}</h2> */}
        <p className="break-words font-semibold text-base md:text-lg">
          {book?.title}
        </p>
        <span>Author: {book.author}</span>
        <span>Genre: {book.genre}</span>
        <p>Publication Date: {book.publicationDate}</p>
        <div className="card-actions justify-end">
          <Link to="/details">
            <button className="btn btn-neutral">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
