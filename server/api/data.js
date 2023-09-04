export default defineEventHandler(async () => {

    return await $fetch(
        'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/')
})