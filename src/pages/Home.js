import { Link } from 'react-router-dom';

function Home({data}) {
  const mbti = Object.keys(data);
  console.log(mbti);
  return (
    <>
      <p>Know your MBTI</p>
      <ul>
        {mbti.map((el, idx) => (
          <li key={idx}>
            <Link to={"/profiles/" + el}>
              {el}
            </Link>
          </li>
        ))}
      </ul>
      <p>버튼을 누르면 해당 MBTI 소개 페이지로 넘어갑니다.</p>
    </>
  );
};

export default Home;