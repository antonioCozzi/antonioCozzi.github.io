import { useState } from 'react';
import Chip from '../chip';
import './skills.scss';

function Skills() {
    const [skills, setSkills] = useState([
        'FE',
        'BE',
        'Serverles‌‌‌\u200Cs',
        'Node.js',
        'Angular',
        'TS',
        'React',
        'Python',
        'AWS'
    ])

    return (
        <div className='skills-container'>
            {
                skills.map((skill, index) => (
                    <Chip
                        key={index}
                        skill={skill}
                        isEmpty
                    />
                ))
            }
        </div>
    );
}

export default Skills;