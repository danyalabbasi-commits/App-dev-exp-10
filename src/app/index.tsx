import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { app } from "./firebaseConfig";

export default function AuthScreen() {
  const auth = getAuth(app); // Moved inside the component!
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [output, setOutput] = useState('');

  // Sign Up function matching lab procedure
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setOutput('User account created & signed in!');
      })
      .catch((error: any) => {
        if (error.code === 'auth/email-already-in-use') {
          setOutput('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          setOutput('That email address is invalid!');
        } else {
          setOutput(error.message);
        }
      });
  };

  // Sign In function
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setOutput('Signed in successfully!');
      })
      .catch((error: any) => {
        setOutput(error.message);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Firebase Auth Lab</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Enter email" 
        value={email} 
        onChangeText={setEmail} 
        autoCapitalize="none"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Enter password" 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
      />

      <View style={styles.btnContainer}>
        <Button title="Register (Sign Up)" onPress={handleSignUp} />
        <Button title="Sign In" onPress={handleSignIn} />
      </View>

      <Text style={styles.outputTitle}>Output / Console:</Text>
      <Text style={styles.output}>{output}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 40, backgroundColor: '#fff', alignItems: 'center', flexGrow: 1, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5, width: 260 },
  btnContainer: { width: 260, gap: 10, marginVertical: 10 },
  outputTitle: { fontWeight: 'bold', marginTop: 20 },
  output: { marginTop: 10, color: 'blue', textAlign: 'center' }
});