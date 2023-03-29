import { writable, type Writable } from "svelte/store";

export interface UserData {
    firstName: string,
    lastName: string,
    type: string
}

export interface Question {
    label: string,
    name: string,
    required: boolean
}

export let userData: Writable<UserData> = writable({
    firstName: "",
    lastName: "",
    type: ""
})