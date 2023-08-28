import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="py-10 md:py-20 px-12 h-full lg:h-[81vh]">
      <h2 className="text-center font-semibold text-xl md:text-2xl lg:text-3xl mb-12">
        SignUp
      </h2>
      <form className="w-1/1 md:w-2/3 lg:w-1/3 mx-auto flex flex-col gap-2">
        <div className="form-control w-full">
          <input
            type="text"
            className="input input-bordered w-full focus:outline-none"
            placeholder="Enter your name..."
          />
        </div>
        <div className="form-control w-full">
          <input
            type="email"
            className="input input-bordered w-full focus:outline-none"
            placeholder="Enter your email..."
          />
        </div>
        <div className="form-control w-full">
          <input
            type="password"
            className="input input-bordered w-full focus:outline-none"
            placeholder="Enter your password..."
          />
        </div>
        <button className="w-full btn btn-neutral" type="submit">
          Sign Up
        </button>
      </form>
      <p className="text-center font-bold text-base md:text-lg mt-4">
        Already have an account? Please,{' '}
        <Link className="underline" to="/login">
          Login
        </Link>{' '}
        here!
      </p>
    </div>
  );
};

export default SignUp;
