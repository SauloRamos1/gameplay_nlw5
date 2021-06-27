import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/auth';

import { SignIn } from '../screens/SignIn';
import { AppRouts } from './app.routes';


export function Routes() {
    const { user } = useAuth();

    return (
        <NavigationContainer>

            {user.id ? <AppRouts /> : <SignIn />}

        </NavigationContainer>
    )
}