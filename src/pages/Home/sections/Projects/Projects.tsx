import { Container, styled, Typography, Grid, Box } from "@mui/material";
import StyledButton from "../../../../components/StyledButton";

const StyledProject = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    display: "flex",
    alignItems: "center",
    paddingBottom: "100px",
    [theme.breakpoints.up('xs')]: {
        paddingTop: "100px",
    },
    [theme.breakpoints.up('md')]: {
        paddingTop: "0px",
    }
}));

const ProjectCard = styled(Box)(({ theme }) => ({
    backgroundColor: "transparent",
    border: `2px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(4),
    },
}));

const ProjectImage = styled('img')(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    objectFit: 'cover',
    width: '100%',
    height: 'auto', // Ajuste conforme necessário
}));

const ProjectButtons = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
    gap: theme.spacing(2)
}));

const Projects = () => {
    const projects = [
        {
            title: "Projeto 1",
            image: "/public/images/perfil.jpg",
            description: "Descrição do Projeto 1",
            techDescription: "Tecnologias usadas: React, Node.js, MongoDB",
            button1Label: "Ver Detalhes",
            button2Label: "Visitar Site",
        },
        {
            title: "Projeto 2",
            image: "/path/to/image2.jpg",
            description: "Descrição do Projeto 2",
            techDescription: "Tecnologias usadas: Vue.js, Laravel, PostgreSQL",
            button1Label: "Ver Detalhes",
            button2Label: "GitHub Repo",
        },
        {
            title: "Projeto 2",
            image: "/path/to/image2.jpg",
            description: "Descrição do Projeto 2",
            techDescription: "Tecnologias usadas: Vue.js, Laravel, PostgreSQL",
            button1Label: "Ver Detalhes",
            button2Label: "GitHub Repo",
        },
        {
            title: "Projeto 2",
            image: "/path/to/image2.jpg",
            description: "Descrição do Projeto 2",
            techDescription: "Tecnologias usadas: Vue.js, Laravel, PostgreSQL",
            button1Label: "Ver Detalhes",
            button2Label: "GitHub Repo",
        },
    ];

    return (

        <StyledProject>
        <Container maxWidth="lg">
            <Typography color="primary.main" variant="h2" textAlign="center" pt = {5} mb={5}>Projects</Typography>
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={index}>
                        <ProjectCard>
                            <Typography color="primary.main" variant="h4" mb={2}>{project.title}</Typography>
                            <ProjectImage src={project.image} />
                            <Typography color="primary.main" variant="body1" mt={2} mb={1}>{project.description}</Typography>
                            <Typography color="primary.main" variant="caption">{project.techDescription}</Typography>
                            <ProjectButtons>
                                <StyledButton onClick={() => console.log(project.button1Label)}>
                                    <Typography>{project.button1Label}</Typography>
                                </StyledButton>
                                <StyledButton onClick={() => console.log(project.button2Label)}>
                                    <Typography>{project.button2Label}</Typography>
                                </StyledButton>
                            </ProjectButtons>
                        </ProjectCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
        </StyledProject>
    );
};

export default Projects;
