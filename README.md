# 포트폴리오 웹사이트

## 주요 기능
- 반응형 웹 디자인
- 다크 모드 지원
- 기술 스택 및 프로젝트 소개
- 교육 및 경력 사항 표시
- 소셜 미디어 링크 통합

## 기술 스택
- **프론트엔드**: 
  - Next.js
  - TypeScript
  - Tailwind CSS
- **개발 도구**:
  - pnpm (패키지 매니저)
  - Git (버전 관리)
- **배포**:
  - Vercel

## 프로젝트 구조
```
portfolio/
├── app/                    # Next.js 앱 디렉토리
│   ├── components/        # 재사용 가능한 컴포넌트
│   ├── config.ts         # 설정 파일
│   └── page.tsx          # 메인 페이지
├── public/               # 정적 파일
├── styles/              # 전역 스타일
└── package.json         # 프로젝트 의존성
```

## 설치 및 실행
1. 저장소 클론
```bash
git clone [repository-url]
```

2. 의존성 설치
```bash
pnpm install
```

3. 개발 서버 실행
```bash
pnpm dev
```

## 참고 문헌
1. Next.js 공식 문서
2. Tailwind CSS 공식 문서
3. TypeScript 핸드북
