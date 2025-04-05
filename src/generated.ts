import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TokenFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tokenFactoryAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'creator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'symbol',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'TokenCreated',
  },
  {
    type: 'function',
    inputs: [
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_symbol', internalType: 'string', type: 'string' },
      { name: '_totalSupply', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllTokens',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenFactoryAbi}__
 */
export const useReadTokenFactory = /*#__PURE__*/ createUseReadContract({
  abi: tokenFactoryAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenFactoryAbi}__ and `functionName` set to `"getAllTokens"`
 */
export const useReadTokenFactoryGetAllTokens =
  /*#__PURE__*/ createUseReadContract({
    abi: tokenFactoryAbi,
    functionName: 'getAllTokens',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenFactoryAbi}__ and `functionName` set to `"owner"`
 */
export const useReadTokenFactoryOwner = /*#__PURE__*/ createUseReadContract({
  abi: tokenFactoryAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenFactoryAbi}__
 */
export const useWriteTokenFactory = /*#__PURE__*/ createUseWriteContract({
  abi: tokenFactoryAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenFactoryAbi}__ and `functionName` set to `"createToken"`
 */
export const useWriteTokenFactoryCreateToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenFactoryAbi,
    functionName: 'createToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenFactoryAbi}__
 */
export const useSimulateTokenFactory = /*#__PURE__*/ createUseSimulateContract({
  abi: tokenFactoryAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenFactoryAbi}__ and `functionName` set to `"createToken"`
 */
export const useSimulateTokenFactoryCreateToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenFactoryAbi,
    functionName: 'createToken',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenFactoryAbi}__
 */
export const useWatchTokenFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: tokenFactoryAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenFactoryAbi}__ and `eventName` set to `"TokenCreated"`
 */
export const useWatchTokenFactoryTokenCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tokenFactoryAbi,
    eventName: 'TokenCreated',
  })
