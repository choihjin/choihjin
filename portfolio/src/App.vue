<template>
  <div class="min-h-screen bg-white text-gray-900 px-10 mt-8 mb-16 max-w-7xl py-8 lg:px-16 mx-auto">
    
    <div class="grid grid-cols-1 gap-y-4">
      <!-- ABOUT ME & CONTACT -->
      <section id="about" class="flex justify-between items-start pb-6 border-b border-gray-300">
        <div class="w-1/2 pr-10">
          <h2 class="text-2xl font-bold text-left text-[rgba(84,119,173)] flex items-center">
            <span class="mr-2">👨🏻‍💻</span> ABOUT ME
          </h2>
          <p class="mt-4 text-md text-gray-700 leading-relaxed">
            안녕하세요. 끊임없이 성장하는 개발자입니다.<br>
            Deep Learning 연구와 AI 기반 프로젝트 개발에 관심이 많으며,<br>
            다양한 산업-학술 협업 프로젝트를 진행하며 경험을 쌓아왔습니다.
          </p>
        </div>
        <div class="w-1/2 pl-10">
          <h2 class="text-2xl font-bold text-left text-custom-blue flex items-center">
            <span class="mr-2">📩</span> CONTACT
          </h2>
          <ul class="mt-3 text-md text-gray-700 leading-relaxed">
            <li><strong class="text-custom-blue">Email:</strong> <a href="jjin6573@gmail.com" class="underline">jjin6573@gmail.com</a></li>
            <li><strong class="text-custom-blue">Github:</strong> <a href="https://github.com/choihjin" class="underline">github.com/choihjin</a></li>
            <li><strong class="text-custom-blue">Velog:</strong> <a href="https://velog.io/@choihjin" class="underline">velog.io/@choihjin</a></li>
          </ul>
        </div>
      </section>
      
      <!-- EDUCATION -->
      <section id="education" class="py-5 border-b border-gray-200">
        <h2 class="text-2xl font-bold text-left text-[rgba(84,119,173)] flex items-center">
            <span class="mr-2">🎓</span> EDUCATION
          </h2>
        <div class="md:grid md:grid-cols-5 md:gap-6 mt-2 text-md text-gray-700">
          <div>
            <p class="text-sm font-large text-gray-500">2019.03 ~ 2025.02</p>
            <p class="break-words font-bold sm:mt-0">한동대학교</p>
          </div>
          <div class="mt-4 md:mt-0 col-span-4">
            <ul>
              <li>AI 컴퓨터공학심화</li>
              <li class="font-bold">4.04 / 4.5</li>
              <li class="font-bold">4.27 / 4.5 (major)</li>
            </ul>
          </div>
        </div>
      </section>
      
      <!-- SKILLS -->
      <section id="skills" class="py-8 border-b border-gray-300">
        <h2 class="text-2xl font-bold text-left text-[rgba(84,119,173)] flex items-center">
          <span class="mr-2">🛠</span> SKILLS
        </h2>
        <div class="md:grid md:grid-cols-4 md:gap-6 mt-6 text-md text-gray-700">
          <!-- Languages -->
          <div>
            <p class="text-m font-large text-gray-500 font-bold">Languages</p>
          </div>
          <div class="col-span-3">
            <ul class="list-disc">
              <li>C / C++</li>
              <li>Java</li>
              <li>Python</li>
            </ul>
          </div>

          <!-- AI & Data Analysis -->
          <div>
            <p class="text-m font-large text-gray-500 font-bold">AI & Data Analysis</p>
          </div>
          <div class="col-span-3">
            <ul class="list-disc">
              <li>PyTorch</li>
              <li>TensorFlow</li>
              <li>OpenCV</li>
              <li>Numpy</li>
              <li>Pandas</li>
              <li>Matplotlib</li>
            </ul>
          </div>

          <!-- Databases & Backend -->
          <div>
            <p class="text-m font-large text-gray-500 font-bold">Databases & Backend</p>
          </div>
          <div class="col-span-3">
            <ul class="list-disc">
              <li>MySQL</li>
              <li>PostgreSQL</li>
            </ul>
          </div>

          <!-- DevOps & Tools -->
          <div>
            <p class="text-m font-large text-gray-500 font-bold">DevOps & Tools</p>
          </div>
          <div class="col-span-3">
            <ul class="list-disc">
              <li>Git</li>
              <li>GitHub</li>
              <li>Linux</li>
            </ul>
          </div>
        </div>
      </section>


      <!-- CAREER -->
      <!-- <section id="career" class="py-8 border-b border-gray-300">
        <h2 class="text-2xl font-bold text-left text-custom-blue flex items-center">
          <span class="mr-2">💼</span> CAREER
        </h2>
        <div class="md:grid md:grid-cols-5 md:gap-6 mt-6 text-md text-gray-700">
          <div>
            <p class="text-sm font-large text-gray-500">2023.06 ~ 2024.12</p>
            <p class="break-words font-bold sm:mt-0">HGU DeepLearning Lab</p>
            <p class="text-gray-600">학부연구생</p>
          </div>
          <div class="mt-4 md:mt-0 col-span-4">
            <p>새벽 꽃 시장 유통업체인 오늘의꽃에서 클라이언트/판매자/관리자/물류관리자 페이지 기능 추가 및 유지 보수를 담당했습니다.<br>
              Python, PyTotch, TensorFlow, OpenCV, Numpy, Linux, Git, Github</p>
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
      </section> -->

      <!-- AWARDS -->
      <section id="awards" class="py-8 border-b border-gray-300">
        <h2 class="text-2xl font-bold text-left text-custom-blue flex items-center">
          <span class="mr-2">🏆</span> AWARDS & HONORS
        </h2>

        <!-- <div class="md:grid md:grid-cols-5 md:gap-6 mt-6 text-md text-gray-700"> -->
        <div class="md:gap-6 mt-6 text-md text-gray-700">
          <div class="col-span-1 mt-6">
            <p class="text-sm font-large text-gray-500">2024.05.11</p>
            <p class="font-bold">대경권 프로그래밍 경진대회 우수상</p>
            <p class="text-gray-600">대구 경북 소재 SW중심대학사업단</p>
          </div>
          <!-- <div class="col-span-4 mt-6">
            <p><strong>우수상</strong></p>
          </div> -->
        </div>

        <div class="md:gap-6 mt-6 text-md text-gray-700">
          <div class="col-span-1 mt-6">
            <p class="text-sm font-large text-gray-500">2023.11.07</p>
            <p class="font-bold">SW 페스티벌 AI 육목 경진대회 금상</p>
            <p class="text-gray-600">SW중심대학사업단</p>
          </div>
          <!-- <div class="col-span-4 mt-6">
            <p><strong>금상</strong></p>
          </div> -->
        </div>

        <div class="md:gap-6 mt-6 text-md text-gray-700">
          <div class="col-span-1 mt-6">
            <p class="text-sm font-large text-gray-500">2023.11.07</p>
            <p class="font-bold">SW 페스티벌 프로그래밍 경진대회 장려상</p>
            <p class="text-gray-600">SW중심대학사업단</p>
          </div>
          <!-- <div class="col-span-4 mt-6">
            <p><strong>장려상</strong></p>
          </div> -->
        </div>

        <div class="md:gap-6 mt-6 text-md text-gray-700">
          <div class="col-span-1 mt-6">
            <p class="text-sm font-large text-gray-500">2023-1, 2023-2</p>
            <p class="font-bold">성적 우수 장학금</p>
          </div>
          <!-- <div class="col-span-4 mt-6">
            <p><strong>장려상</strong></p>
          </div> -->
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
    name: "딥러닝 기반 도로영상 복원기술 개발",
    date: "2023.06~2024.12",
    tags: ["Python", "PyTorch", "TensorFlow", "OpenCV"],
    image: "https://via.placeholder.com/300",
    link: "https://github.com/yourgithub/express-boilerplate",
  },
  {
    name: "도로 이미지 익명화 프로세스 개발",
    date: "2023.06~2023.12",
    tags: ["Python", "PyTorch", "TensorFlow", "OpenCV"],
    image: "https://via.placeholder.com/300",
    link: "https://github.com/yourgithub/moment",
  },
  {
    name: "뿌리 이미지 인식 AI 개발",
    date: "2023.02~2023.06",
    tags: ["Python", "CNN", "OpenCV"],
    image: "https://via.placeholder.com/300",
    link: "https://github.com/yourgithub/hello-mirror",
  },
  {
    name: "스마트 스위치 구현",
    date: "2024.05~2024.06",
    tags: ["Python", "CNN", "OpenCV"],
    image: "https://via.placeholder.com/300",
    link: "https://github.com/yourgithub/hello-mirror",
  },
];

const personalProjects = [
  {
    name: "포트폴리오",
    date: "2025.03~Present",
    tags: ["Vue.js", "Tailwind CSS"],
    image: "https://via.placeholder.com/300",
    link: "https://github.com/yourgithub/portfolio",
  },
  {
    name: "차량 기능 구현",
    date: "2022.10~2022.12",
    tags: ["C++", "OpenCV", "YOLO"],
    image: "https://via.placeholder.com/300",
    link: "https://github.com/yourgithub/portfolio",
  },
];

const externalActivities = [
  {
    date: "2023.06 ~ 2024.12",
    title: "GHOST(Global Handong Oriented Security Team)",
    role: "동아리원",
    description: "보안 및 알고리즘 스터디를 진행하였습니다.",
  },
];

const internalActivities = [
  {
    date: "2023.06 ~ 2024-12",
    title: "Deep Learning 연구",
    role: "학부연구생",
    description: "Deep Learning 연구실에서 산학 연구를 진행하였습니다.",
  },
  {
    date: "2023-1",
    title: "Data Structure",
    role: "TA",
    description: "자료구조 수업을 수강하는 학생들을 대상으로 수업 내용을 이해하도록 도와주는 TA 역할을 수행하였습니다.",
  },
  {
    date: "2023-2, 2024-2",
    title: "Computer Architecture",
    role: "TA",
    description: "컴퓨터 구조 수업을 수강하는 학생들을 대상으로 수업 내용을 이해하도록 도와주는 TA 역할을 수행하였습니다.",
  },
  {
    date: "2024-1",
    title: "Algorithm Analysis",
    role: "TA",
    description: "알고리즘 분석 수업을 수강하는 학생들을 대상으로 수업 내용을 이해하도록 도와주는 TA 역할을 수행하였습니다.",
  },
  {
    date: "2022-2, 2023-Summer",
    title: "SW 교육봉사단",
    role: "교육멘토",
    description: "경주고등학교, 포항대동고등학교에 방문하여 SW(Arduino, C++) 교육을 진행하였습니다.",
  },
  {
    date: "2022-1",
    title: "Calculus 튜터링",
    role: "튜터",
    description: "미적분학 수업을 수강하는 학생들을 대상으로 수업 내용을 이해하도록 도와주는 튜터 역할을 수행하였습니다.",
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
