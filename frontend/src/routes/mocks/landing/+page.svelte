<script>
    import Navbar_Desktop from './navbar_desktop.svelte';
    import Navbar_Mobile from './navbar_mobile.svelte';
</script>

<!-- Screen One Desktop -->
<div class="flex min-h-screen flex-col hidden md:block" id="hero">
    <Navbar_Desktop />

    Screen One Desktop
</div>

<!-- Screen One Mobile -->
<div class="flex min-h-screen flex-col md:hidden" id="hero">
    <Navbar_Mobile />

    Screen One Mobile
</div>

<!-- Screen Two Desktop -->
<div class="min-h-screen bg-primary hidden md:block" id="features">
    Screen Two Desktop 
</div>

<!-- Screen Two Mobile -->
<div class="min-h-screen bg-primary md:hidden" id="features">
    Screen Two Mobile
</div>

<!-- Screen Three Desktop -->
<div class="min-h-screen hidden md:block" id="cta">
    Screen Three Desktop
</div>

<!-- Screen Three Mobile -->
<div class="min-h-screen md:hidden" id="cta">
    Screen Three Mobile
</div>