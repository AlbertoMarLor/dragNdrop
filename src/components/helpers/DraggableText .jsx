import React from 'react'
import { useDrag } from 'react-dnd'

const style = {
    position: 'absolute',
    cursor: 'move'
}


export const DraggableText = ({ id, left, top, children }) => {

    const type = 'text'

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'text',
        item: { id, left, top, type },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [id, left, top, type],
    )
    if (isDragging) {
        return <div ref={drag} />
    }


    return (
        <div className='text' ref={drag} style={{ ...style, left, top }} data-testid="text" >
            {children}
        </div>
    )

}