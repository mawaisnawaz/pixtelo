import Layout from '../components/Layout';
import { Jumbotron } from 'reactstrap';
import CategoriesContainer from '../components/Home/Categories';
import Projects from '../components/Home/Projects';
import WorkingContainer from '../components/Home/Working';
import PackagesContainer from '../components/Home/Packages';
import Services from '../components/Home/Services';
import Footer from '../components/Shared/Footer';
import styled from 'styled-components';
import { Flex } from 'reflexbox';

const TopContainer = styled.div`
  background-color: #f8f9fd;
  padding: 50px 0;
`;

const Packages = styled.div`
  background-color: #f8f9fd;
  padding: 50px 0;
  
`;

const ProjectsContainer = styled.div`
  background-color: white;
  padding: 50px 0;
`;

const ServicesContainer = styled.div`
  background-color: white;
  padding: 50px 0;
`;

const Banner = styled(Jumbotron)`
  display: flex;
  justify-content: center;
  padding: 100px 0;
  background-image: url('/static/banner/banner.png');
  height: 555px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const PurpleButton = styled.button`
  background-color: #246df8;
  padding: 10px 20px;
  border: none;
  color: white;
  width: 200px;
`;

const SectionTitle = styled.label`
  color: #232630;
  font-size: 1.875rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

const SectionSubTitle = styled.label`
  color: #232630;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;


const IndexPage = () => (
  <Layout title="Home - Pixtelo">
    <Banner fluid style={{ marginBottom: 0 }}>
      <Flex flexDirection="column" alignItems="center">
        <SectionTitle className="display-3">No More Stock Photos</SectionTitle>
        <SectionSubTitle className="lead">Professional Photographers and designers ready to build to your image.</SectionSubTitle>
        <PurpleButton>Hire a Freelancer</PurpleButton>
      </Flex>
    </Banner>
    <TopContainer>
      <CategoriesContainer />
      <WorkingContainer />
    </TopContainer>
    <ProjectsContainer>
      <Projects />
    </ProjectsContainer>
    <Packages>
      <PackagesContainer />
    </Packages>
    <ServicesContainer>
      <Services />
    </ServicesContainer>
    <Footer />
  </Layout>
);

export default IndexPage;
