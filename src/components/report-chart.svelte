<script>
    import Chart from 'svelte-frappe-charts';
    import {Button} from "flowbite-svelte";
    export let rates;
    let data = {
        labels: rates.map(rate => rate.date),
        datasets: [
            {
                values: rates.map(rate => rate.ANG),
            },
            {
                values: rates.map(rate => rate.CAD),
            },
            {
                values: rates.map(rate => rate.USD),
            }
        ]
    };
</script>
<div class="flex items-end justify-between">
    <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white w-60">Chart of results</h5>
</div>
<Chart data={data} type="line" />