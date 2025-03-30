import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { Redirect, router } from 'expo-router';
import { useGlobalContext } from '~/lib/global-provider';
import { login } from '~/lib/appwrite';
import icons from '~/constants/icons';

const SignIn = () => {
  const { refetch, loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/" />;

  const handleLogin = async () => {
    const result = await login();
    if (result) {
      refetch();
    } else {
      Alert.alert("Error", "Failed to login");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="mb-5 h-full flex-1">
        <Image
          source={require('../assets/images/onboarding.png')}
          className="absolute left-0 top-0 h-full w-full"
          resizeMode="stretch"
        />
      </View>

      <ScrollView className="flex-1">
        <View className="px-10">
          <Text className="mb-3 text-center font-rubik text-base uppercase text-black-200">
            Bienvenido a CaliFind
          </Text>
          <Text className="mt-2 text-center font-rubik-bold text-3xl text-black-300">
            Un Gimnasio 💪 {'\n'}
            <Text className="text-primary-300">donde y cuando quieras</Text>
          </Text>

          <Text className="mt-20 text-center font-rubik text-lg text-black-200">
            Ingresa a Califind con Google
          </Text>

          <View className="flex flex-row items-center justify-center">
            <TouchableOpacity
              onPress={handleLogin}
              className="mt-5 w-[80%] rounded-full bg-white py-4 shadow-md shadow-zinc-900">
              <View className="flex flex-row items-center justify-center">
                <Image source={icons.google} className="h-5 w-5" resizeMode="contain" />
                <Text className="ml-2 font-rubik-medium text-lg text-black-300">
                  Continuar con Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
