import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const StyledToolbar = styled(Toolbar)(({ theme}) => ({
  display:"flex",
  justifyContent: "space-evenly",
  backgroundColor: theme.palette.primary.contrastText,
  color: theme.palette.primary.main,
}));

const NavBar
 = () => {

    return (
      <>
        
        <AppBar position="relative">
            <StyledToolbar>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Skills</MenuItem>
            <MenuItem>Projects</MenuItem>
            </StyledToolbar>
        </AppBar>
      </>
    )
  }
  
  export default NavBar