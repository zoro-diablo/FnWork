import { DataGrid } from '@mui/x-data-grid'
import { Card, Title, Button } from '@tremor/react'
import { FaArrowRight } from 'react-icons/fa'
import { columnsnotice, rowsnotice } from '../../../../data/data'


export default function DataTable() {
  return (
    <Card className='mt-5 badge'>
      <div className='flex justify-between'>
        <Title className='mb-2'>Notices & Orders</Title>
        <Button
          size='xs'
          icon={FaArrowRight}
          className='text-sky-500 font-semibold pt-1 hover:text-black bg-transparent border-none hover:bg-transparent'
        >
          View all the Raised Requests
        </Button>
      </div>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid
          rows={rowsnotice}
          columns={columnsnotice}
          initialState={{
            pagination: {
              paginationModel: { psubject: 0, psubjectSize: 5 },
            },
          }}
          psubjectSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </Card>
  )
}
