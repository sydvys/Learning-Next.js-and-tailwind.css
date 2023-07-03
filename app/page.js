import Help from "./Help/page";

export default function Home() {
  return (
    <main className="">
      <div className="bg-gray-100 h-32 flex justify-center items-center mx-auto w-2/5 xl:w-1/2 rounded-md">
        <form>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-4 pl-10 text-sm outline-none"
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>
    </main>
  );
}
