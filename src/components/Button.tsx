import {Button as ChakraButton, ButtonProps} from '@chakra-ui/button';
import React, {FC} from 'react';

const Button: FC<ButtonProps> = props => (
  <ChakraButton
    borderRadius="0px"
    backgroundColor="darkBlue"
    color="white"
    textTransform="uppercase"
    letterSpacing="wider"
    maxW="fit-content"
    _before={{
      content: '""',
      zIndex: '-1',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      borderRadius: 'var(--button-border-radius-inner)',
      transform: 'scaleX(1)',
      transition: 'transform .3s ease-out',
      transformOrigin: '50%',
      bg: 'var(--color-button-primary-bg)',
    }}
    {...props}
  />
);

export default Button;
