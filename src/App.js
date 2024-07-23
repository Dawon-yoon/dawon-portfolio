import './App.scss';
import Nav from './components/Nav';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import ScrollTop from './components/ScrollTop';

function App() {
  const path = process.env.PUBLIC_URL;
  
  const skillData = [
    {
      title: 'HTML',
      image: `${path}/img/logos/html.png`,
      description:'ウェブ標準を守ります。セマンティックタグを使ってマークアップができます。',
    },
    {
      title: 'CSS',
      image: `${path}/img/logos/css.png`,
      description:'display、position、gridを適切に使用してレスポンシブなWEBを作ります。'
    },
    {
      title:'Javascript',
      image:`${path}/img/logos/js.png`,
      description:'JavaScriptの配列、メソッド、DOMを理解しており、動的で双方向のWEBを作ります。'
    },
    {
      title: 'SCSS',
      image: `${path}/img/logos/sass.png`,
      description:'変数とミックスインを使用して繰り返し発生するスタイルを効率的に管理できます。'
    },
    {
      title:'React',
      image: `${path}/img/logos/react.png`,
      description: 'react query等の状態管理ライブラリー使用し状態の管理経験があります。redux-toolkitを利用した非同期処理ができます。'
    },
    {
      title: 'Three.js',
      image: `${path}/img/logos/threejs.png`,
      description: '3Dモデル等に簡単なアニメイションを適用したシンプルな3Dウェブサイトが作れます。glsl、R3Fの使用経験があります。'
    },
  ]

  const toolData = [
    {
      title: 'VS CODE',
      image: `${path}/img/logos/vscode.png`,
      description:'使用しているコーディングツールです。便利な拡張プログラムを設置し使用しています。'
    },
    {
      title: 'Github',
      image: `${path}/img/logos/git.png`,
      description:'clone,pull,commit,pushなどgitコマンドを使用しチームや個人のプロジェクトを管理します。'
    },
    {
      title: 'Trello',
      image: `${path}/img/logos/trello.png`,
      description:'チームプロジェクトの際にスクラム開発に使いました。'
    },
    {
      title: 'Blender',
      image: `${path}/img/logos/blender.png`,
      description:'簡単な3Dモデルが作れます。'
    }
  ]
  return (
    <div>
      <Nav />
      <ScrollTop />
      <Intro />
      <About />
      <Skills skillData={skillData} toolData={toolData} />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
