// @ts-check


/**
 * @param {typeof import('../core/MetaTrader/Client')} client
 */
export const setClient = (store, client) => {
  console.log(`Setting client:`)
  console.log(client)
  store.setState({ client })
}

/**
 * @param {Boolean} connected
 */
export const setConnected = (store, connected) => {
  console.log(`Setting connected:`)
  console.log(connected)
  store.setState({ connected })
}

/**
 * All loaded strategies from file
 * 
 * @param {Array} strategies
 */
export const setStrategies = (store, strategies) => {
  console.log(`Setting strategies:`)
  console.log(strategies)
  store.setState({ strategies })
}
  
/**
 * Selected indicators
 * 
 * @param {typeof import('../core/Strategy/Indicators')} indicators
 */
export const setIndicators = (store, indicators) => {
  console.log(`Setting active indicators:`)
  console.log(indicators)
  store.setState({ indicators })
}

/**
 * Selected strategy
 * 
 * @param {Object} activeStrategy
 */
export const setActiveStrategy = (store, activeStrategy) => {
  console.log(`Setting active strategy:`)
  console.log(activeStrategy)
  store.setState({ activeStrategy })
}
  