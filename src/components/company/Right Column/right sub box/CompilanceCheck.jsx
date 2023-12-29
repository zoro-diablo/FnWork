import {  DonutChart,  Text } from '@tremor/react'

const cities = [
  {
    name: 'New York',
    sales: 9800,
  },
  {
    name: 'London',
    sales: 4567,
  },
  {
    name: 'Hong Kong',
    sales: 3908,
  },
  {
    name: 'San Francisco',
    sales: 2400,
  },
  {
    name: 'Singapore',
    sales: 1908,
  },
  {
    name: 'Zurich',
    sales: 1398,
  },
]

const valueFormatter = (number) =>
  `$ ${new Intl.NumberFormat('us').format(number).toString()}`

const CompilanceCheck = () => (
  <div className='w-[150px] flex justify-center items-center flex-col '>
    <DonutChart
      className=''
      data={cities}
      category='sales'
      index='name'
      valueFormatter={valueFormatter}
      colors={['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber']}
    />
    <Text className='font-medium text-medium mt-2'>Compilance Check</Text>
  </div>
)

export default CompilanceCheck
