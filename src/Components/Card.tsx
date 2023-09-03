import { IBook } from '@/Constants/constants';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '@/Redux/hooks';
import { setWishlist } from '@/Redux/features/books/bookSlice';
import { useGetSingleBookQuery } from '@/Redux/api/apiSlice';
import { toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';

const Card = ({ book }: { book: IBook }) => {
  // console.log(book?.image);
  const dispatch = useAppDispatch();
  const { data: bookData, refetch } = useGetSingleBookQuery(book._id, {
    refetchOnMountOrArgChange: true,
  });

  const { wishlist, isError, error, isLoading } = useAppSelector(
    (state) => state.books
  );

  const [hasErrorDisplayed, setHasErrorDisplayed] = useState(false);

  const handleWishlist = () => {
    if (bookData?.data) {
      dispatch(setWishlist(bookData.data));
      setHasErrorDisplayed(true);
    }

    if (hasErrorDisplayed) {
      toast.error('The book already exists in the wishlist❗');
    }
  };

  // const { books: updatedBooks } = useAppSelector((state) => state.books);

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
        <div className="card-actions items-center justify-between">
          <div className="tooltip tooltip-right" data-tip="Wishlist">
            <AiOutlineHeart
              className="cursor-pointer"
              onClick={handleWishlist}
            />
          </div>
          <Link to={`/details/${book?._id}`}>
            <button className="btn btn-neutral">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
