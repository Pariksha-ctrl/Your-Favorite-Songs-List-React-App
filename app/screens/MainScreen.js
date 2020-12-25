import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {} from "react-navigation";

const listTab = [
  {
    status: "All",
  },
  {
    status: "Favorite Songs",
  },
  {
    status: "Unliked Songs",
  },
];

// Main Screen
export default class MainScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("name"),
    };
  };

  render() {
    const { navigate, state } = this.props.navigation;

    const [status, setStatus] = useState("All");
    const setStausFilter = (status) => {
      setStatus(status);
    };

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.listTab}>
          {listTab.map((e) => (
            <TouchableOpacity
              style={[
                styles.buttonTab,
                status === e.status && styles.buttonTabActive,
              ]}
              onPress={() => setStausFilter(e.status)}
            >
              <Text style={styles.textTab}>{e.status}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text>Hello {state.params.name}</Text>

        <Button title="Set Selected Categories" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  listTab: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 20,
  },
  buttonTab: {
    width: Dimensions.get("window").width / 3.5,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#EBEBEB",
    padding: 10,
    justifyContent: "center",
  },
  textTab: {
    fontSize: 15,
  },
  buttonTabActive: {
    backgroundColor: "#E683BD",
  },
});

// // Register Screen
// export class RegisterScreen extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.textfields}>
//           <TextInput style={styles.input}>
//             placeholder = "username" returnKeyType = "next" onSubmiteEditing ={" "}
//             {() => this.passwordInput.focus()}
//             keyboardType = "email-address" autoCapitalize = "none" autoCorrect ={" "}
//             {false}
//           </TextInput>
//           <TextInput style={styles.input}>
//             placeholder = "password" returnKeyType = "next" onSubmiteEditing ={" "}
//             {() => this.passwordInput.focus()}
//             keyboardType = "email-address" autoCapitalize = "none" autoCorrect ={" "}
//             {false}
//           </TextInput>
//         </View>
//       </View>
//     );
//   }
// }

// import React from "react";
// import { StyleSheet, View, Text, Button } from "react-native";

// // Register Screen
// export default class MainScreen extends React.Component {
//   //   static navigationOptions = ({ navigation }) => {
//   //     return {
//   //       title: navigation.getParam("name"),
//   //     };
//   //   };

//   static navigationOptions = {
//     title: "Main Screen",
//   };

//   render() {
//     const { navigate, state } = this.props.navigation;

//     return (
//       <View style={styles.container}>
//         <Text>Hello</Text>

//         <Button
//           title="Go Back to Register Page"
//           //onPress={() => navigate("RegisterScreen")}
//         />
//       </View>
//     );
//   }
// }
