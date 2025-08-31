import { useNavigate, useRouteError } from "react-router-dom";

export function ErrorPages() {
  const error = useRouteError();
  const Navigate = useNavigate();


  const  handleback = () => {
    Navigate(-1)
  }

  if (error.status === 404) {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
        <div id="error-text" className="max-w-lg text-center">
          <figure>
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
              className="mx-auto w-80"
            />
          </figure>
          <div className="mt-4">
            <p className="text-lg font-medium text-gray-700">
              The page you were looking for could not be found
            </p>
            <p className="text-sm text-gray-500">... Back to previous page</p>
          </div>
        </div>

        <button className="mt-6 rounded bg-blue-500 px-6 py-2 font-bold text-white shadow hover:bg-blue-700"
        onClick={handleback}>
          Go Back
        </button>
      </section>
    );
  }
}


