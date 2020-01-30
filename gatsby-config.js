/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: 'Spokestack',
    author: 'Spokestack',
    description:
      'Mobile voice development platform that enables customized voice navigation for mobile and browser applications',
    siteUrl: 'https://spokestack.io/',
    social: {
      twitter: 'https://twitter.com/spokestack',
      github: 'https://github.com/spokestack',
      stackoverflow: 'https://stackoverflow.com/questions/tagged/spokestack'
    },
    // Should match the queries in src/components/TeamMembers.tsx
    team: {
      neil: {
        name: 'Neil Menne',
        title: 'Principal Back-End Engineer'
      },
      will: {
        name: 'Will Rice',
        title: 'Data Science Engineer'
      },
      elizabeth: {
        name: 'Elizabeth Ropp',
        title: 'UX & Product Design'
      },
      brent: {
        name: 'Brent Spell',
        title: 'CTO'
      },
      mike: {
        name: 'Mike Tatum',
        title: 'CEO'
      },
      noel: {
        name: 'Noel Weichbrodt',
        title: 'Principal Engineer'
      },
      timmy: {
        name: 'Timmy Willison',
        title: 'Front-End Engineer'
      },
      josh: {
        name: 'Josh Ziegler',
        title: 'Conversation Engineer'
      }
    },
    events: [
      {
        title: 'Voice Is Just Another Interface',
        description:
          'Keyboards, GUIs, and touchscreens have all been major revolutions in the human-computer interface. How can you prepare your mobile apps for the voice interface?',
        month: 'Feb',
        day: '06',
        time: '12:00pm - 1:00pm',
        locationLine1: 'The Edney, Floor 5',
        locationLine2: 'Chattanooga, TN',
        url: 'https://www.meetup.com/chadevs/events/268178537/'
      },
      {
        title: 'How to Add Voice to Mobile Workshop',
        description:
          'Leave this workshop with some voice design best practices and a simple voice-controlled app of your own.',
        month: 'Feb',
        day: '19',
        time: '5:30pm - 7:00pm',
        locationLine1: 'The Edney, Floor 5',
        locationLine2: 'Chattanooga, TN',
        url:
          'https://www.eventbrite.com/e/how-to-add-voice-to-mobile-workshop-tickets-91159870627'
      }
    ]
  },
  plugins: [
    // This source is only for introspection in development.
    // It should NOT be used in gatsby graphql queries.
    // Queries to Spokestack run only at runtime with
    // the user's credentials, specifically on account pages.
    !!process.env.SS_DEV_GITHUB_TOKEN && {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'Spokestack',
        fieldName: 'spokestack',
        url: `${process.env.SS_API_URL}/control`,
        headers: {
          // Generate this token by logging into your
          // Spokestack account with GitHub OAuth.
          // Copy the value from localStorage
          // and set it in your environment variables.
          Authorization: `GitHub ${process.env.SS_DEV_GITHUB_TOKEN}`
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/docs`,
        name: 'docs'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets'
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-96106131-7',
        anonymize: true,
        respectDNT: true
      }
    },
    'gatsby-plugin-svg-sprite',
    'gatsby-plugin-optimize-svgs',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-image',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem'
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              noInlineHighlight: true
            }
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
            }
          }
        }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description:
                    edge.node.frontmatter.description || edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }]
                })
              })
            },
            query: `
            {
              allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
                filter: { fileAbsolutePath: { regex: "/blog/" }, frontmatter: { draft: { ne: true } } }
                limit: 1000
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                      description
                    }
                  }
                }
              }
            }
            `,
            output: 'rss.xml',
            title: "Spokestack's Blog RSS"
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: {
        prefixes: ['/account/*']
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'spokestack.io',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#2f5bea',
        display: 'minimal-ui',
        icon: 'static/mark.svg'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    }
  ].filter(Boolean)
}
