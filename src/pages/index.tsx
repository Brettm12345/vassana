import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/layout';
import {graphql} from 'gatsby';
import {getImage, GatsbyImage} from 'gatsby-plugin-image';

import {convertToBgImage} from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import React, {FC} from 'react';
import Button from '../components/Button';
import {chakra} from '@chakra-ui/system';
import {Media} from '../components/Media';
import {createIcon} from '@chakra-ui/icon';

interface HomePageProps {
  data: GatsbyTypes.HomePageQuery;
}
const TearDrop = createIcon({
  viewBox: '0 0 525 637.499986',
  path: (
    <>
      <defs>
        <clipPath id="clip1">
          <path d="M 0.207031 0 L 524.792969 0 L 524.792969 637 L 0.207031 637 Z M 0.207031 0 "></path>
        </clipPath>
        <clipPath id="clip2">
          <path d="M 162.878906 185.671875 L 362.222656 185.671875 L 362.222656 450.960938 L 162.878906 450.960938 Z M 162.878906 185.671875 "></path>
        </clipPath>
      </defs>
      <g id="surface1">
        <g clip-path="url(#clip1)" clip-rule="nonzero">
          <path
            stroke="none"
            fillRule="nonzero"
            fill="#003a58"
            fillOpacity="1"
            d="M 0.207031 0 L 524.792969 0 L 524.792969 644.496094 L 0.207031 644.496094 Z M 0.207031 0 "
          ></path>
          <path
            stroke="none"
            fillRule="nonzero"
            fill="#003a58"
            fillOpacity="1"
            d="M 0.207031 0 L 524.792969 0 L 524.792969 637 L 0.207031 637 Z M 0.207031 0 "
          ></path>
          <path
            stroke="none"
            fillRule="nonzero"
            fill="#003a58"
            fillOpacity="1"
            d="M 0.207031 0 L 524.792969 0 L 524.792969 637 L 0.207031 637 Z M 0.207031 0 "
          ></path>
        </g>
        <g clip-path="url(#clip2)" clip-rule="nonzero">
          <path
            stroke="none"
            fillRule="nonzero"
            fill="rgb(100%, 100%, 100%)"
            fillOpacity="1"
            d="M 362.222656 351.476562 C 362.222656 406.417969 317.59375 450.960938 262.550781 450.960938 C 207.503906 450.960938 162.878906 406.417969 162.878906 351.476562 C 162.878906 296.535156 262.550781 185.671875 262.550781 185.671875 C 262.550781 185.671875 362.222656 296.535156 362.222656 351.476562 Z M 362.222656 351.476562 "
          ></path>
        </g>
      </g>
    </>
  ),
});
const Home: FC<HomePageProps> = ({data}) => {
  const image = getImage(data.hero1.childImageSharp.gatsbyImageData);
  const hero3 = getImage(data.hero3.childImageSharp.gatsbyImageData);
  console.log(data.hero3);

  // Use like this:
  const bgImage = convertToBgImage(image);
  const hero3BgImage = convertToBgImage(hero3);
  console.log(hero3BgImage);

  return (
    <Flex direction="column" maxW="100vw">
      <Box
        as="section"
        sx={{
          '& > div': {
            minH: '1000px',
            display: 'flex',
          },
        }}
        minH="1000px"
      >
        <BackgroundImage {...bgImage}>
          <Stack
            spacing="6"
            direction="column"
            p={['5', '10', '20']}
            mt="400px"
            h="100%"
          >
            <Text
              mt="auto"
              color="lightBlue"
              fontWeight="bold"
              fontSize="4xl"
              mr="auto"
            >
              Your Body Craves Collagen,
              <br /> Your Tastebuds Crave Avasara
            </Text>
            <Text>Low Cal Beauty Boost in Three Great Flavors</Text>
            <Button>Your water now</Button>
          </Stack>
        </BackgroundImage>
      </Box>
      <chakra.section
        display="flex"
        flexDir={['column', 'row']}
        color="white"
        bg="darkestBlue"
      >
        <Box w={['100%', '40%']} p={['4', '20']}>
          <GatsbyImage
            alt="Swimming Woman"
            image={data.hero2.childImageSharp.gatsbyImageData}
          />
        </Box>
        <Stack p={['10', '20', '40']} w={['100%', '40%']} spacing="6">
          <Text fontSize="8xl">Avasara</Text>
          <Text fontSize="4xl" fontStyle="italic">
            noun • Sanskrit
          </Text>
          <StackDivider h="2px" bg="white" />
          <Text fontWeight="bold" fontSize="4xl" letterSpacing="wider">
            Opportunity to Shine
          </Text>
          <Text fontSize="2xl" lineHeight="9">
            Every day, we strive to be our best selves...To make the most of
            every opportunity.Avasara helps you achieve that.
          </Text>
        </Stack>
      </chakra.section>
      <chakra.section display="flex" flexDir={['column', 'row']}>
        <GatsbyImage
          alt="The cologen you need"
          image={data?.theCologen.childImageSharp.gatsbyImageData}
        />
        <Stack
          p={['8', '20', '40']}
          fontSize={['xl', '2xl', '3xl']}
          maxW={['100%', '40%']}
          spacing="4"
        >
          <Text>
            Our proprietary, natural high-purity collagenis called type 1. It’s
            scientifically shown to <br /> benefit your skin, hair, nails and
            more.
            <br />
            <br />
            Because it’s hydrolyzed and easilydigestible, you'll also absorb it
            better inour great-tasting water.
            <br />
            <br />
            Seize your opportunity with Avasara.
            <br />
          </Text>
          <Button mt={4}>Your water now</Button>
        </Stack>
      </chakra.section>
      <chakra.section minH="620px" minW="100vw">
        <BackgroundImage {...hero3BgImage}>
          <Flex p={['20', '30', '40']} minH="900px" minW="100vw">
            <Flex direction="column" mt="auto" mr="auto">
              <Text
                mt="auto"
                mr="auto"
                color="white"
                fontSize={['5xl', '6xl', '7xl']}
                fontWeight="bold"
              >
                Clean:
              </Text>
              <Text
                color="white"
                fontSize={['3xl', '4xl', '5xl']}
                fontWeight="bold"
              >
                No Artificial Flavors or <br /> Colors, Zero Sugar, and <br />
                40 Calories per Bottle
              </Text>
            </Flex>
          </Flex>
        </BackgroundImage>
      </chakra.section>
      <chakra.section>
        <Flex justify="center" flexDir="column">
          <Heading textAlign="center" my="20">
            Three great tasting fravors:{' '}
          </Heading>
          <HStack
            spacing="2"
            shouldWrapChildren
            overflowX="scroll"
            justify={['flex-start', 'center']}
          >
            {[data.product1, data.product2, data.product3].map(image => (
              <GatsbyImage
                key={image.toString()}
                alt="Product Image"
                image={image.childImageSharp.gatsbyImageData}
              />
            ))}
          </HStack>
          <Button mx="auto" mb="4">
            You water now
          </Button>
        </Flex>
      </chakra.section>
      <chakra.section
        color="white"
        bg="darkestBlue"
        px={['10', '40', '96']}
        py={['10', '20', '40']}
      >
        <Flex flexDir={['column', 'row']}>
          <Flex flexDir="column">
            <Text
              fontSize={['xl', '2xl']}
              textTransform="uppercase"
              letterSpacing="wider"
              fontWeight="bold"
              mb="8"
            >
              Avasara science
            </Text>
            <Heading color="lightestBlue">
              Cologen May Be the Most Important Protein in Your Body:
            </Heading>
            <Text color="lightestBlue" mt="4" fontSize="2xl">
              The best way to get Collagen and the hydration you need is through
              our water.
            </Text>
            <Button>Learn More</Button>
          </Flex>
          <Flex flexDir="column" mt={['4', '0']}>
            {[
              'Only the highest-grade collagen peptides',
              'Manufactured via a gentle enzymatic process',
              'Rapid absorption in your body for maximum effectiveness',
              'Unique dual action: more collagen now, better collagen production in the future',
            ].map(text => (
              <HStack key={text} spacing="2">
                <TearDrop boxSize="5em" />
                <Text color="white" fontSize="2xl">
                  {text}
                </Text>
              </HStack>
            ))}
          </Flex>
        </Flex>
      </chakra.section>
      <Box
        as="section"
        minW="100vw"
        sx={{
          '& > div': {
            minH: '1000px',
            display: 'flex',
          },
        }}
        minH="1000px"
      >
        <BackgroundImage {...bgImage}>
          <Stack
            spacing="6"
            justify="center"
            direction="column"
            p={['10', '20', '40']}
            ml="auto"
            mr={['auto', '0']}
            my="auto"
            h="100%"
          >
            <Text fontSize="4xl" textAlign="center">
              Seize Every <br /> Opportunity with <br /> Avasara
            </Text>
            <Button alignSelf="center">Your water now</Button>
          </Stack>
        </BackgroundImage>
      </Box>
    </Flex>
  );
};

export const query = graphql`
  query HomePage {
    hero1: file(relativePath: {eq: "home-page-hero-1.png"}) {
      childImageSharp {
        gatsbyImageData(
          width: 1488
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    hero2: file(relativePath: {eq: "woman-swimming.jpeg"}) {
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP])
      }
    }
    product1: file(relativePath: {eq: "product-1.png"}) {
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF])
      }
    }
    product2: file(relativePath: {eq: "product-2.png"}) {
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF])
      }
    }
    product3: file(relativePath: {eq: "product-3.png"}) {
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF])
      }
    }
    theCologen: file(relativePath: {eq: "the-cologen-you-need.png"}) {
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF])
      }
    }
    hero3: file(relativePath: {eq: "home-page-hero-2.png"}) {
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;
export default Home;
