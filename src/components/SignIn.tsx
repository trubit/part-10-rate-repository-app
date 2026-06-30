import { View, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text fontSize="subheading" fontWeight="bold">
        The sign-in view
      </Text>
    </View>
  );
};

export default SignIn;
