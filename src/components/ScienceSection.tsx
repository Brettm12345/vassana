import {Flex, Heading, Stack, Text} from '@chakra-ui/layout';
import {graphql, useStaticQuery} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image';
import React, {FC, ReactNode} from 'react';
import Button from './Button';

interface ScienceSectionProps {
  heading: string;
  children: ReactNode;
}
const ScienceSection: FC<ScienceSectionProps> = ({children, heading}) => {
  const {file} = useStaticQuery<GatsbyTypes.ScienceSectionImageQuery>(graphql`
    query ScienceSectionImage {
      file(relativePath: {eq: "science-section.jpeg"}) {
        childImageSharp {
          gatsbyImageData(width: 300)
        }
      }
    }
  `);
  return (
    <Flex maxW="750px" py="10" mx="auto" flexDir={['column', 'row']}>
      <GatsbyImage
        alt="Science"
        style={{
          marginRight: '64px',
          borderRadius: '8px',
          minWidth: '320px',
        }}
        image={file.childImageSharp.gatsbyImageData}
      />
      <Stack spacing="2">
        <Heading color="lightBlue">{heading}</Heading>
        <Text>{children}</Text>
        <Button>Your water now</Button>
      </Stack>
    </Flex>
  );
};

export default ScienceSection;
