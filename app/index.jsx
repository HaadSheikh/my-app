import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import img from "../assets/images/GOLD-6487-CareerGuide-Batch04-Images-GraphCharts-01-Line.png";
import cart from "../assets/images/download.jpeg";
import { Stack } from "expo-router";

export default function index() {
  return (
    <SafeAreaView style={styles.safeview}>
      <ScrollView>
        {/* Account Balance Section */}
        <View style={styles.balanceCard}>
          <View>
            <Text style={styles.balanceLabel}>Account Balance</Text>
            <Text style={styles.balanceAmount}>₹13,240.11</Text>
            <Text style={styles.balanceSubText}>3.43% (+4.54%) vs last week</Text>
          </View>
          <View style={styles.chartSection}>
            <Text style={styles.changeBox}>₹2,450.00</Text>
            <Image source={img} style={styles.img} />
          </View>
        </View>

        {/* Basket Cards */}
        <View style={styles.main2}>
          <View style={styles.card}>
            <Image source={cart} style={styles.cartimg} />
            <Text style={styles.cardText}>Short-Term Equity{'\n'}Baskets</Text>
          </View>
          <View style={styles.card}>
            <Image source={cart} style={styles.cartimg} />
            <Text style={styles.cardText}>Long-Term Equity{'\n'}Baskets</Text>
          </View>
        </View>

        {/* Trending Stocks Header */}
        <View style={styles.trendingHeader}>
          <Text style={styles.trendingTitle}>Invest on Trending Stocks</Text>
          <Text style={styles.editWatchlist}>Edit Watchlist</Text>
        </View>

        {/* Trending Stock Items */}
        <Item title="BSE" msg="Adani Ports PVT LTD" amount="₹49.00" rating="+1.15%" />
        <Item title="NSE" msg="Reliance Industries LTD" amount="₹2,762.30" rating="+0.30%" />
        <Item title="BSE" msg="Tata Power LTD" amount="₹62.30" rating="+1.85%" />

        {/* Buttons */}
        <TouchableOpacity style={styles.linkBroker}>
          <Text style={styles.btnText}>Link with broker</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.premiumBtn}>
          <Text style={styles.btnText}>View Premium Subscription</Text>
        </TouchableOpacity>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const Item = ({ title, msg, amount, rating }) => {
  return (
    <View style={styles.itemWrapper}>
      <View style={styles.container1}>
        <View style={styles.leftItem}>
          <Image source={cart} style={{ width: 50, height: 50 }} />
          <View>
            <Text style={styles.stockTitle}>{title}</Text>
            <Text style={styles.stockMsg}>{msg}</Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.amount}>{amount}</Text>
          <Text style={styles.rating}>{rating}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeview: {
    flex: 1,
    backgroundColor: "#0A1F44",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
  },
  logo: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  headerTitle: {
    color: "white",
    fontSize: 16,
  },
  balanceCard: {
    backgroundColor: "#1F2E55",
    borderRadius: 15,
    padding: 20,
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  balanceLabel: {
    color: "white",
    fontSize: 13,
  },
  balanceAmount: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 4,
  },
  balanceSubText: {
    color: "#B0B0B0",
    fontSize: 12,
  },
  chartSection: {
    alignItems: "center",
  },
  changeBox: {
    backgroundColor: "#C1FFDA",
    color: "green",
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    fontSize: 12,
    marginBottom: 8,
  },
  img: {
    width: 100,
    height: 60,
  },
  main2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  card: {
    height: 180,
    width: 150,
    backgroundColor: "#1F2E55",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  cartimg: {
    width: 80,
    height: 80,
  },
  cardText: {
    color: "white",
    textAlign: "center",
    marginTop: 10,
    fontSize: 14,
  },
  trendingHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 20,
  },
  trendingTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  editWatchlist: {
    color: "#50C4ED",
    fontSize: 14,
  },
  itemWrapper: {
    paddingHorizontal: 15,
    marginTop: 10,
  },
  container1: {
    backgroundColor: "#23325D",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  stockTitle: {
    color: "white",
    fontWeight: "bold",
  },
  stockMsg: {
    color: "#B0B0B0",
    fontSize: 12,
  },
  amount: {
    color: "white",
    fontWeight: "600",
  },
  rating: {
    color: "lightgreen",
    fontWeight: "500",
  },
  linkBroker: {
    backgroundColor: "#00D26A",
    padding: 15,
    margin: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  premiumBtn: {
    backgroundColor: "#1F2E55",
    padding: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
  },
  btnText: {
    color: "white",
    fontWeight: "600",
  },
});
