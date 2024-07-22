import React,{useState} from 'react';
import '../scss/skills.scss';

const Skills = ({ skillData,toolData }) => {
    const [activeItem, setActiveItem] = useState({index:null,type:null});
    
    const handleMouseHover = (index,type) =>{
        setActiveItem({ index, type });

    }
    const handleMouseLeave = () => { 
        setActiveItem({index:null,type:null});
    }

  return (
    <div id='skill' className='bg-dote'>
          <h2>Tech Skill</h2>
          <div className='skills'>
          <span className='tag'># MY-SKILL</span>
          <ul>
              {skillData?.map((skill,index) => (
                  <li key={index}
                  onMouseOver={() => handleMouseHover(index,'skill')}
                  onMouseLeave={handleMouseLeave}
                  >
                      <img src={skill.image} alt={skill.title} />
                      <div className={activeItem.index === index && activeItem.type ==='skill'? 'active':''}>
                          <h3>{skill.title}</h3>
                          <p>{skill.description}</p>
                      </div>
                </li>
                ))}
          </ul>
          <span className='tag'># MY-TOOL</span>
          <ul>
            {toolData?.map((tool,index) => (
                  <li key={index} onMouseOver={() => handleMouseHover(index,'tool')}
                  onMouseLeave={handleMouseLeave}
                  >
                      <img src={tool.image} alt={tool.title} />
                      <div className={activeItem.index === index && activeItem.type ==='tool'? 'active':''}>
                          <h3>{tool.title}</h3>
                          <p>{tool.description}</p>
                      </div>
                </li>
                ))}
          </ul>
        </div>
    </div>
  )
}

export default Skills