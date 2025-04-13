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
import { useState } from 'react';
import { addDependent } from '../../service';
import { useLocalSearchParams } from 'expo-router';
  
  export default function AddDependent() {
  const { customer_id } = useLocalSearchParams();
  const router = useRouter();
  const [formData, setFormData] = useState({
    'first_name': '',
    'last_name': '',
    'state': '',
    'zip_code': '',
    'account_number': '',
    'parent_id': customer_id,
    'type:': 'Dependent'
  });
  
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={require('../assets/images/Trustlogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
  
        <Text style={styles.header}>Add Dependent</Text>
  
        {['First Name', 'Last Name', 'State', 'Zip Code', 'Account Number'].map((label) => (
        <View key={label}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            style={styles.input}
            placeholder={label}
            placeholderTextColor="#ccc"
            value={formData[label]}
            onChangeText={(text) => setFormData((prev) => ({ ...prev, [label]: text }))}
          />
        </View>
      ))}
  
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            addDependent(formData)
            console.log("Navigating to home...");
            router.push('/home');
          }}
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
      height: 200,
      marginTop: 20,
      marginBottom: 10,
    },
    header: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    label: {
      alignSelf: 'flex-start',
      color: '#fff',
      marginBottom: 5,
      marginTop: 15,
      fontSize: 14,
      marginLeft: 10,
    },
    input: {
      backgroundColor: '#fff',
      width: '96%',
      height: 45,
      borderRadius: 10,
      paddingHorizontal: 15,
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#e3aa29',
      width: '90%',
      paddingVertical: 14,
      borderRadius: 20,
      marginTop: 20,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: '600',
      fontSize: 16,
    },
  });
  