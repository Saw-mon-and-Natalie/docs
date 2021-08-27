(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{129:function(e,a,n){"use strict";n.d(a,"a",(function(){return u})),n.d(a,"b",(function(){return h}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var a=r.a.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},u=function(e){var a=p(e.components);return r.a.createElement(l.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=t,h=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(h,s(s({ref:a},l),{},{components:n})):r.a.createElement(h,s({ref:a},l))}));function h(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return s})),n.d(a,"metadata",(function(){return c})),n.d(a,"toc",(function(){return l})),n.d(a,"default",(function(){return u}));var t=n(3),r=n(7),i=(n(0),n(129)),o=["components"],s={title:"eip-1559 support"},c={unversionedId:"flashbots-auction/searchers/advanced/eip1559",id:"flashbots-auction/searchers/advanced/eip1559",isDocsHomePage:!1,title:"eip-1559 support",description:"Flashbots supports EIP-1559 transactions as of mev-geth v1.10.5-mev-0.3.0. This support",source:"@site/docs/flashbots-auction/searchers/advanced/eip1559.mdx",slug:"/flashbots-auction/searchers/advanced/eip1559",permalink:"/flashbots-auction/searchers/advanced/eip1559",version:"current",sidebar:"docs",previous:{title:"goerli testnet",permalink:"/flashbots-auction/searchers/advanced/goerli-testnet"},next:{title:"simple arbitrage bot",permalink:"/flashbots-auction/searchers/example-searchers/simple-arbitrage-bot"}},l=[{value:"FAQ",id:"faq",children:[{value:"Can a transaction specify <code>maxFeePerGas=0</code>",id:"can-a-transaction-specify-maxfeepergas0",children:[]},{value:"Can a transaction specify <code>maxPriorityFeePerGas=0</code>",id:"can-a-transaction-specify-maxpriorityfeepergas0",children:[]},{value:"Will reverting transactions still be discarded?",id:"will-reverting-transactions-still-be-discarded",children:[]},{value:"How can I send a transaction from an account with 0 ETH, like one with a malicious <code>sweeper</code> running against it?",id:"how-can-i-send-a-transaction-from-an-account-with-0-eth-like-one-with-a-malicious-sweeper-running-against-it",children:[]},{value:"Where can I learn more about EIP-1559?",id:"where-can-i-learn-more-about-eip-1559",children:[]}]}],p={toc:l};function u(e){var a=e.components,n=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(t.a)({},p,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Flashbots supports EIP-1559 transactions as of ",Object(i.b)("a",{parentName:"p",href:"https://github.com/flashbots/mev-geth/releases/tag/v1.10.5-mev0.3.0"},"mev-geth v1.10.5-mev-0.3.0"),". This support\nrequires no configuration changes for a searcher who is looking to use legacy transactions, but a block's ",Object(i.b)("inlineCode",{parentName:"p"},"base fee")," is a major change that will require transaction-level changes for any searcher using 0-gas-price transactions.\nSearchers are still able to pay the miner for priority via a direct transfer to the coinbase or via gas price in excess of the 1559 base fee, but their transaction MUST include an Ethereum gasPrice at least equal to base fee"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note: For searchers using legacy transactions, passing ",Object(i.b)("inlineCode",{parentName:"strong"},"gasPrice")," is equivalent to passing ",Object(i.b)("inlineCode",{parentName:"strong"},"maxFeePerGas")," equal to ",Object(i.b)("inlineCode",{parentName:"strong"},"gasPrice")," and including tip. Using a legacy transaction does not bypass the gasPrice >= baseFee requirement")),Object(i.b)("p",null,"Signing bundles with a legacy transaction:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'const signedTransactions = await flashbotsProvider.signBundle([\n    {\n      signer: authSigner,\n      transaction: {\n        to: "0xf1a54b075fb71768ac31b33fd7c61ad8f9f7dd18",\n        gasPrice: 10,\n        gasLimit: 33000,\n        chainId: 5,\n        value: 0,\n      },\n    },\n  ]);\n')),Object(i.b)("p",null,"Signing bundles with EIP-1559 transactions (note: ",Object(i.b)("inlineCode",{parentName:"p"},"chainId")," is a required attribute for 1559 transaction ",Object(i.b)("inlineCode",{parentName:"p"},"type: 2"),"):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'const block = await provider.getBlock("latest");\nconst maxBaseFeeInFutureBlock = FlashbotsBundleProvider.getMaxBaseFeeInFutureBlock(block.baseFeePerGas, 1);\nconst priorityFee = BigNumber.from(10).pow(9);\nconst signedTransactions = await flashbotsProvider.signBundle([\n    {\n      signer: authSigner,\n      transaction: {\n        to: "0xf1a54b075fb71768ac31b33fd7c61ad8f9f7dd18",\n        type: 2,\n        maxFeePerGas: priorityFee.add(maxBaseFeeInFutureBlock),\n        maxPriorityFeePerGas: priorityFee,\n        gasLimit: 33000,\n        chainId: 5,\n        value: 0,\n      },\n    },\n  ]);\n')),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("h3",{id:"can-a-transaction-specify-maxfeepergas0"},"Can a transaction specify ",Object(i.b)("inlineCode",{parentName:"h3"},"maxFeePerGas=0")),Object(i.b)("p",null,"No, all transactions must have maxFeePerGas greater than or equal to ",Object(i.b)("inlineCode",{parentName:"p"},"block.baseFeePerGas"),", or they are not eligible for inclusion in a block."),Object(i.b)("h3",{id:"can-a-transaction-specify-maxpriorityfeepergas0"},"Can a transaction specify ",Object(i.b)("inlineCode",{parentName:"h3"},"maxPriorityFeePerGas=0")),Object(i.b)("p",null,"Absolutely, although the miner will need some incentive to include this transaction. With a Flashbots bundle, you can incentivize a miner with ",Object(i.b)("inlineCode",{parentName:"p"},"block.coinbase.transfer()")," payments ",Object(i.b)("em",{parentName:"p"},"OR")," via ",Object(i.b)("inlineCode",{parentName:"p"},"maxPriorityFeePerGas"),". You can also use both at the same time; the incentive is cumulative."),Object(i.b)("h3",{id:"will-reverting-transactions-still-be-discarded"},"Will reverting transactions still be discarded?"),Object(i.b)("p",null,"Flashbots still uses the same reverting transactions logic after EIP-1559: Unless specified in ",Object(i.b)("inlineCode",{parentName:"p"},"revertingTxHashes")," in ",Object(i.b)("inlineCode",{parentName:"p"},"eth_sendBundle"),", a transaction that reverts invalidates an entire bundle. However, as searchers are now required to use gas prices as a result of the requirement for ",Object(i.b)("inlineCode",{parentName:"p"},"base fee")," gas payments, searcher transactions may appear in the mempool more often as a result of block re-organizations. When using ",Object(i.b)("inlineCode",{parentName:"p"},"gasPrice=0"),", re-organized transactions are quickly dropped from gossip and are unlikely to appear in a future block, unless done so by another searcher. Transactions paying at least base fee will stay in the mempool and are likely to appear in future blocks, which could violate expectations around reverting transactions."),Object(i.b)("h3",{id:"how-can-i-send-a-transaction-from-an-account-with-0-eth-like-one-with-a-malicious-sweeper-running-against-it"},"How can I send a transaction from an account with 0 ETH, like one with a malicious ",Object(i.b)("inlineCode",{parentName:"h3"},"sweeper")," running against it?"),Object(i.b)("p",null,"We have a working example of how to accomplish this in our ",Object(i.b)("a",{parentName:"p",href:"https://github.com/flashbots/searcher-sponsored-tx/"},"Sponsored Transaction Github Repository"),", which has been updated to work with EIP-1559."),Object(i.b)("h3",{id:"where-can-i-learn-more-about-eip-1559"},"Where can I learn more about EIP-1559?"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://hackmd.io/@q8X_WM2nTfu6nuvAzqXiTQ/1559-wallets"},"EIP-1559 Hackmd Cheat Sheet")))}u.isMDXComponent=!0}}]);