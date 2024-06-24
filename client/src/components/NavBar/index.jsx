import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AsideBar from '../AsideBar';
import {Link as RouterLink} from "react-router-dom";
import { Link } from '@mui/material';




const pages = ['Setting', 'recommend', 'Policy'];

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor: '#ef9a9a'}}>
        <Toolbar>
          <AsideBar/> 
          <Link
            variant="h6"
            component={RouterLink}       
           to="/"
            sx={{ flexGrow: 2,
              ml:10,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none', display: { xs: 'block', sm: 'block' } }}
          
          >
            MOVIES
          </Link>


          <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
            {pages.map((page) => (
            
             <Button component={RouterLink} to ={page} key={page} sx={{ color: '#fff' }}>
             {page}
           </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
