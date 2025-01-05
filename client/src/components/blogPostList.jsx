export default function BlogPostList({ posts }) {
    return (
      <div className="blogList">
        {posts.map((post) => (
          <div key={post.id} className="blogPost">
            <div className="blogPostImage">
                <img
                src={post.imageUrl}
                alt={post.title}
                width={200}
                height={200}
                objectFit="cover"
                />
            </div>
            <div className="blogPostContent">
                <h2 className="blogTitle">{post.title}</h2>
                <p className="blogMeta">
                    By {post.author} | Published on {post.date}
                </p>
                <p className="blogExcerpt">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  