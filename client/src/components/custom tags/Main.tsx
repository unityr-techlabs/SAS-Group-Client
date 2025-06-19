import { View, Text, ViewProps } from 'react-native'
import React from 'react'

interface MainProp extends ViewProps{
    className?:string
}

const Main = ({className,style,children}:MainProp) => {
  return (
    <View style={style} className={`${className} main`}>
      {children}
    </View>
  )
}

export default Main