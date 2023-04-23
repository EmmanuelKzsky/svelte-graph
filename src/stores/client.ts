import { cacheExchange, createClient, fetchExchange } from "@urql/svelte";
import {readable} from "svelte/store";

const newClient = createClient({
    url: 'http://localhost:4000',
    exchanges: [cacheExchange, fetchExchange],
})

export default readable(newClient)