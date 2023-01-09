import './work-experience.scss';

function WorkExperience({
    company,
    startYear,
    endYear,
    description
}) {
    return (
        <article>
            <div className='work-experience-title'>
                <span>{company}</span>
                <span>{startYear}-{endYear}</span>
            </div>
            <div className='work-experience-description'>
                <span>
                    {description}
                </span>
            </div>
        </article>
    );
}

export default WorkExperience;