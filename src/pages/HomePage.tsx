import { Container, Typography } from "@mui/material";
import { ProductGrid } from "../components/ProductGrid";

export function HomePage() {

    

  return (
    <div>
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 4, sm: 8 },
            py: { xs: 8, sm: 10 },
            textAlign: { sm: 'center', md: 'left' },
          }}>
            <Typography variant="h2" component="h1">
                Unsere neusten Produkte
            </Typography>
            <ProductGrid preview/>
          </Container>
        
    </div>
  );
}