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

  const blogsArray = blogs.map(blog => blog.author)

  const { flow, countBy, entries, partialRight, maxBy, last } = _
  const mostBlogsTuple = flow(
    countBy,
    entries,
    partialRight(maxBy, last)
  )(blogsArray)
  const mostBlogsObject = {
    author: mostBlogsTuple[0],
    blogs: mostBlogsTuple[1]
  }

  return mostBlogsObject
}

const mostLikes = (blogs) => {
  const blogsObject = blogs.reduce((object, item) => {
    object[item.author] = (object[item.author] + item.likes) || item.likes
    return object
  }, {})

  const { flow, countBy, entries, partialRight, maxBy, last } = _
  const mostLikesTuple = flow(
    entries,
    partialRight(maxBy, last)
  )(blogsObject)
  const mostLikesObject = {
    author: mostLikesTuple[0],
    likes: mostLikesTuple[1]
  }
  return mostLikesObject
}

module.exports = {
    dummy,
    totalLikes,
    favouriteBlog,
    mostBlogs,
    mostLikes
}