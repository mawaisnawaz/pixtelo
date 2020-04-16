import { Flex } from 'reflexbox';
import styled from 'styled-components';

import PostSvg from '../../../static/icons/post.svg';
import ProposalSvg from '../../../static/icons/proposal.svg';
import DeliveredSvg from '../../../static/icons/delivered.svg';

const Container = styled(Flex)`
  width: 1200px;
  margin: 50px auto;
  flex-direction: column;
  align-items: center;
  justift-content: space-between;
`;

const CustomContainer = styled(Flex)`
  height: 300px;
  max-width: 350px;

  &: hover {
    svg {
      path {
        fill: #246df8;
      }
    }
  }
`;

const getIcon = (icon: any) => {
  const ReturnIcon = styled(icon)`
    height: 2rem;
    width: 2rem;

    path {
      fill: #bdd5ff;
    }
  `;

  return <ReturnIcon />;
};

const SectionTitle = styled.label`
  color: #232630;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 1px;
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

const PurpleOutlineButton = styled.button`
  background-color: transparent;
  padding: 10px 20px;
  border: 2px solid #d8e4fe;
  border-radius: 3px;
  color: #246df8;
`;

const BlackOutlineButton = styled.button`
  background-color: transparent;
  padding: 10px 20px;
  border: 2px solid #e4e5e9;
  border-radius: 3px;
  color: #505666;
  margin-left: 10px;
`;

const WorkingContainer = () => (
  <Container>
    <SectionTitle>How it Works</SectionTitle>
    <Flex width={1} flexWrap="wrap" justifyContent="space-between">
      <CustomContainer width={1 / 3} flexDirection="column" alignItems="center" justifyContent="center">
        {getIcon(PostSvg)}
        <Title>Post a Job</Title>
        <Details>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.{' '}
        </Details>
      </CustomContainer>
      <CustomContainer width={1 / 3} flexDirection="column" alignItems="center" justifyContent="center">
        {getIcon(ProposalSvg)}
        <Title>Get Proposals</Title>
        <Details>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.{' '}
        </Details>
      </CustomContainer>
      <CustomContainer width={1 / 3} flexDirection="column" alignItems="center" justifyContent="center">
        {getIcon(DeliveredSvg)}
        <Title>Get Your Job Delivered</Title>
        <Details>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.{' '}
        </Details>
      </CustomContainer>
    </Flex>
    <Flex justifyContent="center">
      <PurpleOutlineButton>Browser Jobs</PurpleOutlineButton>
      <BlackOutlineButton>Browser Freelancers</BlackOutlineButton>
    </Flex>
  </Container>
);

export default WorkingContainer;
