import { Helmet } from "react-helmet";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register Page</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input type="text" className="grow" placeholder="Email" />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <FaLock />
                  <input
                    type="password"
                    className="grow"
                    placeholder="Password"
                  />
                </label>
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <FaLock />
                  <input
                    type="password"
                    className="grow"
                    placeholder="Confirm Password"
                  />
                </label>
                <label className="label">
                  <Link
                    to={"/dang-nhap"}
                    className="label-text-alt link link-hover"
                  >
                    Have account? Login now
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <Link to={"/"} className="btn btn-primary">
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
