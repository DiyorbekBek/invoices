import { IoAddCircleOutline } from "react-icons/io5";
async function getData(url) {
  const req = await fetch(url);
  const data = await req.json();
  console.log(data);
  return data;
}
export default async function Home() {
  const invoices = await getData("http://localhost:4000/data");
  return (
    <main className="max-container">
      <div className="flex gap-44 py-6">
        <div className="">
          <h1 className="text-4xl font-bold">Invoices</h1>
          <p className="text-sm opacity-75">There are 7 total invoices</p>
        </div>
        <div>
          <select className="select select-primary w-full max-w-xs border-none focus:border-none">
            <option>Filter by status</option>
            <option>Game of Thrones</option>
            <option>Lost</option>
            <option>Breaking Bad</option>
            <option>Walking Dead</option>
          </select>
        </div>
        <div className="">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn btn-primary drawer-button text-xl rounded-full"
              >
                <IoAddCircleOutline />
                New Invoice
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu flex flex-col gap-5 p-4 w-[500px] min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
