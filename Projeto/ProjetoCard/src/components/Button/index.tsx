import React from 'react';
import {Button as ButtonNativeBase, IButtonProps} from 'native-base';
import {TextoBotao} from './style';

type Props = IButtonProps & {
  title?: string;
};

function Button({title, ...rest}: Props) {
  return (
    <ButtonNativeBase
      w="190"
      h={55}
      bg="white"
      rounded={12}
      _pressed={{
        bg: 'emerald.500',
      }}
      {...rest}>
      <TextoBotao>{title}</TextoBotao>
    </ButtonNativeBase>
  );
}

export default Button;
