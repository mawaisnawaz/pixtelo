import { Flex } from 'reflexbox';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import FacebookSvg from '../../../static/social-media/facebook.svg';
import TwitterSvg from '../../../static/social-media/twitter.svg';
import InstagramSvg from '../../../static/social-media/instagram.svg';
import LinkedinSvg from '../../../static/social-media/linkedin.svg';

const Subtitle = styled.label`
  font-size:  1rem;
  font-weight: bold;
  margin-bottom: 40px;
`;


const ListItem = styled.label`
  font-size:  1rem;
`;

const getIcon = (icon: any) => {
  const ReturnIcon = styled(icon)`
    height: 2rem;
    width: 2rem;

    path {
      fill: #bdd5ff;
    }

    &:hover {
      path {
        fill: #246df7;
      }
    }
  `;

  return <ReturnIcon />;
};


const CategoriesContainer = () => (
  <Container>
    <Flex width={1} alignItems="center" flexDirection="column">
      <Flex width={5 / 6} mb={4}>
        <img src="/static/logo/logo.svg" />
      </Flex>
      <Flex width={5 / 6} mb={4} justifyContent="space-between">
        <Flex flexDirection="column">
          <Subtitle>
            Company
          </Subtitle>
          <Flex flexDirection="column">
            <ListItem>About</ListItem>
            <ListItem>Careers</ListItem>
            <ListItem>Press</ListItem>
            <ListItem>Trust &amp; Safety</ListItem>
            <ListItem>Terms of Service</ListItem>
            <ListItem>Privacy Policy</ListItem>
          </Flex>
        </Flex>
        <Flex flexDirection="column">
          <Subtitle>
            Freelancers
          </Subtitle>
          <Flex flexDirection="column">
            <ListItem>Create Account</ListItem>
            <ListItem>Create Counseling</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>FAQ</ListItem>
            <ListItem>Video Guides</ListItem>
          </Flex>
        </Flex>
        <Flex flexDirection="column">
          <Subtitle>
            Employers
          </Subtitle>
          <Flex flexDirection="column">
            <ListItem>Create Account</ListItem>
            <ListItem>Product/Service</ListItem>
            <ListItem>Post a Job</ListItem>
            <ListItem>FAQ</ListItem>
          </Flex>
        </Flex>
      </Flex>
      <Flex width={5 / 6} mb={4}>
        <Flex width={1 / 3}>
          Follow Us
          {getIcon(FacebookSvg)}
          {getIcon(TwitterSvg)}
          {getIcon(InstagramSvg)}
          {getIcon(LinkedinSvg)}
        </Flex>
        <Flex width={1 / 3}>
          <label> &copy; 2020 Pixtelo <sup>&reg;</sup></label>
        </Flex>
      </Flex>
    </Flex>

  </Container >
);

export default CategoriesContainer;
