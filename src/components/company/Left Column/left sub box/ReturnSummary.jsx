import { AiOutlineCompass } from 'react-icons/ai'

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
  Divider,
} from '@tremor/react'

const data = [
  {
    name: 'Viola Amherd',
    Role: 'Federal Councillor',
    departement:
      'The Federal Department of Defence, Civil Protection and Sport (DDPS)',
    status: 'active',
  },
  {
    name: 'Simonetta Sommaruga',
    Role: 'Federal Councillor',
    departement:
      'The Federal Department of the Environment, Transport, Energy and Communications (DETEC)',
    status: 'active',
  },
  {
    name: 'Alain Berset',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Home Affairs (FDHA)',
    status: 'active',
  },
  {
    name: 'Ignazio Cassis',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Foreign Affairs (FDFA)',
    status: 'active',
  },
  {
    name: 'Karin Keller-Sutter',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Finance (FDF)',
    status: 'active',
  },
  {
    name: 'Guy Parmelin',
    Role: 'Federal Councillor',
    departement:
      'The Federal Department of Economic Affairs, Education and Research (EAER)',
    status: 'active',
  },
  {
    name: 'Elisabeth Baume-Schneider',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Justice and Police (FDJP)',
    status: 'active',
  },
]

const ReturnSummary = () => (
  <Card
    className='h-[492px] bg-slate-50 badge '
    decoration='top'
    decorationColor='emerald'
  >
    <Title className='mb-3'>Return Summary</Title>

    <Table className=' h-[171px] bg-slate-200 rounded-xl'>
      <TableHead className=''>
        <TableRow className=''>
          <TableHeaderCell className=''>Name</TableHeaderCell>
          <TableHeaderCell className=''>Position</TableHeaderCell>
          <TableHeaderCell className=''>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.name}>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              <Text>{item.Role}</Text>
            </TableCell>

            <TableCell>
              <Badge color='emerald' icon={AiOutlineCompass}>
                {item.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <Divider className='my-[15px]'>Description</Divider>
    <Table className=' h-[171px] bg-slate-200 rounded-xl'>
      <TableHead className=''>
        <TableRow className=''>
          <TableHeaderCell className=''>Name</TableHeaderCell>
          <TableHeaderCell className=''>Position</TableHeaderCell>
          <TableHeaderCell className=''>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.name}>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              <Text>{item.Role}</Text>
            </TableCell>

            <TableCell>
              <Badge color='red' icon={AiOutlineCompass}>
                {item.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
)

export default ReturnSummary
