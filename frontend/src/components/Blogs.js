import Blog from "./Blog"

const Blogs = ({blogs, clear, user, newBlog, handleSubmit, style}) => {
    const createBlog = (item, value) => {
        const newObject = {}
        newObject[item] = value
        newBlog.setNewBlog({...newBlog.newBlog, ...newObject})
    }
    if (blogs.length){
        return (
            <div>
                <h2>blogs</h2>
                <p>{user} has logged in <button onClick={clear}>logout</button></p>
                <h2>create new</h2>
                <form onSubmit={event => handleSubmit(event)}>
                    <div style={style}>title <input type='text' onChange={event => {createBlog('title', event.target.value)}}></input></div>
                    <div style={style}>author <input type='text' onChange={event => {createBlog('author', event.target.value)}}></input></div>
                    <div style={style}>url <input type='text' onChange={event => {createBlog('url', event.target.value)}}></input></div>
                    <div style={style}><button type='submit'>create</button></div>
                </form>
                {blogs.map(blog =>
                <Blog key={blog.id} blog={blog} />
                )}
            </div>
        )
    }
    return null    
}

export default Blogs
