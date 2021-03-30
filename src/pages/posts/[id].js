import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
// import * as postsDetailStyles from "./detail.module.scss"
import { samplePosts } from "../../utils/sample-posts"

const PostsDetailPage = ({ params }) => {
  const post = samplePosts.find(data => data.id === Number(params.id))
  return (
    <Layout>
      <SEO title={post.title} />
      <h1>{post.title}</h1>
      <div>author: {post.author}</div>
      <p>{post.body}</p>
      <div>
        <img src={post.thumb} alt="" />
      </div>
      <Link to="/posts/">Go back</Link>
    </Layout>
  )
}

export default PostsDetailPage
