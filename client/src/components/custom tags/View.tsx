import { View as ExtendedView, Text, ViewProps } from 'react-native'
import React from 'react'

interface ViewProp extends ViewProps{
    className?:string
}

const View = ({className,style,children}:ViewProp) => {
  return (
    <ExtendedView style={style} className={`${className}`}>
      {children}
    </ExtendedView>
  )
}

export default View