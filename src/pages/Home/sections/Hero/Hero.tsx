import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/perfil.jpg"
import DownloadingIcon from '@mui/icons-material/Downloading';
import InboxIcon from '@mui/icons-material/Inbox';
import StyledButton from "../../../../components/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackGround/AnimatedBackGround";

const Hero
    = () => {

        const StyledHero = styled("div")(({ theme }) => ({
            backgroundColor: theme.palette.primary.main,
            height: "100vh",
            display: "flex",
            alignItems: "center"
        }));

        const StyledImage = styled("img")(({ theme }) => ({
            width: "90%",
            borderRadius: "50%",
            border: `1px solid ${theme.palette.primary.contrastText}`
        }));

        return (
            <>
                <StyledHero>

                    <Container maxWidth="lg">
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Box position="relative">
                                    <Box position="absolute" width={"150%"} top={-100} right={0}>
                                        <AnimatedBackground />
                                    </Box>
                                    <Box position="relative" textAlign="center">
                                        <StyledImage src={Avatar} />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Typography color="primary.contrastText" variant="h1" textAlign="center" paddingBottom={2}>Eduardo Pacheco</Typography>
                                <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Software Engineer</Typography>
                                <Grid container display="flex" justifyContent="center" spacing={3} paddingTop={3}>
                                    <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                        <StyledButton>
                                            <DownloadingIcon />
                                            <Typography> Download CV </Typography>
                                        </StyledButton>
                                    </Grid>
                                    <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                        <StyledButton>
                                            <InboxIcon />
                                            <Typography> Contact me </Typography>
                                        </StyledButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>

                </StyledHero>
            </>
        )
    }

export default Hero