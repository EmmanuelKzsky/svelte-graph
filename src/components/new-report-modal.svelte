<script lang="ts">
    import {Button, NumberInput, Label, Modal, Input, Alert} from "flowbite-svelte";
    import {
        mutationStore,
        type OperationResultStore,
        type QueryArgs,
    } from '@urql/svelte';
    import {writable} from "svelte/store";
    import type {AddReportMutationVariables} from "../generated/graphql.js";
    import { format } from 'date-fns';
    import type {AddReportMutation} from "../generated/graphql.js";
    import {AddReportDocument} from "../generated/graphql.js";
    import client from '../stores/client';
    export let defaultModal;
    export let closeModal;
    let result: OperationResultStore<AddReportMutation, AddReportMutationVariables> | null = null
    let error;
    let report = writable({
        ANG: 0,
        CAD: 0,
        USD: 0,
        date: format(new Date(), 'yyyy-MM-dd')
    })

    const handleAddReport = (e: Event) => {
        e.preventDefault();
        result = mutationStore<AddReportMutation, AddReportMutationVariables>({client: $client, query: AddReportDocument, variables: {
                rate: $report
            }} as QueryArgs)
        result.subscribe(value => {
            if(!value.fetching && !value['error']) {
                error = undefined;
                closeModal();
            } else if (value['error']){
                error = value['error']['message'].replace("[GraphQL]",'');
            }
        })
    }
</script>
<Modal title="Add New Report" bind:open={defaultModal}>
    <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <Label for="ANG" class="mb-2">ANG Value</Label>
                <NumberInput bind:value={$report.ANG} type="number" id="ANG" placeholder="ANG Value" required  />
            </div>
            <div>
                <Label for="USD" class="mb-2">USD Value</Label>
                <NumberInput bind:value={$report.USD} type="number" id="USD" placeholder="USD Value" required />
            </div>
            <div>
                <Label for="CAD" class="mb-2">CAD Value</Label>
                <NumberInput bind:value={$report.CAD} type="number" id="CAD" placeholder="CAD Value" required />
            </div>
            <div>
                <Label for="date" class="mb-2">Repor Date</Label>
                <Input id="date" bind:value={$report.date} type="date"/>
            </div>
        </div>
    </form>
    {#if $result && $result.error}
    <Alert color="red">
        <span class="font-medium">Error!</span> {error}
    </Alert>
    {/if}
    <svelte:fragment slot='footer'>
        <Button on:click={handleAddReport}>Save</Button>
        <Button on:click={closeModal} color="alternative">Cancel</Button>
    </svelte:fragment>
</Modal>