import { Text, DonutChart } from '@tremor/react'

const cities = [
  {
    name: 'New York',
    sales: 9800,
  },
  // ...
  {
    name: 'Zurich',
    sales: 1398,
  },
]

const valueFormatter = (number) =>
  `$ ${new Intl.NumberFormat('us').format(number).toString()}`

const customTooltip = ({ payload, active }) => {
  if (!active || !payload) return null
  const categoryPayload = payload?.[0]
  if (!categoryPayload) return null
  return (
    <div className='w-30 chart-list rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border'>
      <div className='flex flex-1 space-x-2.5 '>
        <div
          className={`w-1.5 flex flex-col bg-${categoryPayload?.color}-500 rounded`}
        />
        <div className='w-full'>
          <div className=' items-center justify-between space-x-8'>
            <p className='text-right text-tremor-content whitespace-nowrap '>
              {categoryPayload.name}
            </p>
            <p className='font-medium text-right whitespace-nowrap text-tremor-content-emphasis '>
              {categoryPayload.value}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const PanStatus = () => {
  return (
    <>
      <div className='w-[150px] flex justify-center items-center flex-col'>
        <DonutChart
          className='w-[150px]'
          data={cities}
          category='sales'
          index='name'
          valueFormatter={valueFormatter}
          customTooltip={customTooltip}
        />
        <Text className='font-medium text-medium mt-2'>Pan Verification</Text>
      </div>
    </>
  )
}

export default PanStatus
