import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/locales/i18n';
import { LanguageProvider } from './src/context/LanguageContext';
import { RootStackParamList } from './src/navigation/types';
import HomeScreen from './src/screens/HomeScreen';
import SongDetailScreen from './src/screens/SongDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="SongDetail" component={SongDetailScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </LanguageProvider>
    </I18nextProvider>
  );
}
