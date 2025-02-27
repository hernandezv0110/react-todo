import { Link } from "react-router-dom";
import { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <h1 style={{ fontSize: "5rem" }}>Welcome to Your Todo List App</h1>
      <Link to="/todo">
        <button
          style={{
            fontSize: "1.5rem",
            padding: "10px 20px",
            backgroundColor: "rgb(227, 188, 137)",
            color: "black",
          }}
        >
          Go to Todo List
        </button>
      </Link>
    </Fragment>
  );
}

export default Home;
