import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import ButtonComponents from "./ButtonComponents";
import {
  useFonts,
  Montserrat_200ExtraLight,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";

var width = Dimensions.get("window").width;

const ButtonComp = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_200ExtraLight,
  });
  return (
    <View style={styles.main}>
      {/* <SafeAreaView> */}
      <ScrollView horizontal={true}>
        <View style={styles.main1}>
          <ButtonComponents
            img={require("../assets/bag.png")}
            title={"Deposite crypto"}
            disc={"To add money"}
            active
          />
          <ButtonComponents
            img={require("../assets/g2.png")}
            title={"Use Xcoins"}
            disc={"For cashback of Rs. 1000"}
          />
          <ButtonComponents
            img={require("../assets/g2.png")}
            title={"Pay your due"}
            disc={"To release locked crypto"}
          />
          <ButtonComponents
            img={require("../assets/bag.png")}
            title={"Withdraw crypto"}
            disc={"To remove limit"}
          />
        </View>
      </ScrollView>
      {/* </SafeAreaView> */}
      <View style={styles.textHolder}>
        <Text style={styles.text}>
          Deposit your cryptos to get instant credit limit on the card. Start
          using your card to earn XCoins @ 5% cashback rate (offer could change
          in the future)
        </Text>
        <Image source={require("../assets/bag.png")} style={styles.img} />
        <Text
          style={
            (styles.text,
            {
              textAlign: "center",
              color: "white",
              marginTop: -10,
              fontFamily: "Montserrat_400Regular",
            })
          }
        >
          Deposit now
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    margin: "auto",
    marginBottom: 10,
    height: 70,
    width: 85,
  },
  textHolder: {
    width: width * 0.924,
    marginTop: 4,
    padding: 20,
    borderColor: "#7426A5",
    borderWidth: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontFamily: "Montserrat_200ExtraLight",
  },
  main1: {
    width: width * 0.95,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  main: {
    marginTop: 20,
    width: width * 0.924,
    marginLeft: -10,
  },
});

export default ButtonComp;
