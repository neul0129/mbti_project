import { Link } from 'react-router-dom';
import { useState } from 'react';
import './style.css';

// MBTI 버튼 컴포넌트
function MbtiButton({data}) {
  const [isHovering, setIsHovering] = useState(false);
  const linkStyle = {
    isHover: {
      color : data.color,
      outline: `2.5px solid ${data.color}`
    },
    noHover: {
      backgroundColor: data.color,
      color: '#fff',
      transition: `all ease 0.2s 0s`
    }
  }

  return (
    <li className='main_items'
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <Link to={"/profiles/" + data.name} style={
        isHovering 
          ? linkStyle.noHover
          : linkStyle.isHover
      }>
        {data.name}
      </Link>
    </li>
  );
}

// Home page 컴포넌트
function Home({data}) {
  return (
    <div className="main_container">
      <p className='main_header'>Know your MBTI</p>
      <ul className='main_content'>
        {data.map((el, idx) => (
          <MbtiButton data={el} key={idx} />
        ))}
      </ul>
      <p className='main_footer'>버튼을 누르면 해당 MBTI 소개 페이지로 넘어갑니다.</p>
    </div>
  );
};

export default Home;