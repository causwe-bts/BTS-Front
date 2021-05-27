This is a frontend project for [CAUSWE Software-Engineering Lecture Term Project](https://github.com/causwe-bts)

## Getting Started

로컬에서 테스트 서버를 돌리고 싶다면 다음을 실행하세요 (/api url은 자동으로 프록싱되어 CORS에러가 나지 않습니다):

```bash
npm run dev
```

서버에서 테스트 서버를 돌리고 싶다면 다음을 실행하세요(자동으로 4000번 포트로 실행됩니다):

```bash
# 기존에 실행중인 서버가 있다면 종료하기
pm2 delete bts_front

# 새로운 서버 시작
npm run build
pm2 start npm --name "bts_front" -- start
```
