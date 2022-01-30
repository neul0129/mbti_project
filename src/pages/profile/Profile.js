import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './Profile.css';

// Mbti 페이지 헤더 컴포넌트
function Header({data}) {
  let navigate = useNavigate();

  function backHome() {
    navigate('/');
  }

  return (
    <>
			<div className='profile_header'>
				<button onClick={backHome} className='profile_goHome'>
					<FontAwesomeIcon icon={faChevronLeft} />
				</button>
				<div className='profile_title'>
					<span className='profile_title_mbti'>{data}</span> 
					<span className='profile_title_description'>: Know your MBTI</span>
				</div>
			</div>
    </>
  );
}
function Navbar(){
	return(
	<div className='profile_navBar'>
			<a href='#description'> 성격유형</a>
			<a href='#propsCons'> 장단점</a>
			<a href='#character'> 특징</a>
			<a href='#fact'> 팩폭</a>
			<a href='#job'> 직업</a>
			<a href='#love'> 연애</a>
			<a href='#chemistry'> 궁합</a>
	</div>
			);
}


// Mbti 설명 컴포넌트
// MBTI 캐릭터 이미지 넣어야해요
function Description({data}) {
  return (
    <>
		<div className='profile_description' id='description'>
			<div className='profile_image_box'>
				 <img src="src\pages\profile\image\ENFJ.png" alt='' />
			</div>
			<div className='profile_description_content'>
				{/** 성격유형 */}
				<div className='profile_personality_type'>
					<span>성격유형</span>
				</div>
				
				{/** MBTI */}
				<div className='profile_mbti'> 
					<span>
						{data.name}
					</span> 
				</div>

				{/** 별명 */}
				<div className='profile_nickname'>
					<span>
						{data.nickname}
					</span>
				</div>

				{/** MBTI 성격 */}
				<div className='profile_personality'>
					<span>
						{data.description}
					</span>
				</div>
			</div>
		</div>
    </>
  )
}

// MBTI 특징 컴포넌트
function Character({data}) {
  return (
    <>
		<div id='character'>
      <div className='character_title'>특징</div>
      <div className='character_content'>
            {data}
			</div>
		</div>	
    </>
  )
}

// MBTI 장단점 컴포넌트
function ProsCons({data}) {
  // 배열 : 1. 장점, 2. 단점
  const propsCons = Object.keys(data);

  return (
    <>
      <div id='propsCons'>장단점</div>
      <ul>
        {propsCons.map((props, idx) => (
          <li key={idx}>
            {/** 장단점 title */}
            <div>{props}</div>
            {/** 장단점 리스트 요소 */}
            <div>
              {data[props].map((el, idx) => (
                <div className='propsCons-el' key={idx}>
                  {el}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

// MBTI 팩폭 컴포넌트
function Fact({data}) {
  return (
    <>
      <div id='fact'>팩폭</div>
      <ul>
        {data.map((el, idx) => (
          <li key={idx}>
            {el}
          </li>
        ))}
      </ul>
    </>
  )
}

// MBTI 직업 컴포넌트
function Job({data}) {
  return (
    <>
      <div id='job'>직업</div>
      <ul>
        {data.map((el, idx) => 
          <li key={idx}>
            {el}
          </li>
        )}
      </ul>
    </>
  )
}

// MBTI 연애스타일 컴포넌트
function Love({data}) {
  return (
    <>
      <div id='love'>연애스타일</div>
      <ul>
        {data.map((el, idx) => 
          <li key={idx}>
            {el}
          </li>
        )}
      </ul>
    </>
  )
}

// MBTI 궁합 컴포넌트
function Chemistry({data}) {
  // 배열 : 1. 잘 맞는 MBTI, 2. 안 맞는 MBTI
  const chemistry = Object.keys(data);

  return (
    <>
      <div id='chemistry'>궁합</div>
      <ul>
        {chemistry.map((chemistry, idx) => (
          <li key={idx}>
            {/** 궁합 title */}
            <div>{chemistry}</div>
            {/** 궁합 리스트 요소 */}
            <div>
              {data[chemistry].map((el, idx) => (
                <div className='propsCons-el' key={idx}>
                  {el}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

// MBTI 설명 페이지
function Profile({data}) {
  const params = useParams();
  const profile = data[params.username];
  return (
		<div className='profile'>
			<Header data={profile.name} />
			<div className='profile_content'>
				<Navbar />
				<Description data={profile} />
				<Character data={profile.character} />
				<ProsCons data={profile.prosCons} />
				<Fact data={profile.fact} />
				<Job data={profile.job} />
				<Love data={profile.love} />
				<Chemistry data={profile.chemistry} />
			</div>
    </div>
  )
};

export default Profile;