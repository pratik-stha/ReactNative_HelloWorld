import React from 'react';
import {StyleSheet, Text, View,TextInput} from 'react-native';
import {Button} from 'react-native-elements';


const Greeter = ()=>{
    return(
        <View style={styles.container}>
            <Text>  Hello Grisma !!         </Text>
            <TextInput palceholder="Enter your name" />
           <Button title = "Please click me" />
        </View>
    );

};

const styles = StyleSheet.create(
{
    container:{

        margin :20,
    }

});

export default Greeter;