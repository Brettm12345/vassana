import {Box, HStack, Text} from '@chakra-ui/layout';
import {chakra} from '@chakra-ui/system';
import {graphql, Link, useStaticQuery} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image';
import React, {FC} from 'react';

const Header: FC = () => {
  const logo = useStaticQuery<GatsbyTypes.HeaderLogoQuery>(graphql`
    query HeaderLogo {
      file(relativePath: {eq: "logo.png"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  return (
    <chakra.header display="flex" p="8" justifyContent="space-between">
      <Box boxSize="50px">
        <GatsbyImage
          alt="Logo"
          image={logo.file.childImageSharp.gatsbyImageData}
        />
      </Box>
      <HStack spacing="8" shouldWrapChildren>
        {[
          ['Home', '/'],
          ['Science', '/science'],
          ['Shop', '/shop'],
          ['About', '/about'],
        ].map(([text, to]) => (
          <Link key={text} to={to}>
            <Text fontWeight="medium">{text}</Text>
          </Link>
        ))}
      </HStack>
    </chakra.header>
  );
};

export default Header;
