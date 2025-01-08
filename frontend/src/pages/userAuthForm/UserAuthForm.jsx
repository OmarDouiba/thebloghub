import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { InputBox } from '../../components';
import { AnimationWrapper } from '../../Animation';

export function UserAuthForm({ type }) {
  return (
    <AnimationWrapper keyValue={type}>
      <section className="bg-gray-50  dark:bg-gray-800 flex items-center justify-center min-h-screen">
        <div className=" bg-white dark:bg-gray-900 p-10 rounded-lg shadow-lg w-full max-w-md">
          <div>
            <div className="text-center mb-6">
              <h1 className="text-2xl font-semibold text-gra-800 dark:text-gray-100">
                {type === 'sign-up' ? 'Join Us Today' : 'Welcome Back'}
              </h1>
            </div>
            {/* Google Button */}
            <button
              type="button"
              className="flex items-center justify-center w-full text-gary-900 dark:text-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded-lg py-2.5 px-4 mb-6 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 48 48"
                aria-hidden="true"
                className="w-6 h-5 me-2 -ms-1"
                fill="none"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>

              <span>
                {' '}
                {type === 'sign-up'
                  ? 'Sign Up with Google'
                  : 'Log In with Google'}
              </span>
            </button>
            <div className="flex justify-between items-center text-center text-gray-500 dark:text-gray-200">
              <hr className="w-1/2 mr-2" />
              Or
              <hr className="w-1/2 ml-2" />
            </div>
            {/* Form */}
            <form className="mt-4">
              {type === 'sign-up' ? (
                <InputBox name={'fullname'} type={'text'} value={'Full Name'} />
              ) : (
                ''
              )}
              <InputBox name={'email'} type={'email'} value={'Email'} />
              <InputBox
                name={'password'}
                type={'password'}
                value={'Password'}
              />
            </form>
            <AnimationWrapper btn={true}>
              <button
                type="button"
                className="flex items-center justify-center w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {type === 'sign-up'
                  ? type.replace('-', ' ')
                  : type.replace('-', ' ')}
              </button>
            </AnimationWrapper>
            <div className="text-center dark:text-white mt-2">
              {type === 'sign-in' ? (
                <p>
                  Don’t have an account yet?{' '}
                  <Link
                    to="/signup"
                    className="text-blue-700 dark:text-blue-500"
                  >
                    Signup now
                  </Link>
                </p>
              ) : (
                <p>
                  Already have an account?{' '}
                  <Link
                    to="/signin"
                    className="text-blue-700 dark:text-blue-500 "
                  >
                    Login now
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </AnimationWrapper>
  );
}

UserAuthForm.propTypes = {
  type: PropTypes.oneOf(['sign-up', 'sign-in']).isRequired,
};
