import { Link as RouterLink, type LinkProps } from 'react-router-dom'
import { normalizeInternalTo } from '../utils/internalUrls'

/** React Router link that emits the same URL form as sitemap and canonicals. */
export default function InternalLink({ to, ...props }: LinkProps) {
    return <RouterLink {...props} to={normalizeInternalTo(to)} />
}
