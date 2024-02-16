// "use client";

// async function getData() {
//   const req = await fetch("http://localhost:4000/data");
//   const data = await req.json();
//   console.log(data);
//   return data;
// }
// getData();
export default function Home() {
  return (
    <main className="max-container">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Invoices</h1>
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
      </div>
    </main>
  );
}
