import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './style.css';

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
					<span className='profile_title_mbti' style={{color : data.color}}>{data.name}</span> 
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
			<a href='#character'> 특징</a>
			<a href='#prosCons'> 장단점</a>
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
				<img src={"/image/" + data.name + ".png"} alt='' />
			</div>
			<div className='profile_description_content'>
				<div className='profile_description_content_top'>
					{/** 성격유형 */}
					<div className='profile_personality_type'>
						<span>성격유형</span>
					</div>
					{/** MBTI */}
					<div className='profile_mbti'> 
						<span style={{color : data.color}}>
							{data.name}
						</span> 
					</div>
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
      <div className='profile_content_title' style={{color : data.color}}>특징</div>
      <div className='character_content'>
            {data.character}
			</div>
    </div>	 
    </>
  )
}

// MBTI 장단점 컴포넌트
function ProCons({data, color}) {
  // 배열 : 1. 장점, 2. 단점
  const prosCons = Object.keys(data);

  return (
    <>
      <div id='prosCons'>
        <div className='profile_content_title' style={{color}}>장단점</div>
        <ul>
          {prosCons.map((pros, idx) => (
            <li key={idx} className='pros'>
              {/** 장단점 title */}
              <div className='prosTitle'style={{color}}>{pros}</div>
              {/** 장단점 리스트 요소 */}
              <div>
                {data[pros].map((el, idx) => (
                  <div className='propsCons-el' key={idx}>
                    {el}
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

// MBTI 팩폭 컴포넌트
function Fact({data}) {
  return (
    <>
      <div id='fact'>
        <div className='profile_content_title' style={{color : data.color}}>팩폭</div>
        <ul>
          {data.fact.map((el, idx) => (
            <li key={idx}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

// MBTI 직업 컴포넌트
function Job({data}) {
  return (
    <>
      <div id='job'>
        <div className='profile_content_title' style={{color : data.color}}>직업</div>
        <ul>
          {data.job.map((el, idx) => 
            <li key={idx}>
              {el}
            </li>
          )}
        </ul>
      </div>
    </>
  )
}

// MBTI 연애스타일 컴포넌트
function Love({data}) {
  return (
    <>
      <div id='love'>
        <div className='profile_content_title' style={{color : data.color}}>연애스타일</div>
        <ul>
          {data.love.map((el, idx) => 
            <li key={idx}>
              {el}
            </li>
          )}
        </ul>
      </div>
    </>
  )
}

// MBTI 궁합 컴포넌트
function Chemistry({data, color}) {
  // 배열 : 1. 잘 맞는 MBTI, 2. 안 맞는 MBTI
  const chemistry = Object.keys(data);

  return (
    <>
      <div id='chemistry'>
        <div className='profile_content_title' style={{color}}>궁합</div>
        <ul>
          {chemistry.map((chemistry, idx) => (
            <li key={idx}>
              {/** 궁합 title */}
              <div style={{color}}>{chemistry}</div>
              {/** 궁합 리스트 요소 */}
              <div>
                {data[chemistry].map((el, idx) => (
                  <div className='propsCons-el' key={idx}>
                    - {el}
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

// MBTI 설명 페이지
function Profile({data}) {
  const params = useParams();
  const profile = data.find(el => el.name === params.username);
  console.log(profile);
  return (
	<>	
		<span className='profile_fix'>
			<Header data={profile} />
			<Navbar />
		</span>	
		<div className='profile'>
			<div className='profile_content'>
				<Description data={profile} />
				<Character data={profile} />
				<ProCons data={profile.prosCons} color={profile.color} />
				<Fact data={profile} />
				<Job data={profile} />
				<Love data={profile} />
				<Chemistry data={profile.chemistry} color={profile.color} />
			</div>
    </div>
	</>
  )
};

export default Profile;