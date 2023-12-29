import { BarList, Bold, Card, Flex, Text, Title } from '@tremor/react'

const data = [
  {
    name: 'Total verified Challans',
    value: 456,
    color: 'lime',
    href: 'https://twitter.com/tremorlabs',
    icon: function TwitterIcon() {
      return <img src='/document.png' alt='document' width={25}  className='mr-5'/>
    },
  },
  {
    name: 'Total Unverified Challans',
    value: 351,
    color: 'red',
    href: 'https://google.com',
    icon: function GoogleIcon() {
      return <img src='/wrong.png' alt='document' width={25}  className='mr-5'/>
    },
  },
  {
    name: 'Total unconsumed that can be utilized',
    value: 271,
    href: 'https://github.com/tremorlabs/tremor',
    icon: function GitHubIcon() {
      return <img src='/analytics.png' alt='document' width={25} className='mr-5' />
    },
  },
]

const Challans = () => (
  <Card className='max-w-full mt-8 badge '>
    <Title>Challans</Title>
    <Flex className='mt-4'>
      <Text>
        <Bold>Category</Bold>
      </Text>
      <Text>
        <Bold>Number</Bold>
      </Text>
    </Flex>
    <BarList data={data} className='mt-2 flex' />
  </Card>
)

export default Challans
