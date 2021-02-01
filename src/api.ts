import { makeRequest } from './request'

const request = makeRequest('http://localhost:1337')

export const getEPG = () => request('/epg').then(r => r.json()).then((r: any) => {
    for (const ch of r.channels) for (const schedule of ch.schedules) {
        schedule.start = new Date(schedule.start)
        schedule.end = new Date(schedule.end)
    }

    return r.channels as ChannelData[]
})

export type ChannelData = {
    id: string
    title: string
    images: { logo: string }
    schedules: ScheduleData[]
}

export type ScheduleData = {
    id: string
    title: string
    start: Date
    end: Date
}
