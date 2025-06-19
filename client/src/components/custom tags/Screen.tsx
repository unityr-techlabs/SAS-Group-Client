import { View, Text, ViewProps } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface ScreenProp extends ViewProps{
    className?:string
}

const Screen = ({className,style,children}:ScreenProp) => {
  const {bottom} = useSafeAreaInsets()
  return (
    <View  className={`${className} flex-1 w-full background`}>
      {children}
    </View>
  )
}

export default Screen