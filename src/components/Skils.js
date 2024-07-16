import React from 'react';
import '../scss/skills.scss';

const Skils = () => {
  const path = process.env.PUBLIC_URL
  return (
    <div className='wrapper skills'>
      <h2>tech skill</h2>
      <p>アイコンにマウスを乗せてください。</p>
      <span className="tag-btn"># My-skill</span>
      <ul>
        <li>
          <img src={`${path}/img/logos/html5.png`} alt='html icon'/>
        </li>
        <li>
          <img src={`${path}/img/logos/css3.png`} alt='css icon' />
        </li>
        <li><img src={`${path}/img/logos/sass.png`} alt='sass icon' /></li>
        <li><img src={`${path}/img/logos/js.png`} alt='js icon' /></li>
        <li><img src={`${path}/img/logos/reactjs.png`} alt='react icon' /></li>
        <li><img src={`${path}/img/logos/`} alt='three icon' /></li>
        <li><img src={`${path}/img/logos/`} alt='bootstrap icon' /></li>
        <li><img src={`${path}/img/logos/`} alt='r3f icon' /></li>
      </ul>
      <span className="tag-btn"># My-tools</span>
      <ul>
        <li><img src={`${path}/img/logos/vscode.png`} alt='vscode icon' /></li>
        <li><img src={`${path}/img/logos/git.png`} alt='git icon' /></li>
        <li><img src={`${path}/img/logos/slack.png`} alt='slack icon' /></li>
        <li><img src={`${path}/img/logos/`} alt='notion icon' /></li>
        <li><img src={`${path}/img/logos/`} alt='blender icon' /></li>
        
      </ul>

    </div>
  )
}

export default Skils