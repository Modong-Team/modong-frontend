# modong-frontend

[모두의 동아리] frontend 레포지토리

---

## 기술 스택

### Frontend

### Infra

### Testing

### Communication / Etc.

---

## 시스템 구성도

- 개발 서버

- 운영 서버

---

## CI/CD 플로우 다이어그램

- 개발

- 운영

---

## 브랜치 전략

### Gitlab-flow

배포, 개발, 그사이에 staging 브랜치를 두는 전략

![다운로드](https://user-images.githubusercontent.com/55343124/196999605-a6eba4e9-9dc3-47d3-887e-5961b8c5ab6d.png)

- Develop
  - 개발 브랜치. 피쳐 개발 시 포크 후 PR을 develop브랜치에 날려 진행한다.
  - 전체적인 테스트 후 기능이 보장되면 staging branch로 머지한다.
- Staging
  - 개발-배포 사이에 변경사항을 바로 배포하지 않고 test server에 배포하고 QA테스트를 수행하며 시간을 두고 master브랜치에 반영하는 브랜치
  - 테스트 후 배포할 준비가 되면 master브랜치에 머지한다.
- Master
  - 테스트가 끝난 후 실제 배포하기위한 브랜치

1. local에 repository clone
2. 개발 feature 브랜치 작성
   - ex) feature/findStore
3. 개발 후 develop 브랜치에 PR (git push origin feature/findStore)
4. 코드리뷰 후 리뷰어가 머지
5. 머지 후 원격 feature 브랜치 제거, 로컬 feature 브랜치 제거
6. QA 테스트 후(비용 문제로 인한 Staging 서버 및 브랜치 생략) Production 브랜치에 머지

---

## 머지 전략

### Squash and Merge

feature 브랜치의 커밋 내용을 합쳐 새로운 단일 커밋으로 만든 후 중심 브랜치에 병합한다.
커밋 히스토리 그래프의 가독성을 높이기 위함이다.
일반적인 머지 전략에 비해 정보력이 떨어진다는 단점이 있기 때문에 각 브랜치의 작업 단위는 light하게 설계한다.

#### 머지 예시

> feature 브랜치에서 작업한 커밋이 여러 개일 경우, feature 브랜치의 이름으로 스쿼시된 후 머지되며 커밋의 이름들이 세부 내용으로 남는다.

<img width="627" alt="Screen Shot 2022-10-29 at 12 58 53 AM" src="https://user-images.githubusercontent.com/98504939/198681436-c72b18c8-6e0d-4ffa-b732-8712b049e707.png">

> feature 브랜치에서 작업한 커밋이 한 개일 경우, 커밋의 이름이 그대로 유지되어 머지된다.

<img width="372" alt="Screen Shot 2022-10-31 at 9 08 47 AM" src="https://user-images.githubusercontent.com/98504939/198908686-93cfd7d3-637d-4a86-8afa-be308aba86f9.png">

## 커밋 컨벤션

<유다시티 커밋 컨벤션>

### 커밋 메시지 구조

각 파트 사이에 엔터 하나를 둔다.

```jsx
<type>: <subject> (#<ISSUE>)

body(optional)
```

#### <Type>: <Subject> (#<Issue>)

<태그>: <제목> 순서로 기입(”:” 뒤에만 스페이스 남긴다.). 태그의 첫글자는 대문자로 쓴다. Subject에 마침표 찍지 않는다. 맨 뒤 괄호에 지라 이슈 ID를 기입한다.

- Feat: 새로운 기능 추가, 기능 로직 변경
- Fix: 버그 수정
- Docs: 문서 수정, 주석
- Style: 코드 포맷팅, 코드 변경이 없는 경우
- Refactor: 코드 리팩토링 (기능 변화 X)
- Test: 테스트코드 추가
- Chore: 빌드 업무 수정, 패키지 매니저 수정

#### Body(optional)

커밋에 대한 설명을 작성한다. 없어도 무방하다. 한줄 당 72자 내로 작성한다(그 이상은 엔터 후 작성). 무엇을 변경했는지, 왜 변경했는지를 작성한다.

#### 커밋 예시

```jsx
Feat: 회원 가입 기능 구현 (#WTD-18)

아이디 중복검사, 비밀번호 유효성검사 개발
```

<img width="314" alt="스크린샷_2022-06-29_오후_4 14 07" src="https://user-images.githubusercontent.com/55343124/195807384-b20a49f4-2c54-4a2c-a6a0-62cc24116773.png">
