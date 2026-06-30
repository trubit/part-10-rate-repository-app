import { StyleSheet, Text } from "react-native";
import { Link } from "react-router-native";
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
  to: string;
}

const AppBarTab = ({ label, to }: AppBarTabProps) => {
  return (
    <Link to={to} style={styles.tab}>
      <Text style={styles.tabText}>{label}</Text>
    </Link>
  );
};

export default AppBarTab;
