import * as React from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableHighlight,
    TextInput, Alert, Image, StatusBar
} from "react-native";
import {Picker} from "@react-native-picker/picker";
import {Border, Color, Padding} from "../GlobalStyles";
import {Button as RNKButton} from "@ui-kitten/components/ui/button/button.component";
import {useCallback, useEffect, useState} from "react";
import {handlePostRequest} from "../reusable_functions";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {useNavigation} from "@react-navigation/native";


const Dashboard = ({route}) => {
    const navigation = useNavigation();
    const {phone} = route.params;
    const [username, setUsername] = useState("");

    const crimeTypes = [
        'Violent Crimes',
        'Property Crimes',
        'White-Collar Crimes',
        'Cybercrimes',
        'Drug Crimes',
        'Sex Crimes',
        'Financial Crimes',
        'Traffic Crimes',
        'Environmental Crimes',
        'Gang-Related Crimes',
        'Other Crimes',
    ];
    const [selectedValue, setSelectedValue] = useState(crimeTypes[0]);

    const getUsernameFromServer = async () => {
        const postData = {phone: phone}; // Assuming postData is a JSON object with a 'phone' property
        const response = await handlePostRequest(postData, '/user/getusername');
        setUsername(response.message); // Assuming the response object contains a 'message' property
    };

    useEffect(() => {
        getUsernameFromServer(); // Call the function once the component mounts or whenever the phone value changes
    }, [phone]);

    const getInitials = (name) => {
        const nameArray = name.split(' ');
        let initial = nameArray[0].charAt(0).toUpperCase();

        if (nameArray.length > 1) {
            initial += nameArray[1].charAt(0).toUpperCase();
        }

        return initial;
    };

    const getFirstName = (name) => {
        const nameArray = name.split(' ');
        return nameArray[0].toLowerCase();
    };

    const handleSettingsPress = () => {
        // Alert.alert('SettingsScreen', 'SettingsScreen are not available at the moment');
        navigation.navigate("SettingsScreen");
    }

    const getTimeOfDayGreeting = () => {
        const currentHour = new Date().getHours();

        if (currentHour >= 5 && currentHour < 12) {
            return 'morning';
        } else if (currentHour >= 12 && currentHour < 17) {
            return 'afternoon';
        } else if (currentHour >= 17 || currentHour < 5) {
            return 'evening';
        }
    };

    const reportingCrimeTab = () => {
        Alert.alert('Reporting Crime', 'Reporting crime is not available at the moment');
    };

    const crimeRecordsTab = () => {
        Alert.alert('Crime Records', 'Crime records are not available at the moment');
    };

    return (
        <SafeAreaView style={styles.dashboard}>
            <StatusBar backgroundColor={Color.whitesmoke} barStyle="dark-content"/>
            <View style={styles.topinfo}>
                <View style={styles.left_top_container}>
                    <View style={styles.circle}>
                        <Text style={styles.initials}>{getInitials(username)}</Text>
                    </View>
                    <View style={styles.topinfoText}>
                        <Text>Good {getTimeOfDayGreeting()},</Text>
                        <Text style={styles.first_name}>{username ? getFirstName(username) : phone}👋</Text>
                    </View>
                </View>
                <View style={styles.right_top_container}>
                    <TouchableOpacity onPress={handleSettingsPress}>
                        <FontAwesome name="cog" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.topcontainerScroll}>
                <View style={styles.topcontainer}>
                    <View style={styles.heading}>
                        <Text style={styles.title}>Reporting a Crime</Text>
                    </View>
                    <View style={styles.information_container}>
                        <View style={styles.inputbox_container}>
                            <Text>Nature of Crime</Text>
                            <Picker
                                style={[styles.crime_nature, styles.crimeBorder, styles.picker]}
                                selectedValue={selectedValue}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                {crimeTypes.map((crimeType, index) => (
                                    <Picker.Item key={index} label={crimeType} value={crimeType} />
                                ))}
                            </Picker>
                        </View>
                        <View style={styles.inputbox_container}>
                            <Text>Location</Text>
                            <TextInput
                                style={[styles.crime_nature, styles.crimeBorder]}
                                keyboardType="default"
                                secureTextEntry={false}
                                placeholderTextColor="#000"
                            />
                        </View>
                        <View style={styles.inputbox_container}>
                            <Text>Statement</Text>
                            <TextInput
                                style={[styles.statement_input, styles.crimeBorder]}
                                keyboardType="default"
                                multiline={true}
                                secureTextEntry={false}
                                placeholderTextColor="#000"
                            />
                        </View>

                    </View>
                    <View style={styles.information_container}>
                        <View style={styles.inputbox_container}>
                            <Text>Attach Media</Text>
                            <TextInput
                                style={[styles.crime_nature, styles.crimeBorder]}
                                keyboardType="default"
                                secureTextEntry={false}
                                placeholderTextColor="#000"
                            />
                        </View>
                    </View>

                    <RNKButton
                        style={[styles.createReport, styles.passwordFlexBox]}
                        size="medium"
                        status="primary"
                        appearance="filled"
                        color="#224092"
                        textStyle={styles.loginButtonText}
                    >
                        Report a crime
                    </RNKButton>
                </View>

            </ScrollView>
            <View style={styles.bottomcontainer}>
                <TouchableHighlight
                    style={[styles.bottom_tabs, styles.rounded_top_right]}
                    underlayColor="black"
                    onPress={reportingCrimeTab}
                >
                    <FontAwesome name="exclamation-triangle" size={24} color={Color.whitesmoke} />
                </TouchableHighlight>

                <TouchableHighlight
                    style={[styles.bottom_tabs, styles.rounded_top_left]}
                    underlayColor="black"
                    onPress={crimeRecordsTab}
                >
                    <FontAwesome name="file-text-o" size={24} color={Color.whitesmoke} />
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    dashboard: {
        backgroundColor: Color.white,
        flex: 1,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        // marginTop: '11%',
    },
    topinfo: {
        flexDirection: 'row',
        backgroundColor: Color.whitesmoke,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    left_top_container: {
        padding: 10,
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.whitesmoke,
    },
    right_top_container: {
        padding: 10,
        paddingRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.whitesmoke,

    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Color.whitesmoke, // You can change the color of the circle here
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    },
    initials: {
        color: 'black', // You can change the color of the initials here
        fontSize: 15,
        fontWeight: 'bold',
    },
    topinfoText: {
        flexDirection: 'column',
    },
    first_name: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    createReport: {
        paddingHorizontal: Padding.p_75xl,
        paddingVertical: Padding.p_2xs,
        borderRadius: Border.br_8xs,
        marginTop: 12,
        overflow: "hidden",
    },
    passwordFlexBox: {
        marginTop: 12,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12,
    },
    topcontainer: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: '#c0c0c0',
    },
    topcontainerScroll: {
        // height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    bottomcontainer: {
        display: "flex",
        flexDirection: "row",
        height: "8%",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Color.whitesmoke,

    },
    bottom_tabs: {
        backgroundColor: "#3C3F41",
        height: "100%",
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
    },
    rounded_top_left: {
        borderTopLeftRadius: 3,
    },
    rounded_top_right: {
        borderTopRightRadius: 3,
    },
    heading: {
        width: "100%",
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        // color: "#224092",
        textAlign: "left",
    },
    information_container: {
        width: "90%",
        // height: 500,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        borderWidth: 1,
        borderColor: '#c0c0c0',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
        paddingBottom: 20,
    },
    crime_nature: {
        alignSelf: "flex-start",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    crimeBorder: {
        padding: 5,
        borderWidth: 1,
        borderColor: "#000",
        borderStyle: "solid",
        borderRadius: Border.br_8xs,
        overflow: "hidden",
        width: "100%",
        marginTop: 5,
        // backgroundColor: Color.white,
    },
    picker: {
        //    The picker has no border. add a border to it
        borderWidth: 1,
        borderColor: '#000',
    },
    inputbox_container: {
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginTop: 20,
        // marginBottom: 20,
        paddingHorizontal: Padding.p_2xs,
        // backgroundColor: Color.black,
    },
    statement_input: {
        //    this will be a multiline input
        height: 200,
        textAlignVertical: 'top',
    }

});

export default Dashboard;