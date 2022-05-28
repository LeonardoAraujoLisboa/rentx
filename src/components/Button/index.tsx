import React from 'react';
import {Container, Title} from './styles';
import {RectButtonProps} from 'react-native-gesture-handler';
import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components'

interface Props extends RectButtonProps {
    title: string;
    color?: string;
    enabled?: boolean;
    loading?: boolean;
}

const Button = ({title, enabled,  loading, ...rest}: Props) => {
    const theme = useTheme();

   return (
      <Container {...rest} style={{opacity: (enabled === true || loading === true) ? .5 : 1}}>
          {loading ? <ActivityIndicator color={theme.colors.background_secondary} /> : <Title>{title}</Title>}
      </Container>
   );
}

export default Button;