import React from 'react'
import {View ,ScrollView, Text, StyleSheet, FlatList} from 'react-native'

const termos = [
  {
    id: 1,
    title: 'Termos de Uso',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper ex eleifend nisl molestie, sit amet pretium diam pretium. Donec eu diam non massa porttitor volutpat. Maecenas imperdiet orci vel volutpat feugiat. Nam a ligula scelerisque, imperdiet purus vel, iaculis nulla. Morbi consectetur pellentesque placerat. Pellentesque quis aliquam nisi, eget hendrerit metus. Vivamus orci massa, blandit vel est eget, rutrum fringilla urna. Mauris quis mattis metus, sit amet tincidunt turpis. \n\nNullam euismod convallis tempor. Maecenas pretium orci magna, vitae sodales arcu scelerisque non. Ut ultricies sapien ut ex semper, id scelerisque turpis finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent vulputate tempus urna non ornare. Aenean sagittis ac lacus nec placerat. Duis lobortis metus dui, non pulvinar justo mattis quis. Nulla diam mi, dapibus nec felis vitae, sagittis dignissim est. Sed at ante urna. Aenean viverra leo a nulla tristique, at viverra elit ultricies. Praesent finibus arcu nec nibh fringilla hendrerit. \n\nCurabitur convallis mattis accumsan. Aliquam id lorem non velit sagittis gravida. Praesent tempor pharetra mi vel fermentum. Duis at libero nibh. Vivamus maximus ligula quis leo ornare condimentum. Nam felis purus, fermentum eu hendrerit ac, condimentum a sapien. Suspendisse nec sodales neque, aliquet fermentum tortor. Nunc vitae dui sem. Sed tempus tellus eget tortor interdum, id pulvinar quam pretium. Donec semper massa eget sem accumsan rhoncus. \n\nVestibulum et nisl non elit posuere euismod non maximus risus. Proin luctus consequat urna ac tempor. Etiam vitae elit ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi pharetra egestas mi ut condimentum. Nullam facilisis felis quis tortor cursus, eget tempus libero fringilla. Nulla aliquam tincidunt posuere. Nullam felis mauris, finibus at tempus commodo, semper id libero. Mauris ut condimentum leo. \n\nInteger faucibus, arcu at lobortis molestie, nibh lorem bibendum felis, eget accumsan neque lacus non est. Phasellus nec odio euismod, posuere risus at, sollicitudin dolor. Praesent porttitor dui elit, sed molestie magna tempus id. Integer quis turpis efficitur, imperdiet dolor et, pharetra metus. Aliquam a rutrum velit. Aenean tincidunt sapien quam, id feugiat metus consectetur quis. Quisque nec magna at odio pretium faucibus. Nam metus enim, interdum eu mi at, ultricies venenatis lorem. Nunc facilisis quam a dolor fermentum, bibendum molestie nisi facilisis.'
  },
  {
    id: 2,
    title: 'Politica de Privacidade',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper ex eleifend nisl molestie, sit amet pretium diam pretium. Donec eu diam non massa porttitor volutpat. Maecenas imperdiet orci vel volutpat feugiat. Nam a ligula scelerisque, imperdiet purus vel, iaculis nulla. Morbi consectetur pellentesque placerat. Pellentesque quis aliquam nisi, eget hendrerit metus. Vivamus orci massa, blandit vel est eget, rutrum fringilla urna. Mauris quis mattis metus, sit amet tincidunt turpis. \n\nNullam euismod convallis tempor. Maecenas pretium orci magna, vitae sodales arcu scelerisque non. Ut ultricies sapien ut ex semper, id scelerisque turpis finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent vulputate tempus urna non ornare. Aenean sagittis ac lacus nec placerat. Duis lobortis metus dui, non pulvinar justo mattis quis. Nulla diam mi, dapibus nec felis vitae, sagittis dignissim est. Sed at ante urna. Aenean viverra leo a nulla tristique, at viverra elit ultricies. Praesent finibus arcu nec nibh fringilla hendrerit. \n\nCurabitur convallis mattis accumsan. Aliquam id lorem non velit sagittis gravida. Praesent tempor pharetra mi vel fermentum. Duis at libero nibh. Vivamus maximus ligula quis leo ornare condimentum. Nam felis purus, fermentum eu hendrerit ac, condimentum a sapien. Suspendisse nec sodales neque, aliquet fermentum tortor. Nunc vitae dui sem. Sed tempus tellus eget tortor interdum, id pulvinar quam pretium. Donec semper massa eget sem accumsan rhoncus. \n\nVestibulum et nisl non elit posuere euismod non maximus risus. Proin luctus consequat urna ac tempor. Etiam vitae elit ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi pharetra egestas mi ut condimentum. Nullam facilisis felis quis tortor cursus, eget tempus libero fringilla. Nulla aliquam tincidunt posuere. Nullam felis mauris, finibus at tempus commodo, semper id libero. Mauris ut condimentum leo. \n\nInteger faucibus, arcu at lobortis molestie, nibh lorem bibendum felis, eget accumsan neque lacus non est. Phasellus nec odio euismod, posuere risus at, sollicitudin dolor. Praesent porttitor dui elit, sed molestie magna tempus id. Integer quis turpis efficitur, imperdiet dolor et, pharetra metus. Aliquam a rutrum velit. Aenean tincidunt sapien quam, id feugiat metus consectetur quis. Quisque nec magna at odio pretium faucibus. Nam metus enim, interdum eu mi at, ultricies venenatis lorem. Nunc facilisis quam a dolor fermentum, bibendum molestie nisi facilisis.'
  },
] 

export default () => {

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={termos}
        renderItem={({item}) => (
          <>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
          </>
        )}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create ({
 container:{
   flex: 1,
   padding: 20,
 },
 title:{
   fontSize: 35,
   fontWeight: 'bold',
   color: "#193073",
   alignSelf: 'center',
   marginBottom: 20,
 },
 text:{
   fontSize: 18,
   marginTop: 10,
   marginLeft: 10,
   marginRight: 10,
   marginBottom: 20
 }
})