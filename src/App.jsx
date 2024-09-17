import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Todo from "./Todo";
import CreateTodo from "./pages/CreateTodo";
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";
import SinglePost from "./pages/SinglePost";
import { Feedback } from "./pages/Feedback";

const todoRouter = () => {
  return (
    <>
      <Router>
        <div className="w-full">
          <ul className="max-w-7xl mx-auto flex items-center gap-x-6">
            <li>
              <Link
                to="/"
                title="Home"
                className="py-4 block px-3 hover:underline transition ease-in-out duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/posts"
                title="Add"
                className="py-4 block px-3 hover:underline transition ease-in-out duration-200"
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                to="/posts/create"
                title="Add"
                className="py-4 block px-3 hover:underline transition ease-in-out duration-200"
              >
                New Todo
              </Link>
            </li>
            <li>
              <Link
                to="/feedback"
                title="Add"
                className="py-4 block px-3 hover:underline transition ease-in-out duration-200"
              >
              Feedback
              </Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/posts">
            <Route index element={<Posts />} />
            <Route path=":id" element={<SinglePost />} />
            <Route path="create" element={<CreateTodo />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/feedback" element={<Feedback/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default todoRouter;
