import {Flex, Heading, Stack, Text} from '@chakra-ui/layout';
import {graphql, useStaticQuery} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image';
import React, {FC, ReactNode} from 'react';
import Button from './Button';

interface ScienceSectionProps {
  heading: string;
  children: ReactNode;
  image: never;
}
const ScienceSection: FC<ScienceSectionProps> = ({
  children,
  heading,
  image,
}) => (
  <Flex maxW="900px" py="10" mx="auto" flexDir={['column', 'row']}>
    <GatsbyImage
      alt="Science"
      style={{
        marginRight: '64px',
        borderRadius: '8px',
        minWidth: '320px',
        maxWidth: '320px',
      }}
      image={image}
    />
    <Stack spacing="2">
      <Heading color="lightBlue">{heading}</Heading>
      <Text>{children}</Text>
      <Button>Your water now</Button>
    </Stack>
  </Flex>
);
export default ScienceSection;
