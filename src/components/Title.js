import React from 'react'
import PropTypes from 'prop-types'
import { 
    StyleSheet,
    Text
} from 'react-native'
import AppText from './AppText'
import * as globalStyle from '../styles/global'

const Title = ({ style, children }) =>{
    <AppText style={[style.title, style]}>
        {children}
    </AppText>
}

Title.propTypes = {
    style: Text.propTypes.style,
    children: PropTypes.node
}

const styles = StyleSheet.create({
    title:{
        fontFamily: 'HelveticaNeue-CondensedBold',
        fontSize: 18,
        color: globalStyle.HEADER_TEXT_COLOR,
        backgroundColor: `${globalStyle.BG_COLOR}99`
    }
})

export default Title