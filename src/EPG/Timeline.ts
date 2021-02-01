import { Component, html } from 'neverland'
import { NowPointer } from './NowPointer'

export const Timeline = Component((now: Date) => html`
    <div id=timeline>
        ${NowPointer(now)}
        ${new Array(24).fill(0).map((v, i) => html`
            <div class="hour txt-hl">
                <div>
                    ${String(i).padStart(2, '0') + ':00'}
                </div>
            </div>
        `)}
    </div>
`)
