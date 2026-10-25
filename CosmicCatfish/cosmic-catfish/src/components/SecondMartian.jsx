export default function SecondMartian() {
  return (
    <svg viewBox="0 0 200 260" style={{ width: "100%", display: "block" }}>
      <rect x="88" y="112" width="23" height="48" fill="#FF69B4" />

      <path
        d="M62 82 Q58 46 100 42 Q142 46 138 82 Q140 108 128 128 Q116 145 100 145 Q84 145 72 128 Q60 108 62 82Z"
        fill="#FF69B4"
      />

      <path
        fill="#7B4B94"
        d="M62 82 Q58 46 100 42 Q142 46 138 82 C135 95, 138 115, 130 125 C125 105, 128 85, 132 78 C115 72, 85 72, 68 78 C72 85, 75 105, 70 125 C62 115, 65 95, 62 82 Z"
      />

      <path
        fill="#7B4B94"
        d="M68 75 C52 80, 52 108, 64 120 C54 108, 54 88, 68 75 Z"
      />
      <path
        fill="#7B4B94"
        d="M132 75 C148 80, 148 108, 136 120 C146 108, 146 88, 132 75 Z"
      />

      <g id="antenna">
        <line
          x1="100"
          y1="42"
          x2="100"
          y2="22"
          stroke="#FF69B4"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="100" cy="18" r="4.5" fill="#FF69B4" />
      </g>

      <path
        d="M45 280 Q48 175 72 155 Q100 162 128 155 Q152 170 155 280Z"
        fill="#6B716F"
      />

      <g
        id="shirt-details"
        stroke="#C19A6B"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      >
        <path d="M 75 180 Q 78 225 70 265" />
        <path d="M 125 180 Q 122 225 125 265" />
      </g>

      <g id="nose">
        <circle cx="97" cy="110" r="1.2" fill="#C71585" />
        <circle cx="103" cy="110" r="1.2" fill="#C71585" />
      </g>

      <g id="lips">
        <path d="M88 124 Q100 121 112 124 Q100 126 88 124Z" fill="#FF1493" />
        <path d="M89 125 Q100 129 111 125 Q100 127 89 125Z" fill="#FF1493" />
      </g>

      <g id="left-eye">
        <circle cx="84" cy="88" r="8.5" fill="#fff" />
        <circle cx="84" cy="88" r="4.8" fill="#3a2a1a" />
        <circle cx="84" cy="85.5" r="1.6" fill="#fff" />
        <path
          d="M76 81 Q84 77 92 81"
          fill="none"
          stroke="#C71585"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </g>

      <g id="middle-eye">
        <circle cx="100" cy="74" r="8.5" fill="#fff" />
        <circle cx="100" cy="74" r="4.8" fill="#3a2a1a" />
        <circle cx="101.5" cy="71.5" r="1.6" fill="#fff" />
        <path
          d="M92 68 Q100 63 108 68"
          fill="none"
          stroke="#C71585"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M92 68 Q100 63 108 68"
          fill="none"
          stroke="#C71585"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </g>

      <g id="right-eye">
        <circle cx="116" cy="88" r="8.5" fill="#fff" />
        <circle cx="116" cy="88" r="4.8" fill="#3a2a1a" />
        <circle cx="116" cy="85.5" r="1.6" fill="#fff" />
        <path
          d="M108 81 Q116 77 124 81"
          fill="none"
          stroke="#C71585"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M108 81 Q116 77 124 81"
          fill="none"
          stroke="#C71585"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
