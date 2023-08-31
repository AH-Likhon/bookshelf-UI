export type Inputs = {
  name: string;
  email: string;
  password: string;
};

export type User = {
  email: string | null;
  name: string | null;
  token: string | null;
};

export type IReview = {
  rating: number;
  reviewText: string;
};

export type IBook = {
  _id: string;
  image: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  seller: string;
  reviews: IReview[];
};
