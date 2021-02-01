import { html } from 'neverland'

export const NowButton = () => html`
    <button id=goto-now onclick=${scroll}>NOW</button>
`

const scroll = () => {
    document.querySelector('#now-pointer')?.scrollIntoView({ inline: 'center' })
    document.querySelector('#today')?.scrollIntoView({ inline: 'center' })
}
