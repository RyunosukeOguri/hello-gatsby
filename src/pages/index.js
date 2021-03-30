import * as React from "react"
import { Link, graphql } from "gatsby"
import g from "glamorous"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <g.Div display={"flex"} justifyContent={"space-between"}>
        <div>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
        </div>
        <p>
          <Link to="/about/">Go to about</Link> <br />
          <Link to="/posts/">Go to post</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </p>
      </g.Div>
      <div>
        <g.H2 display={"inline-block"} borderBottom={"2px solid"}>
          Markdown Blog List
        </g.H2>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug} css={{ textDecoration: `none` }}>
              <g.H3>
                {node.frontmatter.title}{" "}
                <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
              </g.H3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
