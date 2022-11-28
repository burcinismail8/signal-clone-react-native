import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Avatar, Button } from "@rneui/base";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import CustomListItem from "../components/CustomListItem";
import { StatusBar } from "expo-status-bar";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { getDocs, collection } from "firebase/firestore";

const HomeScreen = ({ navigation }) => {
  const [chats, setChats] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 10 }}>
          <TouchableOpacity>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 10,
          }}
        >
          <TouchableOpacity>
            <AntDesign name="camerao" size={26} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <SimpleLineIcons
              name="pencil"
              size={24}
              onPress={() => navigation.navigate("AddChat")}
              color="black"
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  useEffect(() => {
    const getDocuments = async () => {
      const querySnapshot = await getDocs(collection(db, "chats"));
      let docs = [];

      querySnapshot.forEach((doc) => {
        docs.push({ id: doc.id, data: doc.data() });
      });

      setChats(docs);
    };
    getDocuments();
  }, []);

  return (
    <View>
      <StatusBar />
      <ScrollView>
        {chats.map((chat, index) => (
          <CustomListItem key={index} id={chat.id} data={chat.data} />
        ))}
        <Button
          title="logout"
          onPress={() => {
            signOut(auth);
            navigation.replace("Login");
          }}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
