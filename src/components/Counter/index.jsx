import React, {useEffect} from 'react'

const Counter = ({value, setValue}) => {
    useEffect(() => { 
        if (value < 0) {
            setValue=(0)
            return  alert('No puedes tener valores negativos')
        }
        if (value > 10) {
            setValue=(10)
            return  alert('El valor maximo es 10')
        }
    },[value])
  return (
    <div className='w-full text-center'>
        <p className='py-6'>El valor actual es: {value}</p>
        <div className='flex flex-row justify-center'>
            <button onClick={()=> setValue(value + 1)}>➕</button>
            <button onClick={()=> setValue(value - 1)}>➖</button>
        </div>
    </div>
  )
}

export default Counter