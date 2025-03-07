import { useEffect, useState } from "react";
import { Card, CircularProgress, Container, IconButton, Tooltip, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { AddShoppingCart } from "@mui/icons-material";
import { useCart } from "../services/CardContext";
import { IProduct } from "../services/Interfaces";
import productApi from "../services/ProductApi";

export function ProductPage() {

    const [product, setProduct] = useState<IProduct>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | boolean>('')
    const { id } = useParams<{ id: string }>();
    const { addToCart } = useCart();
    const [addedToCart, setAddedToCart] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                if (id) {
                    const data = await productApi.getProductById(parseInt(id));
                    setProduct(data);
                } else {
                    setError('Invalid product ID');
                }
            } catch (err) {
                setError('Fehler beim Laden der Produkte: ' + err);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    });

    const handleAddToCart = () => {
        if (product) {
            addToCart(product);
            setAddedToCart(true);
        }
    };

    if (loading) return <CircularProgress />
    if (error || !product) return <p>{error}</p>


    return (
        <Container>
            <Typography variant="h4" sx={{marginBottom: 2}}>{product.title}</Typography>
            <img 
                srcSet={product.image}
                src={product.image}
                alt={product.title}
                loading="lazy"
                style={{ width: 'auto', maxHeight: '300px', marginBottom: '2rem' }}
            />
            <Container sx={{ display: 'flex', flexDirection: 'row', gap: 2, justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Card sx={{ padding: 2, borderRadius: 2 }}>
                    <Typography variant="body1">{product.description}</Typography>
                </Card>
                <Typography variant="h6" sx={{}}>{product.price}&nbsp;€</Typography>
                <Tooltip title="Produkt wurde hinzugefügt" open={addedToCart} disableHoverListener>
                    <IconButton 
                        color="secondary" 
                        aria-label={"Add to Shopping Cart"} 
                        sx={{ 
                            border: '2px solid', 
                            borderRadius: 2, 
                            boxShadow: 6, 
                            bgcolor: addedToCart ? 'primary.main' : 'inherit' 
                        }}
                        onClick={handleAddToCart}
                    >
                        <AddShoppingCart />
                    </IconButton>
                </Tooltip>
            </Container>

        </Container>
    )
}