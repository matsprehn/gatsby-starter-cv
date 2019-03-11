import React from 'react'
import styled from 'styled-components'
import siteConfig from '../../../data/siteConfig'
const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  :hover {
    color: lightgrey;
  }
`
const Footer = ({ className }) => {
  const email = siteConfig.social.email
  return (
    <div className={className}>
      <p>
        © 2019 Mat Sprehn. All rights reserved.
        <br />
        <Anchor href={`mailto:${email}`}>{email}</Anchor>
      </p>
    </div>
  )
}

export default styled(Footer)`
  color: grey;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
  padding-top: 15px;
  text-align: center;
  border: 0;
`
