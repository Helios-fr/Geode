### Research ([Goto Explore Index](./README.md))
This page gives a surface level overview of the potential technology needed to make this project function.

### Frontend
For the frontend [SvelteKit](https://kit.svelte.dev/) will be used to serve as the UI, with supporting packages of [Tailwind](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/).

### Blockchain
The [polygon blockchain](https://sveltekit.io/blog/web3-svelte) will be used to provide ownership verification, and be used as a payment gateway, for this we need to be able to:
- Accept [payments](https://docs.multiversx.com/developers/developer-reference/sc-payments/)
- [Distribute funds](https://ethereum.stackexchange.com/questions/125344/how-to-send-ether-from-a-smart-contract-address-to-another-address) between operators and sellers
- [Contact an outside service](https://stackoverflow.com/questions/72642232/which-is-better-to-listen-events-from-smart-contract-contract-on-or-response-wa) to fulfil the request for the file.

### Backend
The backend only needs to be able to provide fulfilment for file requests, being able to, this might be possible with [golang](https://go.dev/)
- Check if a file has been paid for by the user, potentially by [verifying a transaction ID](https://goethereumbook.org/transaction-query/), and getting the user to sign it with their wallet.
- Providing the [download link to the user](https://cloud.google.com/storage/docs/json_api), that is [time limited](https://cloud.google.com/storage/docs/access-control/signed-urls)

### Storage
The storage solution needs to be able to store lots of files, with low costs for storage, for this [firebase](https://firebase.google.com/pricing) could be used, however it is quite expensive when considering network and download fee's. Another option would be self-hosing a server, which is expensive to setup but cheap to maintain.

