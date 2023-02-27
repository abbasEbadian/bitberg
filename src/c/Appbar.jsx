import { Button, IconButton } from '@mui/material'
import React from 'react'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import logo from '../assets/navbar-logo.webp'

function Appbar() {
  return (
    <header className='header'>
        <div className='d-flex align-items-center'>
            <Button className=""  variant="contained" color="inherit" startIcon={<FormatAlignLeftIcon />}>
                <span className='me-2'>منو</span>
            </Button>
            <Button className="" variant='contained' color="inherit"> خانه</Button>
            <Button className="" variant='contained' color="inherit"> قیمت لحظه ای</Button>
            <Button className="" variant='contained' color="inherit"> کارمزدها</Button>
            <Button className=" ms-auto" variant='contained' color="inherit"> پورتفوی</Button>

            <Button color='primary' variant='contained' className='exclude'>ورود / ثبت نام</Button>

            <Button className=" notif" variant="contained" color="inherit" startIcon={<NotificationsIcon />}>
            </Button>

            <img  class="_logo" src={logo} alt="" />
        </div>
    </header>
  )
}

export default Appbar