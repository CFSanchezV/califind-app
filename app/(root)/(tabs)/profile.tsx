import { View, Text, ScrollView, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { settings } from 'constants/data';
import icons from '~/constants/icons';

interface SettingsItemProp {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const SettingsItem = ({ icon, title, onPress, textStyle, showArrow = true }: SettingsItemProp) => (
  <TouchableOpacity onPress={onPress} className="flex flex-row items-center justify-between py-3">
    <View className="flex flex-row items-center gap-3">
      <Image source={icon} className="size-6" />
      <Text className={`font-rubik-medium text-lg text-black-300 ${textStyle}`}>{title}</Text>
    </View>

    {showArrow && <Image source={require('assets/icons/right-arrow.png')} className="size-5" />}
  </TouchableOpacity>
);

const Profile = () => {
  //const sessionData = useAuth(); // Call useAuth at the top level
  let userProfileData;

  const handleLogout = async () => {
    //handle logout
  };

  

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32, paddingHorizontal: 7 }} // Updated from contentContainerClassName
      >
        <View className="mt-5 flex flex-row items-center justify-between">
          <Text className="font-rubik-bold text-xl">Profile</Text>
          <Image source={icons.bell} className="size-8" />
        </View>

        <View className="mt-5 flex flex-row justify-center">
          <View className="relative mt-5 flex flex-col items-center">
            <Image
              source={require('assets/images/avatar.png')}
              className="relative size-44 rounded-full"
            />
            <TouchableOpacity className="absolute bottom-11 right-2">
              <Image source={icons.edit} className="size-9" />
            </TouchableOpacity>

            <Text className="mt-2 font-rubik-bold text-2xl">christian sanchez</Text>
          </View>
        </View>

        <View className="mt-10 flex flex-col">
          <SettingsItem icon={icons.calendar} title="My Bookings" />
          <SettingsItem icon={icons.wallet} title="Payments" />
        </View>

        <View className="mt-5 flex flex-col border-t border-primary-200 pt-5">
          {settings.slice(2).map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}
        </View>

        <View className="mt-5 flex flex-col border-t border-primary-200 pt-5">
          <SettingsItem
            icon={icons.logout}
            title="Logout"
            textStyle="text-danger"
            showArrow={false}
            onPress={handleLogout} // Fixed the onPress handler
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
