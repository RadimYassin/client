import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Tabs, useRouter } from "expo-router";
import Colors from "@/constants/Colors";
import { FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
const DisgnIconRobot=()=>{


  return   (   


    <View
    style={{
      backgroundColor: '#4dc7d9',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 25,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 5,
      marginBottom: 20,
      width:70,
    }}>
    <View
      style={{
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      
    </View>
  </View>
  )
}
const layout = () => {

  const router = useRouter()

  
  return (
    <Tabs
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: Colors.primary,
      tabBarLabelStyle: {
        fontFamily: "mon-b",
        marginBottom: 5,
      },
      tabBarStyle: {
        backgroundColor: "white",
        borderTopColor: "transparent",
        elevation: 0,
        display:
          route.name === "profile" || route.name === "chatbot"
            ? "none"
            : "flex", // Hide tab bar for "profile" and "chatbot" screens
      },
      tabBarVisible:
        route.name !== "profile" && route.name !== "chatbot", // Hide tab bar for "profile" and "chatbot" screens
    })}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calander"
        options={{
          tabBarLabel: "Calander",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-clear-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chatbot"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <DisgnIconRobot />
          ),
          
        }}
      />

      <Tabs.Screen
        name="inbox"
        options={{
          tabBarLabel: "inbox",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="inbox" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="circle-user" size={size} color={color} />
          ),
          headerLeft: () => (
            <TouchableOpacity style={{paddingHorizontal:10}} onPress={() =>router.back()}>
  <Feather name="arrow-left" size={25}  color="black" />
            </TouchableOpacity>
          )
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({});

export default layout;
