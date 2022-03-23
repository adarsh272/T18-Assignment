import { Apple, FacebookRounded, Google, CloseOutlined } from '@mui/icons-material'
import { Paper, Button, SvgIcon, TextField, InputLabel } from '@mui/material'
import { flexbox } from '@mui/system'
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import './login.css'


function Login() {

    const isMobile = useMediaQuery({ query: '(max-width: 450px)' })

    const paperStyle = {
        width: 439+'px',
        height: 541+'px',
        marginLeft: 'auto',
        marginRight: 100+'px',
        padding: 20+'px',
        borderRadius: 20+'px',
        // marginBottom: -500+'px'
    }

    const paperStyle2 = {
        width: 300+'px',
        height: 541+'px',
        marginLeft: 'auto',
        marginRight: 30+'px',
        padding: 20+'px',
        borderRadius: 20+'px',
        // marginBottom: -500+'px'
    }

    const profileStyle = {
        width: 140+'px',
        height: 150+'px',
        padding: 5+'px',
        borderRadius: 10+'px',
        marginTop: 30+'px',
        backgroundColor: '#EFF8FF'
        // marginBottom: -500+'px'
    }

    const loggedInUsers = [{id: 1, name: 'Michelle Damon', status: 'Active 3 days ago', img: 'lady.jpg'}, {id: 2, name: 'Sam Mendes', status: 'Active an hour ago', img: 'man.jpg'}]

  return (
    <div className='body'>
        <div className='main-flex'>
            <div className='upper-content'>
                <div className='logo'>
                    <p>Your Logo</p>
                </div>
                <div className='main-flex-2'>
                    <div className='main-area'>
                        <h2>Sign in to</h2>
                        <p className='subtitle'>Lorem ipsum is that simple!</p>
                        <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <img src='./images/object.png'/>
                    {<Paper elevation={10} style={isMobile ? paperStyle2 : paperStyle} className='paper'>
                        <div>
                            <h3>Welcome To <span style={{color: '#0089ED'}}>LOREM</span></h3>
                            <h2 className='form-header'>Sign in</h2>
                        </div>
                        <div className='right-text'>
                            <p>No account ?</p>
                            <p className='sign-up'>Sign Up</p>
                        </div>
                        <div className='sign-in-options'>
                            <Button variant="contained" style={{backgroundColor: '#E9F1FF', color: 'black', maxWidth: '35px', maxHeight: '35px', minWidth: '35px', minHeight: '35px'}}><Google /></Button>
                            <Button variant="contained" style={{backgroundColor: '#F6F6F6', color: 'black', maxWidth: '35px', maxHeight: '35px', minWidth: '35px', minHeight: '35px'}}><FacebookRounded/></Button>
                            <Button variant="contained" style={{backgroundColor: '#F6F6F6', color: 'black', maxWidth: '35px', maxHeight: '35px', minWidth: '35px', minHeight: '35px'}}><Apple/></Button>
                        </div>
                        <div className='inputs'>
                            <TextField fullWidth label='Username or Email Address'/>
                            <TextField fullWidth label='Password'/>
                        </div>
                        <p className='forgot-pass'>Forgot Password</p>
                        <Link to='/dashboard'>
                            <Button fullwidth variant="contained" style={{backgroundColor: '#0089ED', width: '100%', marginTop: 20+'px'}} >Sign In</Button>
                        </Link>
                    </Paper>}
                  
                    
                </div>
            </div>

            <div className='lower-content'>
                <div style={{marginTop: 40+'px'}}>Login as</div>
                <div className='paper' >
                    {loggedInUsers.map((user) => {
                        return <Paper style={profileStyle} elevation={3} key={user.id}>
                                    <div className='card-content'>
                                        <img src= {'./images/' + user.img} style={{width: 76+'px', height:76+'px', borderRadius: '50%'}}/>
                                        <div className='name'>{user.name}</div>
                                        <div className='stat'>{user.status}</div>
                                        <p className='close-btn'>x</p>
                                    </div>
                                </Paper>                                
                                
                    })}
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default Login