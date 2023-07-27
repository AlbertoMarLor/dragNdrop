import React from 'react'
import { useDrag } from 'react-dnd'

const style = {
    position: 'absolute',
    cursor: 'move'
}

export const DraggableTable = ({ id, left, top, children }) => {

    const type = 'table'

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'table',
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
        <div className='table' ref={drag} style={{ ...style, left, top }} data-testid="table" >
            {children}
        </div>
    )

}