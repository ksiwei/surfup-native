import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const metrics = {
    screenHeight: height,
    screenWidth: width
}
export default metrics;