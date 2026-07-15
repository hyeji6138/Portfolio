/* eslint-disable */
import { skills } from '../Data.js';
import { useState } from 'react';

function Skill({ref}) {
    let [type, setType] = useState('FrontEnd');
    let [skill, setSkill] = useState('HTML');

    function clickSkillType(name, e) {
        e.preventDefault();
        setType(name);
        setSkill(Object.keys(skills[name])[0]);
    }
    return (
        <div className='skills-container' ref={ref}>
            <div className='skills-inner'>
                <h2 className='title'>
                    <p>Skill</p>
                </h2>
                <ul className='skill-types'>
                    {Object.keys(skills).map((typeName, typeIdx) => {
                        return (
                            <li className={typeName == type ? 'active' : null} key={typeIdx}>
                                <a href='#' onClick={(e) => clickSkillType(typeName, e)}>
                                    <p>{typeName}</p>
                                    <div className='toggle-icon'><div className='arrow'></div></div>
                                </a>
                                <div className='sub-container'>
                                    <ul className='skill-list'>
                                        {Object.keys(skills[typeName]).map((skillName, skillIdx) => {
                                            return (
                                                <li onMouseOver={() => {setSkill(skillName);}} className={skillName == skill ? 'active' : null} key={skillIdx}>
                                                    <img src={require(`../images/skills/${skillName}.png`)} alt={skillName} />
                                                    <img src={require(`../images/skills/${skillName}-active.png`)} alt={skillName} />
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <div className='skill-detail'>
                                        <p className='skill-name'>{skill}</p>
                                        <div className='skill-description'>
                                            {skills[type][skill] != undefined ?
                                                skills[type][skill].map((description, descIdx) => {
                                                    return <p key={descIdx}>{description}</p>;
                                                }): null}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Skill;
