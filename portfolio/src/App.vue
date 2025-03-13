<template>
  <div class="min-h-screen bg-white text-gray-900 px-10 mt-8 mb-16 max-w-7xl py-8 lg:px-16 mx-auto">
    
    <div class="grid grid-cols-1 gap-y-4">
      <!-- ABOUT ME & CONTACT -->
      <section id="about" class="flex justify-between items-start pb-6 border-b border-gray-300">
        <div class="w-1/2 pr-10">
          <h2 class="text-2xl font-bold text-left text-custom-blue flex items-center">
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
          <h2 class="text-2xl font-bold text-left text-custom-blue flex items-center">
            <span class="mr-2">📩</span> CONTACT
          </h2>
          <ul class="mt-3 text-md text-gray-700 leading-relaxed">
            <li><strong class="text-custom-blue">Email:</strong> <a href="https://fb.com/10008001034636" class="underline">song58449@gmail.com</a></li>
            <li><strong class="text-custom-blue">Facebook:</strong> <a href="https://fb.com/10008001034636" class="underline">fb.com/10008001034636</a></li>
            <li><strong class="text-custom-blue">Github:</strong> <a href="https://github.com/SimDaSong" class="underline">github.com/SimDaSong</a></li>
            <li><strong class="text-custom-blue">Velog:</strong> <a href="https://velog.io/@software" class="underline">velog.io/@software</a></li>
            <li><strong class="text-custom-blue">RocketPunch:</strong> <a href="https://rocketpunch.com/@simdasong" class="underline">rocketpunch.com/@simdasong</a></li>
          </ul>
        </div>
      </section>
      
      <!-- EDUCATION -->
      <section id="education" class="py-5 border-b border-gray-200">
        <p class="text-2xl font-bold text-default tracking-wide text-custom-blue">EDUCATION</p>
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
        <h2 class="text-2xl font-bold text-left text-custom-blue flex items-center">
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
        <h2 class="text-2xl font-bold text-left text-custom-blue flex items-center">
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
        <h2 class="text-2xl font-bold text-left text-custom-blue flex items-center">
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

      <!-- PROJECTS -->
      <section id="projects" class="py-8 border-b border-gray-300">
        <h2 class="text-2xl font-bold text-left text-custom-blue flex items-center">
          <span class="mr-2">📁</span> PROJECT
        </h2>

        <!-- 팀 프로젝트 -->
        <div class="mt-6">
          <h3 class="text-xl font-bold text-custom-blue">팀 프로젝트</h3>
          <div class="grid grid-cols-3 gap-6 mt-4">
            <div v-for="project in teamProjects" :key="project.name" class="border rounded-lg p-4 shadow-sm hover:shadow-lg">
              <a :href="project.link" target="_blank" class="block">
                <img :src="project.image" class="w-full h-40 object-cover mb-3" alt="프로젝트 이미지">
                <h4 class="text-lg font-bold">{{ project.name }}</h4>
                <p class="text-sm text-gray-500">{{ project.date }}</p>
                <div class="flex flex-wrap mt-2">
                  <span v-for="tag in project.tags" :key="tag" class="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-md mr-1 mb-1">
                    {{ tag }}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- 개인 프로젝트 -->
        <div class="mt-10">
          <h3 class="text-xl font-bold text-custom-blue">개인 프로젝트</h3>
          <div class="grid grid-cols-3 gap-6 mt-4">
            <div v-for="project in personalProjects" :key="project.name" class="border rounded-lg p-4 shadow-sm hover:shadow-lg">
              <a :href="project.link" target="_blank" class="block">
                <img :src="project.image" class="w-full h-40 object-cover mb-3" alt="프로젝트 이미지">
                <h4 class="text-lg font-bold">{{ project.name }}</h4>
                <p class="text-sm text-gray-500">{{ project.date }}</p>
                <div class="flex flex-wrap mt-2">
                  <span v-for="tag in project.tags" :key="tag" class="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-md mr-1 mb-1">
                    {{ tag }}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- OTHERS -->
      <section id="others" class="py-8 border-b border-gray-300">
        <h2 class="text-2xl font-bold text-left text-custom-blue flex items-center">
          <span class="mr-2">👀</span> OTHERS
        </h2>

        <!-- 대외활동 -->
        <div class="mt-10">
          <h3 class="text-xl font-bold text-custom-blue">대외활동</h3>
          <div v-for="activity in externalActivities" :key="activity.title" class="md:grid md:grid-cols-5 md:gap-6 mt-4 text-md text-gray-700 border-b border-gray-200 pb-4">
            <div class="col-span-1">
              <p class="text-sm font-large text-gray-500">{{ activity.date }}</p>
              <p class="font-bold">{{ activity.title }}</p>
              <p class="text-sm font-large text-gray-500">{{ activity.role }}</p>
            </div>
            <div class="col-span-4">
              <p class="text-gray-600">{{ activity.description }}</p>
            </div>
          </div>
        </div>

        <!-- 교내활동 -->
        <div class="mt-10">
          <h3 class="text-xl font-bold text-custom-blue">교내활동</h3>
          <div v-for="activity in internalActivities" :key="activity.title" class="md:grid md:grid-cols-5 md:gap-6 mt-4 text-md text-gray-700 border-b border-gray-200 pb-4">
            <div class="col-span-1">
              <p class="text-sm font-large text-gray-500">{{ activity.date }}</p>
              <p class="font-bold">{{ activity.title }}</p>
              <p class="text-sm font-large text-gray-500">{{ activity.role }}</p>
            </div>
            <div class="col-span-4">
              <p class="text-gray-600">{{ activity.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const teamProjects = [
  {
    name: "Express boilerplate",
    date: "2021-ing",
    tags: ["Express", "Typescript", "Amazon S3", "Mongoose"],
    image: "https://via.placeholder.com/300",
    link: "https://github.com/yourgithub/express-boilerplate",
  },
  {
    name: "Moment",
    date: "2021.09~2021.11",
    tags: ["Express", "Typescript", "Amazon LightSail", "Mongoose"],
    image: "https://via.placeholder.com/300",
    link: "https://github.com/yourgithub/moment",
  },
  {
    name: "헬로 미러",
    date: "2018.03~2018.08",
    tags: ["Python", "PyQt5", "Raspberry Pi", "Arduino Uno"],
    image: "https://via.placeholder.com/300",
    link: "https://github.com/yourgithub/hello-mirror",
  },
];

const personalProjects = [
  {
    name: "포트폴리오",
    date: "2020.01-ing",
    tags: ["Next.js", "Typescript", "Tailwind CSS", "Vercel"],
    image: "https://via.placeholder.com/300",
    link: "https://github.com/yourgithub/portfolio",
  },
  {
    name: "장바구니",
    date: "2020.01",
    tags: ["styled-components", "Vercel"],
    image: "https://via.placeholder.com/300",
    link: "https://github.com/yourgithub/shopping-cart",
  },
  {
    name: "4-bit CPU",
    date: "2019.11",
    tags: ["logisim", "verilog"],
    image: "https://via.placeholder.com/300",
    link: "https://github.com/yourgithub/4bit-cpu",
  },
  {
    name: "자판기",
    date: "2019.10",
    tags: ["logisim"],
    image: "https://via.placeholder.com/300",
    link: "https://github.com/yourgithub/vending-machine",
  },
  {
    name: "Simple Resource Monitor",
    date: "2018.05",
    tags: ["C++"],
    image: "https://via.placeholder.com/300",
    link: "https://github.com/yourgithub/simple-resource-monitor",
  },
  {
    name: "Process Tree",
    date: "2018.04",
    tags: ["C++"],
    image: "https://via.placeholder.com/300",
    link: "https://github.com/yourgithub/process-tree",
  },
  {
    name: "CLI",
    date: "2018.03",
    tags: ["C++"],
    image: "https://via.placeholder.com/300",
    link: "https://github.com/yourgithub/cli",
  },
];

const externalActivities = [
  {
    date: "2018.03 ~ 2018.08",
    title: "멋쟁이 사자처럼 6기",
    role: "운영진",
    description: "간단한 웹개발과 IT 교육을 위한 비영리 단체에서 대학생들에게 무료로 가르쳤고, 6개월간 활동하며 ‘Ruby on Rails’를 활용한 웹 개발 프로젝트를 진행하였습니다.",
  },
];

const internalActivities = [
  {
    date: "2019-1학기 ~ 2019-2학기",
    title: "Programming Language Center 연구",
    role: "근로장학생",
    description: "학내 20여 명의 코드 테스트를 보고 실력 향상에 기여하는 곳에서 근무하며 연구 및 코딩 교육을 진행하였습니다.",
  },
  {
    date: "2019-1학기",
    title: "Java 스터디",
    role: "팀장",
    description: "7명의 학생들과 함께 Java 스터디를 진행하였으며, 매주 문제를 풀고 코드 리뷰를 진행하는 방식으로 운영하였습니다.",
  },
  {
    date: "2018-2학기",
    title: "컴퓨터융합실험실",
    role: "교육멘토",
    description: "고학년을 대상으로 Scratch 수업을 진행하며 실습과 프로젝트 지도를 맡았습니다.",
  },
  {
    date: "2018-2학기",
    title: "컴퓨터이론(C++) 수업 튜터링",
    role: "튜터",
    description: "C++ 수업의 학생들을 대상으로 기초 개념을 잡고 심화 내용을 다루는 멘토링을 진행하였습니다.",
  },
  {
    date: "2018-1학기",
    title: "컴퓨터이론(C) 수업 튜터링",
    role: "튜터",
    description: "C 프로그래밍 기초 개념을 중심으로 학생들에게 멘토링을 진행하였습니다.",
  },
];
</script>

<style>
html {
  scroll-behavior: smooth;
}

/* Tailwind 기본 blue 대신 rgba(84, 119, 173, 1) 적용 */
.text-custom-blue {
  color: rgba(84, 119, 173, 1);
}
</style>
