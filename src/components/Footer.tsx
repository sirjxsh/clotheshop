import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";

export function Footer() {
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 4, sm: 8 },
            py: { xs: 8, sm: 10 },
            textAlign: { sm: 'center', md: 'left' },
          }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                pt: { xs: 4, sm: 8 },
                width: '100%',
                borderTop: '1px solid',
                borderColor: 'divider',
            }}>
                <div>
                    <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
                        Webportal zur Übung für Bewerber
                    </Typography>
                </div>
                <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    sx={{ justifyContent: 'left', color: 'text.secondary' }}
                >
                    <IconButton
                        color="inherit"
                        size="small"
                        href="https://github.com/sirjxsh"
                        aria-label="GitHub"
                        sx={{ alignSelf: 'center' }}
                    >
                        <GitHub />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        size="small"
                        href="https://www.linkedin.com/in/joshua-ihring/"
                        aria-label="LinkedIn"
                        sx={{ alignSelf: 'center' }}
                    >
                        <LinkedIn />
                    </IconButton>
                </Stack>

            </Box>
        </Container>
    )
}