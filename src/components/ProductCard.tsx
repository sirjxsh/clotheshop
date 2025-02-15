import { Card, CardContent, CardMedia, Typography, CardActions, Button, IconButton } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../services/Interfaces";

export function ProductCard(product: Readonly<IProduct>) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/products/${product.id}`);
    };

    const isTitleLong = product.title.length > 20; // Beispielbedingung für lange Titel

    return (
        <Card variant="outlined"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                maxWidth: 345,
                margin: 2,
                boxShadow: 3,
                borderRadius: 2,
                cursor: 'pointer',
                height: '100%', // Stellt sicher, dass alle Karten gleich hoch sind
            }}
        >
            <CardMedia
                component="img"
                height="240"
                image={product.image}
                alt={product.title}
                onClick={handleCardClick}
            />
            <CardContent sx={{ textAlign: 'left' }} onClick={handleCardClick}>
                <Typography gutterBottom variant={isTitleLong ? "h6" : "h5"} component="div">
                    {product.title}
                </Typography>
                <Typography variant="h6" color="text.primary">
                    {product.price} €
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Details
                </Button>
                <IconButton color="secondary" aria-label={"Add " + product.title + " to Cart"}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
}