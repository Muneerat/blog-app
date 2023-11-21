import { useState, useEffect } from "react";
import "./App.css";
import { getItems, addItem, removeItem } from "./utils/local-storage.js";

function App(editTod0, todo) {
  const [todos, setTodos] = useState(todo.todo);
  //   const [description, setDescription] = useState("");
  //   const [descError, setDescError] = useState("");

  const validate = () => {
    let error = "";

    if (description === "") {
      error = "The description field is required";
      setDescError(error);
    } else if (description.trim().length < 5) {
      error = "Please description must not be less than 5 characters";
      setDescError(error);
    } else {
      setDescError("");
    }
  };

  useEffect(() => {
    validate();
  }, [description]);

  // handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (descError) {
      return;
    }

    addItem(description);
    setDescription("");

    setTodos(getItems());
  };
  const deleteItem = (item) => {
    removeItem(item);
    setTodos(getItems());
  };

  return (
    <>
      <div className="bg-[#00e5ff] w-full min-h-screen">
        <h1 className="py-10 font-bold text-center text-3xl">ToDo</h1>
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white rounded-md shadow-md p-4"
        >
          <div className=" pt-8">
            <label className="my-2">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className=" rounded-md p-2 w-full ring-1 ring-[#00e5ff] focus:ring-[#00e5ff] hover:ring-[#00e5ff]"
              placeholder="Update the description"
            />
            {descError && <small className="text-[red]"> {descError}</small>}

            <button
              className="bg-[#2f5c76] my-3 py-2 px-6 text-[#ffffff] rounded-md flex justify-center"
              type="submit"
            >
              Update Todo
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
