import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ShareButton from './ShareButton'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      appid: '51214793621',
      href: 'http://blog.blackbing.net/',
      title: 'Blackbing Playground',
      desc: '記錄一些生活與工作的雜事，偶爾會寫一些前端網頁開發的心得',
      picture: 'http://i.imgur.com/M93IVLH.png',
      hashtag: 'reactFacebookShareButton',
      quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  }

  handleChange (attr) {
    return (e) => {
      const target = e.currentTarget
      this.setState({
        [attr]: target.value
      })
    }
  }

  render () {
    const {
      appid,
      href,
      title,
      desc,
      picture,
      hashtag,
      quote
    } = this.state

    return (
      <div>
        <form>
          <div>
            <label htmlFor='appid'>appid</label><input id='appid' type='text' defaultValue={appid} onChange={this.handleChange('appid')} />
          </div>
          <div>
            <label htmlFor='href'>href</label><input id='href' type='text' defaultValue={href} onChange={this.handleChange('href')} />
          </div>
          <div>
            <label htmlFor='title'>title</label><input id='title' type='text' defaultValue={title} onChange={this.handleChange('title')} />
          </div>
          <div>
            <label htmlFor='desc'>desc</label><input id='desc' type='text' defaultValue={desc} onChange={this.handleChange('desc')} />
          </div>
          <div>
            <label htmlFor='picture'>picture</label><input id='picture' type='text' defaultValue={picture} onChange={this.handleChange('picture')} />
          </div>
          <div>
            <label htmlFor='hashtag'>hashtag</label><input id='hashtag' type='text' defaultValue={hashtag} onChange={this.handleChange('hashtag')} />
          </div>
          <div>
            <label htmlFor='quote'>quote</label><input id='quote' type='text' defaultValue={quote} onChange={this.handleChange('quote')} />
          </div>
        </form>
        <ShareButton appid={appid}
          href={href}
          title={title}
          desc={desc}
          picture={picture}
          hashtag={hashtag}
          quote={quote}
          >分享</ShareButton>
      </div>
    )
  };
}

ReactDOM.render(<App />, document.getElementById('root'))
