import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    logo: {
        dimension: '30%',
    },
    button: {
        backgroundColor: '#4C3B4D',
        alignContent: 'center',
        padding: SIZES.large,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,


    },
    buttonText: {
        fontFamily: FONT.medium,
        fontSize: SIZES.large,
        color: '#ADA8B6',
    },
    gpaImages: {
        aspectRatio: 1,
        width: '60%',
        alignItems: "flex-start",

    },
    gpa: {
        fontFamily: FONT.medium,
        fontSize: SIZES.large,
        color: '#4C3B4D',

    },
    classTitle: {
        fontFamily: FONT.bold,
        fontSize: 60,
        marginTop: SIZES.large,

    },
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: SIZES.large,
        height: 85,
        padding: SIZES.medium,
        color: '#ADA8B6',
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: '#ADA8B6',
        marginRight: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.medium,
        height: "100%",
    },
    searchInput: {
        fontFamily: FONT.regular,
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.medium,
        color: '#FFF',
    },
    searchBtn: {
        width: 50,
        height: "100%",
        backgroundColor: COLORS.tertiary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    searchBtnImage: {
        width: "50%",
        height: "50%",
        tintColor: COLORS.white,
    },
    searchTitle: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        padding: SIZES.medium,
    },
    noOfSearchedJobs: {
        marginTop: 2,
        fontFamily: FONT.medium,
        fontSize: SIZES.small,
        color: COLORS.primary,
    },
    loaderContainer: {
        marginTop: SIZES.medium
    },
    footerContainer: {
        marginTop: SIZES.small,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    paginationButton: {
        width: 30,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.tertiary
    },
    paginationImage: {
        width: '60%',
        height: '60%',
        tintColor: COLORS.white
    },
    paginationTextBox: {
        width: 30,
        height: 30,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    paginationText: {
        fontFamily: FONT.bold,
        fontSize: SIZES.medium,
        color: COLORS.primary
    },
    card: {
        backgroundColor: '#fff',
        padding: SIZES.medium,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 15,
      },
      name: {
        fontFamily: FONT.bold, 
        fontSize: SIZES.large,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      profname: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,

      },
      department: {
        fontFamily: FONT.medium,
        fontSize: SIZES.small,
        color: 'gray',
        marginBottom: 5,
      },
      rating: {
        fontFamily: FONT.small,
        fontSize: SIZES.small,
        color: 'green',
      },
});

export default styles;
