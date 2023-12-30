import { Card, Icon, Title, Select, SelectItem ,Text} from '@tremor/react'
import { FaRegBuilding } from 'react-icons/fa'
import { FaRegEdit } from 'react-icons/fa'
import { IoMdSync } from 'react-icons/io'
import { useState } from 'react'
import { MdDateRange } from 'react-icons/md'



const BusinessNav = () => {
     const [value, setValue] = useState('FY')
  return (
    <Card
      decoration='bottom'
      decorationColor='green'
      className='bg-gray-900 bg-gradient-to-r flex justify-between'
    >
      <div className='flex'>
        <Icon
          icon={FaRegBuilding}
          size='lg'
          color='white'
          className='m-0 p-0 cursor-pointer'
          tooltip='BLRB200077B'
        />
        <Title className='text-white ml-2 my-auto'>
          Blr Billionaire Private Limited{' '}
        </Title>
      </div>
      <div className='flex gap-x-4'>
        <Title className='my-auto text-white'>FY :</Title>
        <div className='max-w-sm mx-auto space-y-6'>
          
          <Select value={value} onValueChange={setValue} placeholder='FY : 2023 - 24' className='font-bold ml-[-7px]'>
            <SelectItem value='1' icon={MdDateRange} className='hover:bg-black hover:text-white text-black'>
              2023 - 24
            </SelectItem>
            <SelectItem value='2' icon={MdDateRange} className='hover:bg-black hover:text-white text-black'>
              2022 - 23
            </SelectItem>
            <SelectItem value='3' icon={MdDateRange} className='hover:bg-black hover:text-white text-black'>
              2021 - 22
            </SelectItem>
            <SelectItem value='4' icon={MdDateRange} className='hover:bg-black hover:text-white text-black'>
              2020 - 21
            </SelectItem>
          </Select>
        </div>
        <Icon
          icon={IoMdSync}
          size='lg'
          color='white'
          className='m-0 p-0 cursor-pointer'
          tooltip='Sync'
        />
        <Icon
          icon={FaRegEdit}
          size='lg'
          color='white'
          className='m-0 p-0 cursor-pointer'
          tooltip='Edit'
        />
      </div>
    </Card>
  )
}

export default BusinessNav