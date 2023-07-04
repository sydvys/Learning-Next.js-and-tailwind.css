import Help from "./Help/page";

export default function Home() {
  return (
    <main className="h-full ">
      <div className="bg-gray-100 h-28 flex flex-col justify-center items-center mx-auto w-2/5 xl:w-1/2 rounded-[3px] ">
        <div className=" p-3 flex items-start relative top-[-10px] w-[100%] ">
          <div className="relative flex items-start h-9 rounded-[3px] bg-white overflow-hidden w-[100%] border-[1px] border-gray-300">
            <div className="grid place-items-start h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2  "
              type="text"
              id="search"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="">
          <button className="bg-[#ff5f53] text-white py-1 px-4 rounded-l-[3px]">Word-list</button>
          <button className="bg-[#475a95] text-white py-1 px-6 rounded-r-[3px]">Entries</button>
        </div>
      </div>
    </main>
  );
}
