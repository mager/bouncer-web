export type Collection = {
  name: string
  floorPrice: number
  imageUrl: string
  nfts: NFT[]
  unrealizedValue: number
  ownedAssetCount: number
  openSeaURL: string
}

export type Trait = {
  name: string
  value: number
  openSeaURL: string
}

export type NFT = {
  name: string
  imageUrl: string
  tokenID: string
  traits: Trait[]
}

export type Info = {
  collections: Array<Collection>
  unrealizedBag: number
  username: string
  photo: string
}

export type StateType = {
  loading: boolean
  provider?: any
  web3Provider?: any
  address?: string
  chainId?: number
  info?: Info
}

export type ActionType =
  | {
      type: 'SET_WEB3_PROVIDER'
      provider?: StateType['provider']
      web3Provider?: StateType['web3Provider']
      address?: StateType['address']
      chainId?: StateType['chainId']
    }
  | {
      type: 'START_FETCHING_INFO'
      loading?: StateType['loading']
    }
  | {
      type: 'SET_ADDRESS'
      address?: StateType['address']
    }
  | {
      type: 'START_FETCHING_COLLECTIONS'
      loading?: StateType['loading']
    }
  | {
      type: 'SET_INFO'
      info?: StateType['info']
      loading?: StateType['loading']
    }
  | {
      type: 'SET_CHAIN_ID'
      chainId?: StateType['chainId']
    }
  | {
      type: 'RESET_WEB3_PROVIDER'
    }
