import { View, Text } from "react-native";
import React from "react";
import { Avatar, ListItem } from "@rneui/base";

const CustomListItem = ({ id, data, enterChat }) => {
  return (
    <ListItem onPress={() => enterChat(id, data.chatName)} bottomDivider>
      <Avatar
        rounded
        source={{
          uri: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {data.chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tall">
          This is a test subtitle This is a test subtitle This is a test
          subtitle This is a test subtitle This is a test subtitle
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;
