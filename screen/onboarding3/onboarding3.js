import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Onboarding3() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://lun-eu.icons8.com/a/-1S3gyb6CEWwqeu2v0DvOA/CSBempQbKkO7JaEacYaPCw/noun_Calendar_2442157.png',
        }}
      />
      <Text style={styles.browseFood}>Make Reservations</Text>
      <Text style={styles.Welcome}>Book a table in advance to avoid
waiting in line</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5EA33A',
    justifyContent:'center',
    alignItems:'center',
    
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginBottom:70
  },
  browseFood:{
    color:'white',
    fontSize:17,
    marginBottom:20
  },
  Welcome:{
      color:'white',
      fontSize:17,
      textAlign:'center',
      marginHorizontal:20
  },
});
