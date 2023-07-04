"use client";

export default function Home() {
  return (
    <main className="h-full ">
      <div className="bg-gray-100 h-32 flex flex-col justify-center items-center mx-auto w-2/5 xl:w-1/2 rounded-[3px] ">
        <div className=" p-3 flex items-start relative top-[-16px] w-[100%] ">
          <div className="relative flex items-start h-9 rounded-[3px] bg-white overflow-hidden w-[100%] border-[1px] border-gray-300">
            <div className="grid place-items-start h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute top-1 left-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 placeholder:text-gray-500 ["
              type="text"
              id="search"
              placeholder="Search"
            />

            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center gap-x-1.5  pr-3 py-2 text-sm text-gray-400"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                
                  <svg
                    className="-mr-1 h-5 w-5 text-[#ff5f53]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>EN</span>
                </button>
              </div>

      
              <div
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    PY
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    AZ
                  </a>
                 
                 
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="w-[100%] flex px-2 relative top-[-11px]">
          <button className="bg-[#ff5f53] text-white py-1 sm:px-4 rounded-l-[3px] w-[100%]">
            Word-list
          </button>
          <button className="bg-[#475a95] text-white py-1 sm:px-6 rounded-r-[3px] w-[100%]">
            Entries
          </button>
        </div>
      </div>
    </main>
  );
}
