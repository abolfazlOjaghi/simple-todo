const TodoSummary = ({ todosLength, activeTodosLength }) => {
  return (
    <div className="md:w-180 bg-white dark:bg-gray-800 rounded-xl flex justify-between font-semibold px-8 py-2 w-120 max-sm:w-80">
      <p>All todos : {todosLength}</p> <p>Active : {activeTodosLength}</p>{" "}
      <p>Completed : {todosLength - activeTodosLength}</p>
    </div>
  );
};
export default TodoSummary;
