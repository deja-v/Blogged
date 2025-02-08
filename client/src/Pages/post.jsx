import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function formatDateTime(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${day}-${month}-${year} ${hours}:${minutes} ${amPm}`;
}

export default function Post() {
  const params = useParams();
  const [post, setPost] = useState({});
  const userName = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).name
    : "";
  useEffect(() => {
    async function getPost() {
      const response = await fetch(`http://localhost:3000/posts/${params.id}`);
      const data = await response.json();

      setPost(data);
    }
    getPost();
  }, []);
  if (!post) {
    return <h1>Post not found</h1>;
  }

  async function onDelete(id) {
    const token = JSON.parse(localStorage.getItem("user")).user;
    // const response = await fetch("http://localhost:3000/delete", {
    //   method: "DELETE",
    //   body: JSON.stringify({
    //     postId: id,
    //   }),
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // });
    const response = await fetch("https://blogged-ujz4.onrender.com/delete", {
      method: "DELETE",
      body: JSON.stringify({
        postId: id,
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log(response);
    window.location.href = "http://localhost:5173/myblogs";
  }

  return (
    <div className="pageContainer">
      <main className="mainContent">
        <div className="container">
          <article className="blogPostFull">
            <Link to="/" className="back-link">
              &#x25c0; Back to Home
            </Link>
            <h1 className="blogPostTitle">{post.title}</h1>
            <div className="postHead">
              <p className="blogPostMeta">
                By {post.userName} | Published on{" "}
                {formatDateTime(post.createdOn)}
              </p>
              {userName && userName === post.userName && (
                <button
                  onClick={() => onDelete(params.id)}
                  className="deleteButton"
                >
                  Delete
                </button>
              )}
            </div>
            <div className="blogPostImageFull">
              <img
                src={post.image}
                alt={post.title}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="blogPostContent">
              {post.body &&
                post.body
                  .split("\n")
                  .map(
                    (paragraph, index) =>
                      paragraph.trim() && <p key={index}>{paragraph}</p>
                  )}
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
