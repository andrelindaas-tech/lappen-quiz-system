// Action Layer: Progress Bar Component

interface ProgressBarProps {
    current: number
    total: number
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
    const percentage = (current / total) * 100

    return (
        <div className="progress-container">
            <div className="progress-text">
                Spørsmål {current} av {total}
            </div>
            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${percentage}%` }}
                    role="progressbar"
                    aria-valuenow={current}
                    aria-valuemin={0}
                    aria-valuemax={total}
                />
            </div>
        </div>
    )
}
