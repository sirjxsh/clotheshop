import { useState } from "react";
import { Card, CardContent, CardMedia, Typography, CardActions, Button, IconButton } from "@mui/material";
import { IProduct } from "../services/ProductApi";
import { AddShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export function ProductCard(product: Readonly<IProduct>) {
    const [imageIndex, setImageIndex] = useState(0);
    const navigate = useNavigate();

    const handleMouseEnter = () => {
        if (product.images.length > 1) {
            setImageIndex(1);
        }
    };

    const handleMouseLeave = () => {
        setImageIndex(0);
    };

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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <CardMedia
                component="img"
                height="240"
                image={product.images[imageIndex]}
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