import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Card, Title, Button } from '@tremor/react'
import {  FaFilePdf } from 'react-icons/fa6'
import { FaDownload } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 12,
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

function createData(form, date, type, status, receipt, returne, action) {
  return { form, date, type, status, receipt, returne, action }
}

const rows = [
  createData(
    '26Q | Q3',
    'In Progress',
    'Correction',
    'NA',
    false,
    true,
    'View'
  ),
  createData('26Q | Q3', 'In Progress', 'Regular', 'NA', false, false, 'View'),
  createData(
    '26Q | Q3',
    '14/09/2023',
    'Regular',
    'Processed Without Defaults',
    true,
    true,
    'View'
  ),
]

const ReturnSummary = () => {
  return (
    <Card className=' h-[490px]' decoration='top' decorationColor='teal'>
      <div className='flex justify-between h-10 mb-5'>
        <Title>Return Summary</Title>
        <Button
          size='md'
          className='bg-black hover:text-black hover:border-black hover:bg-slate-300'
        >
          Start Filling
        </Button>
      </div>
      <TableContainer component={Paper} style={{ height: '300px' }}>
        <Table sx={{ minWidth: 670 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Form | Qtr</StyledTableCell>
              <StyledTableCell align='center'>Filing Date</StyledTableCell>
              <StyledTableCell align='center'>Filing Type</StyledTableCell>
              <StyledTableCell align='center'>
                Processing Status
              </StyledTableCell>
              <StyledTableCell align='center'>Ack Receipt</StyledTableCell>
              <StyledTableCell align='center'>Download Return</StyledTableCell>
              <StyledTableCell align='center'>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.type}>
                <StyledTableCell align='center'>{row.form}</StyledTableCell>
                <StyledTableCell align='center'>{row.date}</StyledTableCell>
                <StyledTableCell align='center'>{row.type}</StyledTableCell>
                <StyledTableCell align='center'>{row.status}</StyledTableCell>
                <StyledTableCell align='center'>
                  {row.receipt ? (
                    <div className='flex items-center justify-center gap-x-3 cursor-pointer'>
                      <FaFilePdf size={18} />
                  
                    </div>
                  ) : (
                    <div className='flex items-center justify-center cursor-pointer'>
                      <IoClose size={18} />
                    </div>
                  )}
                </StyledTableCell>
                <StyledTableCell align='center'>
                  {row.returne ? (
                    <div className='flex items-center justify-center gap-x-3 cursor-pointer'>
                      <FaFilePdf size={18} />
                      <FaDownload size={18} />
                    </div>
                  ) : (
                    <div className='flex items-center justify-center cursor-pointer'>
                      <FaDownload size={18} />
                    </div>
                  )}
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <Button
                    size='xs'
                    className='bg-transparent text-black border border-black hover:bg-slate-600 hover:text-white'
                  >
                    {row.action}
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default ReturnSummary
