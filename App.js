import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import PageHome from './src/pages/PageHome';
import TabsNavigator from './src/components/TabsNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <TabsNavigator />
      </NavigationContainer>

    </PaperProvider>

  )
}