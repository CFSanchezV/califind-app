import { Image, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '../../../constants/icons';
import images from '../../../constants/images';
import Search from '~/components/search';
import { Link } from 'expo-router';


export default function Home() {

  return (
  <SafeAreaView className="h-full bg-white">
    <Search />
    <Link href="/sign-in"></Link>
    <Link href="/explore"></Link>
    <Link href="/profile"></Link>
    <Link href="../locations/1"></Link>
  </SafeAreaView>)
}
