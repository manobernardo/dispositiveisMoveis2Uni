import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CartScreen from './CartScreen';
import HomeScreen from './HomeScreen';
import { MyProvider } from './MyContext';

const Stack = createStackNavigator();

const App = () => {
return (
<MyProvider>
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Cart" component={CartScreen} />
</Stack.Navigator>
</NavigationContainer>
</MyProvider>
);
};

export default App;