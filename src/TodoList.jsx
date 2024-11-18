const toDoList = [
  {
    id: 1,
    title: "Complete Lesson 1.1",
  },
  {
    id: 2,
    title: "Go to the gym",
  },
  {
    id: 3,
    title: "Meal prep for the week",
  },
];

function TodoList() {
  return (
    <ul>
      {toDoList.map(function (item) {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
}

export default TodoList;
