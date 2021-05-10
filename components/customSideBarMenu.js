import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-navigation';
import {DrawerItems} from 'react-navigation-drawer';

import firebase from 'firebase';

export default class customSideBarMenu extends Component{
render(){
    return(
        <View style={{flex:1}}>
            <DrawerItems {...this.props}></DrawerItems>
            <View style={{flex:1,justifyContent:'flex-end',paddingBottom:30}}>
                <TouchableOpacity style={{justifyContent:'center',padding10,height:30,wifth:'100%'}}
                onPress = {() => {
                    this.props.navigation.navigate('SignUpLoginScreen')
                    firebase.auth().signOut()
                }}>
                    <Text>Signout</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
}