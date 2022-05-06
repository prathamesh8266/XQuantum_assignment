import { StyleSheet, Image, Text, View, Dimensions } from "react-native";

var width = Dimensions.get("window").width;

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <View style={styles.userInfo}>
        <Image source={require("../assets/User.png")} style={styles.user} />
        <View style={styles.userName}>
          <Text style={styles.whiteText}>Welcome back</Text>
          <Text style={styles.whiteText}>Jeanne</Text>
        </View>
      </View>
      <Image source={require("../assets/Bell.png")} style={styles.bell} />
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    height: 45,
    width: 40,
  },
  bell: {
    height: 80,
    width: 90,
  },
  navbar: {
    width: width * 0.94,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 15,
  },
  userInfo: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
  },
  userName: {
    marginLeft: 10,
  },
  whiteText: {
    color: "white",
    fontFamily: "Montserrat",
  },
});

export default Navbar;
