import './education.scss';

function Education({
    startYear,
    endYear,
    title,
    description
}) {
    return (
        <article className="education-container">
            <span className="education-period">{startYear}-{endYear}</span>
            <div className="education-body">
                <span>{title}</span>
                <br></br>
                <span>{description}</span>
            </div>
        </article>
    )
}

export default Education;