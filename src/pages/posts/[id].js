import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
// import * as postsDetailStyles from "./detail.module.scss"
// import { samplePosts } from "../../utils/sample-posts"

const PostsDetailPage = () => (
  <Layout>
    <SEO title="Page Posts Detail" />
    <h1>Hi from the posts page</h1>
    <div>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PostsDetailPage
