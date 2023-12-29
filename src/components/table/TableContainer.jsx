import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from '@tremor/react'
import { FaFilePen } from 'react-icons/fa6'
import { useState } from 'react'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { data1, data2 , data3 } from '../../data/data'
import { motion } from 'framer-motion'
import { AiFillNotification } from 'react-icons/ai'
import { AiOutlineInsertRowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

let tabs = [
  { id: 0, label: 'Recent (5)', },
  { id: 1, label: 'All (5)',  },
  { id: 2, label: 'Incomplete Deductors (0)',  },
]

const TableContainer = () => {
  let [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <Card className=''>
      <div className='flex justify-end'>
        <Badge className='bg-black py-2 mt-1 cursor-pointer hover:bg-gray-400 hover:text-black mx-2 badge'>
          <Text className='text-white flex justify-center items-center mr-1  '>
            <AiFillNotification className='mx-2 ' size={18} />
            Notice & Orders
          </Text>
        </Badge>
        <Badge className='bg-black py-2 mt-1 cursor-pointer hover:bg-gray-400 hover:text-black badge'>
          <Text className='text-white flex justify-center items-center mr-1  '>
            <AiOutlineInsertRowRight className='mx-2 ' size={18} />
            Check Status of Raised Requests
          </Text>
        </Badge>
      </div>
      <Title className='text-center title-table font-semibold font-sans'>
        Deductor Master
      </Title>

      <div className='flex justify-between'>
        <div className='flex'>
          <div className='flex space-x-1'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id ? '' : 'hover:text-slate-600'
                } relative rounded-full px-3 py-1.5 text-sm  font-medium text-black outline-sky-400 transition focus-visible:outline-2`}
                style={{
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId='bubble'
                    className='absolute inset-0 z-10 text-black bg-white mix-blend-difference'
                    style={{ borderRadius: 9999 }}
                    transition={{
                      type: 'spring',
                      bounce: 0.2,
                      duration: 1.8,
                    }}
                  />
                )}

                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <Badge className='bg-black py-2 mt-1 cursor-pointer hover:bg-gray-400 hover:text-black badge'>
            <Text className='text-white flex justify-center items-center mr-1 '>
              <LuFileSpreadsheet className='mx-2 ' size={18} />
              Return Registers
            </Text>
          </Badge>
        </div>
      </div>

      {activeTab === tabs[0].id && (
        <div className='table-one '>
          <Table className='mt-5' colors='black'>
            <TableHead>
              <TableRow>
                <TableHeaderCell className='text-black underline underline-offset-3 '>
                  Deductor Name
                </TableHeaderCell>
                <TableHeaderCell className='text-black underline underline-offset-3 '>
                  TAN
                </TableHeaderCell>
                <TableHeaderCell className='text-black underline underline-offset-3 '>
                  Location
                </TableHeaderCell>
                <TableHeaderCell className='text-black underline underline-offset-3 '>
                  Deductor type
                </TableHeaderCell>
                <TableHeaderCell className='text-black underline underline-offset-3 '>
                  Mobile No
                </TableHeaderCell>
                <TableHeaderCell className='text-black underline underline-offset-3 '>
                  Emial Address
                </TableHeaderCell>
                <TableHeaderCell className='text-black underline underline-offset-3 '>
                  Actions
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data1.map((item, index) => (
                <TableRow key={index} className='hover:bg-slate-100'>
                  <TableCell>
                    <Link to='/company'>{item.deductorName}</Link>
                  </TableCell>
                  <TableCell>
                    {item.tan}
                  </TableCell>
                  <TableCell>
                    {item.location}
                  </TableCell>
                  <TableCell>
                    {item.deductorType}
                  </TableCell>
                  <TableCell>
                    {item.mobileNo}
                  </TableCell>
                  <TableCell>
                    {item.emailAddress}
                  </TableCell>
                  <TableCell>
                    <div className=' flex justify-center cursor-pointer'>
                      <FaFilePen size={20} color='black' />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {activeTab === tabs[1].id && (
        <div className='table-two'>
          <Table className='mt-5'>
            <TableHead>
              <TableRow>
                <TableHeaderCell className='text-black underline underline-offset-3'>
                  Name
                </TableHeaderCell>
                <TableHeaderCell className='text-black underline underline-offset-3'>
                  Age
                </TableHeaderCell>
                <TableHeaderCell className='text-black underline underline-offset-3'>
                  Occupation
                </TableHeaderCell>
                <TableHeaderCell className='text-black underline underline-offset-3'>
                  Location
                </TableHeaderCell>
                <TableHeaderCell className='text-black underline underline-offset-3'>
                  Email
                </TableHeaderCell>
                <TableHeaderCell className='text-black underline underline-offset-3'>
                  Year
                </TableHeaderCell>
                <TableHeaderCell className='text-black underline underline-offset-3 flex justify-center'>
                  Actions
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data2.map((item, index) => (
                <TableRow key={index} className='hover:bg-slate-100'>
                  <TableCell>
                    {item.name}
                  </TableCell>
                  <TableCell>
                    {item.age}
                  </TableCell>
                  <TableCell>
                    {item.occupation}
                  </TableCell>
                  <TableCell>
                    {item.location}
                  </TableCell>
                  <TableCell>
                    {item.email}
                  </TableCell>
                  <TableCell>
                    {item.year}
                  </TableCell>
                  <TableCell>
                    <div className='flex justify-center cursor-pointer'>
                      <FaFilePen size={20} color='black' />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {activeTab === tabs[2].id && (
        <div className='table-three'>
          <Table className='mt-5'>
            <TableHead>
              <TableRow>
                <TableHeaderCell className='text-black underline underline-offset-3'>
                  Name
                </TableHeaderCell>
                <TableHeaderCell className='text-black underline underline-offset-3'>
                  Title
                </TableHeaderCell>
                <TableHeaderCell className='text-black underline underline-offset-3'>
                  Category
                </TableHeaderCell>

                <TableHeaderCell className='text-black underline underline-offset-3'>
                  Year
                </TableHeaderCell>
                <TableHeaderCell className='text-black flex justify-center underline underline-offset-3'>
                  Actions
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data3.map((item, index) => (
                <TableRow key={index} className='hover:bg-slate-100'>
                  <TableCell>
                    {item.deductorName}
                  </TableCell>
                  <TableCell>
                    {item.tan}
                  </TableCell>
                  <TableCell>
                    {item.location}
                  </TableCell>
                  <TableCell>
                    {item.deductorType}
                  </TableCell>
                  <TableCell>
                    {item.mobileNo}
                  </TableCell>
                  <TableCell>
                    {item.emailAddress}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </Card>
  )
}

export default TableContainer
