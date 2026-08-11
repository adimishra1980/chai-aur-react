import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen bg-gray-900 text-white shrink-0">
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
