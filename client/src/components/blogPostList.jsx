import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function BlogPostList({ posts }) {
  
  return (
      
      <div className="blogList">
        {posts.map((post) => (
          <div key={post._id}>
          <Link to={`/${post._id}`} style={{textDecoration:"none", color:"black"}}>
          <div className="blogPost">
            
            <div className="blogPostImage">
                <img
                src={post.imageUrl || "https://via.placeholder.com/200"}
                alt={post.title}
                width={200}
                height={200}
                objectfit="cover"
                />
            </div>
            <div className="blogPostContent">
                <h2 className="blogTitle">{post.title}</h2>
                <p className="blogMeta">
                    By {post.userName} | Published on {post.formattedCreatedOn}
                </p>
                <p className="blogExcerpt">{post.heading}</p>
            </div>
          </div>
          </Link>
          </div>
        ))}
      </div>
      
    )
  }
  
  