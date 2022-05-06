import { View, Text, Image, StyleSheet } from "react-native";
import {
  useFonts,
  Montserrat_200ExtraLight,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";

const col = "#7426A5";
const ButtonComponents = ({ img, title, disc, active }) => {
  let [fontsLoaded] = useFonts({
    Montserrat_200ExtraLight,
    Montserrat_400Regular,
  });
  return (
    <View style={[styles.main, { borderColor: active === true ? col : null }]}>
      <Image source={img} style={[styles.img]}></Image>
      <Text style={[styles.whiteCol, styles.bold]}>{title}</Text>
      <Text style={[styles.whiteCol, styles.light]}>{disc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  whiteCol: {
    color: "white",
    fontSize: 11,
    textAlign: "center",
  },
  bold: {
    fontFamily: "Montserrat_400Regular",
  },
  light: {
    fontFamily: "Montserrat_200ExtraLight",
    marginBottom: 10,
  },
  main: {
    paddingLeft: 5,
    paddingRight: 5,
    width: 80,
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
  },
  img: {
    height: 70,
    width: 85,
  },
});

export default ButtonComponents;
