import Left from './Left Column/left.jsx'
import Right from './Right Column/Right.jsx'

const Company = () => {
  return (
    <div className='w-full grid grid-cols-2 grid-rows-6 gap-4 mt-5 '>
      <div className='w-[98%] ml-4'>
        <Left />
      </div>
      <div className='w-[98%]'>
        <Right />
      </div>
    </div>
  )
}

export default Company