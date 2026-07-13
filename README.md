# CONTROLBIT 공식 웹사이트

컨트롤비트(CONTROLBIT) 회사 웹사이트 소스코드입니다.

- **사이트 주소**: https://www.control-bit.com
- **호스팅**: GitHub Pages (이 저장소의 `master` 브랜치)
- **기술**: 정적 HTML/CSS/JS, Pretendard 웹폰트

## 구조

```
index.html              홈 (한국어)
en/index.html           홈 (영어)
about.html              회사소개
portfolio.html          포트폴리오
contact.html            개발 문의
privacy.html            개인정보 보호정책
products/
  locationx-m16-1.html  LocationX-M16-1 (AOA/AOD 안테나 모듈)
  locationx.html        LocationX Locator
  cb-uwb-anchor.html    CB-UWB Anchor
  moreco3.html          Moreco3 Serial (AHRS)
assets/
  style.css             공용 스타일시트
  main.js               공용 스크립트
  *.png / *.jpg         이미지
```

## 수정 방법

HTML 파일을 직접 수정한 뒤 `master` 브랜치에 푸시하면 1~2분 내에 사이트에 반영됩니다.

```bash
git add -A
git commit -m "내용 수정"
git push origin master
```

## 회사 정보

- 컨트롤비트 (CONTROLBIT) — 임베디드 펌웨어 외주개발 전문
- 경기도 부천시 양지로 229, 924호 (옥길동, 골든IT타워)
- info@control-bit.com · +82-32-343-4658
