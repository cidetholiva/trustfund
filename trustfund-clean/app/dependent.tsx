import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Image,
  } from 'react-native';
  import { useRouter } from 'expo-router';
  
  export default function DependentLogin() {
    const router = useRouter();
  
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={require('../assets/images/Trustlogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
  
        <Text style={styles.header}>Dependent</Text>
  
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#ccc"
        />
  
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#ccc"
        />
  
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/home' as any)}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#002f1f',
      padding: 30,
      alignItems: 'center',
    },
    logo: {
      width: 300,
      height: 300,
      marginTop: 20,
      marginBottom: 20,
      resizeMode: 'contain',
    },
    header: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 30,
    },
    label: {
      alignSelf: 'flex-start',
      color: '#fff',
      marginBottom: 5,
      marginTop: 10,
      fontSize: 14,
      marginLeft: 10,
    },
    input: {
      backgroundColor: '#fff',
      width: '100%',
      height: 45,
      borderRadius: 10,
      paddingHorizontal: 15,
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#e3aa29',
      width: '100%',
      paddingVertical: 14,
      borderRadius: 10,
      marginTop: 20,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: '600',
      fontSize: 16,
    },
  });
  