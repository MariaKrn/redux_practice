import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodoComplete, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            toggleTodoComplete={toggleTodoComplete}
            removeTodo={removeTodo}
            {...todo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
