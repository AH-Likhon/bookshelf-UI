const Login = () => {
  return (
    <div className="py-10 md:py-20 px-12 h-full lg:h-[81vh]">
      <h2 className="text-center font-semibold text-xl md:text-2xl lg:text-3xl mb-12">
        Login
      </h2>
      <form className="w-1/1 md:w-2/3 lg:w-1/3 mx-auto flex flex-col gap-2">
        <div className="form-control w-full">
          <input
            type="email"
            className="input input-bordered w-full focus:outline-none"
          />
          <p className="text-red-600">errors.email</p>
        </div>
        <div className="form-control w-full">
          <input
            type="password"
            className="input input-bordered w-full focus:outline-none"
          />
          <p className="text-red-600 mt-3">errors.password</p>
        </div>
        <button className="w-full btn btn-neutral" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
