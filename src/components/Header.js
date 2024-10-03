import React from 'react'
import PropTypes from 'prop-types'
// import pic02 from '../images/shirotokamojinashi.png'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import Countdown from './util/Countdown'

const Header = (props) => {
  const target = new Date('2024-12-01T00:00:00') // ここに目標の日時を設定
  return (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      {/* <div className="logo">
      <a href="https://cancaonovachor.com/">
        <img src={pic02} alt="" />
      </a>
    </div> */}
      <div className="content">
        <div className="inner">
          <h1>カンサォン・ノーヴァ コーラスネクスト 3.0</h1>
          <h3>「怖くて美しい」-陰翳礼賛-</h3>
          {/* <h2>
          <a
            target="_blank"
            className="use-border"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc06sj-4uyOPnM_-bfl0K6bg2dPrcg496mHolNdXvet_C-4-A/viewform"
          >
            音源 / 動画予約受付中
          </a>
        </h2> */}
          <h2>2025年3月9日 (日) </h2>
          {/* <p>1st Session 13:00-14:00</p>
        <p>2nd Session 14:00-15:30</p>
        <p>3rd Session 15:30-16:30</p> */}
          <h2>神戸ファッション美術館 オルビスホール</h2>
          <div style={{ height: '1rem' }}></div>
          <h1>チケット販売まで</h1>
          <h1>
            <Countdown targetDate={target} />
          </h1>
        </div>
      </div>
      {/* <nav>
      <ul>
        <li>
          <a
            className="use-border"
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('concept')
            }}
          >
            CONCEPT
          </a>
        </li>
        <li>
          <a
            className="use-border"
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('stage')
            }}
          >
            Stage
          </a>
        </li>
        <li>
          <a
            className="use-border"
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('access')
            }}
          >
            Access
          </a>
        </li>
        <li>
          <a
            className="use-border"
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('ticket')
            }}
            // href="https://passmarket.yahoo.co.jp/event/show/detail/023pm8ynq6r21.html"
            // target="_blank"
          >
            Ticket
            ここはコメントアウトだった Ticket <FontAwesomeIcon icon={faExternalLinkAlt} /> 
          </a>
        </li>
      </ul>
    </nav> */}
    </header>
  )
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header