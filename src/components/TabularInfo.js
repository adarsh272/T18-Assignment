import React from 'react'
import Table from '@mui/material/Table';
import Grid from '@mui/material/Grid';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import { green, red, yellow } from '@mui/material/colors';

function TabularInfo() {

    const primary = red[500];

    function createData(detail, stat, name, img, date, time, namedate, priority) {
        return { detail, stat, name, img, date, time , namedate, priority };
      }
      
      const rows = [
        createData('Contact Email Not Linked', 'Updated 1 day ago', 'Michelle Damon', 'lady.jpg', 'May 26, 2019', '6:30 PM', 'on 25.5.2019','High'),
        createData('Adding images to featured posts', 'Updated 1 day ago', 'Tom Cruise', 'man.jpg', 'May 26, 2019', '6:30 PM' ,'on 25.5.2019','Low'),
        createData('When will I be charged', 'Updated 1 day ago', 'Amy Adams', 'a.jpg', 'May 26, 2019', '6:30 PM' ,'on 25.5.2019','High'),
        createData('Payment not going through', 'Updated 1 day ago', 'Aaron Paul', 'b.jpg', 'May 26, 2019', '6:30 PM' ,'on 25.5.2019','Normal'),
        createData('Unable to add replies', 'Updated 1 day ago', 'Al Pacino', 'c.jpg', 'May 26, 2019', '6:30 PM', 'on 25.5.2019','High'),
        createData('Downtown till last week', 'Updated 1 day ago', 'Timothee Chalamet', 'd.jpg', 'May 26, 2019', '6:30 PM', 'on 25.5.2019','Low')
      ];


  return (
    <TableContainer>
      <Grid item xs={12}>
        <Table sx={{ minWidth: 1120 }} size='small'>
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight: 'bold', color: '#9FA2B4'}}>Ticket Details</TableCell>
              <TableCell align='left' sx={{fontWeight: 'bold', color: '#9FA2B4'}}>Customer Name</TableCell>
              <TableCell align='left' sx={{fontWeight: 'bold', color: '#9FA2B4'}}>Date</TableCell>
              <TableCell align='left' sx={{fontWeight: 'bold', color: '#9FA2B4'}}>Priority</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.img}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                    <div style={{display: 'flex'}}>
                      <img src={'./images/' + row.img} style={{width: 44+'px', height:44+'px', borderRadius: '50%'}}/>  
                      <div style={{paddingTop: 6+'px', paddingLeft: 6+'px'}}>
                          <div>{row.detail}</div>
                          <div style={{color: '#C5C7CD', fontSize: 12+'px'}}>{row.stat}</div>
                      </div>
                    
                    </div>
                </TableCell>
                <TableCell align="left">
                    <div>{row.name}</div>
                    <div style={{color: '#C5C7CD', fontSize: 12+'px'}}>{row.namedate}</div>
                </TableCell>
                <TableCell align="left" sx={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{paddingTop:9+'px'}}>{row.date}</div>
                    <div style={{color: '#C5C7CD', fontSize: 12+'px'}}>{row.time}</div>
                </TableCell>
                {<TableCell align="left"><Chip label={row.priority} sx={{backgroundColor: row.priority==='High' ? '#F12B2C' :  row.priority==='Low' ? '#FEC400': '#29CC97', color: 'white'}} /></TableCell>}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
      
    </TableContainer>
  )
}

export default TabularInfo
