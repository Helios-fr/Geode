<script>
	import logo from '$lib/assets/images/logo.png';

	export let Navbar_Desktop;
</script>

<nav class="navbar w-full p-4 bg-base-200">
	<div class="navbar-start flex-grow">
		<a class="btn btn-ghost" href="#">
			<img src={logo} alt="Logo" class="h-12" />
			<p class="text-4xl font-bold">Geode</p>
		</a>
		
		<a class="btn btn-ghost" href="#features">
			<p class="text-xl font-bold ">Sell</p>
		</a>
		
		<a class="btn btn-ghost" href="#features">
			<p class="text-xl font-bold">Store</p>
		</a>
		
		
		<a class="btn btn-ghost" href="#features">
			<p class="text-xl font-bold">Pay</p>
		</a>
		
		<a class="btn btn-ghost" href="#features">
			<p class="text-xl font-bold">Keys</p>
		</a>
	</div>

	<div class="navbar-end flex-shrink" style="width: 0;">
		<a class="btn bg-gradient-to-r from-primary to-accent" href="#">
			<p class="text-xl font-bold text-base-200">Connect Wallet</p>
		</a>
	</div>
</nav>