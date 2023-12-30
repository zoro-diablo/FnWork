import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { Card , Title } from '@tremor/react'
import { outCol } from '../../data/data'



function createData(name, code, population, size) {
  
  return { name, code, population, size }
}

const rows = [
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
]

const Outstanding = () => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Card className='mx-auto w-[98%]'>
      <Title className='mb-5'>Outstanding Demand</Title>
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 250 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                <TableCell align='center' colSpan={1}>
                  Form | Qtr
                </TableCell>
                <TableCell align='center' colSpan={7}>
                  Processed Demand (Justification available from CPC)
                </TableCell>
                <TableCell align='center' colSpan={1}>
                  Manual Demand (Justification Available with AO)
                </TableCell>
                <TableCell align='center' colSpan={1}>
                  Total
                </TableCell>
              </TableRow>
              <TableRow>
                {outCol.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ top: 57, minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                {outCol.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ top: 57, minWidth: column.minWidth }}
                  >
                    {column.subName}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={row.code}
                    >
                      {outCol.map((column) => {
                        const value = row[column.id]
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Card>
  )
}

export default Outstanding
