import developmentConfig from './development'
import testConfig from './test'
import productionConfig from './production'
const config = () => {
  const env: string = process.env.NODE_ENV || 'development'
  switch (env) {
    case 'test':
      return testConfig
    case 'production':
      return productionConfig
    default:
      return developmentConfig
  }
}

export default config()
