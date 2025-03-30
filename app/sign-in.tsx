import { View, Text, ScrollView, Image, TouchableOpacity, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input } from '@rneui/themed';
import React, { useState } from 'react';
import { router } from 'expo-router';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
  }


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

          <View className="mx-10 mt-10">
            <Input
              className="mx-2"
              label="Email"
              leftIcon={{ type: 'font-awesome', name: 'envelope' }}
              value={email}
              placeholder="email@dominio.com"
              autoCapitalize={'none'}
            />
          </View>
          <View className="mx-10">
            <Input
              className="mx-2"
              label="Contraseña"
              leftIcon={{ type: 'font-awesome', name: 'lock' }}              
              value={password}
              secureTextEntry={true}
              placeholder="Contraseña"
              autoCapitalize={'none'}
            />
          </View>
          <TouchableOpacity
            onPress={() => signInWithEmail()}
            disabled={loading}
            className="mt-5 w-full rounded-full border bg-white py-4 shadow-md shadow-zinc-300">
            <View className="flex flex-row items-center justify-center">
              <Image
                source={require('../assets/icons/register.png')}
                className="h-6 w-6"
                resizeMode="contain"
              />
              <Text className="ml-2 font-rubik-medium text-lg text-black-300">Ingresar</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            
            disabled={loading}
            className="mb-9 mt-5 w-full rounded-full border bg-gray-300 py-4 shadow-md shadow-zinc-300">
            <View className="flex flex-row items-center justify-center">
              <Image
                source={require('../assets/icons/person.png')}
                className="h-6 w-6"
                resizeMode="contain"
              />
              <Text className="ml-2 font-rubik-medium text-lg text-black-300">Crea cuenta</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
