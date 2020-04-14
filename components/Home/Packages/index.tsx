import { Flex } from 'reflexbox';
import styled from 'styled-components';
// import PostSvg from '../../../static/icons/post.svg';
import LogoSvg from '../../../public/icons/pen-nib.svg';

const Container = styled(Flex)`
  width: 1200px;
  margin: 0 auto;
  flex-direction: column;
  justift-content: space-between;
`;

const CustomContainer = styled(Flex)`
  height: 300px;
  box-shadow: 0 0 5px rgba(200, 205, 213, 0.18);
`;

const StyledImage = styled(LogoSvg)`
  height: 3rem;
  width: 3rem;

  path {
    fill: green;
  }
`;

const WorkingContainer = () => (
  <Container>
    <Flex flexWrap="wrap" justifyContent="center">
      <CustomContainer width={1 / 5} p={2} flexDirection="column" alignItems="center" justifyContent="center">
        <img />
        <p>text</p>
        <p>detail</p>
      </CustomContainer>
      <CustomContainer width={1 / 5} flexDirection="column" alignItems="center" justifyContent="center">
        <p>icon</p>
        <p>text</p>
        <p>detail</p>
      </CustomContainer>
      <CustomContainer width={1 / 5} flexDirection="column" alignItems="center" justifyContent="center">
        <StyledImage />
        <p>text</p>
        <p>detail</p>
      </CustomContainer>
      <CustomContainer width={1 / 5} flexDirection="column" alignItems="center" justifyContent="center">
        <StyledImage />
        <p>text</p>
        <p>detail</p>
      </CustomContainer>
      <CustomContainer width={1 / 5} flexDirection="column" alignItems="center" justifyContent="center">
        <StyledImage />
        <p>text</p>
        <p>detail</p>
      </CustomContainer>
    </Flex>
    <Flex flexWrap="wrap" justifyContent="center" mt={4}>
      <CustomContainer width={1 / 5} p={2} flexDirection="column" alignItems="center" justifyContent="center">
        <img />
        <p>text</p>
        <p>detail</p>
      </CustomContainer>
      <CustomContainer width={1 / 5} flexDirection="column" alignItems="center" justifyContent="center">
        <p>icon</p>
        <p>text</p>
        <p>detail</p>
      </CustomContainer>
      <CustomContainer width={1 / 5} flexDirection="column" alignItems="center" justifyContent="center">
        <StyledImage />
        <p>text</p>
        <p>detail</p>
      </CustomContainer>
      <CustomContainer width={1 / 5} flexDirection="column" alignItems="center" justifyContent="center">
        <StyledImage />
        <p>text</p>
        <p>detail</p>
      </CustomContainer>
      <CustomContainer width={1 / 5} flexDirection="column" alignItems="center" justifyContent="center">
        <StyledImage />
        <p>text</p>
        <p>detail</p>
      </CustomContainer>
    </Flex>
  </Container>
);

export default WorkingContainer;
