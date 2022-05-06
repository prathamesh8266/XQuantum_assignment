import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
} from "react-native";
import background from "../assets/Group33519.png";
import {
  useFonts,
  Montserrat_200ExtraLight,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";

var width = Dimensions.get("window").width;

const Card = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_200ExtraLight,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    console.log("nahi hua");
  }

  return (
    <View style={styles.main}>
      <View style={styles.flex}>
        <Text style={[styles.whiteText, styles.myCard]}>My card</Text>
        <View>
          <Text style={[styles.whiteText, styles.flex, styles.manage]}>
            Manage
            <Image
              source={require("../assets/rArrow.png")}
              style={styles.rArrow}
            />
          </Text>
        </View>
      </View>
      <ImageBackground
        source={background}
        // resizeMode="contain"
        style={styles.bacImg}
      >
        <View style={[styles.MainCard]}>
          <View style={[styles.flex, styles.cardTop]}>
            <Image
              source={require("../assets/Vector.png")}
              style={styles.visa}
            />
            <Text style={[styles.whiteText, styles.right]}>01/28</Text>
          </View>
          <Text style={[styles.whiteText, styles.balance]}>Balance</Text>
          <Text style={[styles.whiteText, styles.amount1]}>₹ 1,432.00</Text>
          <Text style={[styles.whiteText, styles.cardNumber]}>
            **** **** **** 5432
          </Text>
          <View style={styles.blurContainer}>
            {/* <BlurView intensity={80} tint="dark" style={styles.blur}> */}
            <View style={[styles.amount]}>
              <Text style={[styles.whiteText, styles.amount2]}>
                Elegible amount: ₹ 2,800.72
              </Text>
              <Image
                source={require("../assets/rArrow.png")}
                style={styles.rArrow}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  amount2: {
    fontFamily: "Montserrat_200ExtraLight",
    background: "rgba(196, 196, 196, 0.3)",
  },
  blurContainer: {
    width: "100%",
    height: 200,
    flex: 1,
    textAlign: "center",
    margin: "auto",
  },
  manage: {
    fontFamily: "Montserrat_400Regular",
  },
  myCard: {
    fontFamily: "Montserrat_200ExtraLight",
    fontSize: 20,
  },
  rArrow: {
    width: 20,
    height: 20,
  },
  main: {
    marginLeft: -5,
    // marginTop: 10,
  },
  right: {
    marginRight: 10,
    fontFamily: "Montserrat_200ExtraLight",
  },
  bacImg: {
    marginLeft: -5,
    height: 250,
    width: width * 0.95,
    height: 225,
    marginTop: 20,
    justifyContent: "center",
  },
  visa: {
    marginLeft: 10,
    height: 13,
    width: 40,
  },
  balance: {
    marginLeft: 10,
    marginTop: 25,
    fontSize: 20,
  },
  amount1: {
    fontFamily: "Montserrat_400Regular",
    marginLeft: 10,
    // marginBottom: 7,
    fontSize: 40,
  },
  cardNumber: {
    fontFamily: "Montserrat_200ExtraLight",
    marginLeft: 10,
    marginTop: 7,
    marginBottom: 10,
    fontWeight: "300",
    fontSize: 20,
  },
  whiteText: {
    color: "white",
    // fontFamily: "Montserrat",
  },
  cardTop: {
    paddingBottoms: 10,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  border: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: "white",
  },
  MainCard: {
    padding: 15,
    height: 200,
    borderRadius: 10,
    zIndex: 1,
    position: "relative",
  },
  amount: {
    marginRight: "auto",
    height: 50,
    marginLeft: "auto",
    marginTop: 18,
    textAlign: "center",
    // background:
    //   "linear-gradient(169.23deg, rgba(255, 255, 255, 0.25) -0.52%, rgba(255, 255, 255, 0) 104.4%)",
    // filter: "drop-shadow(0px -4px 20px rgba(255, 255, 255, 0.15))",
    // backdropFilter: "blur(8px)",
    // background: "rgba(196, 196, 196, 0.3)",
    borderColor: "#7426A5",
    borderWidth: 1,
    borderRadius: 15,
    width: "80%",
    padding: 15,
    borderRadius: 10,
    zIndex: 100,
    top: -25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "white",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default Card;
