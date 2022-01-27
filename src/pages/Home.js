import { Link } from 'react-router-dom';

function Home() {
  const mbti = ["entp", "enfp", "entj", "enfj", "infj"];
  return (
    <>
      <p>Know your MBTI</p>
      <ul>
        {mbti.map((el, idx) => (
          <Link to="/profile/{el}" key={idx}>
            {el}
          </Link>
        ))}
      </ul>
      <p>버튼을 누르면 해당 MBTI 소개 페이지로 넘어갑니다.</p>
    </>
  );
};

export default Home;

