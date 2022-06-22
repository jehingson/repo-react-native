// 
import React from 'react'
import { FlatList } from 'react-native'
import RepositoryItem from './RepositoryItem.jsx'
import useRepositories from '../hooks/useRepositories.js'

const RepositoryList = () => {
  const { repositories } = useRepositories()  

  console.log('Repositories', repositories)

  return (
    <FlatList 
      data={repositories ? repositories : []}
      renderItem={({ item: repo }) => (
        <RepositoryItem {...repo} />
      )}
      >
    </FlatList>
  )
}

export default RepositoryList