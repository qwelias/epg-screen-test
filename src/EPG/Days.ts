import { Component, html, useEffect } from 'neverland'
import { PinMarkRow } from './PinMarkRow'

export const Days = Component((now: Date) => {
    let todayEl: HTMLElement = null
    useEffect(() => {
        todayEl?.scrollIntoView({ inline: 'center' })
    }, [])

    const days = new Array(9).fill(0).map((v, i) => new Date(Number(now) + dayMs * (i - 4)))
    return html`<div id=days>${PinMarkRow(null, days.map(day => {
        const isToday = Number(day) === Number(now)
        const saveToday = (el: HTMLElement) => {
            if (isToday) todayEl = el
        }

        return html`
            <div class=day id=${isToday ? 'today' : null}>
                <div class=${isToday ? 'txt-hl' : ''} ref=${saveToday}>
                    <div>${day.toDateString().slice(0, 3)}</div>
                    <div class=txt-sm>${day.toLocaleDateString().slice(0, 6).replace(/\//g, '.')}</div>
                </div>
            </div>
        `
    }))}</div>`
})

const dayMs = 1000 * 60 * 60 * 24
