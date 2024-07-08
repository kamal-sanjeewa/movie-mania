import { colors } from 'assets/constants/colors';
import { StyleSheet } from 'react-native';

export const movieManiaStyles = StyleSheet.create({
  buttonSolid: {
    backgroundColor: colors.primaryColor,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonSolidText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
