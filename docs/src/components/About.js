/* eslint-disable */
import { personal_info } from "../Data.js"

function About({ ref }) {
    return (
        <div className="about-container" ref={ref}>
            <div className="about-inner">
                <h2 className="title"><p>About Me</p></h2>
                <p className="main-text">안녕하세요. 웹 개발자 정혜지입니다.</p>
                <div className="contents">
                    <div className="left-content">                        
                        <div className="sub-text">
                            <p>사용자 요구사항을 설계하고 의도한 대로 동작하게 만드는 과정에 깊이 몰입할 수 있으며, 요청과 응답이 정확히 맞물릴 때 웹 개발의 재미를 느낍니다.</p>
                            <p>웹은 단순한 화면 구현이 아닌 하나의 시스템입니다. 사용자에게 필요한 정보를 효과적으로 전달할 수 있는 구조를 설계하고, 요청과 처리, 결과가 자연스럽게 연결되도록 구현하겠습니다.</p>
                        </div>
                        <div className="links">
                            <a href="https://www.notion.so/Jeong-Hyeji-a7c7eebdf9ec4278b23f5c27ffbcf8ef?source=copy_link" target="_blank"><img src={require("../images/skills/notion-link.png")} alt="노션 링크" /></a>
                            {/* <a href="https://blog.naver.com/904log" target="_blank"><img src={require("../images/skills/blog-link.png")} alt="네이버블로그 링크"/></a> */}
                            <a href="https://github.com/904git" target="_blank"><img src={require("../images/skills/github-link.png")} alt="깃허브 링크"/></a>
                        </div>
                        <InfoBox title={'Career'} list={personal_info['Career']}></InfoBox>
                        <InfoBox title={'License'} list={personal_info['License']}></InfoBox>
                    </div>
                    <div className="center-content">
                        <InfoBox title={'Education'} list={personal_info['Education']}></InfoBox>
                        <InfoBox title={'Award'} list={personal_info['Award']}></InfoBox>
                    </div>
                    <div className="right-content">
                        <div className="my-img"><img src={require('../images/sample.png')} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function InfoBox(props){
    return (
        <div className="info-box">
            <div className="info-title">
                <p>{props.title}</p>
                {/* <span>></span> */}
            </div>
            <div className={`info-list ${props.title}`}>
                {
                    props.list.map((content, idx) => {
                        return (
                            <div className="info-line" key={idx}>
                                {
                                    content.map((line, i) => {
                                        return (
                                            <p key={i}>{line}</p>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default About;