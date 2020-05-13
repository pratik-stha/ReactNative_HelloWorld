import React,{useState}from 'react';
import {StyleSheet, Text, View,TextInput} from 'react-native';
import {Button} from 'react-native-elements';


const Greeter = ({greeting,ButtonTitle})=>{
    const [state,setState] = useState({name:'',greeting:greeting});
    
    const updateState =(vals)=>{
        setState(
            {
                ...state,
                ...vals,

            }
        );

    };

    return(
        <View style={styles.container}>
            <Text>  {state.greeting} </Text>
            <TextInput palceholder="Enter your name Pratik"
            onChangeText = {(val)=>updateState({name:val})}
            value = {state.name}
            />
           <Button title = {ButtonTitle}
           onPress = {()=>
            updateState({greeting:`${greeting} welcomes you ${state.name}`})
           } />
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