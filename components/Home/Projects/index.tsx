import { Flex } from 'reflexbox';
import styled from 'styled-components';
import { Container } from 'reactstrap';

const Project = styled(Flex)`
  background-color: black;
  min-height: 15vw;
  box-shadow: 0 0 5px rgba(200, 205, 213, 0.18);
  align-items: flex-end;
  justift-content: flex-start;

  @media (max-width: 700px) {
    & {
      height: 200px;
    }
  }
`;

const SectionTitle = styled.label`
  color: #313131;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 1px;
`;

const SectionDetails = styled.label`
  color: #6f7484;
  font-size: 0.75rem;
  font-weight: 400;
`;

const ImgPlaceHolder = styled.label`
  height: 50px;
  width: 50px;
  background-color: #333;
  border-radius: 50%;
  margin-bottom: 0;
`;

const CategoriesContainer = () => (
  <Container fluid>
    <Flex flexDirection="column" alignItems="center" mb={4}>
      <SectionTitle>Project made by our freelancers</SectionTitle>
      <SectionDetails>
        Get the perfect logo designs in over 90 categories! whatever your business need or budget, we'll help get it
        done.
      </SectionDetails>
    </Flex>
    <Flex flexWrap="wrap" justifyContent="center" width={1} flexDirection={['column', 'row']}>
      <Flex width={[1, 1 / 5]} p={2}>
        <Project width={1} p={3}>
          <ImgPlaceHolder />
        </Project>
      </Flex>
      <Flex width={[1, 1 / 5]} p={2}>
        <Project width={1} p={3}>
          <ImgPlaceHolder />
        </Project>
      </Flex>
      <Flex width={[1, 1 / 5]} p={2}>
        <Project width={1} p={3}>
          <ImgPlaceHolder />
        </Project>
      </Flex>
      <Flex width={[1, 1 / 5]} p={2}>
        <Project width={1} p={3}>
          <ImgPlaceHolder />
        </Project>
      </Flex>
      <Flex width={[1, 1 / 5]} p={2}>
        <Project width={1} p={3}>
          <ImgPlaceHolder />
        </Project>
      </Flex>
    </Flex>
    <Flex flexDirection="column" alignItems="center" mt={4}>
      <SectionDetails>Browser More Freelancers</SectionDetails>
    </Flex>
  </Container>
);

export default CategoriesContainer;
