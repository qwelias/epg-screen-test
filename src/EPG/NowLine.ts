import { Component, html } from 'neverland'

export const NowLine = Component((now: Date, nItems: number) => {
    return html`
        <div id=now-line style=${{
            height: `calc(var(--base-size) * ${nItems})`,
            left: `calc(var(--day-width) / ${dayMins / (now.getHours() * 60 + now.getMinutes())} + var(--base-size) + 1rem)`,
        }}>
        </div>
    `
})

const dayMins = 60 * 24
