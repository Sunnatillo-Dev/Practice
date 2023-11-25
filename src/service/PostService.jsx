import axios from 'axios'

export const PostService = {
  // get all data
  async getAllData() {
    try {
      const result = await axios.get('http://localhost:5000/api/posts')

      return result.data
    } catch (error) {
      throw new Error(error)
    }
  },

  // delete
  async onDelete(id) {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`)
    } catch (e) {
      console.log(e.message)
    }
  },
  // create post
  async createPost({ author, title, content }) {
    try {
      const result = await axios.post('http://localhost:5000/api/posts', {
        author: author,
        title,
        content,
      })
      return result.data
    } catch (error) {
      console.log(error.message)
    }
  },
  // put post
  async putPost(post) {
    try {
      return await axios.put('http://localhost:5000/api/posts', {
        _id: post._id,
        author: post.author,
        title: post.title,
        content: post.content,
      })
    } catch (error) {
      console.log(error)
    }
  },
}
