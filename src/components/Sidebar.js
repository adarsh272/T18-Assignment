import React from 'react'
import './sidebar.css'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ContactsIcon from '@mui/icons-material/Contacts';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import FeedIcon from '@mui/icons-material/Feed';
import SettingsIcon from '@mui/icons-material/Settings';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

function Sidebar() {
  return (
   
        <div className='sidebar'>
            <div className='title'>
                <h4><img src='./images/logo.svg' className='logo'/></h4>
                <h4 >Dashboard Kit</h4>
            </div>
            <div className='list'>
                <List sx={{marginTop: 60+'px', paddingLeft: 20+'px'}}>
                    <ListItemButton>
                        <ListItemIcon>
                        <RemoveRedEyeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Overview" />
                    </ListItemButton>
                    <ListItemButton selected>
                        <ListItemIcon>
                        <ConfirmationNumberIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tickets" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                        <LightbulbIcon />
                        </ListItemIcon>
                        <ListItemText primary="Ideas" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                        <ContactsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contacts" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                        <SupportAgentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Agents" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                        <FeedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Articles" />
                    </ListItemButton>
                    <div className='lower-list'>
                        <ListItemButton>
                            <ListItemIcon>
                            <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                            <SubscriptionsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Subscriptions" />
                        </ListItemButton>
                    </div>
                    
                        
                </List>
            </div>
            
            
        </div>
    
  )
}

export default Sidebar