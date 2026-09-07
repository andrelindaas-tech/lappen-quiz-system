import { useId } from 'react'

function Car({ x, y, angle = 0, own = false }: { x: number; y: number; angle?: number; own?: boolean }) {
    return <g transform={`translate(${x} ${y}) rotate(${angle})`}>
        <rect x="-39" y="-19" width="82" height="44" rx="15" fill="#0c1922" opacity=".2" transform="translate(2 4)" />
        <g fill="#1c2530"><rect x="-24" y="-24" width="17" height="9" rx="3" /><rect x="-24" y="15" width="17" height="9" rx="3" /><rect x="18" y="-24" width="16" height="9" rx="3" /><rect x="18" y="15" width="16" height="9" rx="3" /></g>
        <rect x="-40" y="-19" width="82" height="38" rx="12" fill={own ? '#35b9cf' : '#e1e8ee'} stroke={own ? '#a8f0f6' : '#fff'} strokeWidth="1.5" />
        <path d="M-20-16H8L19-12V12L8 16H-20L-27 12V-12Z" fill="#172f40" />
        <rect x="-19" y="-13" width="26" height="26" rx="5" fill={own ? '#2695b2' : '#a0b2c1'} />
        <path d="M10-13L17-10V10L10 13Z" fill="#a4dbe6" />
        <path d="M-23-11L-27-8V8L-23 11Z" fill="#8fc1d0" />
        <path d="M22-14H32M22 14H32" stroke={own ? '#93e3ef' : '#fff'} strokeWidth="2" strokeLinecap="round" />
        <g fill="#fff6c1"><rect x="36" y="-15" width="4" height="8" rx="2" /><rect x="36" y="7" width="4" height="8" rx="2" /></g>
        <g fill="#e76d6d"><rect x="-39" y="-13" width="3" height="7" rx="1" /><rect x="-39" y="6" width="3" height="7" rx="1" /></g>
        <g fill={own ? '#2391ab' : '#becbd5'}><rect x="11" y="-24" width="7" height="6" rx="2" /><rect x="11" y="18" width="7" height="6" rx="2" /></g>
    </g>
}

function Arrow({ x, y, reverse = false, angle }: { x: number; y: number; reverse?: boolean; angle?: number }) {
    return <path transform={`translate(${x} ${y}) rotate(${angle ?? (reverse ? 180 : 0)})`} d="M-19-3H5V-10L21 0 5 10V3H-19Z" fill="#f3f6ef" opacity=".8" />
}

function Tree({ x, y, size = 1 }: { x: number; y: number; size?: number }) {
    return <g transform={`translate(${x} ${y}) scale(${size})`}>
        <ellipse cx="9" cy="10" rx="26" ry="20" fill="#254d3a" opacity=".15" />
        <circle cx="0" cy="0" r="24" fill="#6b9270" /><circle cx="-7" cy="-6" r="17" fill="#82a17c" /><circle cx="5" cy="-9" r="13" fill="#94b28a" />
    </g>
}

export default function RoadMarkingScene({ scenarioId: id, description, highlight = false }: { scenarioId: number; description: string; highlight?: boolean }) {
    const uid = useId().replace(/:/g, '')
    const crossing = id === 4 || id === 6
    const sameDirection = [1, 5, 7, 10, 12, 14].includes(id)
    const yellow = !sameDirection
    const ownX = crossing ? 410 : id === 12 ? 130 : 148
    const ownY = crossing ? 332 : id === 7 ? 151 : id === 13 ? 242 : 250
    const lineColor = yellow ? '#f7d45b' : '#f4f5eb'
    const dash = [2, 3].includes(id) ? '48 16' : id === 7 ? '20 20' : [9, 10, 14].includes(id) ? '16 48' : undefined
    return <svg className="rmg-scene" viewBox="0 0 640 400" role="img" aria-labelledby={`${uid}-title ${uid}-desc`}>
        <title id={`${uid}-title`}>Trafikksituasjon sett ovenfra</title>
        <desc id={`${uid}-desc`}>{description}</desc>
        <defs>
            <pattern id={`${uid}-grass`} width="42" height="37" patternUnits="userSpaceOnUse"><path d="M7 10l2-4m-2 4l-3-2M30 29l2-4" stroke="#7c9c73" strokeWidth="1.3" opacity=".25" /></pattern>
            <pattern id={`${uid}-asphalt`} width="13" height="17" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r=".6" fill="#fff" opacity=".08" /><circle cx="8" cy="12" r=".8" fill="#101a27" opacity=".15" /></pattern>
            <pattern id={`${uid}-hatch`} width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(40)"><path d="M0 0V20" stroke="#f4f5eb" strokeWidth="6" /></pattern>
            <linearGradient id={`${uid}-road`} x2="0" y2="1"><stop stopColor="#424e59" /><stop offset="1" stopColor="#35434f" /></linearGradient>
        </defs>
        <rect width="640" height="400" fill="#b8c9a5" />
        <rect width="640" height="400" fill={`url(#${uid}-grass)`} />
        <path d={crossing ? 'M0 43H640M0 323H225V400M640 323H492V400' : 'M0 64H640M0 337H640'} stroke="#d4d5c4" strokeWidth="15" fill="none" />
        <path d={crossing ? 'M0 43H640M0 323H225V400M640 323H492V400' : 'M0 64H640M0 337H640'} stroke="#e4e2d2" strokeWidth="11" fill="none" />
        <Tree x={64} y={28} size={.85} /><Tree x={561} y={36} size={1.2} /><Tree x={599} y={379} size={1.1} /><Tree x={56} y={377} size={.72} />
        <path d={crossing ? 'M0 66H640V218H500Q466 218 466 252V400H254V252Q254 218 220 218H0Z' : id === 12 ? 'M0 94H640V203H504V400H386V306H0Z' : 'M0 94H640V306H0Z'} fill="#8e9993" stroke="#d7d9cc" strokeWidth="8" />
        <path d={crossing ? 'M0 72H640V212H500Q460 212 460 252V400H260V252Q260 212 220 212H0Z' : id === 12 ? 'M0 98H640V200H500V400H390V302H0Z' : 'M0 98H640V302H0Z'} fill={`url(#${uid}-road)`} />
        <path d={crossing ? 'M0 72H640V212H500Q460 212 460 252V400H260V252Q260 212 220 212H0Z' : id === 12 ? 'M0 98H640V200H500V400H390V302H0Z' : 'M0 98H640V302H0Z'} fill={`url(#${uid}-asphalt)`} />
        {crossing ? <>
            <path d="M0 80H640M0 204H220Q268 204 268 252V400M640 204H500Q452 204 452 252V400" fill="none" stroke="#f4f5eb" strokeWidth="3" />
            <path d="M0 142H640M360 280V400" stroke="#f7d45b" strokeWidth="3" strokeDasharray="16 40" />
            {id === 4 ? <g fill="#fffdf1">{[368, 397, 426].map(x => <path key={x} d={`M${x} 245h22l-11 20Z`} />)}</g> : <path d="M364 246H448" stroke="#f4f5eb" strokeWidth="10" />}
            <rect x="490" y="267" width="5" height="30" rx="2" fill="#7c8984" />
            {id === 6 ? <g transform="translate(492 254)"><path d="M-10-24H10L24-10V10L10 24H-10L-24 10V-10Z" fill="#ca4844" stroke="#fff" strokeWidth="2" /><text textAnchor="middle" y="5" fill="#fff" fontSize="13" fontWeight="800">STOP</text></g> : <path d="M466 235H518L492 281Z" fill="#fff9ea" stroke="#cd4b46" strokeWidth="6" strokeLinejoin="round" />}
            <Car x={180} y={178} /><Arrow x={513} y={108} reverse /><Arrow x={312} y={178} /><Arrow x={310} y={332} angle={90} />
        </> : <>
            <path d={id === 12 ? 'M0 107H640M0 294H390V400M500 205V400' : 'M0 107H640M0 294H640'} stroke="#f4f5eb" strokeWidth="3" fill="none" />
            {id === 5 ? <>
                <path d="M0 200H240" stroke="#f4f5eb" strokeWidth="4" strokeDasharray="16 48" />
                <path d="M240 200L640 170V230Z" fill={`url(#${uid}-hatch)`} stroke="#f4f5eb" strokeWidth="4" />
            </> : id === 13 ? <>
                <path d="M0 200H640" stroke="#26333f" strokeWidth="8" strokeDasharray="18 30" />
                <path d="M0 220C200 220 185 173 320 173S475 220 640 220M0 292C200 292 185 251 320 251S475 292 640 292" stroke="#ffb34f" strokeWidth="5" strokeLinecap="round" strokeDasharray="2 16" fill="none" />
                {[270, 315, 360].map(x => <g key={x} transform={`translate(${x} 274)`}><rect x="-10" y="-5" width="20" height="13" rx="3" fill="#263842" /><path d="M-7 4L0-15 7 4Z" fill="#f68946" /><path d="M-4-4H4" stroke="#fff4df" strokeWidth="3" /></g>)}
            </> : id === 3 || id === 11 ? <>
                <path d="M0 194H640" stroke={lineColor} strokeWidth="4" />
                <path d="M0 206H640" stroke={lineColor} strokeWidth="4" strokeDasharray={id === 3 ? dash : undefined} />
            </> : <path d="M0 200H640" stroke={lineColor} strokeWidth={id === 7 ? 9 : 4} strokeDasharray={dash} />}
            {id === 12 ? <>
                <path d="M256 250H421Q445 250 445 274V314M434 302L445 315 456 302" fill="none" stroke="#f4f5eb" strokeWidth="7" strokeLinejoin="round" />
                <Arrow x={370} y={150} />
            </> : <>
                <Arrow x={id === 7 ? 480 : 320} y={150} reverse={!sameDirection} />
                {id !== 5 && id !== 7 && id !== 13 && <Arrow x={id === 14 ? 533 : 480} y={252} />}
                {id !== 7 && id !== 14 && id !== 13 && <Car x={sameDirection ? 465 : 506} y={150} angle={sameDirection ? 0 : 180} />}
            </>}
            {id === 8 && <Car x={350} y={250} />}
            {id === 5 && <><Car x={321} y={250} /><Car x={487} y={264} /></>}
            {id === 7 && <>
                <text x="365" y="261" textAnchor="middle" fontWeight="800" fontSize="30" letterSpacing="7" fill="#f4f5eb">BUSS</text>
                <rect x="532" y="350" width="4" height="21" fill="#7c8984" />
                <image href="/signs/opplysningsskilt/skilt-508-1-kollektivfelt.jpg" x="509" y="311" width="50" height="50" />
            </>}
            {id === 14 && <>
                <rect x="367" y="303" width="72" height="43" fill="#e4e2d2" />
                <rect x="367" y="60" width="72" height="37" fill="#e4e2d2" />
                {Array.from({ length: 7 }, (_, i) => <rect key={i} x="371" y={111 + i * 27} width="64" height="16" rx="1" fill="#f7f6e9" />)}
                <g transform="translate(408 323)"><ellipse cx="3" cy="4" rx="12" ry="9" fill="#1c2938" opacity=".15" /><path d="M-5 6L-7 14M5 6L7 14" stroke="#34485b" strokeWidth="5" strokeLinecap="round" /><ellipse cy="3" rx="10" ry="6" fill="#db824d" /><circle cy="-3" r="6" fill="#f0c3a1" /></g>
            </>}
        </>}
        {highlight && <g className="rmg-scene-highlight" stroke="#b0f6e4" strokeWidth="2" strokeDasharray="5 5" fill="#88eddb" fillOpacity=".08">
            {crossing ? <rect x="361" y="235" width="95" height="39" rx="8" /> : id === 9 ? <><rect x="230" y="96" width="190" height="22" rx="8" /><rect x="230" y="283" width="190" height="22" rx="8" /></> : id === 14 ? <rect x="359" y="102" width="89" height="193" rx="12" /> : id === 12 ? <rect x="243" y="233" width="222" height="92" rx="14" /> : <rect x="226" y={id === 5 || id === 13 ? 162 : 183} width="215" height={id === 5 ? 76 : id === 13 ? 100 : 35} rx="12" />}
        </g>}
        <Car x={ownX} y={ownY} angle={crossing ? -90 : 0} own />
        <g transform={`translate(${ownX} ${crossing ? 379 : ownY + 40})`}>
            <rect x="-19" y="-10" width="38" height="20" rx="10" fill="#123e4c" stroke="#77d7e5" strokeWidth="1" /><text y="4" textAnchor="middle" fontSize="11" fontWeight="800" letterSpacing="1" fill="#fff">DU</text>
        </g>
    </svg>
}
