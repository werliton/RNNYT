import React from 'react'
import PropTypes from 'prop-types'
import { 
    StyleSheet,
    ImageBackground,
    View, ViewPropTypes
 } from 'react-native'
 import Title from './Title'

const Thumbnail = ({ url, titleText, accentColor, style }) => {
    const imageStyle = {
        backgroundColor: `${accentColor}77`
    }
    const TitleComponent = <Title style={styles.title}>{titleText}</Title>
    return (
        <View style={[styles.container, { borderColor: accentColor }, style]}>
            <ImageBackground
                style={[styles.image]}
                source={{
                    uri:url
                }}
            >
                <View style={[styles.image, imageStyle]}>
                    {TitleComponent}
                </View>
            </ImageBackground>
        </View>
    )
 }

 Thumbnail.propTypes = {
     style: ViewPropTypes.style,
     url: PropTypes.string.isRequired,
     titleText: PropTypes.string,
     accentColor: PropTypes.string.isRequired
 }

 const styles = StyleSheet.create({
     container:{
        borderBottomWidth:3,
        borderStyle: 'solid'
     },
     image:{
        height: 100,
        justifyContent: 'flex-end'
     },
     title:{
         padding: 5
     }
 })

 export default Thumbnail