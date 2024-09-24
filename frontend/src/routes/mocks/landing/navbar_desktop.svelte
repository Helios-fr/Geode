<script>
	import logo from '$lib/assets/images/logo.png';
    import wallet from '$lib/assets/images/wallet_connect.png';

	export let Navbar_Desktop;
</script>

<nav class="navbar w-full p-4">
	<div class="navbar-start flex-grow">
		<a class="btn btn-ghost" href="#">
			<img src={logo} alt="Logo" class="h-12" />
			<p class="text-4xl font-bold mb-1">Geode</p>
		</a>
		
		<div class="relative group">
			<a class="btn btn-ghost" href="#features">
				<p class="text-2xl font-bold">Sell</p>
			</a>
			<div class="absolute hidden group-hover:block">
				<div class="card card-side card-compact w-128 bg-primary shadow">
					<div class="card-body">
						<h2 class="card-title text-primary-content text-xl">Sell</h2>
						<p class="text-primary-content">Sell your files, safely and securely, with end-to-end encryption.</p>
					</div>
					<figure class="w-64 h-full">
						<img src="https://placehold.co/256x256" class="h-full object-cover" />
					</figure>
				</div>
			</div>
		</div>
		
		<div class="relative group">
			<a class="btn btn-ghost" href="#features">
				<p class="text-2xl font-bold">Store</p>
			</a>
			<div class="absolute hidden group-hover:block">
				<div class="card card-side card-compact w-128 bg-primary shadow">
					<div class="card-body">
						<h2 class="card-title text-primary-content text-xl">Store</h2>
						<p class="text-primary-content">Store your files securely and access them from anywhere, anytime.</p>
					</div>
					<figure class="w-64 h-full">
						<img src="https://placehold.co/256x256" class="h-full object-cover" />
					</figure>
				</div>
			</div>
		</div>
		
		<div class="relative group">
			<a class="btn btn-ghost" href="#features">
				<p class="text-2xl font-bold">Pay</p>
			</a>
			<div class="absolute hidden group-hover:block">
				<div class="card card-side card-compact w-128 bg-primary shadow">
					<div class="card-body">
						<h2 class="card-title text-primary-content text-xl">Pay</h2>
						<p class="text-primary-content">Get paid instantly for your services, without revealing your identity.</p>
					</div>
					<figure class="w-64 h-full">
						<img src="https://placehold.co/256x256" class="h-full object-cover" />
					</figure>
				</div>
			</div>
		</div>
		
		<div class="relative group">
			<a class="btn btn-ghost" href="#features">
				<p class="text-2xl font-bold">Keys</p>
			</a>
			<div class="absolute hidden group-hover:block">
				<div class="card card-side card-compact w-128 bg-primary shadow">
					<div class="card-body">
						<h2 class="card-title text-primary-content text-xl">Keys</h2>
						<p class="text-primary-content">Manage who can access your products and services, simply and securely.</p>
					</div>
					<figure class="w-64 h-full">
						<img src="https://placehold.co/256x256" class="h-full object-cover" />
					</figure>
				</div>
			</div>
		</div>
	</div>
	
	<div class="navbar-end flex-shrink" style="width: 0;">
		<a class="btn" href="#">
			<img src={wallet} alt="Wallet Connect" class="h-12" />
			<p class="text-xl font-bold">Connect Wallet</p>
		</a>
	</div>
</nav>