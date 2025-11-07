export const tabs = ["매수", "매도", "임대", "임차", "건물관리"]


export const valueInit = {
    type: "매도",
    name: "",
    phoneNumber: "",
    content: ""
}

export const inputColumns = [
    {title: "성함(법인명)", id: "name"},
    {title: "연락처", id: "phoneNumber"},
    {title: "문의 내용", id: "content"},
]


export const tradeFeature = [
    '· 아무것도 모르는 상태에서 처음으로 건물을 구입하려고 할 때',
    '· 건물 노후화로 신축을 할 지, 매각을 할 지 고민이 될 때',
    '· 실패없이 임차인의 선호도가 높은 건물을 짓고 싶을 때',
    '· 더 큰 건물이나 입지가 좋은 곳으로 건물을 갈아타고 싶을 때',
    '· 증여, 상속, 건강 상 문제 등으로 건물을 처분하고 싶을 때'
]

export const rentFeature = [
    '· 임차인의 선호조건을 빠르게 대응',
    '· 임대료를 더 받을 수 있는 리모델링 방법, 선호시설, 주차관리시스템 등을 적용',
    '· 임차인의 객관적인 정보수집 및 심층면접을 통해 우량임차인 선별',
    '· 건축 시점부터 선호 업종이 입주할 수 있도록 컨설팅'
]

export const managementFeature = [
    '· 작은 건물 관리를 위해 상주 관리인을 둘 필요 해소',
    '· 임차인의 컴플레인부터 소송까지 대리 대응',
    '· 청소, 관리비 고지 및 수금, 건물 수리, 소방점검 까지 등 관리 총무 대행',
]