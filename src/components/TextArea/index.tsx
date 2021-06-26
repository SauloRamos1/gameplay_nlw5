import React from 'react';
import { TextInput, TextInputProps } from 'react-native';


import { theme } from '../../global/styles/themes';
import { styles } from './styles';

export function TextArea({ ...rest }: TextInputProps) {
    return (
        < TextInput style={styles.container}{...rest}>


        </TextInput >
    )

}