import React from 'react';

function Error404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-blue-500">404</h1>
        <h2 className="text-3xl font-semibold mt-4 text-gray-800">Something's missing.</h2>
        <p className="mt-4 text-gray-600">
          Sorry, we can't find that page. You'll find lots to explore on the home page.
        </p>
        <div className="mt-8">
          <a 
            href="/" 
            className="inline-block px-8 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}

export default Error404;