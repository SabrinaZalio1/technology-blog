import axios from "axios";

const base_url = 'https://lite-tech-api.litebox.ai'

export function getPosts() {
    const url = `${base_url}/api/posts`;
    return axios.get(url);
}

export function getPost(id: string | number) { 
    const url = `${base_url}/api/posts/${id}`;
    return axios.get(url);
}
