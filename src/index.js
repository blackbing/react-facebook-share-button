import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ShareButton from './ShareButton'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      appid: '325242790993768',
      href: 'https://stock.cnyes.com/market/OTC:6111:STOCK',
      title: '大宇資 (6111) 即時股價走勢 | 股市Talk | 鉅亨網',
      desc: '大宇資 (6111) 個股相關新聞、即時股價、當日走勢、20年技術分析K線圖',
      picture: 'https://www.tradingview.com/x/ogIL92lC',
      hashtag: '大宇資',
      quote: '吳阿彥11:26 #大宇資 回到起漲點了 慘'
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
