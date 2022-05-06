import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import ButtonComp from "./components/ButtonComp";
import MainCards from "./components/MainCards";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Navbar />
          <Card />
          <ButtonComp />
          <MainCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRightColor: "#207faf",
    borderRightWidth: 3,
    borderLeftColor: "#7426A5",
    borderLeftWidth: 3,
    flex: 1,
    backgroundColor: "#fff",
    backgroundColor: "black",
    paddingLeft: 20,
    paddingRight: 20,
  },
});
