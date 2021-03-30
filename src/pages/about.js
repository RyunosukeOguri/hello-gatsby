import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import * as aboutStyles from "./about.module.scss"

const AboutPage = () => (
  <Layout>
    <SEO title="Page about" />
    <div className={aboutStyles.overview}>
      <h1>Hi from the about page</h1>
      <p>Welcome to about</p>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
