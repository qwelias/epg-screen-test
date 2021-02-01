import { Component, html } from 'neverland'
import { ChannelData, ScheduleData } from '../api'
import { PinMarkRow } from './PinMarkRow'
import { Timeline } from './Timeline'
import { NowButton } from './NowButton'
import { NowLine } from './NowLine'

// ones from mock api do not work
const tmpLogo = 'https://eu1-prod-images.disco-api.com/2020/04/30/channel-126-463374215596475.png?f=png&p=true&w=108'

export const Schedule = Component((now: Date, channels: ChannelData[]) => html`
    <div id=schedule>
        ${Timeline(now)}
        ${NowLine(now, channels.length)}
        <div id=channels style=${{ marginTop: `calc(-1 * var(--base-size) * ${channels.length})` }}>
            ${channels.map(ch => PinMarkRow(tmpLogo, ch.schedules.map(sc => html`
                <div class=${['show', isNow(now, sc) ? 'show-live' : ''].join(' ')} style=${{ width: calcWidth(sc) }}>
                    <div class=txt-hl>${sc.title}</div>
                    <div class=txt-sm>${time(sc.start)} - ${time(sc.end)}</div>
                </div>
            `)))}
        </div>
        ${NowButton()}
    </div>
`)

const time = (d: Date) => d.toTimeString().slice(0, 5)
const isNow = (now: Date, { start, end }: ScheduleData) => now > start && now < end
const calcWidth = (sc: ScheduleData) => `calc(var(--day-width) / ${dayMins / getLength(sc)})`
const getLength = (sc: ScheduleData) => getMins(sc.end) - getMins(sc.start)

const dayMins = 60 * 24
const getMins = (d: Date) => d.getMinutes() + d.getHours() * 60
