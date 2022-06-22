// import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../graphql/queries.js'


// UTILIZANDO RES API 

//  const useRepositories = () => {
//    const [repositories, setRepositories] = useState(null)
//    const fetchRepositories = async () => {
//      const response = await globalThis.fetch('http://192.168.0.18:5000/api/repositories')
//      const json = await response.json()
//      setRepositories(json)
//    } 
//    useEffect(() => {
//      fetchRepositories()
//    }, [])
//    const repositoriesNodes = repositories ? repositories.edges.map(edge => edge.node) : []
//    return { repositories: repositoriesNodes }
//  }


 // UTILIZANDO GRAPHQL 

  const useRepositories = () => {
    const { data = {}, loading, refetch } = useQuery(GET_REPOSITORY)
    const { repositories = null } = data
    const repositoriesNodes = repositories ? repositories.edges.map(edge => edge.node) : []
    return { repositories: repositoriesNodes, loading, refetch }
  }



export default useRepositories