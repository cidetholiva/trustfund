import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function Login() {
  const handleLogin = (type) => {
    alert(`Logged in as ${type}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TRUSTFUND</Text>
      <Text style={styles.loginText}>LOGIN</Text>

      <TouchableOpacity style={styles.button} onPress={() => handleLogin('Parent')}>
        <Text style={styles.buttonText}>Parent</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleLogin('Dependent')}>
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
  title: {
    fontSize: 28,
    color: '#D4AF37',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loginText: {
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 30,
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
  },
});
