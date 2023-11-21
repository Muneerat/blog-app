import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Layout from "../layout.jsx";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState("");

  const getPosts = () => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  const deletePost = async (id) => {
    setDeleting(id);
    try {
      let response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      console.log(response);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setDeleting("");
    }
  };
  return (
    <Layout>
      <h1 className="text-center text-gray-800 my-10">TODO LIST</h1>
      <main>
        <div className="w-full">
          {/* <Link
            to="/create"
            className="px-4 py-2 rounded-md bg-gray-50 text-gray-700 hover:bg-gray-100 transition ease-in-out duration-200"
          >
            Add Todo
          </Link> */}

          {loading && (
            <div className="flex justify-center m-auto w-16 h-16 border-r border-t rounded-full border-blue-600 animate-spin"></div>
          )}
          {!loading && (
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {posts.map((post, index) => {
                return (
                  <div key={index} className="p-4 rounded-md bg-white">
                    <h3 className="text-gray-800 font-medium text-xl mb-5 capitalize">
                      {post.title}
                    </h3>
                    <p className="leading-7 text-gray-600">
                      {post.body.substring(0, 50) + "..."}
                    </p>
                    <div className="flex justify-end">
                      <Link
                        to={`/posts/${post.id}`}
                        className="text-sm font-normal text-gray-500 hover:underline transition ease-in-out first-line duration-200"
                      >
                        Read More
                      </Link>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="text-sm bg-red-50 text-red-600 px-3 py-2 rounded-md hover:bg-opacity-75 transition ease-in-out duration-150 flex items-center gap-x-2"
                        onClick={() => deletePost(post.id)}
                      >
                        {deleting === post.id && (
                          <div className="w-4 h-4 rounded-full border-t border-r border-red-600 animate-spin"></div>
                        )}
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div></div>
        </div>
      </main>
    </Layout>
  );
};

export default Posts;
