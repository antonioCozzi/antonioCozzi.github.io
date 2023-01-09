import { useState } from 'react';
import Chip from '../chip';
import './languages.scss';

function Languages() {
    const [languages, setLanguages] = useState([
        'ENG',
        'ITA'
    ])

    return (
        <div className='languages-container'>
            {
                languages.map((language, index) => (
                    <Chip
                        key={index}
                        skill={language}
                    />
                ))
            }
        </div>
    );
}

export default Languages;