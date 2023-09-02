import {
  useGetSingleBookQuery,
  useRefreshTokenMutation,
} from '@/Redux/api/apiSlice';
import { useAppDispatch } from '@/Redux/hooks';
import { Link, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import refreshAccessToken from '@/Shared/reFreshAccess';

const BookDetails = () => {
  const { id } = useParams();

  const { data, isLoading, refetch } = useGetSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(true); // Use a state variable
  const refreshToken = Cookies.get('refreshToken');
  const [refresh] = useRefreshTokenMutation();

  useEffect(() => {
    refreshAccessToken(refreshToken, dispatch, refresh, setRefreshing);
    if (!refreshing) {
      refetch();
    }
  }, [dispatch, refresh, refreshToken, refetch, refreshing]);

  // console.log('data:::', data?.data);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="py-10 md:py-20 px-12">
      <div className="hero">
        <div className="hero-content w-1/1 md:w-[55%] justify-between items-start flex-col lg:flex-row">
          <img
            src={
              'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-8.jpg'
            }
            className="w-96 h-96 rounded-lg shadow-2xl  object-fill"
          />
          <div className="flex flex-col gap-2">
            <p className="text-2xl md:text-3xl font-bold">
              Title: {data?.data.title}
            </p>
            <p className="text-lg lg:text-xl">Author: {data?.data.author}</p>
            <p className="text-lg lg:text-xl">Genre: {data?.data.genre}</p>
            <p className="text-lg lg:text-xl">
              Published: {data?.data.publicationDate}
            </p>
            <div className="w-full flex gap-2">
              <Link to={`/edit/${id}`}>
                <button className="w-full btn btn-neutral">Edit</button>
              </Link>
              <button className="w-1/2 btn btn-neutral">Delete</button>
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
