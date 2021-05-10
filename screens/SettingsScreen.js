const AppDrawNavigator = createDraweNavigator({
    Home: {
        screen : SettingScreen
    }
    },
    {
        contentComponent:customSidebarMenu
    },
    {
        initialRouteName: 'Home'



})