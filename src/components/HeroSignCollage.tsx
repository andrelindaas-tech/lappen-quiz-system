/** The selected collage with the site's original vector logo on top. */
export default function HeroSignCollage() {
    return (
        <div className="tt-v2-hero-art" aria-hidden="true">
            <img src="/images/home/hero-skiltkollasj-transparent.webp" width="1000" height="1000" alt="" loading="eager" decoding="async" />
            <svg className="tt-v2-hero-logo" viewBox="0 0 1000 1000" focusable="false">
                <circle cx="500" cy="500" r="498" fill="#f5f8f7" />
                <circle cx="500" cy="500" r="450" fill="#f5f8f7" stroke="#0f766e" strokeWidth="34" />
                <g fill="#0f172a">
                                        <rect x="265" y="279.48" width="361.7" height="32.69" />
                                        <rect x="265" y="279.48" width="32.7" height="118.52" />
                                        <rect x="265" y="365.3" width="159.39" height="32.7" />
                                        <rect x="391.7" y="365.3" width="32.69" height="279.96" />
                                        <rect x="391.7" y="612.57" width="118.52" height="32.69" />
                                        <rect x="477.52" y="365.3" width="32.7" height="279.96" />
                                        <rect x="477.52" y="365.3" width="257.48" height="32.7" />
                                        <rect x="702.3" y="365.3" width="32.7" height="112.4" />
                                        <rect x="567.43" y="445" width="167.57" height="32.7" />
                                        <rect x="567.43" y="445" width="32.7" height="259.52" />
                                        <rect x="477.52" y="671.83" width="122.61" height="32.69" />
                                    </g>
            </svg>
        </div>
    )
}
