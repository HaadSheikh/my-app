import { View, Text, StyleSheet } from "react-native";
import React from "react";

const CustomHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>📈 F-QUITY</Text>
      <Text style={styles.headerTitle}>Overview</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0A1F44",
    padding: 15,
    paddingTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
