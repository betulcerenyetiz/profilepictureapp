import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ActionScreen from '../screens/ActionScreen';

const Stack = createNativeStackNavigator();

const ActionStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Action" component={ActionScreen} />
    </Stack.Navigator>
  );
};

export default ActionStack;
