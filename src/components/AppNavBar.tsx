import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Logo } from "./Logo";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: `rgba(${theme.palette.background.default} / 0.4)`,
  boxShadow: (theme || theme).shadows[1],
  padding: '8px 12px',
}));

export function AppNavBar() {
  return (
    <AppBar position="static" enableColorOnDark>
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{flexGrow: 1, display: 'flex', alignItems: 'center', px: 0}}>
            <Logo />
            <Box sx={{ display: {xs: 'none', md: 'flex'}, ml: 2, gap: 1}}>
              <Button variant="text" color="inherit" component={Link} to ="/">Home</Button>
              <Button variant="text" color="inherit" component={Link} to="/products">Produkte</Button>
              <Button variant="text" color="inherit">Variant</Button> 
            </Box>
          </Box>
          <Box sx={{ display: {xs: 'none', md: 'flex'}, gap: 1, alignItems: 'center'}}>
            <Button variant="text" color="inherit">Login</Button>
            <ShoppingCart color="secondary"/>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}