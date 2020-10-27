import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

const getBrowser = (userAgent: string) => {
  const browsers = ['Opera', 'Chrome', 'Firefox', 'IE']
  let browser

  browsers.forEach((b) => {
    if (userAgent.indexOf(b) !== -1) {
      browser = b
    }
  })

  return browser
}

const StyledDifference = styled.section<{spacing?: 'small'}>`
  padding: ${({spacing}) => spacing === 'small' ? '6rem 0' : ''};
  text-align: center;

  p {
    font-size: 110%;
  }

  h2 + p {
    max-width: 500px;
    margin: 3rem auto 2rem;
  }

  .btn {
    margin-bottom: 5rem;
  }
`

interface DifferenceProps {
    title?: string
    spacing?: 'small'
}

const Difference = ({title, spacing}: DifferenceProps) => {
  const [browser, setBrowser] = useState()

  useEffect(() => {
    setBrowser(getBrowser(window.navigator.userAgent))
  })

  return (
    <StyledDifference className="pattern-bg" spacing={spacing}>
      <div className="row">
        <h2>
            <strong>{title ? title : 'Want to See the Difference for Yourself?'}</strong>
        </h2>
        <p>Add a Gitpod button to your repository and start your dev environment with a single click.</p>
        <a
          href={
            browser === 'Firefox'
              ? 'https://addons.mozilla.org/en-GB/firefox/addon/gitpod/'
              : 'https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki'
          }
          target="_blank"
          className="btn btn--big btn--cta"
        >
          Install Browser Extension
        </a>
        <p>
          Or prefix any GitLab, GitHub or Bitbucket URL with <strong>gitpod.io/#</strong>
        </p>
      </div>
    </StyledDifference>
  )
}

export default Difference
