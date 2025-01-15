import BlogPostList from "./components/blogPostList"
import { useEffect,useState } from "react"
// const samplePosts = [
//     { id: 1, title: "Getting Started with React", author: "John Doe", date: "2023-05-01", excerpt: "Learn the basics of React and start building your first app.", imageUrl: "/placeholder.svg?height=200&width=200" },
//     { id: 2, title: "Advanced Next.js Techniques", author: "Jane Smith", date: "2023-05-05", excerpt: "Explore advanced features and optimizations in Next.js.", imageUrl: "/placeholder.svg?height=200&width=200" },
//     { id: 3, title: "The Power of CSS", author: "Bob Johnson", date: "2023-05-10", excerpt: "Discover how CSS can help organize and style your web applications.", imageUrl: "/placeholder.svg?height=200&width=200" },
//     { id: 4, title: "State Management in React", author: "Alice Brown", date: "2023-05-15", excerpt: "Compare different state management solutions for your React applications.", imageUrl: "/placeholder.svg?height=200&width=200" },
//     { id: 5, title: "Building Responsive Layouts", author: "Charlie Wilson", date: "2023-05-20", excerpt: "Learn techniques for creating layouts that work well on all screen sizes.", imageUrl: "/placeholder.svg?height=200&width=200" },
//     { id: 6, title: "JavaScript ES6+ Features", author: "Diana Martinez", date: "2023-05-25", excerpt: "Explore the modern JavaScript features that can improve your code.", imageUrl: "/placeholder.svg?height=200&width=200" },
//     { id: 7, title: "Accessibility in Web Development", author: "Ethan Hunt", date: "2023-05-30", excerpt: "Understand the importance of accessibility and how to implement it.", imageUrl: "/placeholder.svg?height=200&width=200" },
//     { id: 8, title: "Testing React Applications", author: "Fiona Gallagher", date: "2023-06-04", excerpt: "Learn about different testing strategies for your React projects.", imageUrl: "/placeholder.svg?height=200&width=200" },
//     { id: 9, title: "Optimizing Web Performance", author: "George Chen", date: "2023-06-09", excerpt: "Discover techniques to make your web applications faster and more efficient.", imageUrl: "/placeholder.svg?height=200&width=200" },
//     { id: 10, title: "Introduction to JSX", author: "Hannah Lee", date: "2023-06-14", excerpt: "Get started with JSX and see how it enhances your React development.", imageUrl: "/placeholder.svg?height=200&width=200" },
//     { id: 11, title: "RESTful API Design", author: "Ian Foster", date: "2023-06-19", excerpt: "Learn best practices for designing clean and efficient RESTful APIs.", imageUrl: "/placeholder.svg?height=200&width=200" },
//     { id: 12, title: "CSS Flexbox Layout", author: "Julia Nguyen", date: "2023-06-24", excerpt: "Master the flexible box layout system for responsive designs.", imageUrl: "/placeholder.svg?height=200&width=200" }
//   ]

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  function formatDatesForPosts(posts) {
    return posts.map(post => ({
      ...post,
      formattedCreatedOn: formatDate(post.createdOn),
      formattedCreatedAt: formatDate(post.createdAt),
      formattedUpdatedAt: formatDate(post.updatedAt)
    }));
  }

export default function MainContent(){
    const [samplePosts, setSamplePosts] = useState([])

    useEffect(()=>{
        async function getPosts() {
          const response = await fetch("https://blogged-ujz4.onrender.com/posts")
          const data = await response.json()
          const sortedPosts = [...data].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
          const formattedPosts = formatDatesForPosts(sortedPosts);
          
          setSamplePosts(formattedPosts)
        }
        getPosts();
      },[])

    return (
        <main className="mainContent">
            <div className="container">
            <h1 className="pageTitle">Latest Blog Posts</h1>
            <BlogPostList posts={samplePosts} user={false} />
            </div>
        </main>
    )
}