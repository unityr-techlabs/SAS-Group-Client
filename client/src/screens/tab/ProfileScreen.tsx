import React from 'react'
import Main from '../../components/custom tags/Main'
import View from '../../components/custom tags/View'
import Text from '../../components/custom tags/Text'
import Screen from '../../components/custom tags/Screen'

const ProfileScreen = () => {
  return (
    <Screen>
      <Main>
        <View>
          <Text className='paragraph'>ProfileScreen</Text>
        </View>
      </Main>
    </Screen>
  )
}

export default ProfileScreen