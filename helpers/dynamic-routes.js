import { projects } from './portfolio-items.js'

const dynamicRoutes = () => {

  // Generate routes for portfolio items

  const routesForPortfolio = projects.map((item) => {
    return {
      route: `/progetti/${item.slug}`,
      payload: item   
    }
  })

  return routesForPortfolio
}
