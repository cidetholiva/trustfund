import { SafeAreaView, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function IndexScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/Trustlogo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.loginText}>LOGIN</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/parent' as any)}
      >
        <Text style={styles.buttonText}>Parent</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/dependent' as any)}
      >
        <Text style={styles.buttonText}>Dependent</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003314',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 300,
    height: 300,
    marginTop: 40,
    marginBottom: 20,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  loginText: {
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
  },
});
