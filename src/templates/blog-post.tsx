import { MarkdownRemark, Query } from '../utils/graphql'
import { PageRendererProps, graphql } from 'gatsby'

import BlogPost from '../components/BlogPost'
import React from 'react'

type Props = PageRendererProps & {
  data: Query
  // Created by createPage in gatsby-node.js
  pageContext: {
    slug: string
    previous: MarkdownRemark
    next: MarkdownRemark
  }
}

export default function Docs({ data }: Props) {
  return <BlogPost post={data.markdownRemark} />
}

export const pageQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        githubLink
      }
      frontmatter {
        author
        date(formatString: "MMMM DD, YYYY")
        description
        title
      }
    }
  }
`
