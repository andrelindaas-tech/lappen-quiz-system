import StoppSammenligning from './StoppSammenligning'
import './BrakingComparison.css'

export default function BrakingComparison() {
    return <section className="braking-comparison" aria-labelledby="braking-comparison-title">
        <h3 id="braking-comparison-title">Bare 10 km/t fortere – hva betyr det?</h3>
        <p>To biler oppdager samme hindring. Begge førerne reagerer etter ett sekund og bremser like hardt. Se hva 10 km/t forskjell betyr.</p>
        <StoppSammenligning />
    </section>
}
