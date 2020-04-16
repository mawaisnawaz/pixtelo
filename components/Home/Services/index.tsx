import { Flex } from 'reflexbox';
import styled from 'styled-components';
// import PostSvg from '../../../static/icons/post.svg';
import SmileSvg from '../../../static/icons/smile-light.svg';
import IdCardSvg from '../../../static/icons/id-card-light.svg';

const Container = styled(Flex)`
  width: 1200px;
  align-items: center;
  margin: 0 auto !important;
  flex-direction: column;
  justift-content: center;
`;

const CustomContainer = styled(Flex)`
  height: 350px;
  justify-content: center;
`;

const getIcon = (icon: any) => {
  const ReturnIcon = styled(icon)`
    height: 2rem;
    width: 2rem;

    path {
      fill: #246df8;
    }
  `;

  return <ReturnIcon />;
};

const SectionTitle = styled.label`
  color: #232630;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 1px;
`;

const SectionSubTitle = styled.label`
  color: #6f7484;
  font-size: 0.75rem;
  font-weight: 400;
`;

const PurpleButton = styled.button`
  background-color: #246df8;
  padding: 10px 20px;
  border: none;
  color: white;
`;

const Title = styled.label`
  font-size: 1rem;
  margin-top: 1rem;
`;

const Details = styled.label`
  font-size: 0.75rem;
  margin-top: 1rem;
  text-align: center;
  color: #6f7484;
`;

const WorkingContainer = () => (
  <Container>
    <SectionTitle>Find freelance services for your project today</SectionTitle>
    <SectionSubTitle>We've have got you covered for all your business needs</SectionSubTitle>
    <Flex width={1} flexWrap="wrap" justifyContent="center" mt={4} mb={50}>
      <CustomContainer width={1 / 4} flexDirection="column" alignItems="center" justifyContent="center">
        {getIcon(IdCardSvg)}
        <Title>Verified Freelancers</Title>
        <Details>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.{' '}
        </Details>
      </CustomContainer>
      <CustomContainer width={2 / 4} flexDirection="column" alignItems="center" justifyContent="center">
        <img src="/static/other/service.svg" width="350px" />
      </CustomContainer>
      <CustomContainer width={1 / 4} flexDirection="column" alignItems="center" justifyContent="center">
        {getIcon(SmileSvg)}
        <Title>Satisfaction Guranteed</Title>
        <Details>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.{' '}
        </Details>
      </CustomContainer>
    </Flex>
    <Flex>
      <PurpleButton>Join For Free</PurpleButton>
    </Flex>
  </Container>
);

export default WorkingContainer;
