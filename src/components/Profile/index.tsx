import React from "react";
import { View, Text } from 'react-native';

import { styles } from './styles';
import { Avatar } from "../Avatar";
export function Profile() {
    return (
        <View style={styles.container}>
            <Avatar urlImage="https://github.com/SauloRamosGit.png" />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        Rodrigo
                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje e dia de vitoria
                </Text>
            </View>

        </View>
    )
}