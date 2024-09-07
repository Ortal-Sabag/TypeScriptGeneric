import { Default } from './../../../Cricket/Cricket-catalog1/src/components/tailwindcss-components/Tabs/Tabs.stories';
/*Example 1: */
function getFirstElement<ElememtType> (arr: ElememtType[]){
    return arr[0];
}

const numbers = [1,2,3];
const firstElement = getFirstElement(numbers);

const strings = ["ffg", "fgsss"];
const firstString = getFirstElement(strings);


/*Example 2: */
//querySelector is genric function
const input = document.querySelector('.input');
input?.value;

const input2 = document.querySelector<HTMLInputElement>('.input');
input2?.value;

/*Example 3: */

//map also has genric type
const a = [1,2,3];
a.map(()=> {
    return "gdgd"
})

/*Example 4: */

//Map
const map = new Map<string, number>();
map.set('ass', 3);

const map2 = new Map([["ss", 3]]);
map2.set('ass', 3);

const map3 = new Map<string, number>([["ss", 3]]);
map2.set('ass', 3);

const map4 = new Map<string, Map<string, number>>();


/*Example 5: */
type ApiResponse<Data = {status: number}> = {
    data: Data,
    isError: boolean
}

const response: ApiResponse<{name: string, age: number}> = {
    data: {
        name: 'Ortal',
        age: 34
    },
    isError: false
}

/*Example 6: */

type UserResponse = ApiResponse<{name: string, age: number}>
type BlogResponse = ApiResponse<{title: string}>
type StatusResponse = ApiResponse<{status: number}>
type DefaultResponse = ApiResponse;

const response2: UserResponse = {
    data: {
        name: 'Ortal',
        age: 34
    },
    isError: false
}

const blogResponse: BlogResponse = {
    data: {
        title: 'Ortal',
    },
    isError: false
}

const reposnseDefault: ApiResponse = {
    data: {
        status: 200
    },
    isError: false
}

const reposnseDefault2: ApiResponse<{name: string}> = {
    data: {
        name: 'ddd'
    },
    isError: false
}

const reposnseDefault3: ApiResponse<string> = {
    data: "",
    isError: false
}


type ApiResponse2<Data extends object> = {
    data: Data,
    isError: boolean
}

const reposnseDefault4: ApiResponse2<{name: string}> = {
    data: {
        name: 'ddd'
    },
    isError: false
}

type ApiResponse5<Data extends object={status: number}> = {
    data: Data,
    isError: boolean
}

const reposnseDefault5: ApiResponse5 = {
    data: {
        status: 200
    },
    isError: false
}