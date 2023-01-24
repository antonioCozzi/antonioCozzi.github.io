import './homepage.scss';

function Homepage() {
    return (
        <div className='container'>
            <div className='name'>
                <h1>Antonio</h1>
                <div className='surname'>
                    <p>Coz&zwnj;zi</p>
                </div>
            </div>
            <div className='pic-container'>
                <object data="Profile Pic.svg" type="image/svg+xml"></object>
            </div>
        </div>
    )
}

export default Homepage;