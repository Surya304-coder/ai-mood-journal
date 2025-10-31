import React, { useState } from "react";
import { Button, TextInput, View, Text, StyleSheet } from "react-native";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Import auth from firebaseConfig
import { useNavigation } from "@react-navigation/native"; // Import navigation

export default function AuthScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");  // For error messages
  const navigation = useNavigation();  // Hook to navigate after login/signup

  // Handle sign-up
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Sign-up successful!");
      })
      .catch((error) => {
        setErrorMessage(error.message);  // Show error if sign-up fails
      });
  };

  // Handle sign-in
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Logged in successfully!");
        navigation.navigate("HomeScreen");  // Navigate to HomeScreen after login
      })
      .catch((error) => {
        setErrorMessage(error.message);  // Show error if login fails
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login / Sign Up</Text>

      {/* Email Input */}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      {/* Error Message */}
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      {/* Sign-Up Button */}
      <Button title="Sign Up" onPress={handleSignUp} />

      {/* Sign-In Button */}
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});