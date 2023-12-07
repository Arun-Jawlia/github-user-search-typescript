

const getUsername = document.getElementById('#user') as HTMLInputElement
const formSubmit  = document.querySelector('#form') as HTMLFormElement
// const formSubmit : HTMLFormElement | null = document.querySelector('.form') as HTMLFormElement

const Url:string = 'https://api.github.com/users'

const main_container = document.querySelector('.main-container') as HTMLElement 


// lets define the blueprint of an object

interface UserData{
    id:number;
    login: string;
    avatar_url :string;
    location: string;
    url: string

}



// resuable function

async function myCustumFunction<T>(url:string, option?:RequestInit): Promise<T> 
{
    const res = await fetch(url)

    if(!res.ok)
    {
        throw new Error(`Network error: ${res.status}}`)
    }

    const data = await res.json()
    // console.log(data)
    return data

}


// Function call 

const fetchUserData = (url:string)  =>
{
    myCustumFunction<UserData[]>(url, {})

}



fetchUserData(Url)