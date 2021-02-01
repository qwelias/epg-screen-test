import { Component, html } from 'neverland'
import { Hole } from 'lighterhtml'

export const PinMarkRow = Component((url: string, child: Hole | Hole[]) => html`
    <div class=pin-mark-row-wrapper>
        <div class=pin-mark>
            <div style=${{ backgroundImage: url ? `url(${url})` : 'none' }}></div>
        </div>
        <div class=pin-mark-row>
            ${child}
        </div>
    </div>
`)
