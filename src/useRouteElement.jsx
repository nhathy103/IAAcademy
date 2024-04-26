import { useRoutes } from 'react-router-dom'

import routes from '@/router/clientRoutes';
const allRoutes = [...routes]

const useRouteElement = () => {
  return useRoutes(allRoutes)
}

export default useRouteElement
