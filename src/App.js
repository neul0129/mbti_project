import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';

const data = {
  ENTP: {
    name: 'ENTP',
    color: '#A8BD5F',
    nickname: '열성적인 중재자',
    description: ' 내적신념이 깊은 정열적인 중재자 유형',
    character: "신중한 성격",
    prosCons: {
      '장점': ["의지할 수 있다", "인내심이 많다"],
      '단점': ["부끄러움이 많다", "감정에 억압한다"]
    },
    fact: ["원칙주의자", "남 눈치 많이 봄", "남들 챙기는 거 좋아함"],
    job: ["간호사", "소설가", "예능인"],
    love: ["상대방에게 답장이 없으면 괜히 잘못보낸게 아닌가 걱정됨", "상대방에게 거의 맞추려고 함"],
    chemistry: {
      '잘 맞는  MBTI': ["ENFP", "ESFJ", "ISFP"], 
      '안 맞는  MBTI': ["ISFP", "INTP", "INFP"],
    },
		image : './profile/image/ENTP.png',
  },
  ENTJ: {
    name: 'ENTJ',
    color: '#A4D9D0',
    nickname: '열성적인 중재자',
    description: ' 내적신념이 깊은 정열적인 중재자 유형',
    character: "신중한 성격",
    prosCons: {
      '장점': ["의지할 수 있다", "인내심이 많다"],
      '단점': ["부끄러움이 많다", "감정에 억압한다"]
    },
    fact: ["원칙주의자", "남 눈치 많이 봄", "남들 챙기는 거 좋아함"],
    job: ["간호사", "소설가", "예능인"],
    love: ["상대방에게 답장이 없으면 괜히 잘못보낸게 아닌가 걱정됨", "상대방에게 거의 맞추려고 함"],
    chemistry: {
      '잘 맞는  MBTI': ["ENFP", "ESFJ", "ISFP"], 
      '안 맞는  MBTI': ["ISFP", "INTP", "INFP"]
    },
		image : './profile/image/ENTP.png',
  },
  INTJ: {
    name: 'INTJ',
    color: '#DA7B6B',
    nickname: '열성적인 중재자',
    description: ' 내적신념이 깊은 정열적인 중재자 유형',
    character: "신중한 성격",
    prosCons: {
      '장점': ["의지할 수 있다", "인내심이 많다"],
      '단점': ["부끄러움이 많다", "감정에 억압한다"]
    },
    fact: ["원칙주의자", "남 눈치 많이 봄", "남들 챙기는 거 좋아함"],
    job: ["간호사", "소설가", "예능인"],
    love: ["상대방에게 답장이 없으면 괜히 잘못보낸게 아닌가 걱정됨", "상대방에게 거의 맞추려고 함"],
    chemistry: {
      '잘 맞는  MBTI': ["ENFP", "ESFJ", "ISFP"], 
      '안 맞는  MBTI': ["ISFP", "INTP", "INFP"]
    },
		image : './profile/image/ENTP.png',
  },
  INFJ: {
    name: 'INFJ',
    color: '#BCCB85',
    nickname: '열성적인 중재자',
    description: ' 내적신념이 깊은 정열적인 중재자 유형',
    character: "신중한 성격",
    prosCons: {
      '장점': ["의지할 수 있다", "인내심이 많다"],
      '단점': ["부끄러움이 많다", "감정에 억압한다"]
    },
    fact: ["원칙주의자", "남 눈치 많이 봄", "남들 챙기는 거 좋아함"],
    job: ["간호사", "소설가", "예능인"],
    love: ["상대방에게 답장이 없으면 괜히 잘못보낸게 아닌가 걱정됨", "상대방에게 거의 맞추려고 함"],
    chemistry: {
      '잘 맞는  MBTI': ["ENFP", "ESFJ", "ISFP"], 
      '안 맞는  MBTI': ["ISFP", "INTP", "INFP"]
    },
		image : 'src/pages/profile/image/ENFJ.png',
  },
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home data={data}/>} />
      <Route path="/profiles/:username" element={<Profile data={data}/>} />
    </Routes>
  );
};

export default App;
