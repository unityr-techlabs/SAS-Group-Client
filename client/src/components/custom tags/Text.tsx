import { View, Text as ExtendedText, TextProps as ExtendedProp } from 'react-native'
import React from 'react'

interface TextProp extends ExtendedProp{
    className?:string,
    type?:'default'|'heading'|'subHeading'|'paragraph'|'link'
}

const Text = ({className,type,children}:TextProp) => {
    const textStyle = `${
    type === 'heading'?' text-xl xs:text-xl sm:text-lg lg:text-xl xxl:text-3xl font-poppinsBold':
    type === 'subHeading'?'text-lg xs:text-lg sm:text-lg lg:text-xl xxl:text-3xl font-poppinsSemiBold':
    type === 'paragraph'?'text-base xs:text-base sm:text-base leading-relaxed lg:text-lg xxl:text-2xl font-poppins':
    type === 'link'?'text-base xs:text-base sm:text-base lg:text-lg xxl:text-2xl font-poppins !text-secondary underline   underline-offset-4':
    'text-sm sm:text-sm text-xs xs:text-base sm:text-base leading-relaxed lg:text-lg xxl:text-2xl font-poppins'
    }`
  return (
    <ExtendedText className={`${className} ${textStyle}`}>{children}</ExtendedText>
  )
}

export default Text