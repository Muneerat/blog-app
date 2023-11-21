import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../layout";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validate = () => {
    let error = "";

    if (title == "") {
      error = "The field is required";
      setError(error);
    } else if (title.trim().length < 5) {
      error = "The field must be at least 5 characters long.";
      setError(error);
    } else {
      setError(error);
    }
    return error.length > 0 ? false : true;
  };
  useEffect(() => {
    validate();
  }, [title]);

  const submit = (e) => {
    e.preventDefault();

    if (error) {
      return;
    }
    setSubmitting(true);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body,
        userId: 1000,
      })
      .then((res) => {
        setTitle("");
        setBody("");
        navigate("/");
        console.log(res.data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setSubmitting(false);
      });
  };
  return (
    <Layout>
      <h1 className="text-center my-10">Add Todo</h1>
      <main>
        <form className="max-w-2xl mx-auto space-y-8" onSubmit={submit}>
          <div>
            <label htmlFor="title">Enter Title </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              placeholder="Enter Title"
              onChange={(e) => setTitle(e.target.value)}
              className="block w-full py-2 px-4 shadow-sm"
              required
            />
            {error && (
              <small className="block mt-1 text-sm text-red-400">{error}</small>
            )}
          </div>
          <div>
            <label htmlFor="body">Enter Body</label>
            <textarea
              id="body"
              className="w-full block py-2 px-4 shadow-sm"
              placeholder="Enter post content"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows="7"
            ></textarea>
            {error && (
              <small className="block mt-1 text-sm text-red-400">{error}</small>
            )}
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-100 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-80 transition ease-in-out duration-150"
            disabled={submitting}
          >
            {submitting && (
              <div className="w-5 h-5 rounded-full animate-spin border-t border-r border-blue-950"></div>
            )}
            {!submitting && <span>Submit</span>}
          </button>
        </form>
      </main>
    </Layout>
  );
};

export default CreateTodo;
