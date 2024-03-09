<img src="https://github.com/taetaerin/book-store-site/assets/86650546/92c6d830-e503-4eaf-a483-d8eca575f3cd" width="30%" />
<h1>온라인 도서 판매 사이트</h1>

- 도서 카테고리를 제공하여 사용자들이 원하는 도서를 쉽게 찾을 수 있습니다.
- 신간을 클릭하면 한 달 이내에 업데이트된 새로운 도서들을 쉽게 확인할 수 있습니다.
- 장바구니 기능을 통해 사용자는 여러 도서를 관리하고 결제할 수 있습니다.

<br>

## [API 명세서 보러가기](https://emerald-vibraphone-79a.notion.site/API-3005a34250c9430394f4e34b450ea4df?pvs=4)

<br>

<h2>ERD 설계</h2>

![erd](https://github.com/taetaerin/book-store-site/assets/86650546/e68a0515-71cc-482f-a4da-06140bbedcb5)

<h2>개발 언어</h2>

- Front-End : React, TypeScript, styled-components, zustand <br>
- Back-End : Express, MySQL

<br>

<h2>페이지별 기능</h2>

**[ 회원 가입 ]**
- 이메일 주소 형식이 유효하지 않으면 입력창 경구문구가 나타납니다.

**[ 로그인 ]**
- 이메일 주소와 비밀번호를 입력할 시 유효성 검사가 진행됩니다.
- 로그인 시 이메일 주소와 비밀번호가 유효하지 않을 경우 알림 창이 표시 됩니다.
- 로그인 성공 시 홈 화면으로 자동으로 이동합니다.
  
|회원가입|로그인|
|------|---|
|![회원가입](https://github.com/taetaerin/book-store-site/assets/86650546/20fb5ae0-3810-48b2-990a-f72e5ba36c4c)|![로그인](https://github.com/taetaerin/book-store-site/assets/86650546/3e545339-2934-4e43-bf7f-15bd72c18e19)

<br>

**[ 홈 ]**
- 홈 페이지에서는 베스트셀러, 신간, 그리고 리뷰를 볼 수 있습니다.
- 베스트셀러 및 리뷰 섹션은 mock data를 활용하여 실제 데이터가 아닌 예시 데이터를 제공합니다.

|홈|
|------|
|![20240309_134414](https://github.com/taetaerin/book-store-site/assets/86650546/e581b1c6-8a97-4041-8e19-59d8d5baac4a)|

<br>

**[ 도서 카테고리 ]**
- 도서 카테고리를 제공하여 사용자들이 원하는 도서를 찾을 수 있습니다.
- 신간을 클릭하면 한 달 이내에 업데이트된 새로운 도서들을 쉽게 확인할 수 있습니다.
  
|카테고리|신간|
|------|------|
|![카테고리](https://github.com/taetaerin/book-store-site/assets/86650546/f244d08a-391d-4182-bde6-83b76d5c5c88)|![카테고리2](https://github.com/taetaerin/book-store-site/assets/86650546/c831251e-8854-4f9d-8a22-511b7950299c)

<br>

**[ 그리드 / 리스트  ]** 
- 사용자는 홈페이지에서 그리드 또는 리스트 레이아웃을 선택할 수 있습니다.

|그리드|리스트|
|------|------|
|![카테고리](https://github.com/taetaerin/book-store-site/assets/86650546/f244d08a-391d-4182-bde6-83b76d5c5c88)|![리스트](https://github.com/taetaerin/book-store-site/assets/86650546/1f7a507a-c926-46d5-a5a6-584479bcfd6e)

<br>

**[ 책 상세 페이지 ]**
- 책 상세 페이지에서는 선택한 도서의 상세 정보를 확인할 수 있습니다.
- 도서의 제목, 저자, 출간일 등의 기본 정보가 제공됩니다.
- 도서의 상세 설명과 목차를 통해 사용자들이 내용을 미리 확인할 수 있습니다.
- 사용자는 도서를 장바구니에 담거나 관심 목록에 추가할 수 있습니다.

|상세 페이지|
|------|
|![책 상세](https://github.com/taetaerin/book-store-site/assets/86650546/cd9f6629-d218-496a-a5f0-75a1f841de66)|

<br>

**[ 장바구니 ]**
- 사용자가 장바구니에 상품을 추가하려고 할 때, 로그인 여부를 확인합니다. 만약 로그인되어 있지 않다면, 알림 창을 띄워 로그인이 필요하다는 메세지를 보여줍니다.
- 장바구니 페이지에서는 사용자가 선택한 상품들을 한눈에 확인할 수 있습니다.
- 사용자는 장바구니에서 상품을 삭제할 수 있습니다.
- 장바구니 페이지에서는 선택한 상품의 가격을 합산하여 총 결제 금액을 계산하여 표시합니다.

|로그인 X|장바구니|
|------|------|
|![로그인 안햇](https://github.com/taetaerin/book-store-site/assets/86650546/f0459fb4-d4be-41ed-838a-522226254cc8)|![장바구니](https://github.com/taetaerin/book-store-site/assets/86650546/11179f7b-dcff-4ee8-aa94-7d0eee62a785)

<br>

**[ 결제 ]**
- 결제 페이지에서는 사용자가 선택한 상품들과 총 결제 금액을 확인할 수 있습니다.
- 사용자는 배송지 정보를 입력할 수 있습니다.
- 주문서 작성 시 유효성 검사가 진행됩니다. 유효하지 않을 시 입력 창 하단에 경고 문구가 나타납니다.
- 결제 페이지에서는 다음 주소 API를 사용하여 주소 입력 과정을 편리하게 해줍니다. 이를 통해 오타를 방지하고 주소 입력 과정을 간편하게 만들어줍니다.

|결제|주소|
|------|------|
|![주문하기](https://github.com/taetaerin/book-store-site/assets/86650546/74fb8766-58ae-463a-b6db-5795f7711a71)|![주소 찾기](https://github.com/taetaerin/book-store-site/assets/86650546/04e3fe43-fa12-4c8a-978b-73b7adbaa59f)

