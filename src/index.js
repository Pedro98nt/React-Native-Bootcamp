import React from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native';

export default function App(){
    return(
        <>
        <StatusBar barStyle="dark-content" backgroundColor="#7159c1" translucent />

<View style={styles.container}>
    <Text style={styles.title}>Hello Pedro</Text>
    </View>
    </>
    ) ;
}

const styles = StyleSheet.create({
    container: {
        flex:1,
backgroundColor:'#7159c1',
justifyContent:'center',
alignItems:'center'
    },

    title:{
color:'#fff',
fontSize:35,
fontWeight:'bold'
    },
});


