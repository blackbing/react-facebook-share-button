import React from 'react'
import ReactDOM from 'react-dom'
import ShareButton from './ShareButton'

ReactDOM.render(<ShareButton appid='51214793621'
  href='http://blog.blackbing.net/'
  title='Blackbing Playground'
  desc='記錄一些生活與工作的雜事，偶爾會寫一些前端網頁開發的心得'
  picture='http://i.imgur.com/M93IVLH.png'
  hashtag='reactFacebookShareButton'
  quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  >分享</ShareButton>, document.getElementById('root'))
