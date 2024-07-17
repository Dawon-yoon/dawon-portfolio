import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCodeBranch, faTableCellsLarge,faGear } from '@fortawesome/free-solid-svg-icons'
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faCopy, faCircleUser } from '@fortawesome/free-regular-svg-icons';
import Stars from './Stars';
import '../scss/about.scss';


const About = () => {
  return (
      <div className='wrapper about'>
          <Stars/>
          <h2>about me</h2>
          <div className='browser'>
              <div className='header'>
                  <span className='red'></span>
                  <span className='yellow'></span>
                  <span className='green'></span>
              </div>
              <div className='content'>
                    <div className='icons'>
                        <div className='top-icons'>
                            <span><FontAwesomeIcon icon={faCopy} /></span>
                            <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                            <span><FontAwesomeIcon icon={faCodeBranch} /></span>
                            <span><FontAwesomeIcon icon={faTableCellsLarge} /></span>
                            <span><FontAwesomeIcon icon={faGitAlt} /></span>
                        </div>  
                        <div className='bottom-icons'>
                          <span><FontAwesomeIcon icon={faCircleUser} /></span>
                          <span><FontAwesomeIcon icon={faGear} /></span>
                        </div>
                  </div>
                  <div className='codes'>
                      <p><span className='num'>1</span><span className='yellow'>私のポートフォリオをご覧いただきありがとうございます。</span></p>
                      <p><span className='num'>2</span></p>
                      <p><span className='num'>3</span>クリエイティブなウェブサイトを作る仕事に憧れ</p>
                      <p><span className='num'>4</span><span className='pink'>フロントエンドエンジニア</span>になるための勉強を始めました。</p>
                      <p><span className='num'>5</span>考えたことをすぐに行動に移す<span className='green'>積極性</span>を活かして</p>
                      <p><span className='num'>6</span>絶えず<span className='blue'>アイデアを実現する</span>フロントエンドエンジニアになります。</p>
                      <p><span className='num'>7</span></p>

                      <p className='code'>
                          <span className='num'>8</span><span className='blue'>&lt;</span><span className='red'>script</span ><span className='blue'>&gt;</span>
                      </p>
                      <p className='code'>
                          <span className='num'>8</span><span className='comment'>//PROFILE</span>
                      </p>
                      <p className='code'>
                          <span className='num'>9</span>　<span className='pink'>const</span> PROFILE <span className='blue'>=</span> <span className='yellow'>&#123;</span>
                      </p>
                      <p className='code'><span className='num'>10</span>　　　name<span className='blue'>:　'</span>ユン・ダウォン<span className='blue'>'</span>,</p>
                      <p className='code'><span className='num'>11</span >　　　 brith<span className='blue'>:　'</span>1997.09.12<span className='blue'>'</span>,</p>
                      <p className='code'><span className='num'>12</span>　　　nationality<span className='blue'>:　'</span>韓国<span className='blue'>'</span>,</p>
                      <p className='code'><span className='num'>13</span>　<span className='yellow'>&#125;</span></p>
                      <p className='code'><span className='num'>14</span><span className='blue'>&lt;/</span><span className='red'>script</span><span className='blue'>&gt;</span></p>
                      <p><span className='num'>15</span></p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default About