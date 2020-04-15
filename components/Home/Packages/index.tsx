import { Flex } from 'reflexbox';
import styled from 'styled-components';

const Container = styled(Flex)`
  width: 1200px;
  margin: 0 auto !important;
  flex-direction: column;
  justift-content: space-between;
`;

const Package = styled(Flex)`
  height: 320px;
  background-color: white;
`;

const ImgPlaceHolder = styled.label`
  height: 50px;
  width: 50px;
  background-color: #333;
  border-radius: 50%;
  margin-bottom: 0;
`;
// const StyledImage = styled(LogoSvg)`
//   height: 3rem;
//   width: 3rem;

//   path {
//     fill: green;
//   }
// `;

const SectionTitle = styled.label`
  color: #313131;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

const SectionSubTitle = styled.label`
  color: #313131;
  font-size: 1rem;
  font-weight: 400;
`;

const SectionDetails = styled.label`
  color: #6f7484;
  font-size: 0.75rem;
  font-weight: 400;
`;

const PackageName = styled.label`
  font-size: 1rem;
  margin-bottom: 0;
`;

const PackageSubTitle = styled.label`
  font-size: 0.875rem;
  margin-bottom: 0;
`;

const WorkingContainer = () => (
  <Container alignItems="center">
    <SectionSubTitle>Explore Offers</SectionSubTitle>
    <SectionTitle>Fixed packages ready to start immediately</SectionTitle>
    <SectionDetails>Get the perfect logo designs in over 90 categories! whatever your business need or budget, we'll help get it done.</SectionDetails>
    <Flex flexWrap="wrap" mt={4}>
      <Flex width={1 / 4} p={2} justifyContent="center">
        <Package flexDirection="column" justifyContent="flex-start">
          <img src="https://via.placeholder.com/250x260" width="100%" />
          <Flex px={2} height={70} alignItems="center" justifyContent="space-between">
            <Flex>
              <ImgPlaceHolder />
              <Flex ml={2} flexDirection="column" justifyContent="center">
                <PackageName>Lifestyle</PackageName>
                <PackageSubTitle>15 images</PackageSubTitle>
              </Flex>
            </Flex>
            <label>$240</label>
          </Flex>
        </Package>
      </Flex>
      <Flex width={1 / 4} p={2} justifyContent="center">
        <Package flexDirection="column" justifyContent="flex-start">
          <img src="https://via.placeholder.com/250x260" width="100%" />
          <Flex px={2} height={70} alignItems="center" justifyContent="space-between">
            <Flex>
              <ImgPlaceHolder />
              <Flex ml={2} flexDirection="column" justifyContent="center">
                <PackageName>Lifestyle</PackageName>
                <PackageSubTitle>15 images</PackageSubTitle>
              </Flex>
            </Flex>
            <label>$240</label>
          </Flex>
        </Package>
      </Flex>
      <Flex width={1 / 4} p={2} justifyContent="center">
        <Package flexDirection="column" justifyContent="flex-start">
          <img src="https://via.placeholder.com/250x260" width="100%" />
          <Flex px={2} height={70} alignItems="center" justifyContent="space-between">
            <Flex>
              <ImgPlaceHolder />
              <Flex ml={2} flexDirection="column" justifyContent="center">
                <PackageName>Lifestyle</PackageName>
                <PackageSubTitle>15 images</PackageSubTitle>
              </Flex>
            </Flex>
            <label>$240</label>
          </Flex>
        </Package>
      </Flex>
      <Flex width={1 / 4} p={2} justifyContent="center">
        <Package flexDirection="column" justifyContent="flex-start">
          <img src="https://via.placeholder.com/250x260" width="100%" />
          <Flex px={2} height={70} alignItems="center" justifyContent="space-between">
            <Flex>
              <ImgPlaceHolder />
              <Flex ml={2} flexDirection="column" justifyContent="center">
                <PackageName>Lifestyle</PackageName>
                <PackageSubTitle>15 images</PackageSubTitle>
              </Flex>
            </Flex>
            <label>$240</label>
          </Flex>
        </Package>
      </Flex>
      <Flex width={1 / 4} p={2} mt={4} justifyContent="center">
        <Package flexDirection="column" justifyContent="flex-start">
          <img src="https://via.placeholder.com/250x260" width="100%" />
          <Flex px={2} height={70} alignItems="center" justifyContent="space-between">
            <Flex>
              <ImgPlaceHolder />
              <Flex ml={2} flexDirection="column" justifyContent="center">
                <PackageName>Lifestyle</PackageName>
                <PackageSubTitle>15 images</PackageSubTitle>
              </Flex>
            </Flex>
            <label>$240</label>
          </Flex>
        </Package>
      </Flex>
      <Flex width={1 / 4} p={2} mt={4} justifyContent="center">
        <Package flexDirection="column" justifyContent="flex-start">
          <img src="https://via.placeholder.com/250x260" width="100%" />
          <Flex px={2} height={70} alignItems="center" justifyContent="space-between">
            <Flex>
              <ImgPlaceHolder />
              <Flex ml={2} flexDirection="column" justifyContent="center">
                <PackageName>Lifestyle</PackageName>
                <PackageSubTitle>15 images</PackageSubTitle>
              </Flex>
            </Flex>
            <label>$240</label>
          </Flex>
        </Package>
      </Flex>
      <Flex width={1 / 4} p={2} mt={4} justifyContent="center">
        <Package flexDirection="column" justifyContent="flex-start">
          <img src="https://via.placeholder.com/250x260" width="100%" />
          <Flex px={2} height={70} alignItems="center" justifyContent="space-between">
            <Flex>
              <ImgPlaceHolder />
              <Flex ml={2} flexDirection="column" justifyContent="center">
                <PackageName>Lifestyle</PackageName>
                <PackageSubTitle>15 images</PackageSubTitle>
              </Flex>
            </Flex>
            <label>$240</label>
          </Flex>
        </Package>
      </Flex>
      <Flex width={1 / 4} p={2} mt={4} justifyContent="center">
        <Package flexDirection="column" justifyContent="flex-start">
          <img src="https://via.placeholder.com/250x260" width="100%" />
          <Flex px={2} height={70} alignItems="center" justifyContent="space-between">
            <Flex>
              <ImgPlaceHolder />
              <Flex ml={2} flexDirection="column" justifyContent="center">
                <PackageName>Lifestyle</PackageName>
                <PackageSubTitle>15 images</PackageSubTitle>
              </Flex>
            </Flex>
            <label>$240</label>
          </Flex>
        </Package>
      </Flex>
    </Flex>
  </Container >
);

export default WorkingContainer;
