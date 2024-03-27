import {FormEvent} from "react";

export function login(event: FormEvent, username: string, password: string) {
    event.preventDefault();
    console.log(`Login: ${username}`);
}
