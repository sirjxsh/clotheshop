import { CircularProgress, Grid2 } from "@mui/material";
import { useEffect, useState } from "react";
import productApi from "../services/ProductApi";
import { ProductCard } from "./ProductCard";
import { IProduct } from "../services/Interfaces";

interface ProductGridProps {
    preview?: boolean;
    limit?: number;
    offset?: number;
    sortAsc?: boolean;
    sortDesc?: boolean;
}

export function ProductGrid({ preview = false, limit = 12, offset = 0, sortAsc = false, sortDesc = false }: Readonly<ProductGridProps>) {

    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | boolean>('')

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const data = await productApi.getProductsWithPagination(offset, preview ? 3 : limit);
            if (sortAsc) {
                data.sort((a, b) => a.title.localeCompare(b.title));
            }
            if (sortDesc) {
                data.sort((a, b) => b.title.localeCompare(a.title));
            }
            setProducts(data);
          } catch (err) {
            setError('Fehler beim Laden der Produkte: ' + err);
          } finally {
            setLoading(false);
          }
        }
        fetchProducts();
    }, [limit, offset, preview, sortAsc, sortDesc]);

    if (loading) return <CircularProgress />
    if (error) return <p>{error}</p>

    return (
        <Grid2 container direction={'row'} alignItems={'center'} justifyContent={'center'}>
            {products.map(product => (
                <ProductCard key={product.id} {...product} />    
            ))}
        </Grid2>
    )
}