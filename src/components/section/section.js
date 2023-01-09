import './section.scss';

function Section({
    isStarEmpty = false,
    title,
    children
}) {
    return (
        <div className='section-container'>
            <div className="section-header">
                {
                    isStarEmpty ?
                        <object data="Rectangle_empty.svg" type="image/svg+xml"></object>
                        :
                        <object data="Rectangle_full.svg" type="image/svg+xml"></object>
                }
                <div className='section-body'>
                    <p className='section-title'>{title}</p>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Section;