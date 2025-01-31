import { useState } from "react";
import { Container, Slider, Typography, Button, Box, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from "@mui/material";
import { ProductGrid } from "../components/ProductGrid";

export function ProductListPage() {
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(12);
    const [sortOrder, setSortOrder] = useState('standard');
    const [key, setKey] = useState(0); // Key to force re-render

    const marks = [
        {
            value: 6,
            label: '6',
        },
        {
            value: 12,
            label: '12',
        },
        {
            value: 18,
            label: '18',
        },
        {
            value: 24,
            label: '24',
        },
    ];

    function valuetext(value: number) {
        return `${value} items`;
    }

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setLimit(newValue as number);
        setOffset(0); // Reset offset when limit changes
        setKey(prevKey => prevKey + 1); // Force re-render
    };

    const handleNext = () => {
        setOffset(prevOffset => prevOffset + limit);
        setKey(prevKey => prevKey + 1); // Force re-render
    };

    const handleBack = () => {
        setOffset(prevOffset => Math.max(prevOffset - limit, 0));
        setKey(prevKey => prevKey + 1); // Force re-render
    };

    const handleSortChange = (event: SelectChangeEvent<string>) => {
        setSortOrder(event.target.value as string);
        setKey(prevKey => prevKey + 1); // Force re-render
    };

    return (
        <Container>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2, justifyContent: 'space-evenly' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <Typography variant="h6" gutterBottom>
                    Anzahl der Produkte pro Seite
                </Typography>
                <Slider
                    value={limit}
                    onChange={handleSliderChange}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={6}
                    marks={marks}
                    min={6}
                    max={24}
                    getAriaValueText={valuetext}
                    sx={{ width: 300 }}
                />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mt: 2 }}>
                    <Button onClick={handleBack} disabled={offset === 0}>
                        Zurück
                    </Button>
                    <Typography variant="h6" gutterBottom>
                        Produkte {offset + 1} - {offset + limit}
                    </Typography>
                    <Button onClick={handleNext}>
                        Weiter
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mt: 2 }}>
                    <FormControl variant="outlined" sx={{ minWidth: 120 }}>
                        <InputLabel id="sort-label">Sortieren</InputLabel>
                        <Select
                            labelId="sort-label"
                            value={sortOrder}
                            onChange={handleSortChange}
                            label="Sortieren"
                        >
                            <MenuItem value="standard">Standard</MenuItem>
                            <MenuItem value="asc">Alphabetisch Aufsteigend</MenuItem>
                            <MenuItem value="desc">Alphabetisch Absteigend</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <ProductGrid
                key={key}
                limit={limit}
                offset={offset}
                sortAsc={sortOrder === 'asc'}
                sortDesc={sortOrder === 'desc'}
            />
        </Container>
    );
}