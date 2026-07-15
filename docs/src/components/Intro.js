/* eslint-disable */
function Intro({ref}){
    return (
        <div className="intro-container" ref={ref}>
            <div className="title-container">
                <h1 className="title">
                    <p>Portfolio</p>
                    <p className="name">Jeong Hyeji</p>
                </h1>
                <div className='bg-star1'></div>
                <div className='bg-star2'></div>
                <div className='bg-star3'></div>
                <div className="bg-clover1"></div>
                <div className="bg-clover2"></div>
            </div>
            <a><span></span>Scroll Down</a>
            {/* <div className="test">
                <div className="circle">
                    <div className="star"></div>
                </div>
            </div> */}
        </div>
    );
}

export default Intro;