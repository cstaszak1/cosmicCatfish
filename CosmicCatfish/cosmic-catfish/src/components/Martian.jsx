export default function Martian() {
  return (

<svg viewBox="0 0 200 260" style={{ width: "100%", display: "block" }}>
  <defs>
    <linearGradient id="merlotGrad" x1="0" y1="0" x2="0" y2="100">
      <stop offset="0%" stopColor="#3b1016" />
      <stop offset="50%" stopColor="#5c1d24" />
      <stop offset="100%" stopColor="#8a2835" />
    </linearGradient>
  </defs>

  <rect x="88" y="95" width="23" height="80" fill="#D0312D " />
  <path
    d="M62 82 Q58 46 100 42 Q142 46 138 82 Q140 108 128 128 Q116 145 100 145 Q84 145 72 128 Q60 108 62 82Z"
    fill="#D0312D" />
<path
    fill="url(#merlotGrad)" 
    d="M62 82 Q58 46 100 42 Q142 46 138 82 C135 95, 138 115, 130 125 C125 105, 128 85, 132 78 C115 72, 85 72, 68 78 C72 85, 75 105, 70 125 C62 115, 65 95, 62 82 Z" 
  />
  <g fill="url(#merlotGrad)">
    <path d="M68 75 C52 80, 52 108, 64 120 C54 108, 54 88, 68 75 Z" />
    <path d="M132 75 C148 80, 148 108, 136 120 C146 108, 146 88, 132 75 Z" />
  </g>
  
  <path d="M45 280 Q48 185 72 170 Q100 177 128 170 Q152 185 155 280Z" fill="#EDE8D0" />

  <g id="shirt-details" stroke="#C19A6B" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6">
    <path d="M 75 180 Q 78 225 70 265" />
    <path d="M 125 180 Q 122 225 125 265" />
  </g>

  <g id="nose">
    <circle cx="97" cy="110" r="1.2" fill="#5c2b12" />
    <circle cx="103" cy="110" r="1.2" fill="#5c2b12" />
  </g>

  <g id="lips">
    <path d="M88 124 Q100 121 112 124 Q100 126 88 124Z" fill="#6b1d2f"/>
    <path d="M89 125 Q100 129 111 125 Q100 127 89 125Z" fill="#4a121e"/>
  </g>

  <g id="left-eye">
    <ellipse cx="100" cy="88" rx="12" ry="7" fill="#fff" />
    <circle cx="100" cy="88" r="4.8" fill="#3a2a1a" />
    <circle cx="102" cy="85.5" r="1.6" fill="#fff" />
    <path d="M88 79 Q100 73 112 79" fill="none" stroke="#6d3919" strokeWidth="2.2" 
    
    strokeLinecap="round" opacity="0.6" />
    <path d="M88 79 Q100 73 112 79" fill="none" stroke="#170c06" strokeWidth="2.2" 			strokeLinecap="round" />
   
  </g>

  
  
</svg>

 );
}