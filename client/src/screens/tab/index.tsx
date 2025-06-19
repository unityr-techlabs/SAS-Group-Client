import React from 'react'
import Section from '../../components/custom tags/Section'
import Main from '../../components/custom tags/Main'
import View from '../../components/custom tags/View'
import Text from '../../components/custom tags/Text'
import Screen from '../../components/custom tags/Screen'

const index = () => {
  return (
      <Screen>
        <Section>
          <Main>
            <Text type='heading' className=' capitalize heading font-poppinsSemiBold'>heading</Text>
            <Text type='subHeading' className=' capitalize heading'>sub heading</Text>
            <Text type='paragraph' className=' capitalize paragraph'>paragraph</Text>
            <Text type='link' className=' capitalize '>home</Text>
          </Main>
        </Section>
      </Screen>
  )
}

export default index