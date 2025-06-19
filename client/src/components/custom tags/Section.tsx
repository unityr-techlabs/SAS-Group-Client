import { View, Text, ViewProps } from 'react-native'
import React from 'react'

interface SectionProp extends ViewProps{
    className?:string
}

const Section = ({className,style,children}:SectionProp) => {
  return (
    <View style={style} className={`${className} py-3`}>
      {children}
    </View>
  )
}

export default Section