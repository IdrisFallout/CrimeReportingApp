import * as React from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableHighlight,
    Platform, TextInput, Alert,
} from "react-native";
import {Picker} from "@react-native-picker/picker";
import {Border, Color, Padding} from "../GlobalStyles";
import {Button as RNKButton} from "@ui-kitten/components/ui/button/button.component";
import {useCallback, useEffect, useState} from "react";
import {handlePostRequest} from "../reusable_functions";



const Dashboard = ({ route }) => {
    const { phone } = route.params;
    const [selectedValue, setSelectedValue] = useState("Theft");
    const [username, setUsername] = useState("");

    const getUsernameFromServer = async () => {
        const postData = { phone: phone }; // Assuming postData is a JSON object with a 'phone' property
        const response = await handlePostRequest(postData, '/auth/getusername');
        setUsername(response.message); // Assuming the response object contains a 'message' property
    };

    useEffect(() => {
        getUsernameFromServer(); // Call the function once the component mounts or whenever the phone value changes
    }, [phone]);

    return (
        <SafeAreaView style={styles.dashboard}>
            <Text>Welcome {username ? username : phone}</Text>
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
                                <Picker.Item label="Theft" value="Theft"/>
                                <Picker.Item label="Robbery" value="Robbery"/>
                                <Picker.Item label="Assault" value="Assault"/>
                                <Picker.Item label="Other" value="Other"/>
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
                    style={styles.bottom_tabs}
                    underlayColor="#c0c0c0"
                    onPress={() => {
                        // Handle the press event for "Report a crime"
                    }}
                >
                    <Text>Report a crime</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.bottom_tabs}
                    underlayColor="#c0c0c0"
                    onPress={() => {
                        // Handle the press event for "Crime Records"
                    }}
                >
                    <Text>Crime Records</Text>
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
        marginTop: '25%',
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
        // backgroundColor: "red",

    },
    bottom_tabs: {
        backgroundColor: Color.whitesmoke,
        height: "100%",
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        // borderRadius: 3,
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