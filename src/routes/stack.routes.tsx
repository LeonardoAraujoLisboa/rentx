import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import CarDetails from '../screens/CarDetails';
import Schedulling from '../screens/Schedulling';
import SchedulingDetails from '../screens/SchedulingDetails';
import SchedulingComplete from '../screens/SchedulingComplete';
import MyCars from '../screens/MyCars';
import Splash from '../screens/Splash';

const {Navigator, Screen} = createStackNavigator();

const StackRoutes = () => {
    return (
        <Navigator screenOptions={{headerShown: false}} initialRouteName="Splash">
            <Screen name='Splash' component={Splash} />
            <Screen name='Home' component={Home} options={{
                gestureEnabled: false //isso é para inibir com q o usuario nao arraste para voltar a tela dentro da tela de home
            }} />
            <Screen name='CarDetails' component={CarDetails} />
            <Screen name='Scheduling' component={Schedulling} />
            <Screen name='SchedulingDetails' component={SchedulingDetails} />
            <Screen name='SchedulingComplete' component={SchedulingComplete} />
            <Screen name='MyCars' component={MyCars} />
        </Navigator>
    )
}

export default StackRoutes