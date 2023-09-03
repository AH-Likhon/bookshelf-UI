import { IBook } from '@/Constants/constants';
import { useAppSelector } from '@/Redux/hooks';

const CurrentlyReading = () => {
  const { readingList } = useAppSelector((state) => state.books);

  return (
    <div className="py-10 md:py-20 px-12">
      <h2 className="text-center font-semibold text-xl md:text-2xl lg:text-3xl mb-12">
        Currently Reading
      </h2>

      {readingList && readingList.length > 0 && (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {readingList &&
            readingList.length > 0 &&
            readingList?.map((book: IBook) => (
              <div className="card card-side bg-base-100 shadow-xl">
                <figure className="w-1/2 h-full">
                  <img
                    className="h-full object-fill"
                    src="http://dummyimage.com/212x100.png/dddddd/000000"
                    alt={book.title}
                  />
                </figure>
                <div className="w-1/2 card-body px-6 py-10">
                  {/* <h2 className="card-title">{book.title}</h2> */}
                  <p className="break-words font-semibold text-base md:text-lg">
                    {book?.title}
                  </p>
                  <p>
                    <span className="font-semibold">Author:</span> {book.author}
                  </p>
                  <p>
                    <span className="font-semibold">Genre:</span> {book.genre}
                  </p>
                  <p>
                    <span className="font-semibold">Publication Date:</span>{' '}
                    {book.publicationDate}
                  </p>
                  <span className="font-semibold">
                    Reading Status:
                    <small className="text-red-500"> {book.status}</small>
                  </span>
                  <select>
                    <option>Change the reading status</option>
                    <option value="reading-completed">Completed</option>
                  </select>
                </div>
              </div>
            ))}
        </div>
      )}

      {readingList && readingList.length === 0 && (
        <div className="w-1/1 md:w-2/3 lg:w-3/4 h-screen">
          <h2 className="text-center font-semibold text-xl md:text-2xl lg:text-3xl">
            Your readingL list is empty❗😞
          </h2>
        </div>
      )}
    </div>
  );
};

export default CurrentlyReading;
