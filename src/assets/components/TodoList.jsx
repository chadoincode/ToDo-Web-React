import Todo from "./Todo";

const TodoContainer = ({ todos, changeTodo, deleteTodo }) => {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo
              todo={todo}
              onEditTodo={changeTodo}
              onDeleteTodo={deleteTodo(todo.id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoContainer;
