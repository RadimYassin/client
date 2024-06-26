import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import {  TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { Feather } from '@expo/vector-icons';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    mon: require('../assets/fonts/Montserrat-Regular.ttf'),
    'mon-sb': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    'mon-b': require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const router = useRouter()

  return (
    <Stack>
    
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="listing/[id]" options={{ headerTitle: '' }} />
    <Stack.Screen
      name="(modals)/booking"
      options={{
        presentation: 'modal',
        title: '',

        animation: 'fade',
        headerTransparent: true,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              backgroundColor: '#fff',
              borderColor: Colors.grey,
              borderRadius: 20,
              borderWidth: 1,
              padding: 4,
            }}>
            <Ionicons name="close-outline" size={22} />
          </TouchableOpacity>
        ),
      }}
    />

<Stack.Screen
      name="(modals)/EditeProfile"
      options={{
        presentation: 'modal',
        title: 'info for user',
        headerTitleStyle: {
          fontFamily: 'mon-sb',
        },
        headerLeft: () => (
          <TouchableOpacity style={{paddingHorizontal:10}} onPress={() =>router.back()}>
<Feather name="arrow-left" size={25}  color="black" />
          </TouchableOpacity>
        ),
      }}
    />

<Stack.Screen
      name="(modals)/login"
      options={{
        presentation: 'modal',
        title: 'Log in or sign up',
        headerTitleStyle: {
          fontFamily: 'mon-sb',
        },
        headerLeft: () => (
          <TouchableOpacity style={{paddingHorizontal:4}} onPress={() =>router.back()}>
          <Feather name="arrow-left" size={25}  color="black" />
                    </TouchableOpacity>
        ),
      }}
    />
    <Stack.Screen
      name="(modals)/Register"
      options={{
        presentation: 'fullScreenModal',
        title: 'Register',
        headerTitleStyle: {
          fontFamily: 'mon-sb',
        },
        headerLeft: () => (
          <TouchableOpacity style={{paddingHorizontal:4}} onPress={() =>router.back()}>
<Feather name="arrow-left" size={25}  color="black" />
          </TouchableOpacity>
        ),
      }}
    />
  </Stack>
  );
}
