import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    firstView: {
        backgroundColor: '#000',
        paddingBottom: 5,
        flex: 2,
        justifyContent: 'flex-end',
        paddingHorizontal: 20
    },
    secondView: {
        alignItems: 'center', 
        paddingTop: 80,
        flex: 3,
    },
    logoText: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 20,
        textAlign: 'center',
        color: '#fff'
    },
    inputContainer: {
        width: '90%',
        paddingHorizontal: 15
    },
    mobileNumberView: {
        flexDirection: 'row', 
        backgroundColor: '#F2E6E7',
        paddingHorizontal: 10, 
        marginTop: 10,
        paddingVertical: 3, 
        width: '100%'
    },
    mobileNumberText: {
        width: '95%',
        fontFamily: "Poppins-Regular", 
        fontSize: 13
    },
    buttonContainer: {
        justifyContent: "center", 
        alignSelf: 'center',
        backgroundColor: "#000", 
        marginTop: 10, 
        height: 40, 
        width: 150,
        borderRadius: 6
    },
    buttonText: {
        textAlign: "center",
        fontSize: 17,
        fontFamily: "Poppins-SemiBold",
        lineHeight: 26,
        color: "white"
    },
    errorText: {
        color: "#F36533", 
        fontFamily: "Poppins-Regular", 
        fontSize: 9,
        marginBottom: 10
    },
    appVerText: {
        fontFamily: "Poppins-Regular", 
        fontSize: 10, 
        paddingTop: 10,
        color: '#7F7F7F', 
        textAlign: 'center'  
    }
})

export default styles