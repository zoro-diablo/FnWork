import { AreaChart, Card, Switch, Title } from '@tremor/react'
import { useState } from 'react'
import { chartdata3 } from '../../../../data/data'


const AreaChartSliderExample = () => {
  const [value, setValue] = useState(true)
  return (
    <Card className='max-w-full mx-auto p-0'>
      <div className='flex justify-between'>
        <Title className='pt-5 pl-5'>Total Deductees</Title>
        <div className='p-6 bg-gray-50 border-t flex items-center space-x-3 rounded-b-lg'>
          <Switch
            id='switch'
            checked={value}
            onChange={() => setValue(!value)}
          />
          <label className='text-sm text-slate-500' htmlFor='switch'>
            Enable Legend Slider
          </label>
        </div>
      </div>

      <div className='p-6'>
        <AreaChart
          className='h-72 mt-4'
          data={chartdata3}
          index='date'
          categories={[
            'Inoperative',
            'Operative',
            'invalid',
            'unverified',
            'PNNOTAVBL',
          ]}
          colors={['neutral','emerald', 'rose', 'yellow', 'orange', ]}
          yAxisWidth={30}
          enableLegendSlider={value}
        />
      </div>
    </Card>
  )
}

export default AreaChartSliderExample
