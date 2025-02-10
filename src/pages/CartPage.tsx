import { Container, Typography, List, ListItem, ListItemText, IconButton, Divider, ListItemIcon } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useCart } from "../services/CardContext";

export function CartPage() {
    const { cart, removeFromCart } = useCart();

    const totalSum = cart.reduce((sum, product) => sum + product.price, 0);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Warenkorb
            </Typography>
            <List>
                {cart.map((product) => (
                    <div key={product.uniqueId}>
                        <ListItem>
                            <ListItemText
                                primary={product.title}
                                secondary={`${product.price} €`}
                            />
                            <ListItemIcon>
                                <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(product.uniqueId)}>
                                    <Delete />
                                </IconButton>
                            </ListItemIcon>
                        </ListItem>
                        <Divider />
                    </div>
                ))}
            </List>
            <Typography variant="h6" gutterBottom>
                Gesamtsumme: {totalSum.toFixed(2)} €
            </Typography>
        </Container>
    );
}