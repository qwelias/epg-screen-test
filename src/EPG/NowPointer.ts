import { Component, html, useEffect } from 'neverland'

export const NowPointer = Component((now: Date) => {
    let pointerEl: HTMLElement = null
    useEffect(() => pointerEl?.scrollIntoView({ inline: 'center' }), [])

    return html`
        <div id=now-pointer ref=${(el: HTMLElement) => pointerEl = el} style=${{
            left: `calc(var(--day-width) / ${dayMins / (now.getHours() * 60 + now.getMinutes())} + var(--base-size) + 1rem - 0.15rem)`,
        }}>
        </div>
    `
})

const dayMins = 60 * 24
