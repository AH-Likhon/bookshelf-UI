import Card from '@/Components/Card';
import Left from '@/Components/Left';
import { useGetAllBooksQuery } from '@/Redux/api/apiSlice';
import { IBook } from '@/Types/types';

const Books = () => {
  const { data: books, isLoading } = useGetAllBooksQuery({
    refetchOnMountOrArgChange: true,
  });

  return (
    <div className="w-full py-10 md:py-20 px-12 ">
      <h2 className="text-center font-semibold text-xl md:text-2xl lg:text-3xl mb-12">
        All Books
      </h2>
      <div className="flex flex-col md:flex-row gap-12">
        <Left />
        {!isLoading && (
          <div className="w-1/1 md:w-2/3 lg:w-3/4 grid gap-8 grid-cols-1 lg:grid-cols-2">
            {books?.data.map((book: IBook) => (
              <Card key={book._id} book={book} />
            ))}
          </div>
        )}
        {isLoading && (
          <div className="w-1/1 md:w-2/3 lg:w-3/4 h-screen flex items-start justify-center">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
