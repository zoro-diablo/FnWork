import LeftBottom from './Left Bottom/LeftBottom.jsx'
import LeftContainer from './Left Column/LeftContainer.jsx'
import Outstanding from './Outstanding.jsx'
import RightBottom from './Right Bottom/RightBottom.jsx'
import Right from './Right Column/Right.jsx'

const Company = () => {
  return (
    <div className='w-full grid grid-cols-2 gap-4 mt-5 '>
      <div className='w-[98%] ml-4'>
        <LeftContainer />
      </div>
      <div className='w-[98%]'>
        <Right />
      </div>
      <div className='border-2 w-full col-span-2'>
        <Outstanding />
      </div>
      <div className='w-[98%] ml-4'>
      <LeftBottom />
      </div>
      <div className='w-[98%]'>
       <RightBottom />
      </div>
    </div>
  )
}

export default Company