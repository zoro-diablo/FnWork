import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Card, Title, Badge } from '@tremor/react'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

function createData(name, section, tax) {
  return { name, section, tax }
}

const toprows1 = [
  createData('', 'No record found', ''),
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
]

const TopDeductees23 = () => {
  return (
    <Card className='mt-5 badge mb-4'>
      <div className='flex justify-between'>
        <Title className='mb-6'>Top Deductees for FY 2023-24 </Title>
        <Badge className='w-[100px] h-[20px] font-bold text-lg bg-gray-300 text-black border-2 border-black py-4 shadow mr-5'>
          Form 24Q
        </Badge>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 550 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell align='center'>Name</StyledTableCell>
              <StyledTableCell align='center'>Section</StyledTableCell>
              <StyledTableCell align='center'>Tax Deducted</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {toprows1.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align='center' style={{ minWidth: 222 }}>
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align='center' style={{ minWidth: 222 }}>
                  {row.section}
                </StyledTableCell>
                <StyledTableCell align='center' style={{ minWidth: 222 }}>
                  {row.tax}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default TopDeductees23
