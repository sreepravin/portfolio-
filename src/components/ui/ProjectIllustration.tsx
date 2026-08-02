type Props = { theme: 'medical' | 'ai' }

export default function ProjectIllustration({ theme }: Props) {
  if (theme === 'medical') {
    return (
      <svg viewBox="0 0 400 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="medGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5B7FFF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3B5CFF" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <rect width="400" height="220" fill="url(#medGrad)" opacity="0.15" />
        <g opacity="0.9">
          <rect x="150" y="60" width="100" height="100" rx="14" fill="none" stroke="#7C9BFF" strokeWidth="1.5" />
          <path d="M200 85v50M175 110h50" stroke="#7C9BFF" strokeWidth="4" strokeLinecap="round" />
        </g>
        <path
          d="M20 150 L90 150 L105 110 L125 180 L145 130 L165 150 L380 150"
          fill="none"
          stroke="#5B7FFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
        />
        {[60, 300, 340].map((cx, i) => (
          <circle key={i} cx={cx} cy={150} r="3.5" fill="#7C9BFF" opacity="0.8" />
        ))}
        <circle cx="200" cy="110" r="55" fill="none" stroke="#5B7FFF" strokeWidth="1" opacity="0.25" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="aiGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5B7FFF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3B5CFF" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="url(#aiGrad)" opacity="0.15" />
      {[
        [80, 60], [80, 110], [80, 160],
        [200, 40], [200, 90], [200, 140], [200, 185],
        [320, 70], [320, 130],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="#7C9BFF" opacity="0.85" />
      ))}
      {[
        [80, 60, 200, 90], [80, 110, 200, 90], [80, 110, 200, 140], [80, 160, 200, 140],
        [200, 40, 320, 70], [200, 90, 320, 70], [200, 140, 320, 130], [200, 185, 320, 130],
        [80, 60, 200, 40], [80, 160, 200, 185],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#5B7FFF" strokeWidth="1" opacity="0.35" />
      ))}
    </svg>
  )
}
