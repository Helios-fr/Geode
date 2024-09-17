<script>
    import logo_text from '$lib/assets/images/logo_text.png';
    import logo from '$lib/assets/images/logo.png';
    import wallet from '$lib/assets/images/wallet_connect.png';

    const FAQ = [
        {
            question: 'What is this?',
            answer: 'This is a platform for selling digital goods privately.'
        },
        {
            question: 'How does it work?',
            answer: 'You can create a listing, and share the link with the buyer. The buyer can then purchase the item, and you will receive the funds.'
        },
    ];
    
</script>

<!-- Screen One -->
<div class="flex min-h-screen flex-col">
    <nav class="navbar bg-accent">
        <div class="flex-1">
            <a href="#" class="lg:h-32 h-1/12">
                <img src={logo_text} alt="logo" class="lg:h-32 h-1/15" />
            </a>
        </div>

        <!-- On the left links to #why and #how -->
        <div class="flex-0">
            <a href="#faq" class="h-auto text-neutral text-5xl lg:mr-10 mr-3 underline font-bold">
                FAQ
            </a>
            <a  href="/mocks/sell" class="h-auto text-neutral text-5xl lg:mx-10 mx-3 underline font-bold">
                Get started
            </a>
        </div>
    </nav>

    <!-- Full height hero, with centered heading, subheading, and button on the left, and a full sized logo image on the right centered vertically and horizontally -->
    <div class="hero flex-1 bg-accent">
        <div class="hero-content flex-grow flex flex-col justify-center items-center">
            <div class="flex-1">
                <h1 class="lg:text-9xl text-7xl font-bold text-neutral">Sell digital goods, privately.</h1><br><br>
                <a class="h-auto text-neutral text-5xl underline font-bold" href="/mocks/sell">Get started</a>
            </div>
        </div>
    </div>
</div>

<!-- Screen Two -->
<div class="min-h-screen bg-primary" id="faq">
    <div class="flex flex-col justify-center items-center">
        <div class="flex-1 lg:mt-32 mt-6 mb-20">
            <h1 class="text-9xl font-bold text-neutral">FAQ</h1>
        </div>
        {#each FAQ as {question, answer}}
        <!-- with fixed width -->
            <div class="flex-1 lg:w-1/2 w-10/12">
                <h2 class="text-5xl font-bold text-neutral">{question}</h2>
                <p class="text-3xl text-neutral">{answer}</p>
            </div>
        {/each}
    </div>
</div>