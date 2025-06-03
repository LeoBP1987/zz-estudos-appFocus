import { Children } from "react";
import { StyleSheet, View } from "react-native"

interface ContainerPrincipalProps {
    children?: React.ReactNode;
}

const ContainerPrincipal = ({children}: ContainerPrincipalProps) => {
    return (
        <View style={styles.container}>
            {children}
        </View>

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  }
})

export default ContainerPrincipal;