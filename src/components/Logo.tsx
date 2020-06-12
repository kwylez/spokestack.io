import { mainBackground, secondary } from '../styles/theme'

import React from 'react'
import { css } from '@emotion/core'

interface Props {
  className?: string
}

export default function Logo({ className }: Props) {
  return (
    <svg
      css={styles.logo}
      className={className}
      role="img"
      aria-label="Spokestack Logo"
      viewBox="0 0 185 60"
      xmlns="http://www.w3.org/2000/svg">
      <g className="logo-image" transform="translate(5.500000, 19.000000)">
        <path d="M21.3976834,15.1988417 C22.3252659,15.1988417 23.0772201,14.4468875 23.0772201,13.519305 L23.0772201,5.12162162 C23.0772201,3.26645663 21.5733117,1.76254826 19.7181467,1.76254826 C19.3253764,1.76254826 18.9483509,1.82995969 18.5980089,1.95384384 C19.2559743,2.76694327 19.6659048,3.78808487 19.7134915,4.90305718 L19.7181467,5.12162162 L19.7181467,13.519305 C19.7181467,14.4468875 20.4701009,15.1988417 21.3976834,15.1988417 Z M14.6795367,1.76254826 C12.8243717,1.76254826 11.3204633,3.26645663 11.3204633,5.12162162 L11.3204633,16.8783784 C11.3204633,18.078514 10.9008728,19.180649 10.2003861,20.046089 C10.549948,20.1699116 10.9273183,20.2374517 11.3204633,20.2374517 C13.1756283,20.2374517 14.6795367,18.7335434 14.6795367,16.8783784 L14.6795367,5.12162162 C14.6795367,3.92148597 15.0991272,2.81935095 15.7996139,1.95391097 C15.4495869,1.8300052 15.0724395,1.76254826 14.6795367,1.76254826 Z M18.03861,5.12162162 C18.03861,4.27014846 17.7218005,3.49267013 17.1996272,2.90063234 C16.6758829,3.49267013 16.3590734,4.27014846 16.3590734,5.12162162 L16.3590734,16.8783784 C16.3590734,19.6611259 14.1032108,21.9169884 11.3204633,21.9169884 C10.4023212,21.9169884 9.54153625,21.671413 8.80020941,21.2423631 C8.06022487,21.6715715 7.19969918,21.9169884 6.28185328,21.9169884 C3.57233599,21.9169884 1.36233773,19.7782932 1.24789843,17.0969428 L1.24324324,16.8783784 L1.24324324,8.48069498 C1.24324324,6.62552999 2.74715161,5.12162162 4.6023166,5.12162162 C6.39564276,5.12162162 7.86073912,6.52694044 7.95641962,8.29639203 L7.96138996,8.48069498 L7.96138996,16.8783784 C7.96138996,17.7298515 8.27819948,18.5073299 8.80037281,19.0993677 C9.32411712,18.5073299 9.64092664,17.7298515 9.64092664,16.8783784 L9.64092664,5.12162162 C9.64092664,2.33887414 11.8967892,0.083011583 14.6795367,0.083011583 C15.5976788,0.083011583 16.4584637,0.328586993 17.1997906,0.757636934 C17.9401369,0.32832539 18.8004937,0.083011583 19.7181467,0.083011583 C22.427664,0.083011583 24.6376623,2.22170676 24.7521016,4.90305718 L24.7567568,5.12162162 L24.7567568,13.519305 C24.7567568,15.37447 23.2528484,16.8783784 21.3976834,16.8783784 C19.6043572,16.8783784 18.1392609,15.4730596 18.0435804,13.703608 L18.03861,13.519305 L18.03861,5.12162162 Z M4.6023166,6.8011583 C3.67473411,6.8011583 2.92277992,7.55311249 2.92277992,8.48069498 L2.92277992,16.8783784 C2.92277992,18.7335434 4.42668829,20.2374517 6.28185328,20.2374517 C6.67462357,20.2374517 7.05164907,20.1700403 7.40199107,20.0461562 C6.74402575,19.2330567 6.33409518,18.2119151 6.28650847,17.0969428 L6.28185328,16.8783784 L6.28185328,8.48069498 C6.28185328,7.55311249 5.5298991,6.8011583 4.6023166,6.8011583 Z"></path>
      </g>
      <g className="logo-text" transform="translate(43.500000, 17.000000)">
        <path d="M5.90007407,6.06003292 L5.512,6.058 C2.73,6.058 0.234,6.448 0.234,9.308 L0.234,9.854 C0.234,11.284 0.728,12.792 2.73,13.572 L6.422,14.976 C7.618,15.47 7.93,15.964 7.93,16.718 L7.93,17.03 C7.93,18.1080714 7.32559949,18.3641582 5.41742074,18.381075 L0.39,18.382 C0.13,18.382 0,18.512 0,18.772 L0,19.916 C0,20.124 0.078,20.28 0.39,20.306 L1.10960179,20.373407 C1.9985472,20.4456512 3.51936,20.54 5.148,20.54 L5.66124325,20.535489 C8.827845,20.47695 10.4,19.8224 10.4,17.056 L10.4,16.77 C10.4,15.3893103 10.2060975,14.1055719 8.03973857,13.1996091 L4.342,11.726 C3.068,11.258 2.73,10.634 2.73,9.906 L2.73,9.568 C2.73,8.632 3.432,8.216 4.628,8.216 L9.464,8.216 C9.724,8.216 9.854,8.086 9.854,7.826 L9.854,6.708 C9.854,6.474 9.724,6.318 9.49,6.292 C8.14955556,6.13022222 6.95291358,6.07116049 5.90007407,6.06003292 Z"></path>
        <path d="M19.907,6.058 C24.951,6.058 25.991,7.54 25.991,13.286 L25.990058,13.5820392 C25.955252,18.9389764 24.9413117,20.4362137 20.5316418,20.5346879 L20.5316418,20.5346879 L20.037,20.54 C18.737,20.54 17.723,20.514 16.605,20.384 L16.605,20.384 L16.605,25.168 C16.605,25.428 16.475,25.558 16.215,25.558 L16.215,25.558 L14.499,25.558 C14.239,25.558 14.109,25.428 14.109,25.168 L14.109,25.168 L14.109,6.942 C14.109,6.656 14.265,6.552 14.525,6.5 C16.5079333,6.18453333 17.6315956,6.08388444 19.1653644,6.06265304 L19.1653644,6.06265304 Z M19.933,8.242 L16.605,8.242 L16.605,18.148 C17.645,18.278 18.867,18.356 19.881,18.356 C22.9678085,18.356 23.4566768,17.4502961 23.4926931,13.8132811 L23.4926931,13.8132811 L23.4944586,13.053393 C23.4778346,9.2372741 23.0614783,8.242 19.933,8.242 L19.933,8.242 Z"></path>
        <path d="M35.628,6.063 L35.8839963,6.06431325 C40.51236,6.11273677 41.586575,7.51517926 41.6562603,12.7325773 L41.6562603,12.7325773 L41.66,13.317 C41.66,18.915069 40.7147253,20.4411855 36.132943,20.5397785 L36.132943,20.5397785 L35.628,20.545 C30.7830345,20.545 29.6464542,19.2119203 29.5738303,13.9013321 L29.5738303,13.9013321 L29.57,13.317 C29.57,7.519 30.61,6.063 35.628,6.063 L35.628,6.063 Z M35.628,8.156 L35.4250501,8.15745845 C32.571931,8.19956608 32.1043365,9.16624969 32.0684083,12.7140413 L32.0684083,12.7140413 L32.0665775,13.4845707 C32.0834849,17.1300505 32.48662,18.1781239 35.2298412,18.264085 L35.2298412,18.264085 L35.628,18.27 C38.6372174,18.27 39.1248771,17.3422571 39.1615938,13.7347127 L39.1615938,13.7347127 L39.1634228,12.9657703 C39.145741,9.12639225 38.7056087,8.156 35.628,8.156 L35.628,8.156 Z"></path>
        <path d="M46.071,0.754 C45.811,0.754 45.681,0.91 45.681,1.17 L45.681,19.994 C45.681,20.28 45.811,20.41 46.071,20.41 L47.787,20.41 C48.047,20.41 48.177,20.28 48.177,19.994 L48.177,12.376 L54.053,20.124 C54.183,20.28 54.365,20.41 54.625,20.41 L56.445,20.41 C57.147,20.41 57.121,20.02 56.887,19.708 L50.777,11.778 L55.379,6.682 C55.639,6.422 55.613,6.188 55.145,6.188 L52.987,6.188 C52.753,6.188 52.571,6.292 52.441,6.448 L48.177,11.232 L48.177,1.17 C48.177,0.91 48.047,0.754 47.787,0.754 L46.071,0.754 Z"></path>
        <path d="M65.172,6.058 L65.4179283,6.05933379 C69.7029687,6.10673549 70.8377692,7.43211575 70.9603341,12.3498093 L70.9603341,12.3498093 L70.97,12.922 L70.97,13.676 C70.97,14.196 70.84,14.404 70.034,14.404 L70.034,14.404 L61.766,14.404 C61.844,17.576 62.442,18.356 65.224,18.356 L65.224,18.356 L69.488,18.356 C69.748,18.356 69.878,18.486 69.878,18.746 L69.878,18.746 L69.878,19.89 C69.878,20.124 69.748,20.28 69.514,20.306 C68.188,20.488 66.758,20.54 65.172,20.54 C60.284,20.54 59.244,19.11 59.244,13.312 L59.2449419,13.0159608 C59.2810059,7.46422592 60.3682759,6.058 65.172,6.058 L65.172,6.058 Z M65.172,8.242 L64.9705022,8.2435086 C62.4681117,8.28202742 61.8505203,9.06956324 61.751521,11.9102227 L61.751521,11.9102227 L61.74,12.376 L68.474,12.376 C68.422,9.074 67.876,8.242 65.172,8.242 L65.172,8.242 Z"></path>
        <path d="M79.9030741,6.06003292 L79.515,6.058 C76.733,6.058 74.237,6.448 74.237,9.308 L74.237,9.854 C74.237,11.284 74.731,12.792 76.733,13.572 L80.425,14.976 C81.621,15.47 81.933,15.964 81.933,16.718 L81.933,17.03 C81.933,18.1080714 81.3285995,18.3641582 79.4204207,18.381075 L74.393,18.382 C74.133,18.382 74.003,18.512 74.003,18.772 L74.003,19.916 C74.003,20.124 74.081,20.28 74.393,20.306 L75.1126018,20.373407 C76.0015472,20.4456512 77.52236,20.54 79.151,20.54 L79.6642432,20.535489 C82.830845,20.47695 84.403,19.8224 84.403,17.056 L84.403,16.77 C84.403,15.3893103 84.2090975,14.1055719 82.0427386,13.1996091 L78.345,11.726 C77.071,11.258 76.733,10.634 76.733,9.906 L76.733,9.568 C76.733,8.632 77.435,8.216 78.631,8.216 L83.467,8.216 C83.727,8.216 83.857,8.086 83.857,7.826 L83.857,6.708 C83.857,6.474 83.727,6.318 83.493,6.292 C82.1525556,6.13022222 80.9559136,6.07116049 79.9030741,6.06003292 Z"></path>
        <path d="M89.178,2.678 C88.944,2.73 88.84,2.834 88.84,3.094 L88.84,6.214 L87.384,6.214 C87.124,6.214 86.994,6.344 86.994,6.604 L86.994,7.826 C86.994,8.086 87.124,8.216 87.384,8.216 L88.84,8.216 L88.84,17.576 C88.84,20.3593684 90.7534848,20.5291967 92.5466091,20.5393632 L92.844,20.54 C93.078,20.54 93.78,20.514 94.3,20.384 C94.56,20.332 94.69,20.202 94.69,19.968 L94.69,18.72 C94.69,18.46 94.56,18.356 94.274,18.356 L93.026,18.356 L92.703272,18.3502222 C91.6483987,18.3085139 91.3615749,18.0279306 91.3376795,17.090441 L91.336,8.216 L94.066,8.216 C94.352,8.216 94.482,8.086 94.482,7.826 L94.482,6.604 C94.482,6.344 94.352,6.214 94.066,6.214 L91.336,6.214 L91.336,2.6 C91.336,2.314 91.18,2.184 90.894,2.262 L89.178,2.678 Z"></path>
        <path d="M102.429,6.058 C106.485,6.058 108.305,7.306 108.305,10.14 L108.305,10.14 L108.304714,19.3000046 C108.301569,19.5250972 108.263833,19.8011667 107.811,19.968 C106.98013,20.2766087 105.022168,20.498518 102.708927,20.5347773 L102.708927,20.5347773 L102.039,20.54 C98.607,20.54 97.021,19.838 97.021,16.354 C97.021,13.234 98.659,12.35 101.623,12.35 L101.623,12.35 L105.809,12.324 L105.809,10.582 C105.809,8.97 104.873,8.242 102.429,8.242 L102.429,8.242 L98.529,8.242 C98.217,8.242 98.139,8.164 98.139,7.852 L98.139,7.852 L98.139,6.786 C98.139,6.474 98.243,6.422 98.503,6.37 C100.037,6.11 101.337,6.058 102.429,6.058 Z M105.809,14.352 L101.675,14.352 C100.245,14.352 99.491,14.82 99.491,16.302 C99.491,18.018 100.349,18.408 102.481,18.408 L102.481,18.408 L102.696929,18.4068264 C103.538875,18.3978889 104.903333,18.3343333 105.809,18.096 L105.809,18.096 L105.809,14.352 Z"></path>
        <path d="M118.659479,6.06003292 L118.28,6.058 C113.322966,6.058 112.283275,7.46422592 112.248897,13.0159608 L112.248,13.312 C112.248,19.11 113.236,20.54 118.28,20.54 L119.066348,20.5314403 C120.043506,20.5104691 121.200667,20.4475556 122.232,20.306 C122.466,20.28 122.596,20.124 122.596,19.864 L122.596,18.746 C122.596,18.486 122.466,18.356 122.206,18.356 L118.28,18.356 L117.885087,18.350085 C115.164103,18.2641239 114.761473,17.2160505 114.744577,13.5705707 L114.746406,12.8000413 C114.782288,9.25224969 115.248849,8.28556608 118.078709,8.24345845 L122.206,8.242 C122.466,8.242 122.596,8.112 122.596,7.852 L122.596,6.734 C122.596,6.474 122.466,6.318 122.232,6.292 C121.053333,6.13022222 119.710321,6.07116049 118.659479,6.06003292 Z"></path>
        <path d="M126.565,0.754 L128.281,0.754 C128.541,0.754 128.671,0.91 128.671,1.17 L128.671,11.232 L132.935,6.448 C133.065,6.292 133.247,6.188 133.481,6.188 L135.639,6.188 C136.071,6.188 136.126385,6.38738462 135.927852,6.62255621 L131.271,11.778 L137.381,19.708 C137.615,20.02 137.641,20.41 136.939,20.41 L135.119,20.41 C134.859,20.41 134.677,20.28 134.547,20.124 L128.671,12.376 L128.671,19.994 C128.671,20.28 128.541,20.41 128.281,20.41 L126.565,20.41 C126.305,20.41 126.175,20.28 126.175,19.994 L126.175,1.17 C126.175,0.91 126.305,0.754 126.565,0.754 Z"></path>
      </g>
    </svg>
  )
}

const styles = {
  logo: css`
    width: 185px;
    height: 60px;
    margin: 0;
    line-height: 0;

    .logo-image {
      fill: ${secondary};
    }
    .logo-text {
      fill: ${mainBackground};
    }
  `
}
