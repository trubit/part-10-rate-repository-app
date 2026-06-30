import { Pressable, StyleSheet, Text } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  tabText: {
    color: theme.colors.background,
    fontSize: theme.fontSizes.subheading,
    fontWeight: "bold",
  },
});

interface AppBarTabProps {
  label: string;
}

const AppBarTab = ({ label }: AppBarTabProps) => {
  return (
    <Pressable style={styles.tab}>
      <Text style={styles.tabText}>{label}</Text>
    </Pressable>
  );
};

export default AppBarTab;
