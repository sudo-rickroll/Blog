const _ = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
    const reducer = (sum, item) => sum + item.likes
  
    return blogs.reduce(reducer, 0)
  }

  const favouriteBlog = (blogs) => {
      const reducer = (object, item) => object.likes && object.likes > item.likes ? object : item 

      return blogs.reduce(reducer, {})
  }

  const mostBlogs = (blogs) => {

    const blogArray = blogs.map(blog => blog.author)

    const { flow, countBy, entries, partialRight, maxBy, last } = _
    const mostBlogTuple = flow(
      countBy,
      entries,
      partialRight(maxBy, last)
    )(blogArray)

    const mostBlogsObject = {
      author: mostBlogTuple[0],
      blogs: mostBlogTuple[1]
    }
    return mostBlogsObject
  }
module.exports = {
    dummy,
    totalLikes,
    favouriteBlog,
    mostBlogs
}