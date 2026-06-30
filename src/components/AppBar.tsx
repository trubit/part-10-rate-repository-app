import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: "row",
  },
  scrollContainer: {
    flexDirection: "row",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.scrollContainer}>
          <AppBarTab label="Repositories" to="/" />
          <AppBarTab label="Sign in" to="/signin" />
          {/* Add more tabs here in the future */}
        </View>
      </ScrollView>
    </View>
  );
};

export default AppBar;
