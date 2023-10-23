(function () {
  const texts = {
    he: {
      days: "ימים",
      hours: "שעות",
      minutes: "דקות",
      seconds: "שניות",
      subtitle1: "מאות",
      subtitle2: "חטופים",
      subtitle3: "על ידי החמאס",
      title1: "מחזירים אותם הביתה",
      title2: "עכשיו",
    },
    en: {
      days: "days",
      hours: "hours",
      minutes: "minutes",
      seconds: "seconds",
      subtitle1: "HUNDREDS ARE HELD",
      subtitle2: "HOSTAGE",
      subtitle3: "BY HAMAS",
      title1: "BRING THEM HOME",
      title2: "NOW",
    },
  };

  const engTitle = `
    <svg xmlns="http://www.w3.org/2000/svg" width="125" height="23" viewBox="0 0 125 23" fill="none">
      <path d="M113.985 16.2096L112.343 1.97803H114.056L115.204 14.2705L116.37 1.97803H118.242L119.425 14.2705L120.521 1.97803H122.251L120.591 16.2096H118.207L117.288 6.14076L116.37 16.2096H113.985Z" fill="#E82900"/>
      <path d="M108.618 16.3875C106.976 16.3875 105.898 15.3379 105.898 13.6123V4.57526C105.898 2.84969 106.976 1.80011 108.618 1.80011C110.279 1.80011 111.356 2.84969 111.356 4.57526V13.6123C111.356 15.3379 110.279 16.3875 108.618 16.3875ZM108.618 14.7864C109.236 14.7864 109.643 14.395 109.643 13.6479V4.53969C109.643 3.79253 109.236 3.40116 108.618 3.40116C108.018 3.40116 107.611 3.79253 107.611 4.53969V13.6479C107.611 14.395 108.018 14.7864 108.618 14.7864Z" fill="#E82900"/>
      <path d="M98.7526 16.2096V1.97803H100.642L102.921 12.5983L102.585 8.45339V1.97803H104.21V16.2096H102.391L100.024 5.5715L100.378 9.6097V16.2096H98.7526Z" fill="#E82900"/>
      <path d="M89.2878 16.2096V1.97803H91.0011V7.95528L92.8557 1.97803H94.622L92.3258 8.80918L94.675 16.2096H92.9087L91.0011 9.68086V16.2096H89.2878Z" fill="white"/>
      <path d="M84.859 16.3875C83.2164 16.3875 82.1389 15.3379 82.1389 13.6123V4.57526C82.1389 2.84969 83.2164 1.80011 84.859 1.80011C86.5193 1.80011 87.5967 2.84969 87.5967 4.57526V6.63884H85.8834V4.53969C85.8834 3.79253 85.4772 3.40116 84.859 3.40116C84.2585 3.40116 83.8522 3.79253 83.8522 4.53969V13.6479C83.8522 14.395 84.2585 14.7864 84.859 14.7864C85.4772 14.7864 85.8834 14.395 85.8834 13.6479V11.1574H87.5967V13.6123C87.5967 15.3379 86.5193 16.3875 84.859 16.3875Z" fill="white"/>
      <path d="M74.7548 16.2096L76.7683 1.97803H79.0292L81.0427 16.2096H79.3294L78.9762 13.0964H76.8213L76.4681 16.2096H74.7548ZM76.9979 11.5843H78.8172L77.8987 3.73918L76.9979 11.5843Z" fill="white"/>
      <path d="M68.2601 16.2096V1.97803H70.9272C72.5698 1.97803 73.6473 3.00981 73.6473 4.73539V6.78118C73.6473 7.7596 73.4177 8.4356 72.7112 8.89812C73.4177 9.34286 73.6826 10.0366 73.6826 11.0151V13.4344C73.6826 15.16 72.6052 16.2096 70.9449 16.2096H68.2601ZM70.9449 14.6085C71.5631 14.6085 71.9693 14.2172 71.9693 13.47V10.8016C71.9693 9.9477 71.6337 9.6097 70.9095 9.6097H69.9734V14.6085H70.9449ZM70.9095 8.0976C71.6337 8.07981 71.934 7.74181 71.934 6.9057V4.69981C71.934 3.95266 71.5277 3.57908 70.9272 3.57908H69.9734V8.0976H70.9095Z" fill="white"/>
      <path d="M55.9148 16.2096V1.97803H58.4052L59.7476 13.4344L61.1077 1.97803H63.5804V16.2096H61.9555V9.52075L62.2204 4.11276L60.7367 16.2096H58.7232L57.2748 4.0416L57.5398 9.48517V16.2096H55.9148Z" fill="white"/>
      <path d="M50.0613 16.2096V1.97803H54.5123V3.57908H51.7746V8.11539H54.1767V9.71644H51.7746V14.6085H54.5123V16.2096H50.0613Z" fill="white"/>
      <path d="M42.845 16.2096V1.97803H44.5583V8.15097H46.5895V1.97803H48.3028V16.2096H46.5895V9.75202H44.5583V16.2096H42.845Z" fill="white"/>
      <path d="M38.124 16.2096V3.57908H36.3401V1.97803H41.6213V3.57908H39.8373V16.2096H38.124Z" fill="white"/>
      <path d="M29.5552 16.3875C27.9125 16.3875 26.8351 15.3379 26.8351 13.6123V4.57526C26.8351 2.84969 27.9125 1.80011 29.5552 1.80011C31.2155 1.80011 32.2929 2.84969 32.2929 4.57526V6.63884H30.5796V4.53969C30.5796 3.79253 30.1733 3.40116 29.5552 3.40116C28.9546 3.40116 28.5484 3.79253 28.5484 4.53969V13.6479C28.5484 14.395 28.9546 14.7864 29.5552 14.7864C30.1733 14.7864 30.5796 14.395 30.5796 13.6479V9.9121H29.5552V8.4H32.2929V13.6123C32.2929 15.3379 31.2155 16.3875 29.5552 16.3875Z" fill="white"/>
      <path d="M19.6896 16.2096V1.97803H21.5795L23.858 12.5983L23.5224 8.45339V1.97803H25.1474V16.2096H23.3281L20.9613 5.5715L21.3146 9.6097V16.2096H19.6896Z" fill="white"/>
      <path d="M16.2164 16.2096V1.97803H17.9297V16.2096H16.2164Z" fill="white"/>
      <path d="M9.18994 16.2096V1.97803H11.804C13.4467 1.97803 14.5241 3.00981 14.5241 4.73539V7.59949C14.5241 8.66686 14.1179 9.4496 13.429 9.87654L14.895 16.2096H13.1287L11.963 10.3746H10.9032V16.2096H9.18994ZM11.7864 8.86254C12.4046 8.86254 12.8108 8.47118 12.8108 7.72402V4.69981C12.8108 3.95266 12.4046 3.57908 11.7864 3.57908H10.9032V8.86254H11.7864Z" fill="white"/>
      <path d="M2.07715 16.2096V1.97803H4.74423C6.38687 1.97803 7.4643 3.00981 7.4643 4.73539V6.78118C7.4643 7.7596 7.23468 8.4356 6.52817 8.89812C7.23468 9.34286 7.49962 10.0366 7.49962 11.0151V13.4344C7.49962 15.16 6.42219 16.2096 4.76189 16.2096H2.07715ZM4.76189 14.6085C5.38009 14.6085 5.78633 14.2172 5.78633 13.47V10.8016C5.78633 9.9477 5.45074 9.6097 4.72657 9.6097H3.79044V14.6085H4.76189ZM4.72657 8.0976C5.45074 8.07981 5.75101 7.74181 5.75101 6.9057V4.69981C5.75101 3.95266 5.34477 3.57908 4.74423 3.57908H3.79044V8.0976H4.72657Z" fill="white"/>
      <path d="M123.174 19.3701L123.184 19.4659H123.189L123.19 19.4844H123.186L123.196 19.579H123.148L123.138 19.4856L116.681 19.665C116.681 19.6306 116.681 19.5974 116.681 19.563L117.161 19.5495L123.138 19.4672L123.127 19.3726H123.175L123.174 19.3701ZM9.19216 21.5716L14.1097 21.6318L16.5684 21.6613L19.0272 21.6822L23.9448 21.7227L28.8623 21.7497C32.1407 21.7719 35.4191 21.7731 38.6959 21.7866C41.9743 21.7903 45.2512 21.7952 48.5295 21.8001H54.7841L61.0402 21.7891L62.6046 21.7866L64.1676 21.7792L67.2948 21.7657L70.4221 21.751L73.5495 21.7276C81.889 21.6674 90.2299 21.5691 98.5634 21.4033C100.941 21.3566 103.318 21.305 105.694 21.251C111.565 21.1994 117.435 21.1281 123.302 21.0384L123.275 20.7804C123.307 20.7804 123.338 20.778 123.369 20.778L123.094 18.1748C123.063 18.1748 123.031 18.1748 123 18.176L122.973 17.918C115.471 18.1404 107.965 18.3173 100.457 18.4524C99.8077 18.4573 99.1586 18.4635 98.5095 18.4684C73.4372 18.6379 48.3515 18.4229 23.3047 17.8173C22.5838 17.8001 21.8614 17.7878 21.1406 17.7743L18.9749 17.7386C17.5302 17.7178 16.0869 17.6969 14.6421 17.6772L14.7439 17.9278C17.9026 18.0507 21.0687 18.1563 24.2394 18.2288C25.8247 18.2657 27.4101 18.3038 28.9984 18.3308C30.5852 18.3566 32.1721 18.3824 33.7604 18.407C40.1123 18.4942 46.4656 18.5495 52.807 18.6367L55.2059 18.6735L57.6048 18.7043L62.4027 18.7669C63.7054 18.7804 65.0096 18.7964 66.3122 18.8111C60.5228 18.8382 54.7318 18.8517 48.9423 18.8455C48.6805 18.8418 48.4188 18.8406 48.1571 18.8369L48.1541 18.8455C34.1837 18.8283 20.2147 18.7141 6.24579 18.5016C3.36077 18.4573 2.28546 18.563 2.23461 18.9106C2.12842 19.6478 1.66029 20.3787 1.63038 21.1171C1.62589 21.2252 3.07962 21.4254 4.09214 21.477C5.69094 21.5569 7.48418 21.5458 9.19515 21.5728" fill="#E82900"/>
    </svg>
  `;
  const hebTitle = `
    <svg xmlns="http://www.w3.org/2000/svg" width="153" height="22" viewBox="0 0 153 22" fill="none">
      <path d="M146.933 15.203L147.857 2.33425H146.915V0.703003H150.177C151.99 0.703003 152.969 1.718 152.969 3.72988V15.203H150.014V13.5718H151.21V3.65738C151.21 2.75113 150.866 2.33425 150.177 2.33425H149.452L148.691 15.203H146.933Z" fill="white"/>
      <path d="M139.657 15.203V0.703003H142.449C144.261 0.703003 145.258 1.718 145.258 3.72988V15.203H143.5V3.65738C143.5 2.75113 143.156 2.33425 142.449 2.33425H141.416V15.203H139.657Z" fill="white"/>
      <path d="M135.573 15.203V10.5086L134.739 2.33425H133.851V0.703003H138.074V2.33425H136.425L137.331 10.6355V15.203H135.573Z" fill="white"/>
      <path d="M130.602 10.1099V2.33425H129.497V0.703003H132.361V10.1099H130.602Z" fill="white"/>
      <path d="M126.215 3.65738C126.215 2.75113 125.871 2.33425 125.164 2.33425H122.935V0.703003H125.164C126.977 0.703003 127.974 1.718 127.974 3.72988V15.203H126.215V3.65738Z" fill="white"/>
      <path d="M119.686 10.1099V2.33425H118.581V0.703003H121.444V10.1099H119.686Z" fill="white"/>
      <path d="M111.235 15.203V0.703003H116.835V15.203H111.235ZM112.993 13.6624H115.077V2.24363H112.993V13.6624Z" fill="white"/>
      <path d="M100.461 9.9105C100.515 7.91675 101.023 6.82925 101.983 6.32175L100.008 0.974878V0.703003H101.748L103.85 6.99238H104.194L104.575 0.703003H106.261L105.644 8.26113L104.303 8.27925L106.75 14.8586V15.203H105.046L102.509 7.71738C102.128 7.98925 102.056 8.49675 102.038 9.22175L101.983 15.203H100.261L100.461 9.9105Z" fill="white"/>
      <path d="M96.6873 15.203V2.33425H95.5273V0.703003H98.4455V15.203H96.6873Z" fill="white"/>
      <path d="M87.1975 15.203V13.5718H88.3938V2.33425H87.4694V0.703003H91.185C92.9975 0.703003 93.9944 1.718 93.9944 3.72988V15.203H92.2363V3.65738C92.2363 2.75113 91.8919 2.33425 91.185 2.33425H90.1519V15.203H87.1975Z" fill="white"/>
      <path d="M80.0327 15.203V0.703003H85.6333V15.203H80.0327ZM81.7908 13.6624H83.8752V2.24363H81.7908V13.6624Z" fill="white"/>
      <path d="M73.2595 15.203V2.33425H69.2539V0.703003H75.0177V15.203H73.2595ZM69.5439 15.203V5.10738H71.302V15.203H69.5439Z" fill="white"/>
      <path d="M62.5708 15.203V13.5718H65.3439V2.33425H62.5708V0.703003H67.1021V13.5718H67.8633V15.203H62.5708Z" fill="white"/>
      <path d="M59.141 10.1099V2.33425H58.0354V0.703003H60.8992V10.1099H59.141Z" fill="white"/>
      <path d="M49.7056 15.203V13.5718H50.9018V2.33425H49.9774V0.703003H53.6931C55.5056 0.703003 56.5024 1.718 56.5024 3.72988V15.203H54.7443V3.65738C54.7443 2.75113 54.3999 2.33425 53.6931 2.33425H52.6599V15.203H49.7056Z" fill="white"/>
      <path d="M46.3652 15.203V2.33425H42.3596V0.703003H48.1234V15.203H46.3652ZM42.6496 15.203V5.10738H44.4077V15.203H42.6496Z" fill="white"/>
      <path d="M31.5835 15.203V13.5718H32.6891L31.7466 0.703003H33.5047L34.3204 13.5718H34.8279C35.5166 13.5718 35.861 13.1549 35.861 12.2486V0.703003H37.6191V12.158C37.6191 14.1699 36.6404 15.203 34.8279 15.203H31.5835Z" fill="#E82900"/>
      <path d="M25.3277 15.203V13.5718H27.1221C27.8108 13.5718 28.1552 13.1549 28.1552 12.2486V2.33425H25.3096V0.703003H29.9133V12.158C29.9133 14.1699 28.9346 15.203 27.1221 15.203H25.3277Z" fill="#E82900"/>
      <path d="M16.3141 15.203L15.5166 0.703003H17.2022L17.601 9.4755H18.761V0.703003H20.4104V10.9799H17.6735L17.8004 13.5718H20.8997C21.6066 13.5718 21.951 13.1549 21.951 12.2486V0.703003H23.7091V12.158C23.7091 14.1699 22.7122 15.203 20.8997 15.203H16.3141Z" fill="#E82900"/>
      <path d="M11.996 10.1099V2.33425H10.8904V0.703003H13.7541V10.1099H11.996Z" fill="#E82900"/>
      <path d="M7.389 15.203V2.33425H6.229V0.703003H9.14713V15.203H7.389Z" fill="#E82900"/>
      <path d="M152.723 18.4261L152.736 18.5444H152.742L152.743 18.5671H152.738L152.751 18.6839H152.691L152.678 18.5686L144.581 18.79C144.581 18.7475 144.581 18.7066 144.581 18.6642L145.183 18.6475L152.678 18.5459L152.665 18.4291H152.725L152.723 18.4261ZM9.7814 21.1434L15.9484 21.2177L19.0318 21.2541L22.1153 21.2799L28.2824 21.33L34.4493 21.3633C38.5606 21.3906 42.6719 21.3921 46.7814 21.4088C50.8927 21.4134 55.0021 21.4194 59.1135 21.4255H66.9572L74.8028 21.4118L76.7647 21.4088L78.7247 21.3997L82.6466 21.383L86.5685 21.3648L90.4904 21.336C100.949 21.2617 111.409 21.1404 121.86 20.9357C124.842 20.8781 127.822 20.8144 130.803 20.7477C138.164 20.684 145.526 20.596 152.884 20.4853L152.85 20.1669C152.89 20.1669 152.929 20.1639 152.969 20.1639L152.623 16.9506C152.584 16.9506 152.545 16.9506 152.505 16.9521L152.471 16.6337C143.063 16.9082 133.65 17.1265 124.234 17.2933C123.42 17.2994 122.606 17.307 121.792 17.313C90.3497 17.5223 58.8902 17.2569 27.4795 16.5094C26.5755 16.4881 25.6696 16.473 24.7656 16.4563L22.0497 16.4123C20.2379 16.3865 18.4279 16.3607 16.6161 16.3365L16.7437 16.6458C20.7049 16.7975 24.6755 16.9279 28.6518 17.0173C30.6399 17.0628 32.628 17.1098 34.6199 17.1432C36.6099 17.1751 38.6 17.2069 40.5919 17.2372C48.5576 17.3449 56.5251 17.4131 64.4777 17.5208L67.4862 17.5663L70.4945 17.6042L76.5115 17.6815C78.1451 17.6982 79.7807 17.7179 81.4143 17.7361C74.1539 17.7695 66.8915 17.7862 59.6311 17.7786C59.3028 17.774 58.9746 17.7725 58.6464 17.768L58.6426 17.7786C41.1226 17.7573 23.6045 17.6163 6.08643 17.354C2.4684 17.2994 1.11987 17.4298 1.0561 17.8589C0.922935 18.7688 0.335865 19.671 0.298353 20.5824C0.292726 20.7158 2.1158 20.963 3.38558 21.0267C5.3906 21.1252 7.63947 21.1116 9.78516 21.145" fill="#E82900"/>
    </svg>
  `;

  const counterStart = 1696648800; // Saturday, October 7, 2023 6:20:00 AM GMT+03:00
  let tickerInterval: number;
  const styles = `
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300;700&family=Open+Sans:wght@400;600;700;800&display=swap');

#bthn {
  background: black;
  background: linear-gradient(180deg, #2F2929 0%, #111 100%);
  display: inline-block;
  position: fixed;
  bottom: 30px;
  left:50px;
  box-shadow: 0px 4.76599px 5.56032px 0px rgba(0, 0, 0, 0.20);
  padding: 3px;
  border-radius: 11px;
  z-index: 9999;
  direction:ltr;
  box-sizing: content-box;
  
}
#bthn[lang=he] {
  right:50px;
  left:auto;
}

#bthn #bthnLink {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 6px 8px;
  text-align: center;
  font-size: 12px;
  text-decoration: none;
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  border-radius: 11px;
  border: 0.794px solid #867F8A;
  font-weight: 400;
}

#bthn #closeBthn {
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
  z-index: 10;
  padding: 8px 10px;
}

#bthn[lang=he] #closeBthn  {
  right: auto;
  left:0;
}

#bthn .time-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
}
#bthn .time-block .time {
  font-size: 32px;
  font-family: "Open Sans Condensed", "Open Sans", Arial, Helvetica, sans-serif;
  display: flex;
  gap: 3px;
  font-weight: 700;
}
#bthn .time-block .time .digit {
  background-color:#626060;
  border-radius: 1px;
  line-height: 1;
  padding: 8px 2px;
  margin-bottom:2px;
  color:white;
  width: 0.6em;
}
#bthn #timeBlocks {
  display: flex; 
  font-size: 8px;
  align-items: center;
  text-transform: uppercase;
  align-items: center;
  color:#AFAFAF;
  font-weight:400;
}
#bthn #timeBlocks .dots {
  font-size: 24px;
  line-height:1;
  font-weight:300;
  margin-bottom: 0.7em;
  font-family: "Open Sans Condensed", "Open Sans", Arial, Helvetica, sans-serif;
  color:white;
  letter-spacing: 1px;
  leading-trim: both;
text-edge: cap;
}
#bthn .title-wrap{
  display:flex;
  flex-direction:column;
  align-items:stretch;
}
#bthn .title-wrap .underline{
  aspect-ratio: 274.27/10.16;
}

#bthn #bthnTitle {
  font-size: 22px;
  margin-top: 3px;
}
#bthn #bthnSubtitle {
  margin-bottom: 1px;
  display:block;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 115%; /* 13.2px */
  letter-spacing: 0.18px;
  text-transform: uppercase;
  text-align:center;
  width:180px;
}
#bthn[lang=he] #bthnSubtitle {
  margin-bottom:-2px;
}


#bthn #bthnSubtitle .red-bg {
  background-color:#E82900

}

@media (max-width: 768px) {
  #bthn {
    max-width:calc(100% - 30px);
    left:15px;
    
  }
  #bthn[lang=he] {
    right:15px;
    
  }
  #bthn .time-block .time {
    font-size: 26px;

  }
}
`;

  function getTimeBlock(title: string, value: number) {
    const firstDigitasString = value.toString().padStart(2, "0")[0];
    const secondDigitasString = value.toString().padStart(2, "0")[1];

    return `
    <div class="time-block">
      <div class="time">
        <span class="digit">${firstDigitasString}</span>
        <span class="digit">${secondDigitasString}</span>
      </div>
      <div>${title}</div>
    </div>
  `;
  }

  function updateTimer(
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
    locale: string
  ) {
    const timeBlocks = document.getElementById("timeBlocks");
    if (timeBlocks) {
      const textsObj: { [key: string]: any } = texts;
      timeBlocks.innerHTML = `
        ${getTimeBlock(textsObj[locale]["days"], days)}
        <span class="dots">:</span>
        ${getTimeBlock(textsObj[locale]["hours"], hours)}
        <span class="dots">:</span>
        ${getTimeBlock(textsObj[locale]["minutes"], minutes)}
        <span class="dots">:</span>
        ${getTimeBlock(textsObj[locale]["seconds"], seconds)}
      `;
    }
  }

  function updateTicker() {
    const then = new Date(counterStart * 1000);
    const now = new Date();

    // Calculate the difference in milliseconds
    const diffMs = now.getTime() - then.getTime();

    // Calculate time differences
    const totalSeconds = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const injectionHtml = document.querySelector<HTMLDivElement>("#bthn");
    // get lang attribute from injectionHtml
    const lang = injectionHtml?.getAttribute("lang");
    const locale = lang === "he" ? "he" : "en";
    updateTimer(days, hours, minutes, seconds, locale);
  }
  function initializeWidget() {
    const injectionHtml = document.querySelector<HTMLDivElement>("#bthn");
    const lang = injectionHtml?.getAttribute("lang");
    const locale = lang === "he" ? "he" : "en";
    const referringDomain = window.location.hostname;
    const link = `https://stories.bringthemhomenow.net/?utm_source=${referringDomain}&utm_medium=banner`;

    injectionHtml!.innerHTML = `
      <style>${styles}</style>
      <a id="bthnLink" target="_blank" href="${link}">
        <div id="closeBthn" role="button" tabindex="0">X</div>
        <div id="bthnSubtitle">${
          texts[locale]["subtitle1"]
        } <span class="red-bg">${texts[locale]["subtitle2"]}</span> ${
      texts[locale]["subtitle3"]
    }</div>
        <div id="timeBlocks"></div>
        <div class="title-wrap" aria-label="${`${texts[locale]["title1"]} ${texts[locale]["title2"]}`}">
          ${locale === "he" ? hebTitle : engTitle}
          
        </div>
      </a>
    `;

    // Add event listener to the close button
    const closeElem = document.querySelector("#closeBthn");
    if (closeElem) {
      closeElem.addEventListener("click", closeTicker);
    }

    updateTicker();
  }

  function closeTicker(event: any) {
    event.preventDefault();
    event.stopPropagation();

    const tickerElem = document.querySelector<HTMLDivElement>("#bthn");
    if (tickerElem) {
      tickerElem.remove();
    }
    clearInterval(tickerInterval);
  }

  function setupCounter() {
    initializeWidget();
    tickerInterval = setInterval(updateTicker, 1000);
  }

  setupCounter();
})();
