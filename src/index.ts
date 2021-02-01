import { Component, render, html, useState, useEffect } from 'neverland'
import { Header } from './Header'
import { Footer } from './Footer'
import { EPG } from './EPG'
import { getEPG } from './api'

export const Body = Component(() => {
    const [{ loading, epg, error }, setState] = useState({
        loading: getEPG(),
        epg: null,
        error: null,
    })

    useEffect(() => {
        if (!loading) return
        loading.then(
            epg => setState({ loading: null, epg, error }),
            error => setState({ loading: null, epg, error }),
        )
    }, [])

    return html`
    ${Header()}
    <main>
        ${loading
            ? 'loading'
            : error ? error.message : EPG(epg)
        }
    </main>
    ${Footer()}
    `
})

render(document.body, Body)
