import { Link } from 'react-router-dom';
import './Home.css';

function Style(el) {
  const linkStyle = {
    link: {
      color : el.color
    },
    el: {
      border: `2.5px solid ${el.color}`
    }
  }
  return linkStyle;
}


function Home({data}) {
  const mbti = Object.keys(data);
  return (
    <div className="main_container">
      <p className='main_header'>Know your MBTI</p>
      <ul className='main_content'>
        {mbti.map((el, idx) => (
          <li key={idx} className='main_items' style={Style(data[el]).el}>
            <Link to={"/profiles/" + el} style={Style(data[el]).link}>
              {el}
            </Link>
          </li>
        ))}
      </ul>
      <p className='main_footer'>버튼을 누르면 해당 MBTI 소개 페이지로 넘어갑니다.</p>
    </div>
  );
};

export default Home;