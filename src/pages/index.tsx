import { MIN_DEFAULT_MEDIA_QUERY, MIN_TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants'
import { PageRendererProps, graphql } from 'gatsby'
import React, { useRef } from 'react'
import { adjustFontSizeTo, rhythm } from '../utils/typography'

import Button from '../components/Button'
import Card from '../components/Card'
import { Global } from '@emotion/core'
import Layout from '../components/Layout'
import { Query } from '../utils/graphql'
import SEO from '../components/SEO'
import SVGIcon from '../components/SVGIcon'
import StickyNavLayout from '../components/StickyNavLayout'
import { css } from '@emotion/core'
import iconArrow from '../icons/arrow-forward.svg'

interface Props extends PageRendererProps {
  data: Query
}

export default function Index({ data, location }: Props) {
  const siteTitle = data.site.siteMetadata.title
  const links = [
    {
      href: '/#branded-voice',
      title: 'Custom Branded Voice',
      ref: useRef<HTMLDivElement>(null)
    },
    {
      href: '/#asr',
      title: 'Open source ASR Manager',
      ref: useRef<HTMLDivElement>(null)
    },
    {
      href: '/#wakeword-creation',
      title: 'Wakeword Creation',
      ref: useRef<HTMLDivElement>(null)
    },
    {
      href: '/#nlu',
      title: 'Natural Language Understanding (NLU)',
      ref: useRef<HTMLDivElement>(null)
    }
  ]

  return (
    <Layout>
      <SEO title={siteTitle} keywords={['spokestack', 'mobile', 'voice']} />
      <Global
        styles={css`
          .card ul {
            margin-bottom: 0;
          }
          .card li:last-child {
            margin-bottom: 0;
          }
          .card li p {
            margin: 0;
          }
        `}
      />
      <header css={styles.header}>
        <h1 css={styles.headerText}>Give your mobile app a voice</h1>
        <h4 css={[styles.headerText, styles.h4]}>
          When your customers say &ldquo;Hey Siri, open {'{my-app}'}&rdquo;, how will you respond?
          Let voice deliver your core value proposition to customers quicker.
        </h4>
        <Button large>
          Get started
          <SVGIcon icon={iconArrow.id} style={{ fill: 'var(--header-color)' }} />
        </Button>
      </header>
      <section css={styles.definition}>
        <h1>What is Spokestack?</h1>
        <p>
          Spokestack is a voice development platform that helps developers build custom voice
          experiences for mobile apps.
        </p>
      </section>
      <StickyNavLayout id="products" matchHash links={links} location={location}>
        <h1>Products &amp; Services</h1>
        <div id="branded-voice" css={styles.feature} ref={links[0].ref}>
          <h3>Custom Branded Voice</h3>
          <div css={styles.description}>
            <p>
              Choose from one of our voices or create your own uniquely branded synthetic voice to
              use in your app using Spokestack&rsquo;s Text-to-Speech (TTS) service.
            </p>
          </div>
          <Card title="Benefits">
            <ul css={styles.list}>
              <li>
                <p>Hand off model training and prosody</p>
              </li>
              <li>
                <p>Fast, built to deliver responses</p>
              </li>
              <li>
                <p>Know exactly what your customers are saying without an intermediary</p>
              </li>
            </ul>
          </Card>
          {/* <Card title="Sample a Custom Voice">
          <p>Hand off model training and prosody</p>
          <p>Fast, built to deliver responses</p>
          <p>Know exactly what your customers are saying without an intermediary</p>
        </Card> */}
        </div>
        <div id="asr" css={styles.feature} ref={links[1].ref}>
          <h3>Open source Automatic Speech Recognition (ASR) Manager</h3>
          <div css={styles.description}>
            <p>
              Easily add and manage ASR and Voice Activated Detection (VAD) to your apps with a{' '}
              <a href="https://github.com/spokestack">Spokestack library</a> that fits your
              architecture.
            </p>
          </div>
          <Card title="Benefits">
            <ul css={styles.list}>
              <li>
                <p>One-stop shop for adding ASR and VAD to your mobile apps</p>
              </li>
              <li>
                <p>
                  Easily add custom Text-to-Speech (TTS) and a wakeword to your app with Spokestack
                  or from other providers such as Google Assistant, Siri, Alexa, etc.
                </p>
              </li>
            </ul>
          </Card>
        </div>
        <div id="wakeword-creation" css={styles.feature} ref={links[2].ref}>
          <h3>Wakeword Creation</h3>
          <div css={styles.description}>
            <p>
              When your app is open, we will create a wakeword for your brand so users can call you
              by name.
            </p>
          </div>
          <Card title="Benefits">
            <ul css={styles.list}>
              <li>
                <p>
                  We make it easy for you to add a branded wakeword without training a Machine
                  Learning (ML) model on your own
                </p>
              </li>
            </ul>
          </Card>
        </div>
        <div id="nlu" css={styles.feature} ref={links[3].ref}>
          <h3>Natural Language Understanding (NLU)</h3>
          <div css={styles.description}>
            <p>
              Want to unify your conversations across mobile, smart speaker and desktop? We have an
              NLU for that.
            </p>
          </div>
          <Card title="Benefits">
            <ul css={styles.list}>
              <li>
                <p>
                  A cross-platform NLU that was built for multimodal management and consistencies
                  across the user experience
                </p>
              </li>
            </ul>
          </Card>
        </div>
      </StickyNavLayout>
    </Layout>
  )
}

const styles = {
  header: css`
    color: var(--text-color-dark-bg);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: ${rhythm(1.3)} 20px 160px;
    background: var(--primary-color) url(/background.svg) no-repeat;
    background-position: center bottom -1px;

    @media (min-width: 1440px) {
      background-size: cover;
    }
    ${MIN_TABLET_MEDIA_QUERY} {
      padding: ${rhythm(4)} 20px ${rhythm(8)};
    }
  `,
  headerText: css`
    color: var(--text-color-dark-bg);
    max-width: 600px;
  `,
  h4: css`
    ${MIN_DEFAULT_MEDIA_QUERY} {
      font-size: ${adjustFontSizeTo('25px').fontSize};
      line-height: ${adjustFontSizeTo('25px').lineHeight};
    }
  `,
  definition: css`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      max-width: 600px;
    }

    ${MIN_TABLET_MEDIA_QUERY} {
      p {
        text-align: center;
      }
    }
  `,
  feature: css`
    padding-top: ${rhythm(1)};

    ${MIN_DEFAULT_MEDIA_QUERY} {
      margin-bottom: ${rhythm(4)};
    }
  `,
  list: css`
    list-style-image: url(/arrow-forward.svg);
  `,
  description: css`
    ${MIN_DEFAULT_MEDIA_QUERY} {
      margin: ${rhythm(1.5)} 0 ${rhythm(2)};
    }
  `
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
