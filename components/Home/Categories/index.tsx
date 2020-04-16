import { Flex } from 'reflexbox';
import styled from 'styled-components';

import PenSvg from '../../../static/icons/pen-nib.svg';
import FeatherSvg from '../../../static/icons/feather-light.svg';
import VideoSvg from '../../../static/icons/video-light.svg';

const Container = styled(Flex)`
  width: 1200px;
  margin: 50px auto;
  flex-direction: column;
  align-items: center;
  justift-content: space-between;

  @media (max-width: 700px) {
    & {
      width: 100%;
    }
  }
`;

const Category = styled(Flex)`
  background-color: white;
  height: 250px;
  box-shadow: 0 0 5px rgba(200, 205, 213, 0.18);
  margin: 10px !important;
  justift-content: center;
  flex-direction: column;
`;

const getIcon = (icon: any) => {
  const ReturnIcon = styled(icon)`
    height: 2rem;
    width: 2rem;

    path {
      fill: #246df7;
    }
  `;

  return <ReturnIcon />;
};

const SectionTitle = styled.label`
  color: #232630;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 1px;
`;

const SectionSubTitle = styled.label`
  color: #232630;
  font-size: 0.75rem;
  font-weight: 400;
`;

const Title = styled.label`
  font-size: 1rem;
  margin-top: 1rem;
`;

const CategoriesContainer = () => (
  <Container flexDirection="column">
    <SectionTitle>Browse Proper Professional Services</SectionTitle>
    <SectionSubTitle>Job Categories</SectionSubTitle>
    <Flex flexWrap="wrap" justifyContent="center" width={1} flexDirection={['column', 'row']}>
      <Category width={[1, 1 / 4]} flexDirection="column" alignItems="center" justifyContent="center">
        {getIcon(PenSvg)}
        <Title>Photography</Title>
      </Category>
      <Category width={[1, 1 / 4]} flexDirection="column" alignItems="center" justifyContent="center">
        {getIcon(FeatherSvg)}
        <Title>Graphic Design</Title>
      </Category>
      <Category width={[1, 1 / 4]} flexDirection="column" alignItems="center" justifyContent="center">
        {getIcon(VideoSvg)}
        <Title>Video &amp; Animation</Title>
      </Category>
    </Flex>
  </Container>
);

export default CategoriesContainer;
