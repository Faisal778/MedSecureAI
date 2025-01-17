import React from "react";

const Contact = () => {
  return (
    <div className="hero min-h-screen bg-white p-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-[700px]">
          <h1 className="text-5xl font-bold pl-4">Login now!</h1>
          <p className="py-6 pl-4 w-full">
            To Train Your dataset or test Your images,
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
