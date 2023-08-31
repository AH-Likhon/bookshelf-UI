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
