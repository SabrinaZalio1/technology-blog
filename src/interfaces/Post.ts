export interface IPostAttributes {
    author: string;
    body: string;
    coverImg: IImageData
    createdAt: string
    publishedAt: string
    readTime: number
    subtitle: string
    title: string
    topic: string
    updatedAt: string
  }
  
 export  interface IImageAttributes {
    name: string;
    url: string;
  }
  
export  interface IImageData {
    id: number;
    attributes: IImageAttributes;
  }

  export interface IPost {
    id?: number;
    attributes: IPostAttributes;
    variant?:string;
  }