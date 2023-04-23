<script lang="ts">
    import { Card} from "flowbite-svelte";
    import {queryStore, type QueryArgs} from '@urql/svelte';
    import {GetReportDocument, type GetReportQueryVariables} from '../generated/graphql'
    import type {GetReportQuery} from '../generated/graphql'
    import TableCardReport from "../components/table-card-report.svelte";
    import ReportChart from "../components/report-chart.svelte";
    import client from '../stores/client';

    const reportData = queryStore<GetReportQuery, GetReportQueryVariables>({client: $client, query: GetReportDocument} as QueryArgs);
</script>
<svelte:head>
    <title>Cases of use</title>
</svelte:head>

<div class="flex pt-5 justify-between">
    <div class="container w-6/12">
        {#if $reportData.fetching}
            <p>Loading report data....</p>
        {:else if $reportData.error}
            <p>Error loading the data {$reportData.error}</p>
        {:else}
            <TableCardReport rates={$reportData.data.getReport.rates}/>
        {/if}
    </div>
    <div class="container w-5/12">
        <Card size="xl" class="dark:bg-gray-900" >
            {#if $reportData.fetching}
                <p>Loading report data....</p>
            {:else if $reportData.error}
                <p>Error loading the data {$reportData.error}</p>
            {:else}
                <ReportChart rates={$reportData.data.getReport.rates}/>
            {/if}

        </Card>
    </div>
</div>




