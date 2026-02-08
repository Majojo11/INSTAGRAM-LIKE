import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';

// agregar iconos de like, comentario, compartir, seleccion de foto y guardar 
// agregar vistas de la foto, descripcion, comentarios, hora de publicacion 
//Agregar barra de navegacion con iconos de home, busqueda, reels, notificaciones y perfil

export default function App() {
  const [fontsLoaded] = useFonts({
    Insta: require('./assets/fonts/VeganStylePersonalUse-5Y58.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>

      <View style={styles.container1}>
        <Text style={styles.main}>Instagram</Text>
      </View>

      <View style={styles.container2}>
        <Image source={require('./assets/Images/userwstory.jpg')} style={styles.user}/>
        <Text style={styles.username}>Username</Text>
        <Text style={styles.options}>⋯</Text>
      </View>

      <View style={styles.containerImage}>
        <Image source={require('./assets/Images/Post.jpeg')} style={styles.postImage}/>
      </View>

      <View style={styles.container3}>
        <Image source={require('./assets/Images/like.png')} style={styles.icon}/>
        <Image source={require('./assets/Images/comment.png')} style={styles.icon}/>
        <Image source={require('./assets/Images/share.png')} style={styles.icon}/>
        <Image source={require('./assets/Images/save.png')} style={styles.iconLeft}/>
      </View>

      <View style={styles.container4}>
        <Text style={styles.description}>17,280 views</Text>
        <Text style={styles.description}>Username instagram template #Template</Text>
        <Text style={styles.description}>View all 370 comments</Text>
        <Text style={styles.description}>2 hours ago</Text>
      </View>

        <View style={styles.divider}/>

      <View style={styles.containerBarra}>
        <Image source={require('./assets/Images/home.png')} style={styles.iconBarra}/>
        <Image source={require('./assets/Images/search.png')} style={styles.iconBarra}/>
        <Image source={require('./assets/Images/PostB.png')} style={styles.iconBarra}/>
        <Image source={require('./assets/Images/noti.png')} style={styles.iconBarra}/>
        <Image source={require('./assets/Images/profile.png')} style={styles.iconBarra}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 50,
    backgroundColor: '#fff',
  },
  container1: {
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  main: {
    fontFamily: 'Insta',
    fontSize: 26,
    lineHeight: 45,
  },
  container2: {
    flexDirection: 'row', // Cambia la dirección a horizontal
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  user: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  postImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  username: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  options: {
    marginLeft: 'auto',
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  containerImage: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    height: 400,
  },
  container3: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  iconLeft: {
    width: 24,
    height: 24,
    marginLeft: 'auto',
  },
  container4: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    width: '100%',
    marginVertical: 10,
  }, 
  containerBarra: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconBarra: {
    width: 24,
    height: 24,
    marginHorizontal: 15,
  },
});

