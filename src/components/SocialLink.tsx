import { SerializedStyles, css } from '@emotion/core'

import React from 'react'
import SVGIcon from './SVGIcon'
import { transitionEasing } from '../utils/theme'

interface Props {
  href: string
  title: string
  icon: string
  iconSize?: number
  extraCss?: SerializedStyles
}

export default function SocialLink({ href, title, icon, iconSize = 17, extraCss }: Props) {
  return (
    <a
      css={[styles.socialLink, extraCss]}
      style={{ width: `${iconSize + 20}px`, height: `${iconSize + 20}px` }}
      href={href}
      title={title}>
      <SVGIcon icon={icon} style={{ width: `${iconSize}px`, height: `${iconSize}px` }} />
    </a>
  )
}

const styles = {
  socialLink: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
    transition: background-color 0.2s ${transitionEasing};

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    &:active {
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.7);
    }
  `
}
