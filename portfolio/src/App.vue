<template>
  <div class="min-h-screen bg-white text-gray-900 px-10 mt-8 mb-16 max-w-7xl py-8 lg:px-16 mx-auto">
    
    <div class="grid grid-cols-1 gap-y-4">
      <!-- ABOUT ME & CONTACT -->
      <section id="about" class="flex justify-between items-start pb-6 border-b border-gray-300">
        <div class="w-1/2 pr-10">
          <h2 class="text-2xl font-bold text-left text-blue-500 flex items-center">
            <span class="mr-2">👨🏻‍💻</span> ABOUT ME
          </h2>
          <p class="mt-4 text-md text-gray-700 leading-relaxed">
            안녕하세요. NodeJS 백엔드 개발자 심다송입니다.<br>
            대학교 1학년 1학기, 콘솔창에 "Hello World"를 출력하며 개발자로서의 첫 발자국을 내딛었습니다.<br>
            오로지 소비의 수단이었던 노트북을 생산의 수단으로서 활용하는 재미에 빠진지 어느덧 4년이 지났습니다.<br>
            아직 배울 것이 많지만, 그만큼 더 성장할 수 있음에 감사합니다.<br>
            개발과 동료, 그리고 JS를 사랑합니다.
          </p>
        </div>
        <div class="w-1/2 pl-10">
          <h2 class="text-2xl font-bold text-left text-blue-500 flex items-center">
            <span class="mr-2">📩</span> CONTACT
          </h2>
          <ul class="mt-3 text-md text-gray-700 leading-relaxed">
            <li><strong class="text-blue-500">Email:</strong> <a href="https://fb.com/10008001034636" class="underline">song58449@gmail.com</a></li>
            <li><strong class="text-blue-500">Facebook:</strong> <a href="https://fb.com/10008001034636" class="underline">fb.com/10008001034636</a></li>
            <li><strong class="text-blue-500">Github:</strong> <a href="https://github.com/SimDaSong" class="underline">github.com/SimDaSong</a></li>
            <li><strong class="text-blue-500">Velog:</strong> <a href="https://velog.io/@software" class="underline">velog.io/@software</a></li>
            <li><strong class="text-blue-500">RocketPunch:</strong> <a href="https://rocketpunch.com/@simdasong" class="underline">rocketpunch.com/@simdasong</a></li>
          </ul>
        </div>
      </section>
      
      <!-- EDUCATION -->
      <section id="education" class="py-5 border-b border-gray-200">
        <p class="text-2xl font-bold text-default tracking-wide text-blue-500">EDUCATION</p>
        <div class="md:grid md:grid-cols-5 md:gap-6 mt-2 text-md text-gray-700">
          <div>
            <p class="text-sm font-large text-gray-500">2017.02 ~ 2021.08</p>
            <p class="break-words font-bold sm:mt-0">고려대학교 세종캠퍼스</p>
          </div>
          <div class="mt-4 md:mt-0 col-span-4">
            <ul>
              <li>컴퓨터융합소프트웨어학과</li>
              <li class="font-bold">4.13 / 4.5</li>
            </ul>
          </div>
        </div>
      </section>
      
      <!-- SKILLS -->
      <section id="skills" class="py-8 border-b border-gray-300">
        <h2 class="text-2xl font-bold text-left text-blue-500 flex items-center">
          <span class="mr-2">🛠</span> SKILLS
        </h2>
        <div class="md:grid md:grid-cols-5 md:gap-6 mt-6 text-md text-gray-700">
          <div>
            <p class="text-sm font-large text-gray-500 font-bold">Backend</p>
          </div>
          <div class="mt-4 md:mt-0 col-span-4">
            <ul class="list-disc pl-6">
              <li>Node.js (Express)</li>
              <li>Javascript (ES6+), Typescript</li>
              <li>MySQL, Sequelize, AWS RDS</li>
              <li>AWS EC2, AWS S3</li>
            </ul>
          </div>
          <div class="mt-6">
            <p class="text-sm font-large text-gray-500 font-bold">Frontend</p>
          </div>
          <div class="mt-4 md:mt-0 col-span-4">
            <ul class="list-disc pl-6">
              <li>HTML5, CSS3, Javascript (ES6+), Typescript</li>
              <li>React, Next.js</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
          <div class="mt-6">
            <p class="text-sm font-large text-gray-500 font-bold">Tools</p>
          </div>
          <div class="mt-4 md:mt-0 col-span-4">
            <ul class="list-disc pl-6">
              <li>Git, GitHub</li>
              <li>Slack, Notion, Jetbrain Space</li>
              <li>Webstorm, VSCode, Vim</li>
              <li>Postman</li>
              <li>Sentry</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- CAREER -->
      <section id="career" class="py-8 border-b border-gray-300">
        <h2 class="text-2xl font-bold text-left text-blue-500 flex items-center">
          <span class="mr-2">💼</span> CAREER
        </h2>
        <div class="md:grid md:grid-cols-5 md:gap-6 mt-6 text-md text-gray-700">
          <div>
            <p class="text-sm font-large text-gray-500">2019.12 ~ 2020.02</p>
            <p class="break-words font-bold sm:mt-0">지에이시스템</p>
            <p class="text-gray-600">개발 인턴</p>
          </div>
          <div class="mt-4 md:mt-0 col-span-4">
            <p>교내 산학연계 프로그램을 통해 SI 회사인 지에이시스템에서 2개월간 인턴으로 근무하였습니다.<br>
              직접적으로 개발에 참여하진 못했지만, 소프트웨어 개발 회사의 개발 프로세스와 협업 방식에 대해 경험해 볼 수 있었습니다.</p>
          </div>
          <div class="mt-6">
            <p class="text-sm font-large text-gray-500">2020.03 ~ 2021.03</p>
            <p class="break-words font-bold sm:mt-0">오늘의꽃</p>
            <p class="text-gray-600">백엔드 개발자</p>
          </div>
          <div class="mt-4 md:mt-0 col-span-4">
            <p>새벽 꽃 시장 유통업체인 오늘의꽃에서 클라이언트/판매자/관리자/물류관리자 페이지 기능 추가 및 유지 보수를 담당했습니다.<br>
              Node.js(Express), MySQL(5.7)(Amazon RDS), Sequelize / ejs / Amazon EC2, Amazon S3, Amazon Lambda, Sentry, pm2, Git, Github</p>
            <p class="mt-4 font-bold">기능 추가</p>
            <ul class="list-disc pl-6">
              <li>포인트 기능 구현</li>
              <li>Iamport 간편 결제 기능 구현</li>
              <li>쿠폰 기능 구현</li>
              <li>회원 등급제 기능 구현</li>
              <li>메인 페이지를 관리자가 수정할 수 있게 하는 기능 추가</li>
              <li>그 외 기능 추가 요구사항 구현</li>
            </ul>
            <p class="mt-4 font-bold">유지 보수</p>
            <ul class="list-disc pl-6">
              <li>DB 내 불명확한 column 수정 및 data cleansing</li>
              <li>slow query 개선</li>
              <li>API 응답 속도 개선</li>
              <li>레거시 코드 리팩토링</li>
              <li>모니터링 환경 구축</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- AWARDS -->
      <section id="awards" class="py-8 border-b border-gray-300">
  <h2 class="text-2xl font-bold text-left text-blue-500 flex items-center">
    <span class="mr-2">🏆</span> AWARDS
  </h2>
  <div class="md:grid md:grid-cols-5 md:gap-6 mt-6 text-md text-gray-700">
    <div class="col-span-1">
      <p class="text-sm font-large text-gray-500">2021-08 ~ 2021-11</p>
      <p class="font-bold">2021 관광데이터 활용 공모전</p>
      <p class="text-gray-600">한국관광공사, Kakao</p>
    </div>
    <div class="col-span-4">
      <p>Moment, 세상에 하나뿐인 나만의 특별한 여행지도를 프로젝트로 <strong>장려상</strong>을 수상했습니다.</p>
      <p><strong>Back-end 코드, Front-end 코드</strong></p>
      <p>저는 백엔드 파트 팀원으로서 카카오 스토리 API 연동, 관광데이터 API 연동 기능을 구현하였고 환경 변수, Morgan, Husky 등의 프로젝트 세팅을 담당했습니다.</p>
    </div>
    <div class="col-span-1 mt-6">
      <p class="text-sm font-large text-gray-500">2018-1학기</p>
      <p class="font-bold">자기 주도 창의 설계 프로그램</p>
      <p class="text-gray-600">세종고수학습지원센터</p>
    </div>
    <div class="col-span-4 mt-6">
      <p>4명의 팀원과 함께 ‘헬로 미러’라는 프로젝트를 만들었고 <strong>장려상</strong>을 수상했습니다.</p>
      <p>📄 해당 프로젝트 링크</p>
      <p>저는 RaspbianOS 세팅, smart-mirror 오픈소스 커스터마이징(locale 변경, 시계/날씨/뉴스 API를 한국 기반으로 변경 등등), 보고서 작성을 담당했습니다.</p>
    </div>
    <div class="col-span-1 mt-6">
      <p class="text-sm font-large text-gray-500">2018-1학기</p>
      <p class="font-bold">스마트 APP 개발 공모전</p>
      <p class="text-gray-600">고려대학교 세종캠퍼스 IT지원팀</p>
    </div>
    <div class="col-span-4 mt-6">
      <p>저 포함 2명의 팀원들과 함께 ‘고려대학교 세종캠퍼스 재난알리미’라는 앱 구상도를 제출하였고 <strong>우수상</strong>을 받았습니다.</p>
    </div>
    <div class="col-span-1 mt-6">
      <p class="text-sm font-large text-gray-500">2017-2학기</p>
      <p class="font-bold">교내 코딩경진대회</p>
      <p class="text-gray-600">컴퓨터융합소프트웨어학과</p>
    </div>
    <div class="col-span-4 mt-6">
      <p><strong>금상 2회</strong></p>
    </div>
  </div>
</section>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
