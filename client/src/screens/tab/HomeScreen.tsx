import React from 'react'
import Section from '../../components/custom tags/Section'
import Main from '../../components/custom tags/Main'
import View from '../../components/custom tags/View'
import Text from '../../components/custom tags/Text'
import Screen from '../../components/custom tags/Screen'
import { ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

  const navigation = useNavigation();
  return (
      <Screen>
        <ScrollView>
          <Section>
          <Main>
            <Text type='heading' className=' capitalize heading font-poppinsSemiBold'>heading</Text>
            <Text type='subHeading' className=' capitalize heading'>sub heading</Text>
            <Text type='paragraph' className=' capitalize paragraph'>paragraph</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Announcement')}>
              <Text type='link' className='capitalize'>Go to Announcement</Text>
            </TouchableOpacity>
          </Main>
        </Section>
        </ScrollView>
      </Screen>
  )
}

export default HomeScreen