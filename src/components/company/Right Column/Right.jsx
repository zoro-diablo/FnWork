import CompilanceCheck from './right sub box/CompilanceCheck'
import PanStatus from './right sub box/PanStatus'
import {
  Card,
  Title,
  Badge,
  Button,
  Metric,
  Text,
  Subtitle,
  BadgeDelta,
} from '@tremor/react'
import { FaMoneyCheck } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa'
import Challans from './right sub box/Challans'

const Right = () => {
  return (
    <div>
      <Card decoration='top' decorationColor='amber' className='badge  '>
        <div className='flex justify-between'>
          <Title>PAN Status & Compliance Check </Title>
          <Badge icon={FaMoneyCheck}>
            <p className='font-semibold px-2 pl-1'>Check U/s 206CCA/AB</p>
          </Badge>
        </div>
        <div className='flex  my-3 justify-between gap-x-3'>
          <PanStatus />
          <CompilanceCheck />
          <div className='flex flex-col justify-center items-center'>
            <img
              src='/card.png'
              alt='card'
              width={200}
              height={150}
              className=' w-[290px] mx-[-20px] '
            />
            <Badge color='emerald' icon={FaCheck}>
              All checked
            </Badge>
          </div>
          <div className='w-[120px] flex flex-col items-center  h-full pl-2 rounded-xl  justify-center '>
            <Button
              size='xs'
              variant='secondary'
              className='my-5 py-[14px] px-[26px] ml-[-10px] bg-gray-950 hover:bg-gray-600 hover:text-white border-3 border-emerald-600   text-white'
            >
              Single
            </Button>
            <Button
              size='xs'
              variant='secondary'
              className='my-5 py-3 px-[30px] ml-[-10px] bg-green-100 hover:bg-green-600 hover:text-white border-2 border-emerald-400  text-black'
            >
              Bulk
            </Button>
          </div>
        </div>
      </Card>
      <div className='flex mt-5 gap-x-2'>
        <Card
          className='w-[95%] mx-auto badge bg-gradient-to-r from-black to-gray-900 '
          decoration='left'
          decorationColor='blue'
        >
          <div className='flex justify-between'>
            <Text className='text-black font-semibold bg-slate-200 px-3  rounded-lg mb-2 shadow-white shadow-sm'>
              Regular | Form 26Q | Q3
            </Text>
            <BadgeDelta deltaType='moderateIncrease' />
          </div>
          <div className='flex gap-x-5 mt-6'>
            <div className=' justify-between items-center font-medium'>
              <Subtitle>No of Transaction</Subtitle>
              <Metric className='text-white mt-2'>₹ 34,743</Metric>
            </div>
            <div className=' justify-between items-center font-medium'>
              <Subtitle>Unmapped Amt</Subtitle>
              <Metric className='text-white mt-2'>₹ 743</Metric>
            </div>
          </div>
        </Card>
        <Card
          className='w-[95%] mx-auto badge bg-gradient-to-r from-black to-gray-900'
          decoration='left'
          decorationColor='rose'
        >
          <div className='flex justify-between'>
            <Text className='text-black font-semibold bg-slate-200 px-3  rounded-lg mb-2 shadow-white shadow-sm'>
              Correction | Form 26Q | Q2
            </Text>
            <BadgeDelta deltaType='moderateDecrease' />
          </div>
          <div className='flex gap-x-5 mt-6'>
            <div className=' justify-between items-center font-medium'>
              <Subtitle>No of Transaction</Subtitle>
              <Metric className=' mt-2 text-white'>₹ 69</Metric>
            </div>
            <div className=' justify-between items-center font-medium'>
              <Subtitle>Unmapped Amt</Subtitle>
              <Metric className=' mt-2 text-white'>₹ 0</Metric>
            </div>
          </div>
        </Card>
      </div>
      <Challans />
    </div>
  )
}

export default Right
