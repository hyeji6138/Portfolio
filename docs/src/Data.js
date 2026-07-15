/* eslint-disable */
let skills = {
    'FrontEnd': {
        'HTML': ['적절한 태그를 사용해서 HTML 문서를 작성할 수 있습니다.', ],
        'CSS': ['HTML 문서 레이아웃과 시각적 요소를 요구사항에 맞게 구현할 수 있습니다.', '애니메이션 효과를 적용할 수 있습니다.'],
        'Javascript': ['코드를 작성해서 동적인 프로그램을 구현할 수 있습니다.', '원하는 요소를 선택해 특정한 동작을 지시할 수 있습니다.'],
        'JQuery': ['코드를 작성해서 동적인 프로그램을 구현할 수 있습니다.', '원하는 요소를 선택해 특정한 동작을 지시할 수 있습니다.'],
        'Bootstrap': ['부트스트랩 라이브러리를 사용해서 레이아웃 및 컴포넌트를 구현할 수 있습니다.'],
        'React': ['React 프로젝트를 생성하고 필요한 요소에 맞게 컴포넌트를 제작할 수 있습니다.', 'state로 데이터의 상태관리를 할 수 있습니다.'],
        'VueJS': ['Vue 프로젝트를 생성하고 필요한 요소에 맞게 컴포넌트를 제작할 수 있습니다.', '서버와 비동기식 통신을 할 수 있습니다.'],
    },
    'BackEnd': {
        'Java': ['복잡한 알고리즘 문제를 해결 할 수 있습니다.', '모듈에 필요한 클래스와 함수를 선언할 수 있습니다.'],
        'Python': ['간단한 알고리즘 문제를 해결 할 수 있습니다.', '모듈에 필요한 클래스와 함수를 선언할 수 있습니다.'],
        'Spring': ['빌드 툴(maven, gradle)을 사용해서 REST API를 구현할 수 있습니다.', 'MyBatis를 사용하여 DB에 접근할 수 있습니다.'],
        'MySQL': ['필요한 데이터를 얻기 위한 간단한 쿼리를 작성할 수 있습니다.', ],
    },
    'DevOps' : {
        'AWS': ['제작한 프로젝트를 Docker를 사용해 AWS 환경에 배포할 수 있습니다.'],
        'Docker': ['제작한 프로젝트로 Docker image를 생성할 수 있습니다.', '여러 Docker Container를 생성하고 모니터링 할 수 있습니다.'],
        'Jenkins': ['gitlab, bitbucket과 연동하여 프로젝트 자동 빌드 및 자동 배포 환경을 구성할 수 있습니다.'],
        'Github': ['간단한 명령어를 통해 Repository에 파일을 수정하고 업로드 할 수 있습니다.', '커밋 메세지를 작성하고 PR(Pull Request)를 생성하여 코드 형상 관리를 할 수 있습니다.'],
    },
    'Design' : {
        'Figma': ['UI 디자인을 구상하고 표현할 수 있습니다.'],
        'Photoshop': ['이미지 편집을 위한 도구(툴)를 사용할 수 있습니다.'],
        'Illustrator': ['간단한 일러스트를 그리거나 편집을 할 수 있습니다.'],
        'After Effect': ['동영상에 간단한 애니메이션 효과를 삽입할 수 있습니다.'],
        'Premiere': ['영상 컷 편집 또는 자막을 편집할 수 있습니다.'],
    }
}

let projects = [
    {
        'img': 'Portfolio', 'name': 'Portfolio', 'date': '2025.09 ~ ',
        'description': '포트폴리오 웹페이지',
        'tags': ['FrontEnd', 'Web', 'Personal'],
        'url': 'https://www.notion.so/2a36d34f2e078093b6e8f2f0cc1eb61b?source=copy_link'
    },
    {
        'img': 'ArchiveCalendar', 'name': '아카이브 캘린더', 'date': '2026.05',
        'description': '캘린더 형식의 사진 아카이브',
        'tags': ['FrontEnd', 'Web', 'Mobile', 'Personal'],
        'url': 'https://app.notion.com/p/3946d34f2e07803f8788e3ca19061736?source=copy_link'
    },
    {
        'img': 'Earth Arcade', 'name': '뿅뿅 지구오락실', 'date': '2025.08 ~ 2025.09',
        'description': 'Tvn 예능 \'뿅뿅 지구오락실(Earth Arcade)\' 소개 페이지',
        'tags': ['FrontEnd', 'Web', 'Personal'],
        'url': 'https://www.notion.so/27f6d34f2e07804c949ef62c11104aa2?source=copy_link'
    },
    {
        'img': 'Wrap Eat', 'name': 'WARP-EAT', 'date': '2025.06 ~ 2025.08',
        'description': '음식 포장 주문 서비스',
        'tags': ['FrontEnd', 'Web', 'Mobile', 'Personal'],
        'url': 'https://www.notion.so/WRAP-EAT-27f6d34f2e0780df8200cabb88870684?source=copy_link'
    },
    {
        'img': 'HoneyPot', 'name': '여행꿀단지', 'date': '2025.05 ~ 2025.06',
        'description': '국내 여행 플래너 서비스',
        'tags': ['FrontEnd', 'Web', 'Team'],
        'url': 'https://www.notion.so/27f6d34f2e078000a8c8e2a462f35baa?source=copy_link'
    },
    {
        'img': 'BTS', 'name': 'BTS(Back To School)', 'date': '2021.04 ~ 2021.05',
        'description': 'Z세대를 위한 학습 메타버스 플랫폼',
        'tags': ['FrontEnd', 'Web', 'Team'],
        'url': 'https://app.notion.com/p/BTS-Back-To-School-dc3a534b2a7a491d8f09ad887636671f?source=copy_link'
    },
    {
        'img': 'Sera', 'name': 'Sera(세라)', 'date': '2021.02 ~ 2021.04',
        'description': '코스메틱 추천 서비스',
        'tags': ['BackEnd', 'Web', 'Team'],
        'url': 'https://app.notion.com/p/Sera-f1b43d92c5f8484c936c2137a0479ea3?source=copy_link'
    },
    {
        'img': 'Artmate', 'name': 'Artmate(아트메이트)', 'date': '2021.01 ~ 2021.02',
        'description': '전시회 큐레이팅 SNS 서비스',
        'tags': ['BackEnd', 'Web', 'Mobile', 'Team'],
        'url': 'https://app.notion.com/p/Artmate-d94e9eb715f14d0a8bdbec12eccf2763?source=copy_link'
    },
]

let personal_info = {
    'Education': [
        ['2025.05 ~ 2025.09', 'MBC아카데미 컴퓨터국비지원교육센터', 'AI를 활용한 웹디자인 영상 플랫폼 기획개발자 양성 과정 수료'],
        ['2020.07 ~ 2021.06', '삼성전자', '삼성 청년 소프트웨어 아카데미(SSAFY) 4기 수료'],
        ['2016.03 ~ 2020.08', '충남대학교', '전파정보통신공학과 졸업']
    ],
    'Award': [
        ['2025.09 MBC아케데미 능력단위평가 최우수상'],
        ['2021.05 삼성청년SW아카데미 2학기 자율PJT 2등 수상'],
        ['2021.04 삼성청년SW아카데미 2학기 특화PJT 2등 수상'],
        ['2021.02 삼성청년SW아카데미 2학기 공통PJT 2등 수상'],
        
    ],
    'Career': [['2021.07 ~ 2022.08 마음AI [AICC 솔루션개발팀]']],
    'License': [['2026.06 SQL 개발자'], ['2024.09 정보처리기사']],
}

let project_detail = [
    {},
    {},
    {},
    {},
]

export {skills, projects, personal_info};