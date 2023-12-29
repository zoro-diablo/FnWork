import { AreaChart, BarChart, Card, Flex, Switch, Title,Subtitle } from '@tremor/react'

const chartdata = [
  {
    name: 'Amphibians',
    'Number of threatened species': 2488,
  },
  {
    name: 'Birds',
    'Number of threatened species': 1445,
  },
  {
    name: 'Crustaceans',
    'Number of threatened species': 743,
  },
  {
    name: 'Ferns',
    'Number of threatened species': 281,
  },
  {
    name: 'Arachnids',
    'Number of threatened species': 251,
  },
  {
    name: 'Corals',
    'Number of threatened species': 232,
  },
  {
    name: 'Algae',
    'Number of threatened species': 98,
  },
]

const valueFormatter = (number) =>
  `$ ${new Intl.NumberFormat('us').format(number).toString()}`

const BarChartDig = () => (
  <Card className='badge'>
    <Title>Liability of Last Five Quarters</Title>

    <BarChart
      className='mt-6'
      data={chartdata}
      index='name'
      categories={['Number of threatened species']}
      colors={['blue']}
      valueFormatter={valueFormatter}
      yAxisWidth={48}
    />
  </Card>
)

export default BarChartDig