import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="py-10 md:py-20 px-12 h-full lg:h-[81vh]">
      <h2 className="text-center font-semibold text-xl md:text-2xl lg:text-3xl mb-12">
        Login
      </h2>
      <form className="w-1/1 md:w-2/3 lg:w-1/3 mx-auto flex flex-col gap-2">
        <div className="form-control w-full flex-row">
          <label className="label items-start w-1/3">
            <span className="text-base font-semibold ">Email:</span>
          </label>
          <div className="w-full">
            <input
              type="email"
              className="input input-bordered w-full focus:outline-none"
              placeholder="Enter your email..."
            />
            <p className="text-red-600">errors.email</p>
          </div>
        </div>
        <div className="form-control w-full flex-row">
          <label className="label items-start w-1/3">
            <span className="text-base font-semibold ">Password:</span>
          </label>
          <div className="w-full">
            <input
              type="password"
              className="input input-bordered w-full focus:outline-none"
              placeholder="Enter your password"
            />
            <p className="text-red-600 mt-3">errors.password</p>
          </div>
        </div>
        <button className="w-full btn btn-neutral mt-2" type="submit">
          Login
        </button>
      </form>
      <p className="text-center font-bold text-base md:text-lg mt-4">
        New User? Please,{' '}
        <Link className="underline" to="/signup">
          signup
        </Link>{' '}
        first!
      </p>
    </div>
  );
};

export default Login;
