import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const StyledToolbar = styled(Toolbar)(() => ({
  display:"flex",
  justifyContent: "space-evenly",
}));

const NavBar
 = () => {

    return (
      <>
        
        <AppBar position="relative">
            <StyledToolbar>
            <MenuItem>About</MenuItem>
            <MenuItem>Skills</MenuItem>
            <MenuItem>Projects</MenuItem>
            </StyledToolbar>
        </AppBar>
      </>
    )
  }
  
  export default NavBar