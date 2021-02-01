import { Component, html } from 'neverland'
import { ChannelData } from '../api'
import { Days } from './Days'
import { Schedule } from './Schedule'

export const EPG = Component((channels: ChannelData[]) => {
    const now = new Date()

    return html`
        ${Days(now)}
        ${Schedule(now, channels)}
    `
})
