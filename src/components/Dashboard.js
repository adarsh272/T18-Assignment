import React from 'react'
import './dashboard.css'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import DraftsIcon from '@mui/icons-material/Drafts';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import Sidebar from './Sidebar';
import TabularInfo from './TabularInfo';


function Dashboard() {

  return (
      <div className='flex-main'>
            <div className='sidebar-div'>
                <Sidebar/>
            </div>
            <div className='main-content'>
                <h2 className='heading'>Tickets</h2>
                <div className='right-nav'>
                    <div className='icons'>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        <IconButton>
                            <NotificationAddIcon />
                        </IconButton>
                    </div>
                    <div className='user'>
                        <p>Michelle Damon</p>
                        <img src='./images/lady.jpg'/>
                    </div>
                </div>
                <div className='table-div'>
                    <Paper>
                        <div className='table-nav'>
                            <h3 style={{padding: 20+'px'}}>All Tickets</h3>
                            <div className='sort-filter'>
                                <div>
                                    <IconButton>
                                        <SortIcon />
                                    </IconButton>
                                    <p>Sort</p>
                                </div>
                                <div>
                                    <IconButton>
                                        <FilterAltIcon />
                                    </IconButton>
                                    <p>Filter</p>
                                </div>
                                
                            </div>
                        </div>
                        
                        <TabularInfo />
                    </Paper>
                </div>
            </div>
    </div>
    
  )
}

export default Dashboard