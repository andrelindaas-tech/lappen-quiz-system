// Interaktiv bremselengde-kalkulator
import { useState } from 'react'

interface BrakeResult {
    speed: number
    reactionDistance: number
    brakingDistanceDry: number
    brakingDistanceWet: number
    brakingDistanceIcy: number
    totalDry: number
    totalWet: number
    totalIcy: number
}

function calculate(speed: number): BrakeResult {
    const reactionDistance = (speed / 10) * 3
    const brakingDistanceDry = Math.pow(speed / 10, 2) / 2
    const brakingDistanceWet = brakingDistanceDry * 2
    const brakingDistanceIcy = brakingDistanceDry * 10

    return {
        speed,
        reactionDistance: Math.round(reactionDistance * 10) / 10,
        brakingDistanceDry: Math.round(brakingDistanceDry * 10) / 10,
        brakingDistanceWet: Math.round(brakingDistanceWet * 10) / 10,
        brakingDistanceIcy: Math.round(brakingDistanceIcy * 10) / 10,
        totalDry: Math.round((reactionDistance + brakingDistanceDry) * 10) / 10,
        totalWet: Math.round((reactionDistance + brakingDistanceWet) * 10) / 10,
        totalIcy: Math.round((reactionDistance + brakingDistanceIcy) * 10) / 10,
    }
}

export default function BrakeCalculator() {
    const [speed, setSpeed] = useState(80)
    const result = calculate(speed)

    const maxBarValue = result.totalIcy || 1

    const presets = [30, 50, 60, 80, 100, 120]

    return (
        <div className="brake-calculator">
            <h3 className="calc-title">🧮 Bremselengde-kalkulator</h3>

            <div className="calc-input-section">
                <label className="calc-label" htmlFor="speed-input">
                    Hastighet: <strong>{speed} km/t</strong>
                </label>
                <input
                    id="speed-input"
                    type="range"
                    min="10"
                    max="130"
                    step="5"
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                    className="calc-slider"
                />
                <div className="calc-presets">
                    {presets.map(s => (
                        <button
                            key={s}
                            className={`calc-preset-btn ${speed === s ? 'active' : ''}`}
                            onClick={() => setSpeed(s)}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>

            <div className="calc-results">
                <div className="calc-result-row">
                    <div className="calc-result-label">
                        <span className="calc-dot" style={{ backgroundColor: '#3b82f6' }}></span>
                        Reaksjonslengde
                    </div>
                    <div className="calc-bar-container">
                        <div
                            className="calc-bar"
                            style={{
                                width: `${(result.reactionDistance / maxBarValue) * 100}%`,
                                backgroundColor: '#3b82f6'
                            }}
                        ></div>
                    </div>
                    <span className="calc-value">{result.reactionDistance} m</span>
                </div>

                <div className="calc-divider"></div>

                <div className="calc-result-row">
                    <div className="calc-result-label">
                        <span className="calc-dot" style={{ backgroundColor: '#22c55e' }}></span>
                        Tørr vei
                    </div>
                    <div className="calc-bar-container">
                        <div
                            className="calc-bar"
                            style={{
                                width: `${(result.totalDry / maxBarValue) * 100}%`,
                                backgroundColor: '#22c55e'
                            }}
                        ></div>
                    </div>
                    <span className="calc-value">{result.totalDry} m</span>
                </div>

                <div className="calc-result-row">
                    <div className="calc-result-label">
                        <span className="calc-dot" style={{ backgroundColor: '#f59e0b' }}></span>
                        Våt vei
                    </div>
                    <div className="calc-bar-container">
                        <div
                            className="calc-bar"
                            style={{
                                width: `${(result.totalWet / maxBarValue) * 100}%`,
                                backgroundColor: '#f59e0b'
                            }}
                        ></div>
                    </div>
                    <span className="calc-value">{result.totalWet} m</span>
                </div>

                <div className="calc-result-row">
                    <div className="calc-result-label">
                        <span className="calc-dot" style={{ backgroundColor: '#ef4444' }}></span>
                        Is/snø
                    </div>
                    <div className="calc-bar-container">
                        <div
                            className="calc-bar"
                            style={{
                                width: `${(result.totalIcy / maxBarValue) * 100}%`,
                                backgroundColor: '#ef4444'
                            }}
                        ></div>
                    </div>
                    <span className="calc-value">{result.totalIcy} m</span>
                </div>
            </div>

            <div className="calc-breakdown">
                <h4>Detaljert utregning ved {speed} km/t</h4>
                <table className="calc-table">
                    <thead>
                        <tr>
                            <th>Komponent</th>
                            <th>Tørr vei</th>
                            <th>Våt vei</th>
                            <th>Is/snø</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Reaksjonslengde</td>
                            <td>{result.reactionDistance} m</td>
                            <td>{result.reactionDistance} m</td>
                            <td>{result.reactionDistance} m</td>
                        </tr>
                        <tr>
                            <td>Bremselengde</td>
                            <td>{result.brakingDistanceDry} m</td>
                            <td>{result.brakingDistanceWet} m</td>
                            <td>{result.brakingDistanceIcy} m</td>
                        </tr>
                        <tr className="calc-total-row">
                            <td><strong>Stopplengde</strong></td>
                            <td><strong>{result.totalDry} m</strong></td>
                            <td><strong>{result.totalWet} m</strong></td>
                            <td><strong>{result.totalIcy} m</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
