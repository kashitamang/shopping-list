const SUPABASE_URL = 'https://kxmmrwriuitalwrkjfpg.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4bW1yd3JpdWl0YWx3cmtqZnBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTc2MTgsImV4cCI6MTk2Nzg3MzYxOH0.FifnX44R83DRNIIvOYNAWTyoqlbl45PDPn8n0duFB7o';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./list');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

// function checkError({ data, error }) {
//     return error ? console.error(error) : data;
// }

export async function createListItem(name, quantity) {
    const response = await client.from('shopping_list').insert({ name, quantity });
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}