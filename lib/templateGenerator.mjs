export const generateUsersHTML = (user) => {
    return `
    <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>
            <button class="delete-user" data-id="${user.id}" data-user-name="${user.name}">delete</button>
        </td>
    </tr>
    `
}