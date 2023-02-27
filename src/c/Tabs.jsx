import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import CustomizedDialogs from './Dialog';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} className="tabs">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="خرید" {...a11yProps(0)} />
          <Tab label="فروش" {...a11yProps(1)} />
          <Tab label="تبدیل" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className='pb-5 pt-3 ' >
        <div className="d-flex inps mb-3">

            <TextField className="text-center" dir="ltr" id="outlined-basic" label="تومان" variant="outlined"  value={"58,000"}/>
            <TextField className="text-center mx-1" dir="ltr" id="outlined-basic" label="واحد" variant="outlined"  defaultValue={1} value={1}/>
            <TextField className="text-center selectable" dir="ltr" id="outlined-basic" label="انتخاب ارز" variant="outlined"  value={"بیت کوین"} InputProps={{
                readOnly: true,
            }} role="button" onClick={() => setOpen(true)}/>
        </div>
        <Button variant='contained' className='float-start mt-4 act'>خرید ارز</Button>
      </TabPanel>
      <TabPanel value={value} index={1}  className='pb-5 pt-3' >
        <div className="d-flex inps  mb-3" >
            <TextField className="text-center" dir="ltr" id="outlined-basic" label="تومان" variant="outlined"  value={"58,000"}/>
            <TextField className="text-center mx-1" dir="ltr" id="outlined-basic" label="واحد" variant="outlined"  defaultValue={1} value={1}/>
            <TextField className="text-center selectable" dir="ltr" id="outlined-basic" label="انتخاب ارز"  variant="outlined"  value={"بیت کوین"} InputProps={{
                readOnly: true,
            }} role="button"  onClick={() => setOpen(true)}/>
        </div>
        <Button variant='contained' className='float-start mt-4 act'>فروش ارز</Button>
      </TabPanel>
      <TabPanel value={value} index={2}>
        {":)"}
      </TabPanel>
      <CustomizedDialogs open={open} setOpen={setOpen}/>
    </Box>
  );
}