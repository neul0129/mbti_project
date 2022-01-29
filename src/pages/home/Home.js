import { Link } from 'react-router-dom';
import './Home.css';

function Home({data}) {
  const mbti = Object.keys(data);
  console.log(mbti);
  return (
    <>
      <p className='main_header'>Know your MBTI</p>
      <ul className='main_content'>
        {mbti.map((el, idx) => (
          <li key={idx} className='main_items'>
            <Link to={"/profiles/" + el}>
              {el}
            </Link>
          </li>
        ))}
      </ul>
      <p className='main_footer'>버튼을 누르면 해당 MBTI 소개 페이지로 넘어갑니다.</p>
    </>
  );
};

export default Home;