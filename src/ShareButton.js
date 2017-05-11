import React, { PropTypes } from 'react'
import { width, height } from 'dom-helpers/query'
import styles from './style.scss'

const defaultWidth = 580
const defaultHeight = 664

export function popupFBShare (appid, _href = '', _title = '', _desc = '', _picture = '', _hashtag = '', _quote = '') {
  const args = []
  if (_href) {
    args.push(`href=${window.encodeURIComponent(_href)}`)
  }
  if (_title) {
    args.push(`title=${window.encodeURIComponent(_title)}`)
  }
  if (_desc) {
    args.push(`description=${window.encodeURIComponent(_desc)}`)
  }
  if (_picture) {
    args.push(`picture=${window.encodeURIComponent(_picture)}`)
  }
  if (_hashtag) {
    args.push(`hashtag=%23${window.encodeURIComponent(_hashtag)}`)
  }
  if (_quote) {
    args.push(`quote=${window.encodeURIComponent(_quote)}`)
  }

  const url =
    `https://www.facebook.com/dialog/share?app_id=${appid}&display=popup&${args.join('&')}`
  const winWidth = width(window)
  const winHeight = height(window)
  // limit width
  const w = winWidth > defaultWidth ? defaultWidth : winWidth
  const h = winHeight > defaultHeight ? defaultHeight : winHeight

  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screen.left
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screen.top

  const left = (winWidth - w) / 2 + dualScreenLeft
  const top = (winHeight - h) / 2 + dualScreenTop

  window.open(url, 'facebook share', `width=${w},height=${h},left=${left},top=${top},scrollbars=yes`)
}

export function handleShareBtnClick (e) {
  const currentTarget = e.currentTarget
  const appid = currentTarget.getAttribute('data-appid')
  const href = currentTarget.getAttribute('data-href')
  const title = currentTarget.getAttribute('data-title')
  const desc = currentTarget.getAttribute('data-desc')
  const picture = currentTarget.getAttribute('data-picture')
  const hashtag = currentTarget.getAttribute('data-hashtag')
  const quote = currentTarget.getAttribute('data-quote')

  popupFBShare(appid, href, title, desc, picture, hashtag, quote)
}

function ShareFb (props) {
  return (
    <button
      className={styles['fb-share-button']}
      data-appid={props.appid}
      data-href={props.href}
      data-title={props.title}
      data-desc={props.desc}
      data-picture={props.picture}
      data-hashtag={props.hashtag}
      data-quote={props.quote}
      onClick={handleShareBtnClick}
    >
      <span className={styles['fb-logo']}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
          <path fill='#ffffff' fillRule='evenodd' d='M8 14H3.667C2.733 13.9 2 13.167 2 12.233V3.667A1.65 1.65 0 0 1 3.667 2h8.666A1.65 1.65 0 0 1 14 3.667v8.566c0 .934-.733 1.667-1.667 1.767H10v-3.967h1.3l.7-2.066h-2V6.933c0-.466.167-.9.867-.9H12v-1.8c.033 0-.933-.266-1.533-.266-1.267 0-2.434.7-2.467 2.133v1.867H6v2.066h2V14z' />
        </svg>
      </span>
      <span className={styles['fb-share-text']}>{props.children}</span>
    </button>
  )
}

ShareFb.propTypes = {
  appid: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  desc: PropTypes.string,
  picture: PropTypes.string,
  hashtag: PropTypes.string,
  quote: PropTypes.string
}

ShareFb.defaultProps = {
  title: '',
  desc: '',
  picture: '',
  hashtag: '',
  quote: ''
}

export default ShareFb
