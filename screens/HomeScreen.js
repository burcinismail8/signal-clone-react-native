import { View, Text } from "react-native";
import React from "react";
import { Button } from "@rneui/base";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="logout"
        onPress={() => {
          signOut(auth);
          navigation.replace("Login");
        }}
      />
    </View>
  );
};

export default HomeScreen;
