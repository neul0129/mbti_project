const mbti_data = {
  ISTJ : {
    name: 'ISTJ',
    nickname: '청렴결백한 논리주의자',
    description: '세상의 소금형',
    prosCons: {
      '장점': ["맡은 일 처리에 있어서 신중하고 책임감있게 해결한다.",
              "집중력이 강하고 현실 감각이 뛰어나다.",
              "단체생활에서의 법규,질서를 잘지키고 조직적이고 어느상황에서든 침착하게 수행한다.",
              "굉장히 성실하고 약속을 철저히 잘지키기 때문에 회사에 지각하거나 약속을 어기는 일이 없습니다.",
              "기억력이 좋은 편이라서 일처리가 깔끔하다고 볼 수 있다."],
      '단점': ["일 처리를 함에 있어서 책임감이 지나치게 강해서 스스로 스트레스를 많이 받는다.", 
              "타인의 감정과 기분을 파악하는 능력이 부족하다.", 
              "원칙주의 성격으로 일 처리를 할때 융통성이 부족한 점이 있다.",
              "스스로에게 관대하지 못하고 비난,채찍질을 자주 한다.", 
              "새로운 환경, 변화에 있어서 적응을 잘 못한다."]
    },
    fact: ["현실 감각이 뛰어나고 말투도 직설적이라 가끔 딱딱하다는 소리 들음",
           "내 얘기 하는 거 별로 안 좋아하고 남 얘기 들어주기도 힘듦",
           "마찬가지로 다른 사람 일에 관심 가지는 게 너무 귀찮음",
           "그래서 인간관계 얕고 넓음 (깊어지는 신경 쓸게 많아서 싫음)",
           "한번 일을 맡으면 모든 책임을 다하고 신중하게 처리함",
           "즉흥적인 것을 싫어함 계획 세우는 거 잘함",
           "앞뒤가 다른 사람, 약속을 어기는 사람을 매우 극혐함",
           "단기간에 많은 걸 암기해야 하는 시험 같은 거 잘 봄",
           "전통적인 가치관, 자신의 경험을 중시함, 고정 관념이 강함",
           "위와 같은 이유로 융통성 없는 꼰대가르송이 되기도 함",
           "남들이랑 같이 일하는 거보다 혼자 일하고 싶음 (협동 사절)",
           "물건 사면 안에 들어있는 사용설명서 꼭 읽어봄",
           "조별 과제 할 때 이야기 딴 데로 새는 걸 못 참음",
           "뭐든 한번 시작하면 끝을 봐야 직성이 풀림",
           "MBTI는 근거 없는 유사과학이라고 생각함",],
           
    job: ["수학관련",
          "감사", 
          "회계업무",
          "재무업무",
          "법률관련",
          "엔지니어",
          "보건 의료",
          "약사",],
    love: ["은근 눈치있고 데이트도 계획적으로 함", 
           "사소한 기역력 좋은편",
           "약속은 미리미리 잡는것이 좋음",
           "감정, 사랑표현 잘 못함",
           "고쳐야 할 점이 보이면 직설적으로 말 하는편 (감정 x)",],
    chemistry: {
      '잘 맞는  MBTI': ["ESFP", "ESTP"], 
      '안 맞는  MBTI': ["INFP", "ENFP", "INFJ", "ENFJ"],
    },
		image : './profile/image/ISTJ.png',
  },

  ISFJ: {
    name: 'ISFJ',
    nickname: '용감한 수호자',
    description: '임금 뒷편의 권력형',
    prosCons: {
      '장점': ["눈치가 빠르다",
              "공감능력",
              "성실함, 책임감, 섬세함, 인내력",
              "예의가 바른 성격",
              "독립적이고 생활력이 강함",],
      '단점': ["편견, 오지랖이 강해질 수도 있다.", 
              "느끼는 것에 비해 표현이 적다.",
              "사람들을 관리하고 통제하려는 경향이 있다.",
              "부탁하거나 신세지는 것을 어려워한다.",
              "완벽주의자",]
    },
    fact: ["내향형인데 상황에 따라 외향적인 척 코스프레 가능합니다.", 
           "나서는 거 싫어하는데 관심받는 건 좋습니다.", 
           "다른 사람의 감정을 잘 캐치하고 공감도 잘해줍니다.",
           "그래서 대화할 때 주로 듣는 입장임, 내 얘기를 안 합니다.",
           "대화가 지루하고 듣고 싶지 않아도 겉으로 티 안 냅니다.",
           "부탁받으면 거절 진짜 못함 근데 내가 남한테 부탁하는 건 어렵습니다.",
           "착하고 친절하다는 얘기를 자주 듣습니다.",
           "자기 전에 이불 속에서 ‘아 이때 이 말을 했어야 했는데’ 생각합니다.",
           "뒤끝 있습니다.",
           "잘난척하는 사람 제일 극혐합니다.",
           "기억력 엄청 좋음 옛날에 있었던 일들 다 기억해 냅니다.",
           "진짜 극혐하지 않는 이상 싫다고 얘기 잘 안 합니다.",
           "계획 세우는 거 좋아하고 그 계획대로 일이 진행되어야 마음이 편합니다.",
           "가성비를 엄청 따지고, 돈을 쓰면 뽕을 뽑아야 하는 마인드입니다.",
           "인간관계에서 상처, 스트레스를 많이 받습니다.",],
    job: ["의료분야 직업군(의사,간호사)", 
          "경찰관", 
          "소방관",
          "행정업무 직군",
          "회계담당",
          "컨설턴트",
          "은행원",
          "펀드매니저",],
    love: ["책임감이 강하고 침착한 성격인 ISFJ유형은 결혼하여 가정을 꾸리는 것을 원합니다.", 
           "사랑을 할 때 비로소 안정감을 느끼며 헌신적인 면이 있어 가정적인 스타일 입니다.",
           "상대방의 대한 감정을 잘 살피고 책임감이 강하여 연인과 배우자로서 만족도가 높은 편입니다.",
           "상대방에게 답장이 없으면 괜히 잘못 보낸 게 아닌가 걱정이 되기도 하며, 약속이나 계획을 깨버리는 것을 싫어하고 서운한 것을 잘 이야기 못하는 성격이지만 상대방에게 거의 맞추려고 하며 얘기할 때 공감도 잘해주는 편입니다.",
           "“배려 성격”을 가진 성격유형이라고 보면 됩니다. 또한 상대방의 이야기를 들어주는 것을 좋아하고 기억을 잘하는 편입니다.",
           "연애를 시작할 때까지 마음을 열기가 시간이 굉장히 오래 걸리며 사랑이 천천히 차오르는 편입니다.",
           "사랑하는 연인에게 말 한마디 한마디를 신중하고 다정하고 이쁘게 하려고 하는 편이라 서운한 점이 있어도 상대방에게 말하기 꺼려 합니다.",],
    chemistry: {
      '잘 맞는  MBTI': ["ESFP", "ESTP", "ISFJ", "ESFJ", "ISTJ", "ESTJ"], 
      '안 맞는  MBTI': ["INFP", "ENFP", "INFJ", "ENFJ"],
    },
		image : './profile/image/ISFJ.png',
  },

  INFJ: {
    name: 'INFJ',
    nickname: '선의의 옹호자',
    description: '예언자형',
    prosCons: {
      '장점': ["강한 직관력으로 말없이 타인에게 영향력을 끼칩니다.", 
              "독창성과 내적 독립심이 강하며, 확고한 신념과 열정으로 자신의 영감을 구현시켜 나가는 정신적 지도자들이 많습니다. ",
              "남을 강요하기보다는 행동과 권유로 사람들의 마음을 움직여 따르게 만드는 지도력이 있습니다. ",
              "공동의 이익을 가져오는 일에 심혈을 기울이고 인화와 동료애를 중요시합니다.",],
      '단점': ["너무 비현실적입니다. ", 
              "항상 심각해 보여서 웃는 연습이 필요합니다. ",
              "가슴에 묻어두지 말고 풀어내는 것이 필요합니다. ",
              "내면이 우울합니다. ",
              "대인관계를 좀 넓힐 필요가 있습니다. ",
              "조직내의 정치성과 자신의 아이디어를 전달, 옹호할 기법을 육성할 필요성이 있습니다. ",
              "자신의 비전과 남의 비전을 현실에 비추어 검토할 필요가 있습니다.",
              "현재 상황에 무엇을 완수할 수 있는가에 대해 여유 있고 개방적이 될 필요성이 있으며 외골로 빠지는 성향을 주의할 필요가 있습니다.",
              "남에게 강요하지 못하고 비판에 정면으로 대결하지 못하며 너무 지나치게 자신에게 의존합니다.",
              "남에게 감정표현 하는 방법을 배울 필요성이 있습니다."]
    },
    fact: ["기가 하는 말을 남이 이해하지 못함", 
           "인간관계 손절 빠름", 
           "사람에 대한 기준이 높아서 남과 사귀기가 힘듦",
           "다른 사람말을 쉽게 믿지 않음",
           "본인만의 방식이 있으며 고집이 셈",
           "유행에 무관심",
           "현실 적응이 어려우며, 현실과 타협이 힘듦",
           "애늙은이",
           "자신의 의견을 말로 잘 전달하지 못함",
           "집돌이, 집순이",
           "고민이 많음",],
    job: ["교수", 
          "심리학자", 
          "디자이너",
          "과학자",
          "인사 전문가",
          "작가",
          "카운슬러(상담사)",
          "사서",],
    love: ["타인에 대한 기준이 엄격하여 타인과 쉽게 사귀지 못하는 성격입니다.", 
           "그러나 막상 친해진다면 관계를 이어나가는 것에는 문제가 없습니다.",
           "먼저 다가가기보단, 상대가 먼저 다가와주기를 바랍니다.",
           "상대에게 한번 마음이 식어버리면 쉽게 정리하는 성격입니다.",
           "눈치가 빠르나, 상대방에게 쉽게 티를 내지 않고 마음에 담아 두는 성격입니다.",
           "마음의 상처를 받기 싫어하므로 신중한 편입니다.",
           "INFJ에게 실망스러운 태도를 보인다면, INFJ는 쉽게 그 사람을 손절하는 스타일입니다.",
           "상대방에 대한 배려가 깊어, 싸웠을 때 먼저 화해하는 편입니다.",
           "이별을 결심하면 바로 실행하는 편입니다.",
           "선을 넘는 것을 싫어합니다.",],
    chemistry: {
      '잘 맞는  MBTI': ["ENFP", "INFJ", "ENTP", "INFP", "ENFJ", "INTJ", "ENTJ", "INTP", "ENTP"], 
      '안 맞는  MBTI': ["ISFP", "ESFP", "ISTP", "ESTP", "ISFJ", "ESFJ", "ISTJ", "ESTJ"],
    },
		image : './profile/image/INFJ.png',
  },

  INTJ: {
    name: 'INTJ',
    nickname: '용의주도한전략가',
    description: '과학자형',
    prosCons: {
      '장점': ["새로운 지식과 경험에 대한 갈증", 
              "전략적, 계획적 사고와 행동력",
              "높은 자기통제력과 집중력",
              "높은 통찰력, 논리력",
              " 지식의 전문성이 높음",],
      '단점': ["감정 표현을 쉽게 하지 않음", 
              "다소 오만한 편이다",
              "칭찬에 인색한 편",
              "인간관계나 가족 관계에 소홀할 수 있음",
              "자기 주장을 관철할 때 필요 이상으로 과격할 수 있음",]
    },
    fact: ["고집 셈, 융통성 부족, 자기 관심 분야 외 신경 쓰지 않음", 
           "자신의 능력에 대해 자신감이 있으며 높이 평가함", 
           "독립적인 성향이 강함 고 감정에 휘둘리는 거 싫어함",
           "타인에게 잘 보이고 싶다는 요구가 없음 (상대방은 다가가기 어려움)",
           "친구 고민 상담 잘 못 들어줌 (공감을 잘 못함)",
           "인싸들의 관심사에서 동떨어져 있다",
           "학교, 회사 등 조직생활에 적응하기 어려움",
           "혼자서 모든 것을 해결하려는 의지가 강함 (조별 과제 혼자 함)",
           "목표 지향적임 목표를 달성하면 큰 행복감을 느낌",
           "무신경하다는 소리 들음 근데 좋아하는 것에는 과몰입함",
           "효율성이 떨어지는 시스템을 보면 참지 못함",
           "매정할 만큼 객관적으로 판단하고 꼼수를 용납할 수 없음",
           "문제 해결을 위해 독창적이고 참신한 방법을 고안함",
           "공상 잦음, 어떤 사안이나 작품에 대해 다각도로 해석하는 거 좋아함",
           "‘나 오늘 뭐 바뀐 것 없어?’ 하고 물어보면 대답 못함",],
    job: ["과학자", 
          "컴퓨터 시스템 분석가", 
          "천문학자",
          "컴퓨터 프로그래머",
          "대학교수",
          "심리학자",
          "연구원",
          "판사",
          "예술가",
          "디자이너",
          "건축가",
          "변호사",
          "엔지니어",
          "발명가",
          "경영 컨설턴트",
          "투자 상담가",],
    love: ["전체적으로 연애 감각이 몹시 우둔한 편에 속합니다.", 
           "주로 합리성(또는 계산)을 끊임없이 논하려는 태도가 우둔한 연애 감각을 만들어냅니다.",
           "연인과의 상황을 감정적인 흐름 자체가 아닌 이성적으로 파악하려고 합니다.",
           "연인 관계 초반엔 뭘 해야 하고 어떻게 행동해야 하는지를 이해하려고 고군분투합니다.",
           "사랑에 이론이나 전략이 있다고 믿는 경향이 있습니다.",
           "이들은 전형적인 과제 수행 방식으로 연애에 접근함. 다만, 이들은 영속적인 연애 불구는 아니며 연애 경험을 쌓아 성숙해지면 그 낭만을 이해하게 된다고 합니다.",
           "배려가 지나친 상대방을 오히려 모욕적으로 간주할 수도 있습니다.",
           "데이트는 데이트대로 그저 즐기는 것이 상대와 자신에게 모두 윈-윈입니다.",
           "상대방은 이들이 평소처럼 ‘지성과 자신감’을 과시하기보다 누군가를 기분 좋게 하려고 할 때 자연스럽게 자아내는 ‘지성과 자신감’에 더욱 매력을 느낀다고 합니다.",
           "엄격한 조건에 일치하는 짝을 선택하고자 합니다.",
           "상대방에 관한 기대와 이상이 다소 비현실적이며, 자기의 판타지(환상)에 맞출 것을 요구할 수도 있습니다.",
           "상대방의 사람다움(평범함)을 고려하지 않거나 사랑에도 예측을 탐구하는 등 감정 작용의 본질을 간과하는 모습을 보입니다.",],
    chemistry: {
      '잘 맞는  MBTI': ["ENFP", "ENTP", "INFP", "INFJ", "ENFJ", "INTJ", "ENTJ", "INTP",], 
      '안 맞는  MBTI': ["ISFJ", "ESFJ", "ISTJ", "ESTJ",],
    },
		image : './profile/image/INTJ.png',
  },

  ISTP: {
    name: 'ISTP',
    nickname: '만능 재주꾼',
    description: '백과사전형',
    prosCons: {
      '장점': ["적응력이 뛰어남", 
              "고정관념, 편견이 없음",
              "독립적이고 자제력이 강함",
              "두뇌가 명석함",
              "위기시 대처력, 순발력이 뛰어남",
              "기계 잘 다룸",
              "문제 해결 능숙",
              "남 평가 신경 안 씀",
              "도전정신 강함",
              "솔직함, 정직함",
              "뒤끝 없음",
              "혼자서도 잘함",],
      '단점': ["섬뜩할 정도로 냉담함", 
              "무신경, 타인에게 매우 무관심함",
              "인간과의 갈등 회피",
              "동정심 잘 못 느낌",
              "친해지기 힘듦",
              "공감능력 제로",
              "타인에게 본의 아니게 상처 줌",
              "의심 많음",
              "말이라도 달콤한 말 못 함",
              "게으를 땐 끝도 없이 게으름",]
    },
    fact: ["충동에 따라 행동 -&gt; 언제든 자리를 박차고 나갈 수 있음", 
           "틀에 박힌 것, 통념 싫어함", 
           "맹목적, 감정적 싫어해 무신론자 비율이 높음",
           "배려형 개인주의",
           "타인에 무관심",
           "관심분야 아니면 쳐다보지도 않음",
           "생각은 적극적 행동은 소극적",
           "귀찮음",
           "자기 자랑 꼴 보기 싫음",
           "누가 내 욕해도 별로 신경 안 씀",
           "웹툰 귀찮아서 다 못 봄",
           "호불호 강함",
           "진지하게 농담",
           "경제관념이 부족할 수 있음",],
    job: ["파일럿", 
          "카레이서", 
          "소방관",
          "경찰관",
          "펀드매니저",
          "소프트웨어 개발자",
          "빅데이터 분석가",
          "응급구조원",
          "스포츠 선수",
          "코치",
          "연구원",
          "포토그래퍼",
          "기관사",
          "범죄학자",],
    love: ["어장관리 안 하고 한 사람에게 몰입하는 편입니다.", 
           "좋아하는 티를 먼저 내지 않습니다.",
           "상대방과 있을 때는 딴짓(핸드폰 등) 안 하고 상대방에게 집중하는 편입니다.",
           "변덕이 심한 편입니다.",
           "잔소리를 싫어합니다.",
           "좋아한다는 감정표현을 잘 안하는편입니다.",
           "애인과 노는 시간도 좋지만 혼자만의 시간이 필요합니다.",
           "공감을 바라는 위로는 하지 못합니다.",],
    chemistry: {
      '잘 맞는  MBTI': ["ESFJ", "ESTJ",], 
      '안 맞는  MBTI': ["INFP", "ENFP", "INFJ", "ENFJ",],
    },
		image : './profile/image/ENTP.png',
  },

  ISFP: {
    name: 'ISFP',
    nickname: '호기심 많은 예술가',
    description: '성인군자형',
    prosCons: {
      '장점': ["끈기있음", 
              "인정이 많음",
              "융통성 있음",
              "타인의 가치관을 존중함",
              "변화에 빠르게 적응함",
              "작은 것에도 행복을 느낌",
              "자기애 강함",
              "너그러운 성품",
              "참을성이 좋음",
              "눈치가 빠르다",
              "뛰어난 관찰력",
              "겸손한 성격",],
      '단점': ["심한 귀차니즘", 
              "장기적인 안목이 부족함",
              "자신을 과소평가",
              "집에 가면 연락두절",
              "생각은 많지만 행동력은 부족",
              "칭찬에 매우 약함",
              "눈치 많이 봄",
              "잘 속음",
              "상처 잘 받음",
              "자기주장, 자기표현 약함",]
    },
    fact: ["겸손하다는 말을 자주 듣습니다.", 
           "발등에 불이 떨어져서 타들어가도록 일을 끝까지 미룹니다.", 
           "결단력, 추진력, 주관 없음 선택 장애입니다.",
           "사람 만나는 거 좋은데 싫어합니다. 그러나 막상 만나면 잘 놉니다.",
           "다른 사람 부탁 거절 잘 못하고, 양보를 잘합니다.",
           "남한테 민폐 끼치는 거 싫어하고 싫은 소리를 못합니다.",
           "예술 계통에 최소 한 분야에는 재능이 있습니다.",
           "말싸움에 약합니다. (감정이 앞서서 논리적이지 못함)",
           "나 안착한데 왜 사람들이 착하다고 하는지 모르겠다고 느낍니다.",
           "남한테 내 얘기 잘 안 합니다.",
           "생각은 잘 하는데 생각한 것을 실천하진 않습니다.",
           "만사가 귀찮습니다.",
           "주변 의견, 주변 분위기를 잘 따라갑니다.",
           "규칙이나 관습, 틀에 묶이는 것을 싫어합니다.",
           "누가 나한테 부정적으로 말하는 거에 마상을 쉽게 받습니다.",
           "“귀찮아”라는 말을 습관적으로 합니다.",
           "늘 누워있습니다.",],
    job: ["패션 인테리어 디자이너", 
          "도예가", 
          "화가",
          "예술가",
          "수의사",
          "사육사",
          "물리치료사",
          "간호사",
          "초등교사",
          "통역 번역가",
          "피부관리사",
          "사회복지사",
          "작곡가",],
    love: ["거절당하는 것을 싫어해서 고백을 잘 하지 못하는 유형이 많습니다.", 
           "혼자 있는 시간이 필요해서 쉴 틈을 주지 않는 만남, 전화에 에너지가 많이 소모됩니다.",
           "비교당하는 것을 싫어합니다.",
           "갈등을 싫어해서 연애 상대방에게 맞춰주고 협조해 주려고 합니다.",
           "장기적인 관계를 선호하는 편입니다.",
           "다정하고 따뜻한 성격입니다.",
           "이별 후 후유증이 많이 남는 편입니다.",
           "상대방에게 잘 퍼주는 성격으로, 친구들과의 우정보다 사랑을 우선시하는 경우가 많습니다.",
           "연애에 신중하고 짝사랑을 오래 하기도 합니다.",
           "정성 어린 진실한 마음과 선물을 좋아합니다.",],
    chemistry: {
      '잘 맞는  MBTI': ["ENFJ", "ESFJ", "ESTJ",], 
      '안 맞는  MBTI': ["INFP", "ENFP", "INFJ",],
    },
		image : './profile/image/ISFP.png',
  },

  INFP: {
    name: 'INFP',
    nickname: '열정적인 중재자',
    description: '잔다르크형',
    prosCons: {
      '장점': ["순수함", 
              "이타적인 성격",
              "열정적",
              "진실하고 성실함",
              "감수성이 풍부함",
              "뛰어난 통찰력",
              "친절한 성격",
              "다정함",
              "창의력과 상상력이 뛰어남",
              "개방적",
              "언어적 소질 뛰어남",
              "소확행을 즐김",
              "넘치는 영감",],
      '단점': ["걱정이 많은 성격", 
              "예민함",
              "심각함",
              "우울감, 감정기복이 심함",
              "친구를 사귀는데 까다로움",
              "상처가 오래감",
              "분쟁 시 회피적인 성격",
              "현실감 제로",
              "경제 관념 부족",
              "시간 개념 부족",
              "자주 깜빡함",
              "너무 유유부단함",]
    },
    fact: ["이상주의적", 
           "잡 생각 많음(망상 잦음)", 
           "관종인데 막 관심받으면 어색하고 어쩔줄 모름",
           "해야될 일 생각만 하고 실제로는 발만 담그고 안 함",
           "완전 처음 보는 사람한테는 말 잘 거는데 학교같이 조직생활 하는곳에서는 낯 엄청 가림",
           "좋아하는 건 미친듯이 파고 집중 근데 열정이 초기에만 불타고 빨리 식음",
           "너무 게을러서 벼락치기 함",
           "멀티 안됨, 연락 귀찮아함, 안읽씹 잘함",
           "가끔 우울한 나에 심취",
           "내 개인적인 얘기 남들한테 하는거 싫어함(가족포함)",
           "화날 때 혼자 있어야 함 누가 건들면 안됨",
           "혼자 있는건 좋은데 외로운건 싫음",
           "나가는거 귀찮아하는데 막상 나가면 잘놈",
           "누가 내 일하는 방식에 간섭하면 개빡침, 한국에 살면 예민충이나 사회 부적응자로 보임",
           "돈개념 없음 쓰는데 합리화함",
           "싸우는거 싫어해서 걍 내가 희생함",
           "자기애 강한데 자존감은 낮음",
           "끈기 없음, 생각만 하고 실천 안함",
           "남한테 폐끼치는거 제일 싫어함",],
    job: ["시인", 
          "작가", 
          "프리랜서 예술가",
          "철학자",
          "심리학자",
          "사진작가",
          "디자이너",
          "큐레이터",],
    love: ["편한 연애를 좋아한다.", 
           "연애를 하면서도 혼자만의 시간은 필요하다.",
           "좋아하는 사람에겐 티내지 못함.",
           "마음을 주기까지 시간이 오래걸린다.",
           "한번 빠지면 모든걸 내어줄 정도로 헌신한다.",
           "간섭 받으면 피곤해한다.",
           "한번 틀어지면 관계 회복이 오래걸린다.",],
    chemistry: {
      '잘 맞는  MBTI': ["ENFJ", "ENTJ", "INFP", "ENFP", "INFJ", "INTJ", "INTP", "ENTP",], 
      '안 맞는  MBTI': ["ISFP", "ESFP", "ISTP", "ESTP", "ISFJ", "ESFJ", "ISTJ", "ESTJ",],
    },
		image : './profile/image/INFP.png',
  },

  INTP: {
    name: 'INTP',
    nickname: '논리적인 사색가',
    description: '아이디어 뱅크형',
    prosCons: {
      '장점': ["영리함", 
              "탁월한 문제 해결력",
              "기발한 아이디어",
              "넘치는 자신감",
              "혁신적",
              "감정 기복 크게 없음",
              "천재성과 잠재능력이 높음",
              "신기한 이야기 많이 앎",
              "뛰어난 집중력",
              "높은 이해력",
              "자기 주관 뚜렷함",],
      '단점': ["게으름", 
              "둔감한 감정",
              "자신에 대한 완벽주의",
              "이해력이 부족한 사람 무시",
              "공감능력 부족",
              "정서적 위로,위안할 줄 모름",
              "인간관계에 계산적",
              "복잡하고 이해하기 힘든 대화방식",
              "대화 시 말을 잘 끊음",]
    },
    fact: ["자발적 아웃사이더(혼자 있는 게 제일 편하고 행복), 낯가림", 
           "자기애가 높습니다.(잔신이 잘난줄 압니다.)", 
           "공상을 자주 합니다.",
           "분석, 추리를 좋아하고 생각 많습니다.",
           "무뚝뚝한 편이고 잡담을 잘 못하고 싫어합니다.",
           "논리력 없는, 어리석은 사람들 보면 화가 나는 편입니다.",
           "책을 진짜 좋아하는데 읽기 귀찮아서 리스트에만 적어놓습니다.",
           "지식에 대한 욕망 강합니다.",
           "인간은 싫지만 흥미로운 존재라고 생각합니다.",
           "진지충이라는 소리를 자주 듣습니다.",
           "팩폭 하지 말라는 소리를 자주 듣습니다.",
           "주변에 사람들 별로 없는데 남아있는 사람들이랑은 정말 잘 지냅니다.",
           "감수성 풍부하고 말 많이 안 합니다. 귀찮은 거 싫어합니다.",
           "게으르고 미루기의 끝판왕입니다.",
           "시끄러운 것을 싫어합니다.",
           "감정기복이 없습니다.",
           "웬만한 일에 상처받지 않습니다.",
           "남이 내 욕하는거 신경 안쓰고 남 욕도 안 합니다.",
           "인간관계에 계산적입니다.",
           "위로 잘 못합니다. 사실 말 자체를 잘 안 합니다.",
           "뭐 하나 시작하면 끝을 봐야 합니다.",],
    job: ["발명가", 
          "심리학자", 
          "변리사",
          "사업 컨설팅",
          "프로그래머",
          "보안 전문가",
          "사진작가",
          "영화 편집",
          "대학교수",
          "연구원",
          "빅데이터 분석가",
          "수학자",],
    love: ["연애하면서 에너지 소모가 심한 편입니다.", 
           "상대방에게 관심이 식으면 손절이 빠른 편입니다.",
           "독신주의자가 은근 많은 성격입니다.",
           "연인에게 의지하기보다 독립적인 성향이 강합니다.",
           "사랑표현을 잘 하지 못합니다.",
           "상대방의 다정함이나 따뜻함보다는 재미, 호기심에 더 끌립니다.",
           "밀당을 하거나 당하는 것을 싫어합니다.",
           "오글거림, 허세를 싫어합니다.",
           "연애할 때도 상대방을 분석하는 것을 좋아합니다.",
           "기념일을 챙기는 것보다 평소에 신경 쓰거나 실용적인 것을 좋아합니다.",],
    chemistry: {
      '잘 맞는  MBTI': ["ENFJ", "ENTJ", "ENFP", "INFJ", "INFP", "INTJ", "ENTP", 'INTP'], 
      '안 맞는  MBTI': ["ESFJ", "ISFJ", "ESTJ", "ISTJ", "ESFP", "ISFP", "ESTP"],
    },
		image : './profile/image/INTP.png',
  },
}