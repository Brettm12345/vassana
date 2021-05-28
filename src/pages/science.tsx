import {Box, Flex, Heading, HStack, Text} from '@chakra-ui/layout';
import {Stack} from '@chakra-ui/react';
import {chakra} from '@chakra-ui/system';
import {graphql} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import {convertToBgImage} from 'gbimage-bridge';
import React, {FC} from 'react';
import ScienceSection from '../components/ScienceSection';

interface Props {
  data: GatsbyTypes.SciencePageQuery;
}

const Science: FC<Props> = ({data}) => {
  const hero1 = getImage(data.hero1.childImageSharp.gatsbyImageData);
  const hero2 = getImage(data.hero2.childImageSharp.gatsbyImageData);
  const hero1Bg = convertToBgImage(hero1);
  const hero2Bg = convertToBgImage(hero2);
  return (
    <Flex flexDir="column">
      <chakra.section minH="1000px">
        <BackgroundImage {...hero1Bg}>
          <Stack minH="1000px" justify="center" align="center" spacing="6">
            <Heading color="darkBlue" textAlign="center">
              Dual Action
            </Heading>
            <Heading color="lightBlue" textAlign="center">
              More Collagen Now, Better Collagen Tomorrow
            </Heading>
            <Text maxW="xl" textAlign="center" fontSize="xl">
              Studies show that drinking collagen water is a highly effective
              contributor to rebuilding collagen. With Avasara,you get the dual
              action you need—more collagen now, better collagen production in
              the future.Here’s how it works.
            </Text>
          </Stack>
        </BackgroundImage>
      </chakra.section>
      <chakra.section p={['10', '20']}>
        <ScienceSection heading="Highest Grade Collagen Peptides">
          Avasara uses only the highest-grade collagenpeptides called Peptan.
          Peptan are bioactivecollagen peptides developed to deliver
          multiplehealth benefits and functional properties.
          <br />
          <br />
          [Note: Peptides are shorts chains of amino acidslinked by peptide
          bonds, a covalent chemical.]
        </ScienceSection>
        <ScienceSection heading="Gentle Enzymatic Process= Rapid Absorption">
          We manufacture our collagen peptides via agentle enzymatic process.
          <br />
          <br />
          When delivered in Avasara water, the benefitis rapid absorption in
          your body for maximum effectiveness.
        </ScienceSection>
        <ScienceSection heading="Collagen Water = Stimulating Production">
          Studies show that drinking collagen water is a<br />
          highly effective contributor to rebuilding collagen.
          <br />
          <br />
          Even better, when you drink Avasara water youare doing more than
          replenishing your body’s
          <br />
          own natural collagen, you are actually
          <br />
          stimulating collagen production.
        </ScienceSection>
      </chakra.section>
      <chakra.section>
        <BackgroundImage {...hero2Bg}>
          <Flex minH="1000px" p={['10', '20', '30', '40']}>
            <Heading ml="auto" my="auto" mr={['auto', '0']} color="darkestBlue">
              Power of water
            </Heading>
          </Flex>
        </BackgroundImage>
      </chakra.section>
      <chakra.section>
        <Stack
          direction={['column', 'row']}
          p={['10', '20', '30', '40']}
          spacing="4"
          justify="center"
          w="80%"
          mx="auto"
          sx={{
            '.gatsby-image-wrapper': {
              w: '30%',
            },
          }}
        >
          <GatsbyImage
            alt="logo"
            image={data.logo.childImageSharp.gatsbyImageData}
          />
          <Stack spacing="4">
            <Heading color="lightBlue">Losing One Percent—Every Year</Heading>
            <Text fontSize="2xl" maxW="lg">
              From the age of 20, your skin loses 1% of its collagen every
              year.It becomes brittle, gets thinner and loses elasticity. In
              other words,your skin sags and wrinkles.
            </Text>
          </Stack>
        </Stack>
        <Stack
          direction={['column', 'row']}
          p={['10', '20', '30', '40']}
          justify="center"
          spacing="4"
          mx="auto"
          sx={{
            '.gatsby-image-wrapper': {
              w: '30%',
            },
          }}
        >
          <GatsbyImage
            alt="logo"
            image={data.logo.childImageSharp.gatsbyImageData}
          />
          <Stack spacing="4">
            <Heading color="lightBlue">Water Matters</Heading>
            <Text fontSize="2xl" maxW="lg">
              Or, lack of water does. As the collagen matrix in your skin
              (yourdermis) degenerates, your skin loses its capacity to stay
              hydrated.Numerous studies show collagen water helps compensate
              forcollagen deprivation and its effects.
              <br />
              <br />
              <Text letterSpacing="wider">STUDY 1 • STUDY 2 • STUDY 3</Text>
            </Text>
          </Stack>
        </Stack>
      </chakra.section>
    </Flex>
  );
};

export const query = graphql`
  query SciencePage {
    hero1: file(relativePath: {eq: "home-page-hero-1.png"}) {
      childImageSharp {
        gatsbyImageData(formats: [AUTO, AVIF, WEBP])
      }
    }
    hero2: file(relativePath: {eq: "home-page-hero-2.png"}) {
      childImageSharp {
        gatsbyImageData(formats: [AUTO, AVIF, WEBP])
      }
    }
    logo: file(relativePath: {eq: "logo.png"}) {
      childImageSharp {
        gatsbyImageData(formats: [AUTO, AVIF, WEBP])
      }
    }
  }
`;

export default Science;
