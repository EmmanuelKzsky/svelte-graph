<script>
    import { Card } from "flowbite-svelte";
    let vCard = false;
</script>
<div class="pt-5 flex justify-center">
    <Card img="/images/emmanuel.jpeg" reverse={vCard}>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Emmanuel Castro</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
            About me: <br> I am fullstack developer who likes to innovate all the time
            and offer the best solutions for the customers always caring about performance of their products.
        </p>
    </Card>
</div>