import React from 'react'

const COLORS = {
  RED: '#C8102E',
  YELLOW: '#FFD100',
  BLUE: '#0033A0',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
}

interface SignIllustrationProps {
  signId: string
  className?: string
}

export const SignIllustration: React.FC<SignIllustrationProps> = ({ signId, className }) => {
  const renderSign = () => {
    switch (signId) {
      // --- Templates ---
      case 'prohibition-template':
        return (
          <g>
            <circle cx="50" cy="50" r="48" fill={COLORS.WHITE} stroke={COLORS.RED} strokeWidth="8" />
          </g>
        )
      case 'mandatory-template':
        return (
          <g>
            <circle cx="50" cy="50" r="48" fill={COLORS.BLUE} />
          </g>
        )
      case 'danger-template':
        return (
          <g>
            <path d="M50 5 L95 85 L5 85 Z" fill={COLORS.WHITE} stroke={COLORS.RED} strokeWidth="8" strokeLinejoin="round" />
          </g>
        )
      case 'info-template':
        return (
          <g>
            <rect x="5" y="5" width="90" height="90" rx="8" fill={COLORS.BLUE} />
          </g>
        )
      case 'sub-sign-template':
        return (
          <g>
            <rect x="10" y="30" width="80" height="40" rx="2" fill={COLORS.WHITE} stroke={COLORS.BLACK} strokeWidth="2" />
          </g>
        )

      // --- Priority & Yield ---
      case 'yield':
        return (
          <g>
            <path d="M5 15 L95 15 L50 95 Z" fill={COLORS.WHITE} stroke={COLORS.RED} strokeWidth="8" strokeLinejoin="round" />
          </g>
        )
      case 'stop':
        return (
          <g>
            <path d="M35 5 L65 5 L95 35 L95 65 L65 95 L35 95 L5 65 L5 35 Z" fill={COLORS.RED} stroke={COLORS.WHITE} strokeWidth="2" />
            <text x="50" y="62" fill={COLORS.WHITE} fontSize="18" fontWeight="900" textAnchor="middle" style={{ fontFamily: 'Arial, sans-serif' }}>STOPP</text>
          </g>
        )
      case 'priority-road':
        return (
          <g>
            <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" fill={COLORS.YELLOW} stroke={COLORS.WHITE} strokeWidth="4" />
            <rect x="27" y="27" width="46" height="46" transform="rotate(45 50 50)" fill="none" stroke={COLORS.BLACK} strokeWidth="1" />
          </g>
        )
      case 'end-priority-road':
        return (
          <g>
            <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" fill={COLORS.YELLOW} stroke={COLORS.WHITE} strokeWidth="4" />
            <path d="M15 85 L85 15" stroke={COLORS.BLACK} strokeWidth="8" opacity="0.6" />
          </g>
        )

      // --- Prohibition ---
      case 'speed-50':
        return (
          <g>
            <circle cx="50" cy="50" r="48" fill={COLORS.WHITE} stroke={COLORS.RED} strokeWidth="8" />
            <text x="50" y="65" fill={COLORS.BLACK} fontSize="40" fontWeight="900" textAnchor="middle" style={{ fontFamily: 'Arial, sans-serif' }}>50</text>
          </g>
        )
      case 'no-entry':
        return (
          <g>
            <circle cx="50" cy="50" r="48" fill={COLORS.RED} />
            <rect x="15" y="42" width="70" height="16" fill={COLORS.WHITE} />
          </g>
        )
      case 'no-parking':
        return (
          <g>
            <circle cx="50" cy="50" r="48" fill={COLORS.BLUE} stroke={COLORS.RED} strokeWidth="8" />
            <line x1="20" y1="20" x2="80" y2="80" stroke={COLORS.RED} strokeWidth="8" />
          </g>
        )
      case 'no-stopping':
        return (
          <g>
            <circle cx="50" cy="50" r="48" fill={COLORS.BLUE} stroke={COLORS.RED} strokeWidth="8" />
            <line x1="20" y1="20" x2="80" y2="80" stroke={COLORS.RED} strokeWidth="8" />
            <line x1="80" y1="20" x2="20" y2="80" stroke={COLORS.RED} strokeWidth="8" />
          </g>
        )

      // --- Mandatory ---
      case 'mandatory-straight':
        return (
          <g>
            <circle cx="50" cy="50" r="48" fill={COLORS.BLUE} />
            <path d="M50 20 L75 45 L60 45 L60 80 L40 80 L40 45 L25 45 Z" fill={COLORS.WHITE} />
          </g>
        )
      case 'roundabout':
        return (
          <g>
            <circle cx="50" cy="50" r="48" fill={COLORS.BLUE} />
            {/* Simple circular arrows representation */}
            <path d="M50 20 A30 30 0 0 1 80 50 L88 50 L78 65 L68 50 L76 50 A26 26 0 0 0 50 24 Z" fill={COLORS.WHITE} transform="rotate(0 50 50)"/>
            <path d="M50 20 A30 30 0 0 1 80 50 L88 50 L78 65 L68 50 L76 50 A26 26 0 0 0 50 24 Z" fill={COLORS.WHITE} transform="rotate(120 50 50)"/>
            <path d="M50 20 A30 30 0 0 1 80 50 L88 50 L78 65 L68 50 L76 50 A26 26 0 0 0 50 24 Z" fill={COLORS.WHITE} transform="rotate(240 50 50)"/>
          </g>
        )

      // --- Danger ---
      case 'dangerous-curve-right':
        return (
          <g>
            <path d="M50 5 L95 85 L5 85 Z" fill={COLORS.WHITE} stroke={COLORS.RED} strokeWidth="8" strokeLinejoin="round" />
            <path d="M40 70 Q40 50 60 50 L60 40 L75 55 L60 70 L60 60 Q50 60 50 70 Z" fill={COLORS.BLACK} />
          </g>
        )
      case 'slippery-road':
        return (
          <g>
            <path d="M50 5 L95 85 L5 85 Z" fill={COLORS.WHITE} stroke={COLORS.RED} strokeWidth="8" strokeLinejoin="round" />
            
            {/* Skid Marks (Math-calculated parallel beziers) */}
            <path d="M 45 61 C 27 70, 50 75, 59 81" stroke={COLORS.BLACK} strokeWidth="5" strokeLinecap="butt" fill="none" />
            <path d="M 60 58 C 42 67, 65 72, 74 78" stroke={COLORS.BLACK} strokeWidth="5" strokeLinecap="butt" fill="none" />
            
            {/* Tilted Car */}
            <g transform="rotate(-12, 50, 45)">
              {/* Solid Black Car Silhouette */}
              <path d="
                M 42 32 
                L 58 32 
                L 60 42 
                L 64 45 
                L 62 55
                L 38 55
                L 36 45
                L 40 42
                Z
              " fill={COLORS.BLACK} />
              
              {/* Tires */}
              <path d="M 39 55 L 44 55 L 43 61 L 39 61 Z" fill={COLORS.BLACK} />
              <path d="M 56 55 L 61 55 L 61 61 L 57 61 Z" fill={COLORS.BLACK} />

              {/* White Rear Window */}
              <polygon points="44,35 56,35 58,41 42,41" fill={COLORS.WHITE} />
              
              {/* White Taillights */}
              <rect x="38" y="46" width="3" height="4" fill={COLORS.WHITE} />
              <rect x="59" y="46" width="3" height="4" fill={COLORS.WHITE} />
              
              {/* White horizontal bumper gap */}
              <rect x="38" y="52" width="24" height="1.5" fill={COLORS.WHITE} />
            </g>
          </g>
        )
      case 'road-work':
        return (
          <g>
            <path d="M50 5 L95 85 L5 85 Z" fill={COLORS.WHITE} stroke={COLORS.RED} strokeWidth="8" strokeLinejoin="round" />
            
            <g transform="translate(0, 2)">
              {/* Dirt pile */}
              <path d="M 52 78 Q 66 58 80 78 Z" fill={COLORS.BLACK} />
              
              {/* Shovel Handle */}
              <line x1="36" y1="54" x2="62" y2="76" stroke={COLORS.BLACK} strokeWidth="3" strokeLinecap="round" />
              
              {/* Cutouts to create the white gaps between body and shovel */}
              <g stroke={COLORS.WHITE} fill="none">
                <line x1="52" y1="46" x2="44" y2="60" strokeWidth="10" strokeLinecap="butt" />
                <path d="M 50 46 L 40 46 L 36 54" strokeWidth="5" strokeLinejoin="round" />
                <line x1="48" y1="52" x2="52" y2="65" strokeWidth="5" />
                <line x1="44" y1="60" x2="34" y2="78" strokeWidth="6.5" strokeLinecap="butt" />
                <line x1="44" y1="60" x2="49" y2="78" strokeWidth="6.5" strokeLinecap="butt" />
              </g>

              {/* Black Figures */}
              <g stroke={COLORS.BLACK} strokeLinecap="butt" strokeLinejoin="miter" fill="none">
                {/* Torso */}
                <line x1="52" y1="46" x2="44" y2="60" strokeWidth="8" />
                {/* Left Arm (Back) */}
                <path d="M 50 46 L 40 46 L 36 54" strokeWidth="3" strokeLinejoin="round" />
                {/* Right Arm (Front) */}
                <line x1="48" y1="52" x2="53" y2="66" strokeWidth="3" />
                {/* Left Leg (Backwards) */}
                <line x1="44" y1="60" x2="34" y2="78" strokeWidth="4.5" />
                {/* Right Leg (Forwards) */}
                <line x1="44" y1="60" x2="49" y2="78" strokeWidth="4.5" />
              </g>

              {/* Head */}
              <circle cx="56" cy="40" r="4.8" fill={COLORS.BLACK} />
            </g>
          </g>
        )
      case 'moose':
        return (
          <g>
            <path d="M50 5 L95 85 L5 85 Z" fill={COLORS.WHITE} stroke={COLORS.RED} strokeWidth="8" strokeLinejoin="round" />
            <image 
              href="data:image/png;base64,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" 
              x="24" y="44" width="52" height="42" 
              preserveAspectRatio="xMidYMid meet" 
            />
          </g>
        )

      default:
        return null
    }
  }

  return (
    <div className={`sign-illustration-container ${className || ''}`} style={{ 
      width: '100%', 
      height: '100%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))'
    }}>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
      >
        {renderSign()}
      </svg>
    </div>
  )
}
