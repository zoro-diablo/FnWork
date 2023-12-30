import { BarChart, Card,  Title, } from '@tremor/react'
import { chartdata } from '../../../../data/data'


const valueFormatter = (number) =>
  `₹ ${new Intl.NumberFormat('us').format(number).toString()}`

const BarChartDig = () => (
  <Card className='badge'>
    <Title>Liability of Last Five Quarters</Title>

    <BarChart
      className='mt-6'
      data={chartdata}
      index='name'
      categories={['Liability']}
      colors={['blue']}
      valueFormatter={valueFormatter}
      yAxisWidth={60}
    />
  </Card>
)

export default BarChartDig