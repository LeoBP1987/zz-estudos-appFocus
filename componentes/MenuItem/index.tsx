import { Pressable, StyleSheet, Text } from "react-native";

interface MenuItemProps {
    ativo: boolean;
    onPress: () => void;
    display: string;
}

const MenuItem = ({ ativo, onPress, display}: MenuItemProps) => {
  return (
    <Pressable
        style={ativo ? styles.contextButtonAtivo : styles.contextButtonInativo}
        onPress={onPress}
    >
        <Text style={styles.contextButtonText}>
            {display}
        </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contextButtonAtivo: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },
  contextButtonInativo: {
  },
  contextButtonText: {
    color: "#FFF",
    fontSize: 12.5,
    padding: 8,
  }
})

export default MenuItem;