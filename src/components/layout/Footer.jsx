import React from 'react'
import { useDrop } from 'react-dnd'


export const Footer = ({ moveText, paragraph, setParagraph, border, setBorder }) => {

    const [, drop] = useDrop(
        () => ({
            accept: 'text',
            drop(item, monitor) {
                const delta = monitor.getDifferenceFromInitialOffset()
                const left = Math.round(item.left + delta.x)
                const top = Math.round(item.top + delta.y)
                moveText(item.id, left, top)
                setParagraph(false)
                setBorder({ border: 'none' })
                return undefined
            },
        }),
        [moveText],
    )

    return (
        <div><section>
            <div className="area-name">
                <h2>Footer</h2>
            </div>
            <div style={border} className="area" ref={drop}>
                {paragraph && <p>Drag and drop an element within this area.</p>}
            </div>
        </section></div>
    )
}
