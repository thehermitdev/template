import { APP_NAME } from "@template/shared";

console.log(import.meta.env.VITE_API_URL);

function App() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-950 text-white">
      <h1 className="text-4xl font-bold text-blue-500">{APP_NAME}</h1>
    </div>
  );
}
export default App;
