import { AppBar, Badge, Box, Button, Container, IconButton, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Logo } from "./Logo";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useCart } from "../services/CardContext";

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
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

export function AppNavBar() {
  const { cart } = useCart();
  const cartItemCount = cart.length;
  return (
    <AppBar position="fixed" enableColorOnDark sx={{
      boxShadow: 0,
      bgcolor: 'transparent',
      backgroundImage: 'none',
      mt: 'calc(var(--template-frame-height, 0px) + 28px)',
    }}>
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Logo />
            <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2, gap: 1 }}>
              <Button variant="text" color="inherit" component={Link} to="/">Home</Button>
              <Button variant="text" color="inherit" component={Link} to="/products">Produkte</Button>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            <Button variant="text" color="inherit" aria-label="Login Button is just for viewing purposes">Login</Button>
            <IconButton color="secondary" aria-label={"View Shopping Cart"} component={Link} to="/cart">
              <Badge badgeContent={cartItemCount} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}