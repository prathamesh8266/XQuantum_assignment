import { View, Text, StyleSheet } from "react-native";
import {
  useFonts,
  Montserrat_200ExtraLight,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

const MainCard = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_200ExtraLight,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
  });
  return (
    <View>
      <View style={styles.main}>
        <View style={styles.flex}>
          <Text style={[styles.whiteText, styles.portfolio]}>My portfolio</Text>
          <Text style={[styles.whiteText, styles.portfolio]}>Manage </Text>
        </View>
        <View style={styles.flex}>
          <Text style={[styles.whiteText, styles.price]}>₹ 4,001.46</Text>
        </View>
        <View>
          <Text style={[styles.whiteText, styles.portfolio]}>4.32%</Text>
        </View>
      </View>
      {/* ////////////////// */}
      <View style={styles.main}>
        <View style={styles.flex}>
          <Text style={[styles.whiteText, styles.portfolio]}>My Rewards</Text>
          <Text style={[styles.whiteText, styles.portfolio]}>All &gt; </Text>
        </View>
        <View style={styles.flex}>
          <View>
            <Text style={[styles.whiteText, styles.price]}>0,016xCoin</Text>
            <Text style={[styles.whiteText, styles.portfolio]}>₹ 210.06</Text>
          </View>
          <View style={styles.right}>
            <Text style={[styles.whiteText, styles.bold]}>5% cashback</Text>
            <Text style={[styles.whiteText, styles.portfolio]}>
              Transaction Cashback
            </Text>
          </View>
        </View>
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  right: {
    borderColor: "#7426A5",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    width: "40%",
    alignItems: "center",
    textAlign: "center",
  },
  bold: {
    fontFamily: "Montserrat_600SemiBold",
  },
  portfolio: {
    fontFamily: "Montserrat_200ExtraLight",
    fontSize: 15,
  },
  price: {
    fontFamily: " Montserrat_400Regular",
    fontSize: 30,
    fontWeight: "200",
  },
  main: {
    // background:
    //   "linear-gradient(169.23deg, rgba(255, 255, 255, 0.25) -0.52%, rgba(255, 255, 255, 0) 104.4%)",
    // filter: "drop-shadow(0px -4px 20px rgba(255, 255, 255, 0.15))",
    // backdropFilter: "blur(8px)",
    shadowColor: "#171717",
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowColor: "white",
    marginTop: 35,
    borderRadius: 10,
    padding: 10,
    borderColor: "#7426A5",
    borderWidth: 1,
    borderRadius: 20,
  },
  flex: {
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  whiteText: {
    color: "white",
  },
});

export default MainCard;
