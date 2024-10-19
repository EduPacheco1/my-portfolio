import { Container, styled, Typography } from "@mui/material";

const StyledAbout = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up('xs')]: {
    paddingTop: "100px",
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: "0px",
  }
}));

const Content = styled("div")({
  padding: "20px",
});

const Header = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const About = () => {
  return (
    <StyledAbout>
      <Container maxWidth="lg">
        <Header variant="h2" align="center" paddingTop={5} gutterBottom>
          About Me
        </Header>
        
        <Content>
          <Typography variant="body1" align="center">
            Java developer with over 14 years of IT experience, including 9 years as an ERP Consultant.
            Passionate about solving complex problems and learning new things. I have a broad market view, skills in back-end (Java, C#), REST APIs,
            databases (SQL, PostgreSQL) and front-end (JavaScript, React, CSS, HTML), with experience in project creation and coordination,
            ERP processes, among others.<br /><br />
          </Typography>
          
          <Typography variant="body1" align="center">
            I've participated in projects that covered all the technologies necessary for full-stack web development.
            In the final SERRATEC project in partnership with UFRJ, I worked on the back-end, from database structuring to front-end communication,
            using mainly JAVA, REST API and SPRING.
          </Typography>
          
          <Typography variant="body1" align="center" sx={{ mt: 4 }}>
            _______________________________________________________________________________________________________________________________________________________________
          </Typography>
        </Content>
      </Container>
    </StyledAbout>
  );
};

export default About;
