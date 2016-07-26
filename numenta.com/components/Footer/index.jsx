import React from 'react'

import {getDateYear, getRepo} from '../../utils/universal'
import LogoMark from '../LogoMark'
import Spacer from '../Spacer'
import TextLink from '../TextLink'

import styles from './style.css'


const Footer = (state, {config}) => {
  const {links} = config
  const repo = getRepo()
  const year = getDateYear()

  return (
    <div className={styles.footbar}>
      <footer className={styles.footer}>
        <span>
          © {year} {' '}
          <TextLink to={links.in.home}>Numenta</TextLink>
        </span>
        <span className={styles.mark}>
          <LogoMark />
        </span>
        <span>
          <TextLink to={links.in.privacy}>Privacy</TextLink>
          <Spacer />
          <TextLink to={links.in.terms}>Terms</TextLink>
          <Spacer />
          <TextLink to={repo}>Source</TextLink>
          <Spacer />
          <TextLink to={links.in.sitemap}>Sitemap</TextLink>
        </span>
      </footer>
    </div>
  )
}

Footer.contextTypes = {
  config: React.PropTypes.object,
}

export default Footer