import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// Mbti 페이지 헤더 컴포넌트
function Header({data}) {
  let navigate = useNavigate();

  function backHome() {
    navigate('/');
  }

  return (
    <>
      <button onClick={backHome}>
        <i class="fas fa-chevron-left"></i>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <span>{data}-A / {data}-T : Know your MBTI</span>
    </>
  );

}

// Mbti 설명 컴포넌트
// MBTI 캐릭터 이미지 넣어야해요
function Description({data}) {
  return (
    <>
      {/** MBTI 캐릭터 이미지 넣을 자리 */}

      {/** 성격유형 */}
      <div>
        <span>성격유형</span>
      </div>
      
      {/** 별명 */}
      <div>
        <span>
          {data.nickname}
        </span>
      </div>

      {/** MBTI */}
      <div>
        <span>
          {data.name}-A / {data.name}-T
        </span>
      </div>

      {/** MBTI 성격 */}
      <div>
        <span>
          {data.description}
        </span>
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
      <div>장단점</div>
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
      <div>팩폭</div>
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

// MBTI 설명 페이지
function Profile({data}) {
  const params = useParams();
  const profile = data[params.username];
  return (
    <>
      <Header data={profile.name} />
      <Description data={profile} />
      <ProsCons data={profile.prosCons} />
      <Fact data={profile.fact} />
    </>
  )
};

export default Profile;