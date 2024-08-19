import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect, useState } from "react";
import { fetchData } from "./redux/store";

function App() {
  const [todos, setTodos] = useState([]);
  const { data, loading } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    setTodos(data);
  }, [data]);

  console.log(data);

  return (
    <>
      {loading ? (
        <h6>Loading...</h6>
      ) : (
        todos.map((item) => (
          <h6 key={item.id}>{JSON.stringify(item)}</h6>
        ))
      )}
    </>
  );
}

export default App;
