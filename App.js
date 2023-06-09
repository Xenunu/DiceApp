// les imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Box } from "@react-native-material/core";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GamesInfoPage from "./Pages/GameInfo"; 
import GamesPage from "./Pages/Games"; 
import MenuPage from "./Pages/Menu"; 



function HomePageScreen({ navigation }) {
  return (
    <View>
      {/* barTop */}

      <View style={styles.container}>
        <Box
          w={400}
          h={115}
          m={0}
          style={{
            backgroundColor: "white",
            borderBottomColor: "lightgrey",
            borderBottomWidth: 3,
          }}
        >
          <Image
            style={styles.icon}
            source={require("./assets/LOGO_Black.png")}
          />
        </Box>
      </View>


          {/* NewGameSection */}

          <View style={styles.titleBox}>
            <Box
              w={200}
              h={60}
              style={{
                backgroundColor: '#E9BD1F',
                borderRadius: 5,
              }}
            >
              <Text style={styles.title}> 
                NEW GAMES
              </Text>
            </Box>  
          </View>




          {/* caroussel */}


          








          {/* Discover Your Destiny */}


      <View>
        <TouchableOpacity
        onPress={() => navigation.navigate("Games")}
        >
        <Box
            w={360}
            h={130}
            left={15}
            top={270}
            style={{
              backgroundColor: 'white',
              borderRadius: 5,
              borderColor: 'lightgrey',
              borderWidth: 2, 
            }}
          >
              <View style={styles.discover}>
                <Image
                   style={styles.discoverImg}
                   source={require("./assets/testDiscover.png")}
                />
                  <View style={styles.discoverText}>
                    <Text style={styles.discoverTitle}>
                      Discover your destiny !
                    </Text>
                    <Text style={styles.discoverDescription}>
                      Games of atmosphere, card, dice, 
                      skill, memory...
                    </Text>
                  </View>
              </View>
        </Box>
        </TouchableOpacity>
      </View>




          {/* What's on */}


          <View>
            <Text style={styles.WhatsOn}>
              What's on 
            </Text>

            <View style={styles.WhatsOnBtn}>
              <Text style={styles.WhatsOnTitle}>
                    RANKING
              </Text>
              <TouchableOpacity>
                  <Image
                    style={styles.WhatsOnImg}
                    source={require("./assets/ranking.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.WhatsOnTitle}>
                    NEWS
                  </Text>
                  <Image
                    style={styles.WhatsOnImg}
                    source={require("./assets/news.png")}
                  />
                </TouchableOpacity>
            </View>

          </View>




          {/* NavbarBot */}

        <View>
          <Box
            w={400}
            h={115}
            top={420}
            style={{
              backgroundColor: "white",
              borderColor: "lightgrey",
              borderTopWidth: 3,
            }}
          >

            <View style={styles.navbar}>
              <TouchableOpacity>
                <Image
                  style={styles.boticon}
                  source={require("./assets/home.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={styles.boticon}
                  source={require("./assets/speech-bubble.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={styles.boticon}
                  source={require("./assets/game.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Menu")}
              >
                <Image
                  style={styles.boticon}
                  source={require("./assets/menu.png")}
                />
              </TouchableOpacity>
            </View>
          </Box>
        </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff  ',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    top: 25,
    left: 150,
    width: 90,
    height: 70,
  },
  boticon: {
    top: 18,
    width: 60,
    height: 60,
  },
  navbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    top: 5,
  },
  titleBox: {
    flex: 1,
    alignItems: 'center',
    top: 25,
  },
  discoverImg: {
    width: 110,
    height:110,
    top: 8,
    left: 8,
  },
  discover: {
    flex: 1,
    flexDirection: 'row',
  },
  discoverTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  discoverText: {
    flex: 1,
    top: 10,
    left: 20,
  },
  discoverDescription: {
    top: 20,
    width: 200,
  },
  WhatsOn: {
    top: 290,
    left: 130,
    fontSize: 30,
  },
  WhatsOnBtn: {
    top: 300,
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-around',
  },
  WhatsOnImg: {
    width: 160,
    height: 100,
  },
  WhatsOnTitle: {
    color: 'black',
    top: 200,
    fontSize: 50,
  },
});










function GamesScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <GamesPage />
    </View>
  );
}

function GamesInfoScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <GamesInfoPage />
    </View>
  );
}

function MenuScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <MenuPage />
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    // Chemin de navigation
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        hideNavigationBar={{headerShown: false}}
      >
        <Stack.Screen name="Home" component={HomePageScreen} />
        <Stack.Screen name="Games" component={GamesScreen} />
        <Stack.Screen name="GamesInfos" component={GamesInfoScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
