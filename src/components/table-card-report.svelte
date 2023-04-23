<script>
    import {
        Button,
        Card,
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
    } from "flowbite-svelte";
    import NewReportModal from './new-report-modal.svelte'
    export let rates;
    let defaultModal = false;
</script>
<Card size="xl" class="dark:bg-gray-900 max-w-max max-h-96 overflow-y-auto" >
    <div class="flex items-end justify-between">
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white w-60">Actual Reports: {rates.length || 0}</h5>
        <Button on:click={() => defaultModal = true}>Add Day Report</Button>
    </div>
    <div class="pt-3">
        <Table >
            <TableHead>
                <TableHeadCell>ANG</TableHeadCell>
                <TableHeadCell>USD</TableHeadCell>
                <TableHeadCell>CAD</TableHeadCell>
                <TableHeadCell>DATE</TableHeadCell>
            </TableHead>

            <TableBody class="divide-y">
                {#each rates as rate}
                    <TableBodyRow class="table-row-report">
                        <TableBodyCell>{rate.ANG}</TableBodyCell>
                        <TableBodyCell>{rate.USD}</TableBodyCell>
                        <TableBodyCell>{rate.CAD}</TableBodyCell>
                        <TableBodyCell>{rate.date}</TableBodyCell>
                    </TableBodyRow>
                {/each}
            </TableBody>
        </Table>
    </div>
</Card>
<NewReportModal defaultModal={defaultModal} closeModal={() => defaultModal = false}/>