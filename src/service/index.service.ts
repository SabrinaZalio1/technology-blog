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

// export function createPost(data: { title: string; subtitle: string }) {
//     const url = `${base_url}/api/posts`; 
//     return axios.post(url, data);
//   }

export function createPost(data: { title: string; subtitle: string; topic?: string; author?: string; readTime?: number; coverImg?: string; body?: string }) {
  const url = `${base_url}/api/posts`; 
  return axios.post(url, { data }, {
    headers: { "Content-Type": "application/json" }
  });
}
  export function updatePost(id: string | number, data: { title?: string; subtitle?: string }) {
    const url = `${base_url}/api/posts/${id}`;
    return axios.put(url, data);
  }