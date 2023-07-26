import update from 'immutability-helper'
import { Aside } from './components/layout/Aside'

import { Body } from './components/layout/Body'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { useCallback, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {

  const [image, setImage] = useState({
    a: { top: 0, left: 80, src: '/images/arrow.png' },
    b: { top: 40, left: 300, src: '/images/pdf.png' },
    c: { top: 120, left: 40, src: '/images/ubi.png' },

  })

  const [text, setText] = useState({
    d: { top: 60, left: 40 },
    e: { top: 100, left: 40 },
    f: { top: 140, left: 40 },
  })

  const [paragraph, setParagraph] = useState(true)

  const [border, setBorder] = useState({ border: '1px dashed rgb(34, 106, 173)' })



  const moveImage = useCallback(
    (id, left, top) => {
      setImage(
        update(image, {
          [id]: {
            $merge: { left, top },
          },
        }),
      )
    },
    [image, setImage],
  )

  const moveText = useCallback(
    (id, left, top) => {
      setText(
        update(text, {
          [id]: {
            $merge: { left, top },
          },
        }),
      )
    },
    [text, setText],
  )



  return (
    <DndProvider backend={HTML5Backend}>
      <div className='page'>
        <div className='layout'>
          <Header image={image} setImage={setImage} moveImage={moveImage} paragraph={paragraph} setParagraph={setParagraph} border={border} setBorder={setBorder} />
          <Body image={image} setImage={setImage} moveImage={moveImage} text={text} setText={setText} moveText={moveText} paragraph={paragraph} setParagraph={setParagraph} border={border} setBorder={setBorder} />
          <Footer text={text} setText={setText} moveText={moveText} paragraph={paragraph} setParagraph={setParagraph} border={border} setBorder={setBorder} />
        </div>
        <Aside image={image} setImage={setImage} moveImage={moveImage} text={text} setText={setText} moveText={moveText} />
      </div>
    </DndProvider>
  )
}

export default App
