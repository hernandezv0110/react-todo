import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map(function (item) {
        return (
          <TodoListItem
            id={String(item.id)}
            todo={item}
            onRemoveTodo={onRemoveTodo}
            key={item.id}
          />
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
};

export default TodoList;
