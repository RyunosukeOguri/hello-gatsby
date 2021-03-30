import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ListItem from "../../components/listItem"
// import * as postsIndexStyles from "./index.module.scss"
import { samplePosts } from "../../utils/sample-posts"

const PostsIndexPage = () => (
  <Layout>
    <SEO title="Page Posts Index" />
    <h1>Hi from the posts page</h1>
    <p>Welcome to posts</p>
    <div>
      <ul>
        {samplePosts.map(item => (
          <li key={item.id}>
            <ListItem data={item} />
          </li>
        ))}
      </ul>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PostsIndexPage
