/* eslint-disable */
function Contact({ref}){
    return (
        <div className="contact-container" ref={ref}>
            <div className="contact-inner">
                <h1 className="title">Contact</h1>
                <div className="contact-info">
                    <p>포트폴리오를 읽어주셔서 감사합니다.</p>
                    <p>더 궁금한 내용이나 문의는 아래의 메일 주소를 통해 편하게 연락주세요 :)</p>
                    <address className="email">hyeji6138@gmail.com</address>
                </div>
            </div>
        </div>
    );
}

export default Contact;