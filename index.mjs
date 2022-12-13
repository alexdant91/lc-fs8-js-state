import { Constants } from "./lib/constants.mjs"
import { generateUsersHTML } from "./lib/templateGenerator.mjs";

const $table = document.querySelector("#table")

const state = {
    users: [],
}

const fetchUsers = async () => {
    try {
        const result = await fetch(Constants.API_BASE_URL);
        const users = await result.json();
        state.users = users;
    } catch(error) {
        console.log(error)
    }
}

const renderUsers = () => {
    const html = state.users.map((user) => generateUsersHTML(user)).join("")
    
    $table.innerHTML = html;
}

const init = async () => {
    await fetchUsers()
    renderUsers()
}



init()