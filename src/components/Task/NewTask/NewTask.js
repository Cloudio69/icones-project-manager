import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'

const NewTask = () => {
  return (
    <div className="w-full flex justify-center rounded-md bg-slate-100">
        <Button className = "w-full" startIcon={<AddIcon />}>
            AGGIUNGI
        </Button>
    </div>
  )
}

export default NewTask