
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  
  export default function MoneyTransfer() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Hello, Username!</Text> 
        <Text style={styles.subtext}>Welcome to TrustFund</Text>
  
        <Text style={styles.section}>Review and Send</Text>
        <Text style={styles.sendLabel}>Transfer Money to Dependent Name</Text>
  
        <View style={styles.amountBox}>
          <Text style={styles.amountText}>$20</Text>
        </View>
  
        <Text style={styles.commentLabel}>Comment</Text>
        <TextInput style={styles.commentInput} placeholder="Type Here" placeholderTextColor="#ccc" />
  
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#002f1f',
      padding: 20,
    },
    header: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    subtext: {
      color: 'white',
      fontSize: 14,
      marginBottom: 20,
    },
    section: {
      color: 'white',
      fontSize: 14,
      marginBottom: 10,
    },
    sendLabel: {
      color: 'white',
      fontSize: 16,
      marginBottom: 20,
      fontWeight: 'bold',
    },
    amountBox: {
      backgroundColor: '#1a6b2d',
      paddingVertical: 30,
      borderRadius: 12,
      alignItems: 'center',
      marginBottom: 30,
    },
    amountText: {
      color: 'white',
      fontSize: 36,
      fontWeight: 'bold',
    },
    commentLabel: {
      color: 'white',
      marginBottom: 6,
    },
    commentInput: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 12,
      marginBottom: 30,
    },
    sendButton: {
      backgroundColor: '#e3aa29',
      padding: 15,
      borderRadius: 12,
      alignItems: 'center',
    },
    sendText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
  