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
module.exports = {
    dummy,
    totalLikes,
    favouriteBlog
}