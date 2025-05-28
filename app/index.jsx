import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import img from "../assets/images/GOLD-6487-CareerGuide-Batch04-Images-GraphCharts-01-Line.png";
import cart from "../assets/images/download.jpeg";

const index = () => {
  return (
    <SafeAreaView style={styles.safeview}>
      <ScrollView>
      <View style={{ padding: 10 }}>
        <View style={styles.hero}>
          <View>
            <Text style={{ fontSize: 12, padding: 2 }}>Account Balance</Text>
            <Text style={{ fontSize: 18, padding: 2, fontWeight: 600 }}>
              13,240.11
            </Text>
            <Text style={{ fontSize: 12, padding: 2 }}>
              3.43% (+4.54%) vs last week
            </Text>
          </View>
          <View>
            <Image source={img} style={styles.img} />
          </View>
        </View>
      </View>

      <View style={styles.main2}>
        <View style={styles.card}>
          <Image source={cart} style={styles.cartimg} />
          <Text style={{ textAlign: "center", marginTop: 10 }}>
            Short-Term-Equity <br /> Baskest
          </Text>
        </View>
        <View style={styles.card}>
          <Image source={cart} style={styles.cartimg} />
          <Text style={{ textAlign: "center", marginTop: 10 }}>
            Short-Term-Equity <br /> Baskest
          </Text>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: 10,
          padding: 15,
        }}
      >
        <Text style={{ fontWeight: 500, fontSize: 17 }}>
          Invest on Trending Stocks
        </Text>
        <Text style={{ fontWeight: 500, fontSize: 15 }}> Edit watchlist</Text>
      </View>
      <Item
        title={"BSE"}
        msg={"adnai ports"}
        ammount={"4000"}
        rating={"2% 2 ,4 jdp"}
      />
      <Item
        title={"BSE"}
        msg={"adnai ports"}
        ammount={"4000"}
        rating={"2% 2 ,4 jdp"}
      />
      <Item
        title={"BSE"}
        msg={"adnai ports"}
        ammount={"4000"}
        rating={"2% 2 ,4 jdp"}
      /><Item
        title={"BSE"}
        msg={"adnai ports"}
        ammount={"4000"}
        rating={"2% 2 ,4 jdp"}
      />
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

// import cart from "../assets/images/download.jpeg";

let Item = ({ title, msg, ammount, rating }) => {
  return (
    <View style={{ padding: 10 }}>
      <View style={styles.container1}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image source={cart} style={{ width: 50, height: 50 }} />
          <View>
            <Text>{title}</Text>
            <Text>{msg}</Text>
          </View>
        </View>
        <View>
          <Text style={{ padding: 2 }}>{ammount}</Text>
          <Text style={{ color: "green" }}>{rating}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeview: {
    // backgroundColor:"blue",
    flex: 1,
  },
  hero: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 2,
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "gray",
  },
  img: {
    width: 100,
    height: 100,
  },
  main2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    padding: 10,
    alignItems: "center",
  },
  card: {
    height: 200,
    width: 190,
    backgroundColor: "gray",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
  },
  cartimg: {
    width: 100,
    height: 100,
  },
  container1: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "lightblue",
    borderRadius: 10,
  },
});
