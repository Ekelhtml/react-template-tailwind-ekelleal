import React, {useState} from 'react'
import Modal from './components/Modal'
import Counter from './components/Counter'

const App = () => {
  const [value, setValue] = useState(0)
  const [visible, setVisible] = useState(false)

  return (
    <div className='relative min-h-screen text-3xl text-white bg-gray-900'>
      <div className={`${visible ? "blur-md" : ""}`}>
      <Counter value={value} setValue={setValue}/>
        <button onClick={()=> setVisible(true)} className='p-3 m-4 bg-red-500'>
          Activar Modal
        </button>
      </div>
      {visible && (
        <Modal visible={visible} setVisible={setVisible} counter={value} setCounter={setValue}>
          <h1>Titulo del Modal</h1>
          <p>Contenido del Modal 1</p>
          <p>Contenido del Modal 2</p>
        </Modal>
      )}
    </div>
  )
}

export default App
