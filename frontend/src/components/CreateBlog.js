const CreateBlog = ({createBlogObject,addBlog, style}) => {
    return (
        <div>
            <h2>create new</h2>
              <form onSubmit={event => addBlog(event)}>
                <div style={style}>title <input type='text' onChange={event => {createBlogObject('title', event.target.value)}}></input></div>
                <div style={style}>author <input type='text' onChange={event => {createBlogObject('author', event.target.value)}}></input></div>
                <div style={style}>url <input type='text' onChange={event => {createBlogObject('url', event.target.value)}}></input></div>
                <div style={style}><button type='submit'>create</button></div>
              </form>
        </div>
    )
}

export default CreateBlog