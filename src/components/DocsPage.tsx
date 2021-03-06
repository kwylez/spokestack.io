import { MarkdownRemark, Query } from '../utils/graphql'
import { graphql, useStaticQuery } from 'gatsby'

import DarkModeButton from '../components/DarkModeButton'
import Layout from '../components/Layout'
import React from 'react'
import SEO from '../components/SEO'
import { StickyLink } from '../types'
import StickyNavLayout from '../components/StickyNavLayout'
import { WindowLocation } from '@reach/router'
import difference from 'lodash/difference'
import order from '../../content/docs/nav.json'
import sortBy from 'lodash/sortBy'
import uniqBy from 'lodash/uniqBy'

interface Props {
  location: WindowLocation
  post: MarkdownRemark
  selectFirst?: boolean
}

function checkDups(links: StickyLink[]) {
  const unique = uniqBy(links, (link) => link.navId)
  if (unique.length !== links.length) {
    const diff = difference(links, unique)
    throw new Error(
      `The following navIds are not unique: ${diff
        .map((link) => link.navId)
        .join(', ')}.`
    )
  }
}

function orderLinks(links: StickyLink[]) {
  checkDups(links)
  return sortBy(links, (link) => {
    const index = order.indexOf(link.navId)
    if (index === -1) {
      throw new Error(
        `Docs page with title ${link.title} has navId ${link.navId}, which does not exist in nav.json.`
      )
    }
    return index
  })
}

export default function DocsPage({ location, post, selectFirst }: Props) {
  const links: StickyLink[] = []
  const data = useStaticQuery<Query>(docsPageQuery)
  const posts = data.allMarkdownRemark.edges
  posts.forEach(({ node }) => {
    links.push({
      href: node.fields.slug,
      section: node.fields.folder,
      title: node.frontmatter.title,
      navId: node.frontmatter.navId
    })
  })
  const orderedLinks = orderLinks(links)
  if (selectFirst) {
    orderedLinks[0].forceSelect = true
  }

  return (
    <Layout location={location}>
      <SEO
        title="Voice App Development Documentation | Spokestack"
        description={
          'Explore our Developer Docs to learn about Spokestack’s TTS technology and configuration options. All of our documentation is also available on GitHub.' +
          post.frontmatter.description
            ? ` ${post.frontmatter.description}`
            : ''
        }
      />
      <StickyNavLayout links={orderedLinks} location={location}>
        <header className="docs-header">
          {selectFirst ? (
            <h1>
              <a href={post.fields.slug}>{post.frontmatter.title}</a>
            </h1>
          ) : (
            <h1>{post.frontmatter.title}</h1>
          )}
          <DarkModeButton />
        </header>
        <p>
          <a
            href={post.fields.githubLink}
            rel="noopener noreferrer"
            target="_blank">
            Edit on GitHub
          </a>
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </StickyNavLayout>
    </Layout>
  )
}

export const docsPageQuery = graphql`
  query docsPageQuery {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/docs/" }
        frontmatter: { draft: { ne: true } }
      }
    ) {
      edges {
        node {
          fields {
            slug
            folder
          }
          frontmatter {
            description
            navId
            title
          }
        }
      }
    }
  }
`
