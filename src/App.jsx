import './App.css'
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
    a: { top: 0, left: 80, src: '/images/arrow.png', type: 'image' },
    b: { top: 40, left: 300, src: '/images/pdf.png', type: 'image' },
    c: { top: 120, left: 40, src: '/images/ubi.png', type: 'image' },

  })

  const [text, setText] = useState({
    d: { top: 60, left: 40, title: 'hola soy un texto', type: 'text' },
    e: { top: 100, left: 40, title: 'buenas, soy otro texto', type: 'text' },
    f: { top: 140, left: 40, title: 'que tal, soy el ultimo texto', type: 'text' },
  })

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
          <Header image={image} setImage={setImage} moveImage={moveImage} />
          <Body image={image} setImage={setImage} moveImage={moveImage} text={text} setText={setText} moveText={moveText} />
          <Footer text={text} setText={setText} moveText={moveText} />
        </div>
        <Aside image={image} setImage={setImage} moveImage={moveImage} text={text} setText={setText} moveText={moveText} />
      </div>
    </DndProvider>
  )
}

export default App
