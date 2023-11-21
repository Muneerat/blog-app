import axios from "axios";
import { useState, useEffect } from "react";
import Layout from "../layout";
import { useParams, useNavigate } from "react-router-dom";

const SinglePost = () => {
  const [post, setPost] = useState({});
  let navigate = useNavigate();
  let params = useParams();

  const getPost = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((error) => {
        if (error.response?.status == 404) {
          return navigate("*");
        }
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto bg-white p-3">
        <h1 className="text-4xl capitalize text-gray-800 my-10">
          {post.title}
        </h1>

        <div>{post.body}</div>
      </div>
    </Layout>
  );
};
export default SinglePost;
