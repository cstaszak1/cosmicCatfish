export default function Spy() {
  return (
    <svg viewBox="0 0 200 260" style={{ width: "100%", display: "block" }}>
      <defs>
        <linearGradient id="hairGrad-nova" x1="0" y1="0" x2="0" y2="100">
          <stop offset="0%" stopColor="#5c3a21" />
          <stop offset="50%" stopColor="#b07d4b" />
          <stop offset="100%" stopColor="#8c5830" />
        </linearGradient>
      </defs>

      <path
        fill="url(#hairGrad-nova)"
        d="M100 15 C50 15, 28 60, 30 150 C32 210, 40 245, 52 260 L148 260 C160 245, 168 210, 170 150 C172 60, 150 15, 100 15 Z"
      />

      <path
        fill="#ffffff"
        opacity="0.09"
        d="M58 45 C80 28, 120 48, 142 65 C120 58, 80 58, 58 65 Z"
      />
      <path
        fill="#120a07"
        opacity="0.45"
        d="M60 70 C75 88, 125 88, 140 70 C120 98, 80 98, 60 70 Z"
      />

      <g
        id="hair-lines"
        stroke="#ffdfb3"
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
      >
        <path
          d="M40 90 C35 120, 38 170, 46 220"
          strokeWidth="0.8"
          opacity="0.6"
        />
        <path
          d="M46 100 C42 140, 44 185, 52 235"
          strokeWidth="0.5"
          opacity="0.4"
        />
        <path
          d="M52 60 C45 100, 48 150, 58 200"
          strokeWidth="0.6"
          opacity="0.5"
        />
        <path
          d="M160 80 C165 120, 162 170, 154 220"
          strokeWidth="0.8"
          opacity="0.6"
        />
        <path
          d="M154 100 C158 140, 156 185, 148 235"
          strokeWidth="0.5"
          opacity="0.4"
        />
        <path
          d="M148 60 C155 100, 152 150, 142 200"
          strokeWidth="0.6"
          opacity="0.5"
        />
      </g>

      <rect x="85" y="105" width="32" height="75" fill="#a8683a" />

      <path
        d="M62 82 Q58 46 100 42 Q142 46 140 88 Q140 108 128 128 Q116 145 100 145 Q84 145 72 128 Q60 108 60 88Z"
        fill="#c68642"
      />

      <path
        d="M8 270 Q12 178 62 160 Q100 178 138 160 Q188 175 192 270Z"
        fill="#ff5a7e"
      />

      <g
        id="shirt-details"
        stroke="#e0486c"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      >
        <path d="M 48 180 Q 58 215 50 252" />
        <path d="M 152 180 Q 142 215 150 252" />
      </g>

      <g id="nose">
        <path
          d="M98 94 Q100 110 95 112 Q100 114 103 112"
          fill="none"
          stroke="#7a4220"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="99" cy="111" r="1.2" fill="#e8a87c" opacity="0.6" />
      </g>

      <g id="lips">
        <path
          d="M86 124 Q93 120 100 122 Q107 120 114 124 Q100 128 86 124Z"
          fill="#9e3b4d"
        />
        <path d="M87 125 Q100 134 113 125 Q100 128 87 125Z" fill="#8a2e3f" />
        <ellipse
          cx="100"
          cy="129"
          rx="4"
          ry="1.2"
          fill="#ffffff"
          opacity="0.5"
        />
      </g>

      <g id="left-eye">
        <ellipse cx="80" cy="88" rx="8" ry="5" fill="#fff" />
        <circle cx="80" cy="88" r="3.5" fill="#3a2a1a" />
        <circle cx="81.5" cy="86.5" r="1.2" fill="#fff" />
        <path
          d="M72 81 Q80 77 88 81"
          fill="none"
          stroke="#6d3919"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M70 88 Q80 79 91 85"
          fill="none"
          stroke="#170c06"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M76 83 L75 80"
          fill="none"
          stroke="#170c06"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M82 82 L82 78"
          fill="none"
          stroke="#170c06"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M88 83 L90 79"
          fill="none"
          stroke="#170c06"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M91 85 L95 81"
          fill="none"
          stroke="#170c06"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </g>

      <g id="right-eye">
        <ellipse cx="120" cy="88" rx="8" ry="5" fill="#fff" />
        <circle cx="120" cy="88" r="3.5" fill="#3a2a1a" />
        <circle cx="121.5" cy="86.5" r="1.2" fill="#fff" />
        <path
          d="M112 81 Q120 77 128 81"
          fill="none"
          stroke="#6d3919"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M110 85 Q120 79 130 88"
          fill="none"
          stroke="#170c06"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M124 83 L125 80"
          fill="none"
          stroke="#170c06"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M118 82 L118 78"
          fill="none"
          stroke="#170c06"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M112 83 L110 79"
          fill="none"
          stroke="#170c06"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M130 88 L134 83"
          fill="none"
          stroke="#170c06"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </g>

      <g
        id="neck-hair-strands"
        stroke="#f5cb98"
        strokeLinecap="round"
        fill="none"
      >
        <path
          d="M52 140 C56 146, 56 150, 53 155"
          strokeWidth="0.5"
          opacity="0.4"
        />
        <path
          d="M68 150 C66 153, 67 156, 69 158"
          strokeWidth="0.5"
          opacity="0.4"
        />
        <path
          d="M138 155 C139 157, 137 160, 135 162"
          strokeWidth="0.6"
          opacity="0.7"
        />
        <path
          d="M132 150 C133 153, 131 156, 129 158"
          strokeWidth="0.5"
          opacity="0.4"
        />
        <path
          d="M58 120 C65 135, 68 145, 71 158"
          stroke="#3d2212"
          strokeWidth="1.0"
          opacity="0.3"
        />
        <path
          d="M142 130 C135 135, 132 145, 129 158"
          stroke="#3d2212"
          strokeWidth="1.0"
          opacity="0.3"
        />
      </g>
    </svg>
  );
}
