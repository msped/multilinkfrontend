import React, { useState } from 'react'
import {
    Box,
    Grid,
    Typography,
    Tabs,
    Tab,
    Paper,
    Link,
    Stack
} from '@mui/material'
import PropTypes from 'prop-types';
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          MultiLink
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

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
            {children}
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

export default function SignedOutHome(){
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid
                item
                xs={false}
                sm={4}
                md={6}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
                <Box sx={{ mt: 1 }}>
                    <Stack spacing={2} m={3} alignItems="center">
                        <Typography variant="h2" component="h1" sx={{ fontFamily: 'Signika', FontWeight: 700 }}>
                            MultiLink
                        </Typography>
                        <Typography variant="h5" component="h2" sx={{ fontFamily: 'Signika', FontWeight: 600 }}>
                            All your links, in one place.
                        </Typography>
                    </Stack>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Grid container justifyContent="center">
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Sign In" {...a11yProps(0)} />
                                    <Tab label="Sign Up" {...a11yProps(1)} />
                                </Tabs>
                            </Grid>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <SignIn />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <SignUp />
                        </TabPanel>
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                </Box>
            </Grid>
        </Grid>
    )
}