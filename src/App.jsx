import { Plus, Sun, Moon, Trash2 } from "lucide-react";
import Todo from "./components/Todo";
import { useState, useEffect, Activity } from "react";
import AddTodo from "./features/addTodo";
import Filter from "./features/Filter";
import Search from "./features/search";
import DeleteCompleted from "./features/deleteCompleted";
import TodoSummary from "./components/TodoSummary";
const App = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [selectOptionValue, setSelectOptionValue] = useState("-1");
  const [searchInputValue, setsearchInputValue] = useState("");
  const [isDeleteCompletedOpen, setIsDeleteCompletedOpen] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const showTodosTerm =
    selectOptionValue === "-1"
      ? todos.filter((todo) =>
          todo.title.includes(searchInputValue.toLowerCase()),
        )
      : todos.filter(
          (todo) =>
            todo.isDone === (selectOptionValue === "true") &&
            todo.title.includes(searchInputValue.toLowerCase()),
        );
  const todosLength = todos.length;
  const activeTodosLength = todos.filter((todo) => !todo.isDone).length;
  const handleAddNewTodo = (newTodo) => {
    setTodos((prev) => [...prev, newTodo]);
    setIsAddModalOpen(false);
    setSelectOptionValue("-1");
  };
  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id));
  };
  const handleDoTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: true };
        }
        return todo;
      }),
    );
  };
  const handleDeleteCompletedTodos = () => {
    setTodos((prev) => prev.filter((todo) => !todo.isDone));
    setIsDeleteCompletedOpen(false);
  };
  return (
    <>
      <header className="dark:bg-gray-950 dark:text-gray-100 flex justify-center py-10 bg-gray-100 transition-all duration-200 max-sm:px-1">
        <div className="flex justify-between py-5 px-6 w-200 rounded-xl shadow-2xl dark:bg-gray-900 max-sm:px-2">
          <h3 className="font-semibold text-2xl">My Todos</h3>
          <button
            className="bg-black px-2 py-0.5 dark:bg-white text-white font-semibold rounded-lg"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Moon color="#000" /> : <Sun />}
          </button>
        </div>
      </header>
      <main className="w-full min-h-screen flex flex-col items-center overflow-x-hidden py-40 gap-y-12 max-sm:gap-y-5 bg-gray-100 dark:bg-gray-950 dark:text-gray-50 text-gray-950 transition-all duration-200 max-sm:text-sm max-sm:py-20">
        <div className="flex justify-between w-212 items-center max-lg:flex-col max-lg:space-y-4">
          <div className="flex gap-x-3 max-sm:gap-x-1.5">
            <Filter
              value={selectOptionValue}
              change={(e) => setSelectOptionValue(e.target.value)}
            />
            <Search
              value={searchInputValue}
              change={(e) => setsearchInputValue(e.target.value)}
            />
          </div>
          <div className="*:text-white *:font-semibold *:rounded-lg flex gap-x-1 max-lg:gap-x-4 max-sm:gap-x-1.5">
            <button
              className="bg-red-600 flex items-center gap-x-1 py-1 px-4 max-sm:px-2 disabled:opacity-60 disabled:text-gray-500 disabled:bg-gray-300 transition-all duration-300 shadow-xl disabled:cursor-not-allowed"
              disabled={todos.filter((todo) => todo.isDone).length === 0}
              onClick={() => setIsDeleteCompletedOpen(true)}
            >
              Delete Completed Todos <Trash2 color="#fff" size={18} />
            </button>
            <button
              className="bg-blue-600 flex items-center gap-x-1.5 py-1 px-6 max-sm:px-3"
              onClick={() => setIsAddModalOpen(true)}
            >
              Add Todo <Plus />
            </button>
          </div>
        </div>
        <TodoSummary
          todosLength={todosLength}
          activeTodosLength={activeTodosLength}
        />
        <div className="space-y-3">
          {showTodosTerm.length ? (
            showTodosTerm.map((todo) => {
              return (
                <Todo
                  {...todo}
                  onDelete={handleDeleteTodo}
                  onDone={handleDoTodo}
                  key={todo.id}
                />
              );
            })
          ) : (
            <h4 className="mt-80 font-semibold text-xl max-sm:mt-20">
              There are no todos here yet!
            </h4>
          )}
        </div>
      </main>
      <Activity mode={isAddModalOpen ? "visible" : "hidden"}>
        <AddTodo
          closeModal={() => setIsAddModalOpen(false)}
          addTodo={handleAddNewTodo}
        />
      </Activity>
      <Activity mode={isDeleteCompletedOpen ? "visible" : "hidden"}>
        <DeleteCompleted
          deleteAll={handleDeleteCompletedTodos}
          closeModal={() => setIsDeleteCompletedOpen(false)}
        />
      </Activity>
    </>
  );
};
export default App;
