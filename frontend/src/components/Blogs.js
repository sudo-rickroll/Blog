import Blog from "./Blog"

const Blogs = ({blogs, clear, user}) => {
    if (blogs.length){
        return (
            <div>
                <h2>blogs</h2>
                <p>{user} has logged in <button onClick={clear}>logout</button></p>
                {blogs.map(blog =>
                <Blog key={blog.id} blog={blog} />
                )}
            </div>
        )
    }
    return null    
}

export default Blogs
