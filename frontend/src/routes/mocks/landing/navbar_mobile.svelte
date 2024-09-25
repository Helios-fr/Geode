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
		
		<div class="dropdown dropdown-hover">
            <summary class="btn btn-ghost text-xl font-bold">Services <i class="bi bi-caret-down-fill"></i></summary>
            <ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <a href="#features">Sell</a>
                </li>
                <li>
                    <a href="#features">Store</a>
                </li>
                <li>
                    <a href="#features">Pay</a>
                </li>
                <li>
                    <a href="#features">Keys</a>
                </li>
            </ul>
        </div>
	</div>

	<div class="navbar-end flex-shrink" style="width: 0;">
		<a class="btn bg-gradient-to-r from-primary to-accent" href="#">
			<p class="text-xl font-bold text-base-200">Connect Wallet</p>
		</a>
	</div>
</nav>