import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react';
import secoundSession from '../images/2nd-session.jpg'
import zentai from '../images/zentai-ticc.jpg'
import ichiji from '../images/ichiji.jpg'
import yuge from '../images/yuge.jpg'
import shachiko from '../images/shachiko.jpg'
import tiamo from '../images/tiamo.jpg'
import haishin from '../images/cncn1.0-haishin.jpg'
import nyujo from '../images/cncn2.0-nyuujo.png'
import kinun from '../images/kinun.jpg'
import hanamizuki from '../images/hanamizuki.jpg'
import manderart from '../images/manderart.jpg'
import volare from '../images/volare.jpeg'
import kiito_senzai from '../images/kiito_senzai_edit.jpg'
import access from '../images/access.jpg'
import kawata from '../images/kawata.png'
import odorimai from '../images/odorimai.jpg'
import ito from '../images/ito.jpg'
import { useMediaQuery } from 'react-responsive'


const useSp = () => {
  return useMediaQuery({ maxWidth: 500 }, {noSsr: true})
}

const Main = (props) => {
  let close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  )
  // const isSp = useSp()
  const [isSp, setIsSp] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSp(window.innerWidth <= 500);
    };

    // コンポーネントマウント時に一度検出を実行
    handleResize();

    // ウィンドウのリサイズイベントに応じて検出を実行
    window.addEventListener('resize', handleResize);

    // コンポーネントアンマウント時にイベントリスナーをクリーンアップ
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      ref={props.setWrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <article
        id="concept"
        className={`${props.article === 'concept' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">CONCEPT</h2>
        <div class="youtube">
          <iframe
            width="560"
            height="350"
            src="https://www.youtube.com/embed/XZyK2k2tf7g?si=qU1ybeh1kcflq0Bx"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <p>
          合唱団
          <a className="use-border" href="https://cancaonovachor.com/">
            CancaoNova
          </a>
          2回目の定期演奏会
        </p>
        <p>
          私たちが選んだ珠玉の名曲と培ってきたテクノロジーの力を活用し、合唱の今と未来を描き出します。
        </p>
        <p>
          ステージ情報は{' '}
          <a
            className="use-border"
            href="javascript:;"
            onClick={async () => {
              await props.onCloseArticle()
              props.onOpenArticle('stage')
            }}
          >
            こちら
          </a>{' '}
          から
        </p>
        {close}
      </article>

      <article
        id="stage"
        className={`${props.article === 'stage' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Stage</h2>
        <span className="image-main main">
          <img src={zentai} alt="" />
        </span>
        <h3>1st Session</h3>
        <p>
          支部制を活かしながら様々なコンクールに出場している我々が、
          今年1年コンクールのために練り上げた様々な曲を、詳細な解説とあわせてお届けします。
          ルネサンスから近現代までの「受け継いできた合唱」をご堪能ください。
        </p>
        <p>
          入場料￥2500 前売り￥2000
          <br></br>※前売り価格は2/9 23:59までです。
          <br></br>※学生の方は全期間を通して各料金から500円引きです。
        </p>
        <p>時間：13:00〜</p>
        <p>
          演奏予定曲：
          <br></br>・Kyrie (William Byrd)
          <br></br>・Agnus dei (William Byrd)
          <br></br>・Viel Werden Kommen von Morgen und Abend (Heinrich Schutz)
          <br></br>・Sammlet zuvor das Unkraut (Heinrich Schutz)
          <br></br>・Beati Mortui (Felix Mendelssohn Bartholdy)
          <br></br>・Die Minnesänger (Robert Schumann)
          <br></br>・Fröhlich im Maien (Richard Strauss)
          <br></br>・Tenebrae (Marcus Ludwig)
          <br></br>・Salut, Dame Sainte (Francis Poulenc)
          <br></br>・Tout Puissant (Francis Poulenc)
          <br></br>・Seigneur, je vous en prie (Francis Poulenc)
          <br></br>・Ô mes très chers fréres (Francis Poulenc)
          <br></br>・煙草の時II (若林千春)
          <br></br>・金魚 (多田武彦)
          <br></br>・The Alphabet (Ligeti György)
          <br></br>・Khorumi (Mamia Khatelishvili)
        </p>
        <p>
          <a
            className="use-border"
            href="https://twitter.com/honmachi169/"
            target="_blank"
          >
            <b>MC: 川田一輝</b>
          </a>
          <span className="image-main main">
            <img src={kawata} alt="" />
          </span>
        </p>
        <p>
          1990年大阪生まれ。地元Kiss FM
          KOBEのラジオDJ・声優・イベントMCなど幅広く活動。
          子ども達に魚の魅力を伝える「さかなのおにいさん」として書籍の執筆や、テレビ東京「シナぷしゅ」での音楽・アニメーションなども制作。メディア出演・クリエイターとしてもマルチに活動している。
        </p>
        <br />

        <span className="image-main main">
          <img src={secoundSession} alt="" />
        </span>
        <h3>2nd Session</h3>
        <p>
          全国的な活動を通じて知り合ってきた様々なゲストとともに、今年も「今ここにある合唱」を描き出し、皆さんとともに考えます。西宮の美味しいコーヒーとチョコレート、米粉スイーツを堪能しつつ、特別ゲストとの座談会、全国各地の合唱団の演奏、パネルディスカッションなど多様な企画をお楽しみください。
        </p>
        <p>
          料金：無料（入場には1stまたは3rd sessionの入場券が必要です。)
          <br></br>時間： 14:00〜
        </p>
        <br />
        <h3>基調講演</h3>

        <b>伊東恵司</b>
        <span className="image-main main">
          <img src={ito} alt="" />
        </span>
        <p>
          あらゆる形式・ジャンルの合唱指導を行い、宝塚国際室内合唱コンクール等でグランプリ、セギッツィ国際合唱コンクールでは総合2位とMauro
          Chiocci特別賞を受賞、世界合唱シンポジウムでは2度にわたり特別招待演奏団体に選出され、講師も務める。現在、全国各地で審査員や合唱指導を引き受けるほか「アルティ声楽アンサンブル」等の各種合唱フェスティバルの企画や主催を行っている。現在、日本合唱指揮者協会理事。カワイ出版より「合唱エクササイズ(育成編･運営編・日本語編)」他、ブレーン株式会社より「合唱のイントロダクション」を上梓。「みなづきみのり」のペンネームで作詞活動展開中。
        </p>
        <br />
        <h3>合唱協賛</h3>

        <a
          className="use-border"
          href="https://twitter.com/tiamobbs"
          target="_blank"
        >
          <b>Ti Amo</b>
        </a>
        <span className="image-main main">
          <img src={tiamo} alt="" />
        </span>
        <p>
          アメリカ発祥のバーバーショップスタイルで演奏する、男声四人組の社会人アカペラグループ、関西を、拠点に活動中。
        </p>
        <br />
        <a
          className="use-border"
          href="https://twitter.com/choirvolare"
          target="_blank"
        >
          <b>合唱団Volare</b>
        </a>
        <span className="image-main main">
          <img src={volare} alt="" />
        </span>
        <p>
          こんにちは！　合唱団Volareです。長田高校音楽部のOB・OG合唱団として発足して早15年。現代曲とポップスアレンジを中心に楽しく歌っています♪
        </p>
        <br />
        <a
          className="use-border"
          href="https://twitter.com/syachi_girls"
          target="_blank"
        >
          <b>しゃち子。</b>
        </a>
        <span className="image-main main">
          <img src={shachiko} alt="" />
        </span>
        <p>
          名古屋の選りすぐりのメスゴリラを集めた女声アンサンブル。東山動物園のイケメンゴリラ、シャバーニを師と仰ぎ、迫力と美しさを兼ね備えたサウンド「ゴリリアント・ハーモニー」を目指しています。しゃち子。2度目のCNCN！メンバーも増え、さらにレベルアップした私たちをお楽しみに！
        </p>
        <br />
        <a
          className="use-border"
          href="https://twitter.com/chor_hanamizuki"
          target="_blank"
        >
          <b>混声合唱団「花みずき」</b>
        </a>
        <span className="image-main main">
          <img src={hanamizuki} alt="" />
        </span>
        <p>
          尼崎市立立花中学校合唱部の卒業生により2006年に結成。現在は、兵庫県だけでなく全国からメンバーが集い、酒井輝美の音楽観のもと、日々「花みずき」らしい音楽表現を追求している。
          第4回東京国際合唱コンクール室内部門にて1位金賞および最優秀課題曲賞を受賞し、グランプリコンクールに出場。同年、作曲家Javier
          Busto 氏、作曲家Ambrož Čopi 氏によるレッスンを受ける。
        </p>
        <br />
        <a
          className="use-border"
          href="https://twitter.com/Man_de_rart"
          target="_blank"
        >
          <b>Man de rart</b>
        </a>
        <span className="image-main main">
          <img src={manderart} alt="" />
        </span>
        <p>
          「王道」な男声合唱曲で滾る演奏をしたいというコンセプトのもと、2023年3月に出来た男声合唱団。
          第76回全日本合唱コンクール(大学ユースの部)にて文部科学大臣賞受賞。
        </p>

        <br />
        <h3>飲食協賛</h3>
        <a className="use-border" href="https://ichiji.net/" target="_blank">
          <b>ICHIJI</b>
        </a>
        <span className="image-main main">
          <img src={ichiji} alt="" />
        </span>
        <p>
          <br></br>カカオ豆本来の味わいや香りをお届けしたい。
          <br></br>そんな思いからICHIJIは生まれました。
          <br></br>この思いをカタチにすると
          <br></br>チョコレートができるまでの全工程を自社工房で管理し製造する
          <br></br>”Bean to Bar Chocolate”になりました。
          <br></br>
          <br></br>豆の仕入れから選別、焙煎、摩砕、調合、成形まで
          <br></br>心をこめて手作業でやらせていただいています。
          <br></br>
          <br></br>きっと、チョコレートの概念が変わる
          <br></br>”Bean to Bar Chocolate”をお楽しみください。
          <br></br>
          <br></br>
          皆さんの生活に寄り添うように楽しめて、誰かと食べると会話が生まれる。そんな世界を目指しています。
          <br></br>
          <br></br>
          <a
            className="use-border"
            href="https://yugecoffee.com/"
            target="_blank"
          >
            <b>ゆげ焙煎所</b>
          </a>
          <span className="image-main main">
            <img src={yuge} alt="" />
          </span>
          <br></br>2013年、兵庫県西宮市の官公庁が多いエリアで創業。
          <br></br>自家焙煎のスペシャルティコーヒー専門店
          <br></br>
          <br></br>イタリア製の完全熱風式焙煎機を使用
          <br></br>毎朝、珈琲豆を丁寧に焙煎しています
          <br></br>
          <br></br>『心に響くコーヒー』
          <br></br>
          <br></br>を目指して、日々丁寧に
          <br></br>取り組んでいます。
          <br></br>
          <br></br>
          <a
            className="use-border"
            href="https://www.komekosweets-kinun.com/"
            target="_blank"
          >
            <b>米粉sweets kinun.</b>
          </a>
          <span className="image-main main">
            <img src={kinun} alt="" />
          </span>
          <br></br>生まれ育った愛知県田原市産の米粉・玄米粉を中心に
          <br></br>生産者さんの顔のみえる食材を使いお菓子を作っています。
          <br></br>兵庫神戸 花隈に小さなアトリエを構え、
          <br></br>見てかわいい、聞いて安心、食べておいしい
          <br></br>「心も体も笑顔になれる米粉sweets」をお届けしています。
        </p>

        <br />

        <span className="image-main main">
          <img src={kiito_senzai} alt="" />
        </span>
        <h3>3rd Session</h3>
        <p>
          CancaoNovaが考える新しい合唱の形を皆様に提案します。
          音楽とテクノロジーが融合したステージをどうぞお楽しみください。
        </p>
        <p>
          入場料￥2500 前売り￥2000
          <br></br>※前売りは2/9 23:59までです。
          <br></br>※3rd Sessionには学生割引は存在しません、ご承知おきください。
        </p>
        <p>時間： 15:30〜</p>
        <p>
          {' '}
          演奏予定曲：
          <br></br>デジタルアートステージ
          <br></br>・Digital Poliphony (下薗大樹)
          <br></br>・Sederunt (Perotin)
          <br></br>・Hinbarra (Michael McGlynn)
          <br></br>・Ut queant laxis (Orland di Lasso)
          <br></br>・Solfeggio (Arvo Pärt)
          <br></br>・Proverb (Steve Reich)
        </p>
        <p>
          <a
            className="use-border"
            href="https://twitter.com/honmachi169/"
            target="_blank"
          >
            <b>ストーリーテラー: 川田一輝</b>
          </a>
          <span className="image-main main">
            <img src={kawata} alt="" />
          </span>
        </p>
        <br />
        <p>
          <b>シンセサイザー伴奏: 小鳥舞</b>
          <span className="image-main main">
            <img src={odorimai} alt="" />
          </span>
        </p>
        <p>
          武庫川女子大学音楽学部演奏学科卒業。兵庫教育大学大学院修了。
          武庫川女子大学新人演奏会をはじめ、リーガロイヤルホテルでのコンサート等、様々な演奏会に出演。また、神戸フィルハーモニック、ウクライナ・リヴィウ国際音楽祭にてLviv
          Virtuosos Academic Chamber Ochestraと共演。
          東京国際芸術協会より受講費全額助成を受け、ウィーン国立音楽大学マスタークラスを修了し、選抜者コンサートに出演。ディプロマを取得。
          現在、アンサンブルピアニストとして幅広く活動中。
          混声合唱フロイデ21、関西大学初等部合唱部常任ピアニスト。
          これまでに、奈良田朋子、木下千代の各氏に師事。
        </p>

        {close}
      </article>

      <article
        id="access"
        className={`${props.article === 'access' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Access</h2>
        <span className="image-main main">
          <img src={access} alt="" />
        </span>
        {close}
      </article>

      <article
        id="ticket"
        className={`${props.article === 'ticket' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Ticket</h2>
        <h3>入場チケット (PassMarket)</h3>
        <span className="image-main main">
          <a
            href="https://passmarket.yahoo.co.jp/event/show/detail/02my1a1uzic31.html"
            target="_blank"
          >
            <img src={nyujo} alt="" />
          </a>
        </span>
        <p>
          演奏会への入場チケットは
          <a
            className="use-border"
            href="https://passmarket.yahoo.co.jp/event/show/detail/02my1a1uzic31.html"
            target="_blank"
          >
            こちら
          </a>
          <br />
          デジタルアートと合唱の融合など、新しい演奏会のスタイルを是非とも現場にてお聞き下さい。
        </p>
        <br />
        <h3>配信チケット (ZAIKO)</h3>
        <span className="image-main main">
          <a
            className="use-border"
            href="https://cancaonova.zaiko.io/item/361641"
            target="_blank"
          >
            <img src={haishin} alt="" />
          </a>
        </span>
        <p>
          配信チケットは
          <a
            className="use-border"
            href="https://cancaonova.zaiko.io/item/361641"
            target="_blank"
          >
            こちら
          </a>
          <br />
          遠方にお住まいの方や当日現地にお越し頂けない方も、こちらよりライブ配信を視聴いただけます。
        </p>
        {close}
      </article>

      <article
        id="session-docs"
        className={`${props.article === 'session-docs' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Session Docs</h2>
        <h3>投影資料＆ポスターセッション資料</h3>
        {isSp ? (
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vQlQDa_K5qV4HKGYQv-7YLylUGy57KVaR8-7At_6_-sma0NTVxirPlTM-Ap_Kb-IaQMXMmkZ_5Mok4g/embed?start=false&loop=false&delayms=3000"
            frameborder="0"
            width="100%"
            height="270"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        ) : (
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vQlQDa_K5qV4HKGYQv-7YLylUGy57KVaR8-7At_6_-sma0NTVxirPlTM-Ap_Kb-IaQMXMmkZ_5Mok4g//embed?start=false&loop=false&delayms=3000"
            frameborder="0"
            width="100%"
            height="565"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        )}
        <p>今回の演奏会で使用する投影資料です。ご自由にご覧ください。<br />
          元のファイルは
          <a className="use-border" href="https://docs.google.com/presentation/d/12DQKdC1DXTIy3o9CrehAbub7xcfuhy1_IwsqG7s-TFM/edit?usp=sharing">
            こちら
          </a>
        </p>
        <br />
        <br />
        <h3>楽曲曲説＆パンフレット</h3>
        {isSp ? (
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vS66mDdHx_Svz8XGv1l4ApKFFZF5KrQ2h8dcw5Lezhdo_831d3GtMhp7uWaDtnBpSip1JmjMMfQBkdr/embed?start=false&loop=false&delayms=3000"
            frameborder="0"
            width="100%"
            height="270"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        ) : (
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vS66mDdHx_Svz8XGv1l4ApKFFZF5KrQ2h8dcw5Lezhdo_831d3GtMhp7uWaDtnBpSip1JmjMMfQBkdr/embed?start=false&loop=false&delayms=3000"
            frameborder="0"
            width="100%"
            height="565"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        )}
        <p>CNCN 2.0 の楽曲解説及びパンフレットです。<br />
        元のファイルは
        <a className="use-border" href="https://docs.google.com/presentation/d/1qtWYi8PeojaoP57JlrSrfjPfUm46qxFMtiJW3wNg5P0/edit?usp=sharing">
          こちら
        </a>
        </p>
        <br />
        {close}
      </article>
    </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
