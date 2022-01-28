import { useParams } from 'react-router-dom';

// Mbti 설명
function Description({data}) {
  return (
    <>
      {/** 성격유형 */}
      <div>
        <span>성격유형</span>
      </div>
      
      {/** 별명 */}
      <span>
        {data.nickname}
      </span>

      {/** MBTI */}
      <span>
        {data.name}
      </span>

      {/** MBTI 성격 */}
      <span>
        {data.description}
      </span>
    </>
  )
}


// 장단점
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
                <div className='propsCons_el' key={idx}>
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

// 팩폭
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


function Profile({data}) {
  const params = useParams();
  const profile = data[params.username];
  return (
    <>
      <div>
        <span>{profile.name} : Know your MBTI</span>
        <Description data={profile} />
        <ProsCons data={profile.prosCons} />
        <Fact data={profile.fact} />
      </div>
    </>
  )
};

export default Profile;