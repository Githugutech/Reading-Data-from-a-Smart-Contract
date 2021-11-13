const { callbackify } = require('util');

const main = async () => {
  const Web3 = require('web3');
  const url = 'https://mainnet.infura.io/v3/551b80544510404eaf284b3b5bad9089';
  const web3 = Web3(url);
  //   remember to add const web3 = new Web3(url);
  const address = '0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39';
  web3.eth.getBalance(address, (err, wei) => {
    balance = web3.utils.fromWei(wei, 'ether');
    console.log(balance);
  });
  const abi = [
    {
      inputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'data0',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'data1',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'bytes20',
          name: 'btcAddr',
          type: 'bytes20',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'claimToAddr',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'referrerAddr',
          type: 'address',
        },
      ],
      name: 'Claim',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'data0',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'data1',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'data2',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'senderAddr',
          type: 'address',
        },
      ],
      name: 'ClaimAssist',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'data0',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'updaterAddr',
          type: 'address',
        },
      ],
      name: 'DailyDataUpdate',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'data0',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'uint40',
          name: 'stakeId',
          type: 'uint40',
        },
      ],
      name: 'ShareRateChange',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'data0',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'data1',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'stakerAddr',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'uint40',
          name: 'stakeId',
          type: 'uint40',
        },
      ],
      name: 'StakeEnd',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'data0',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'data1',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'stakerAddr',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'uint40',
          name: 'stakeId',
          type: 'uint40',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'senderAddr',
          type: 'address',
        },
      ],
      name: 'StakeGoodAccounting',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'data0',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'stakerAddr',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'uint40',
          name: 'stakeId',
          type: 'uint40',
        },
      ],
      name: 'StakeStart',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'data0',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'memberAddr',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'entryId',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'referrerAddr',
          type: 'address',
        },
      ],
      name: 'XfLobbyEnter',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'data0',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'memberAddr',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'entryId',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'referrerAddr',
          type: 'address',
        },
      ],
      name: 'XfLobbyExit',
      type: 'event',
    },
    { payable: true, stateMutability: 'payable', type: 'fallback' },
    {
      constant: true,
      inputs: [],
      name: 'allocatedSupply',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'address', name: 'owner', type: 'address' },
        { internalType: 'address', name: 'spender', type: 'address' },
      ],
      name: 'allowance',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'approve',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'uint256', name: 'rawSatoshis', type: 'uint256' },
        { internalType: 'bytes32[]', name: 'proof', type: 'bytes32[]' },
        { internalType: 'address', name: 'claimToAddr', type: 'address' },
        { internalType: 'bytes32', name: 'pubKeyX', type: 'bytes32' },
        { internalType: 'bytes32', name: 'pubKeyY', type: 'bytes32' },
        { internalType: 'uint8', name: 'claimFlags', type: 'uint8' },
        { internalType: 'uint8', name: 'v', type: 'uint8' },
        { internalType: 'bytes32', name: 'r', type: 'bytes32' },
        { internalType: 'bytes32', name: 's', type: 'bytes32' },
        { internalType: 'uint256', name: 'autoStakeDays', type: 'uint256' },
        { internalType: 'address', name: 'referrerAddr', type: 'address' },
      ],
      name: 'btcAddressClaim',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [{ internalType: 'bytes20', name: '', type: 'bytes20' }],
      name: 'btcAddressClaims',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'bytes20', name: 'btcAddr', type: 'bytes20' },
        { internalType: 'uint256', name: 'rawSatoshis', type: 'uint256' },
        { internalType: 'bytes32[]', name: 'proof', type: 'bytes32[]' },
      ],
      name: 'btcAddressIsClaimable',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'bytes20', name: 'btcAddr', type: 'bytes20' },
        { internalType: 'uint256', name: 'rawSatoshis', type: 'uint256' },
        { internalType: 'bytes32[]', name: 'proof', type: 'bytes32[]' },
      ],
      name: 'btcAddressIsValid',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'pure',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'address', name: 'claimToAddr', type: 'address' },
        { internalType: 'bytes32', name: 'claimParamHash', type: 'bytes32' },
        { internalType: 'bytes32', name: 'pubKeyX', type: 'bytes32' },
        { internalType: 'bytes32', name: 'pubKeyY', type: 'bytes32' },
        { internalType: 'uint8', name: 'claimFlags', type: 'uint8' },
        { internalType: 'uint8', name: 'v', type: 'uint8' },
        { internalType: 'bytes32', name: 'r', type: 'bytes32' },
        { internalType: 'bytes32', name: 's', type: 'bytes32' },
      ],
      name: 'claimMessageMatchesSignature',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'pure',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'currentDay',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      name: 'dailyData',
      outputs: [
        { internalType: 'uint72', name: 'dayPayoutTotal', type: 'uint72' },
        { internalType: 'uint72', name: 'dayStakeSharesTotal', type: 'uint72' },
        {
          internalType: 'uint56',
          name: 'dayUnclaimedSatoshisTotal',
          type: 'uint56',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'uint256', name: 'beginDay', type: 'uint256' },
        { internalType: 'uint256', name: 'endDay', type: 'uint256' },
      ],
      name: 'dailyDataRange',
      outputs: [{ internalType: 'uint256[]', name: 'list', type: 'uint256[]' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [{ internalType: 'uint256', name: 'beforeDay', type: 'uint256' }],
      name: 'dailyDataUpdate',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' },
      ],
      name: 'decreaseAllowance',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'globalInfo',
      outputs: [{ internalType: 'uint256[13]', name: '', type: 'uint256[13]' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'globals',
      outputs: [
        { internalType: 'uint72', name: 'lockedHeartsTotal', type: 'uint72' },
        {
          internalType: 'uint72',
          name: 'nextStakeSharesTotal',
          type: 'uint72',
        },
        { internalType: 'uint40', name: 'shareRate', type: 'uint40' },
        { internalType: 'uint72', name: 'stakePenaltyTotal', type: 'uint72' },
        { internalType: 'uint16', name: 'dailyDataCount', type: 'uint16' },
        { internalType: 'uint72', name: 'stakeSharesTotal', type: 'uint72' },
        { internalType: 'uint40', name: 'latestStakeId', type: 'uint40' },
        { internalType: 'uint128', name: 'claimStats', type: 'uint128' },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'addedValue', type: 'uint256' },
      ],
      name: 'increaseAllowance',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'bytes32', name: 'merkleLeaf', type: 'bytes32' },
        { internalType: 'bytes32[]', name: 'proof', type: 'bytes32[]' },
      ],
      name: 'merkleProofIsValid',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'pure',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'bytes32', name: 'pubKeyX', type: 'bytes32' },
        { internalType: 'bytes32', name: 'pubKeyY', type: 'bytes32' },
        { internalType: 'uint8', name: 'claimFlags', type: 'uint8' },
      ],
      name: 'pubKeyToBtcAddress',
      outputs: [{ internalType: 'bytes20', name: '', type: 'bytes20' }],
      payable: false,
      stateMutability: 'pure',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'bytes32', name: 'pubKeyX', type: 'bytes32' },
        { internalType: 'bytes32', name: 'pubKeyY', type: 'bytes32' },
      ],
      name: 'pubKeyToEthAddress',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      payable: false,
      stateMutability: 'pure',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'address', name: 'stakerAddr', type: 'address' },
      ],
      name: 'stakeCount',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'uint256', name: 'stakeIndex', type: 'uint256' },
        { internalType: 'uint40', name: 'stakeIdParam', type: 'uint40' },
      ],
      name: 'stakeEnd',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'stakerAddr', type: 'address' },
        { internalType: 'uint256', name: 'stakeIndex', type: 'uint256' },
        { internalType: 'uint40', name: 'stakeIdParam', type: 'uint40' },
      ],
      name: 'stakeGoodAccounting',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'address', name: '', type: 'address' },
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      name: 'stakeLists',
      outputs: [
        { internalType: 'uint40', name: 'stakeId', type: 'uint40' },
        { internalType: 'uint72', name: 'stakedHearts', type: 'uint72' },
        { internalType: 'uint72', name: 'stakeShares', type: 'uint72' },
        { internalType: 'uint16', name: 'lockedDay', type: 'uint16' },
        { internalType: 'uint16', name: 'stakedDays', type: 'uint16' },
        { internalType: 'uint16', name: 'unlockedDay', type: 'uint16' },
        { internalType: 'bool', name: 'isAutoStake', type: 'bool' },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'uint256', name: 'newStakedHearts', type: 'uint256' },
        { internalType: 'uint256', name: 'newStakedDays', type: 'uint256' },
      ],
      name: 'stakeStart',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'recipient', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'transfer',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'sender', type: 'address' },
        { internalType: 'address', name: 'recipient', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'transferFrom',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      name: 'xfLobby',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'referrerAddr', type: 'address' },
      ],
      name: 'xfLobbyEnter',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'address', name: 'memberAddr', type: 'address' },
        { internalType: 'uint256', name: 'entryId', type: 'uint256' },
      ],
      name: 'xfLobbyEntry',
      outputs: [
        { internalType: 'uint256', name: 'rawAmount', type: 'uint256' },
        { internalType: 'address', name: 'referrerAddr', type: 'address' },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'uint256', name: 'enterDay', type: 'uint256' },
        { internalType: 'uint256', name: 'count', type: 'uint256' },
      ],
      name: 'xfLobbyExit',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'xfLobbyFlush',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
        { internalType: 'address', name: '', type: 'address' },
      ],
      name: 'xfLobbyMembers',
      outputs: [
        { internalType: 'uint40', name: 'headIndex', type: 'uint40' },
        { internalType: 'uint40', name: 'tailIndex', type: 'uint40' },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'address', name: 'memberAddr', type: 'address' },
      ],
      name: 'xfLobbyPendingDays',
      outputs: [
        { internalType: 'uint256[2]', name: 'words', type: 'uint256[2]' },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'uint256', name: 'beginDay', type: 'uint256' },
        { internalType: 'uint256', name: 'endDay', type: 'uint256' },
      ],
      name: 'xfLobbyRange',
      outputs: [{ internalType: 'uint256[]', name: 'list', type: 'uint256[]' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  ];

  //   Second ABI contract
  /*

This example is the ABI for the OmiseGo token, which implements the ERC-20 token standard

*/
  const abi2 = [
    {
      constant: true,
      inputs: [],
      name: 'mintingFinished',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [{ name: '', type: 'string' }],
      payable: false,
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { name: '_spender', type: 'address' },
        { name: '_value', type: 'uint256' },
      ],
      name: 'approve',
      outputs: [],
      payable: false,
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { name: '_from', type: 'address' },
        { name: '_to', type: 'address' },
        { name: '_value', type: 'uint256' },
      ],
      name: 'transferFrom',
      outputs: [],
      payable: false,
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'unpause',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { name: '_to', type: 'address' },
        { name: '_amount', type: 'uint256' },
      ],
      name: 'mint',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'paused',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      type: 'function',
    },
    {
      constant: true,
      inputs: [{ name: '_owner', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ name: 'balance', type: 'uint256' }],
      payable: false,
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'finishMinting',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'pause',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'owner',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [{ name: '', type: 'string' }],
      payable: false,
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { name: '_to', type: 'address' },
        { name: '_value', type: 'uint256' },
      ],
      name: 'transfer',
      outputs: [],
      payable: false,
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { name: '_to', type: 'address' },
        { name: '_amount', type: 'uint256' },
        { name: '_releaseTime', type: 'uint256' },
      ],
      name: 'mintTimelocked',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { name: '_owner', type: 'address' },
        { name: '_spender', type: 'address' },
      ],
      name: 'allowance',
      outputs: [{ name: 'remaining', type: 'uint256' }],
      payable: false,
      type: 'function',
    },
    {
      constant: false,
      inputs: [{ name: 'newOwner', type: 'address' }],
      name: 'transferOwnership',
      outputs: [],
      payable: false,
      type: 'function',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: 'to', type: 'address' },
        { indexed: false, name: 'value', type: 'uint256' },
      ],
      name: 'Mint',
      type: 'event',
    },
    { anonymous: false, inputs: [], name: 'MintFinished', type: 'event' },
    { anonymous: false, inputs: [], name: 'Pause', type: 'event' },
    { anonymous: false, inputs: [], name: 'Unpause', type: 'event' },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: 'owner', type: 'address' },
        { indexed: true, name: 'spender', type: 'address' },
        { indexed: false, name: 'value', type: 'uint256' },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: 'from', type: 'address' },
        { indexed: true, name: 'to', type: 'address' },
        { indexed: false, name: 'value', type: 'uint256' },
      ],
      name: 'Transfer',
      type: 'event',
    },
  ];

  //
  //   Remember to add const contract = new web3.eth.contract(abi2, address);

  const contract = web3.eth.contract(abi2, address);
  // web3.eth.accounts.create();
  contract.methods.name().call((err, result) => {
    console.log(result);
  });
};

//
/*

READING DATA FROM SMART CONTRACT

*/

const Web3 = require('web3');
const rpcURL = ''; // Your RCP URL goes here
const web3 = Web3(rpcURL);
// remember to add const web3 = new Web3(rpcURL);

const abi1 = [
  {
    constant: true,
    inputs: [],
    name: 'mintingFinished',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_spender', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_from', type: 'address' },
      { name: '_to', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'unpause',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_to', type: 'address' },
      { name: '_amount', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '_owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', type: 'uint256' }],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'finishMinting',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'pause',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_to', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_to', type: 'address' },
      { name: '_amount', type: 'uint256' },
      { name: '_releaseTime', type: 'uint256' },
    ],
    name: 'mintTimelocked',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: '_owner', type: 'address' },
      { name: '_spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: 'remaining', type: 'uint256' }],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    payable: false,
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'to', type: 'address' },
      { indexed: false, name: 'value', type: 'uint256' },
    ],
    name: 'Mint',
    type: 'event',
  },
  { anonymous: false, inputs: [], name: 'MintFinished', type: 'event' },
  { anonymous: false, inputs: [], name: 'Pause', type: 'event' },
  { anonymous: false, inputs: [], name: 'Unpause', type: 'event' },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'owner', type: 'address' },
      { indexed: true, name: 'spender', type: 'address' },
      { indexed: false, name: 'value', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'from', type: 'address' },
      { indexed: true, name: 'to', type: 'address' },
      { indexed: false, name: 'value', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'event',
  },
];
const address = '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07';

const contract = web3.eth.Contract(abi1, address);
// remember to add const contract = new web3.eth.Contract(abi1, address);

contract.methods.totalSupply().call((err, result) => {
  console.log(result);
});
contract.methods.name().call((err, result) => {
  console.log(result);
});
contract.methods.symbol().call((err, result) => {
  console.log(result);
});
contract.methods
  .balanceOf('0xd26114cd6EE289AccF82350c8d8487fedB8A0C07')
  .call((err, result) => {
    console.log(result);
  });
main();
