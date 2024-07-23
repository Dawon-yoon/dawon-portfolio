import React from 'react';
import Carousel from './Carousel';

const Projects = () => {
  const path = process.env.PUBLIC_URL;
  const projectsData = [
    {
      title: 'Fennec',
      work: '個人プロジェクト',
      image:`${path}/img/project/fennec.png`,
      description: 'バックブランドのfennecのオンラインストアです。reduxツールキットを利用しプロダクトデータの非同期処理と状態の管理をしました。レスポンシブ対応です。色んな大きさのデバイスから利用できます。',
      tags: ['#React', '#SCSS', '#Redux', '#Jason-server'],
      github: 'https://github.com/Dawon-yoon/shoppingApp-fennec',
      view: 'https://fennec-by-dawon.netlify.app/'
    },
    {
      title: 'Floating portfolio',
      work: '個人プロジェクト',
      image:`${path}/img/project/floating.png`,
      description: 'floatingアニメーションを適応した3dモデルの画面からiframeで包んだhtmlポートフォリオサイトが見れるサイトです。',
      tags: ['#R3f', '#Drei','#レスポンシブ'],
      github: 'https://github.com/Dawon-yoon/floating-portfolio',
      view:'https://dawon-floating-portfolio.netlify.app/'
    },
    {
      title: 'Newbalance landing page',
      work: '個人プロジェクト',
      image:`${path}/img/project/newLP.png`,
      description: 'newbalanceサイトのランディングページをBootstrapを使用してプロダクトカードをレスポンシブ対応するように作りました。',
      tags: ['#Html', '#CSS', '#Bootstrap', '#レスポンシブ'],
      github: 'https://github.com/Dawon-yoon/newbalance-landingpage',
      view:'https://stirring-cat-d1ecdf.netlify.app/'
    },
    {
      title: 'Mountain watch',
      work: '個人プロジェクト',
      image:`${path}/img/project/mountain.png`,
      description: 'svgをパラレクススクロールを利用してマウスのスクロールに合わせ、動くようなアニメーションを作りました。gridを使って、ゲームイメージやテキストを配置しました。',
      tags: ['#SVG', '#Javascript', '#Parallax Scroll'],
      github: 'https://github.com/Dawon-yoon/mountain-watch?tab=readme-ov-file',
      view:'https://dawon-yoon.github.io/mountain-watch/'
    },
    {
      title: 'Muvic',
      work: 'チームプロジェクト',
      image:`${path}/img/project/muvic.png`,
      description: '映画情報・OSTサイトです。プロジェクトオーナーとしてプロジェクトの日程管理や会議を主導しました。主にdetailページを開発しました。韓国語のサイトです。',
      tags: ['#Team', '#Javascript', '#TMDB', '#Spotify', '#api'],
      github: 'https://github.com/Dawon-yoon/muvic-teamproject',
      view:'https://muvic23.netlify.app/'
    },
    {
      title: '数字推測ゲーム',
      work: '個人プロジェクト',
      image:`${path}/img/project/numbergame.png`,
      description: 'random関数を使った簡単な数字推測ゲームです。アイフォンのモックアップを使用してアプリを使っているようなデザインにしています。',
      tags: ['#Javascript'],
      github: 'https://github.com/Dawon-yoon/number-guess-game',
      view:'https://fancy-sprinkles-22fa4d.netlify.app/'
    },
    {
      title: 'Portfolio',
      work: '個人プロジェクト',
      image:`${path}/img/project/portfolio.png`,
      description: 'React,SCSSを使用したプロジェクトを展示しているポートフォリオサイトです。スクロールアニメーション・hoverアニメーション等を利用してinteractiveな使用感にしています。',
      tags: ['#React','#SCSS','#interactive','#responsive'],
      github: 'https://github.com/Dawon-yoon/dawon-portfolio',
      view:'https://yoondawon-portfolio.netlify.app'
    }
  ]
  return (
    <div id='project' className='wrapper project'>
      <h2>Project</h2>
      <Carousel item={projectsData} />
    </div>
  )
}

export default Projects