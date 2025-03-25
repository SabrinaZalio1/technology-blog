export interface IPostAttributes {
   author: string;
   body: string;
   coverImg: IImageAttributes;
   createdAt: string;
   publishedAt: string;
   readTime: number;
   subtitle: string;
   title: string;
   topic: string;
   updatedAt: string;
}

export interface IImageAttributes {
   data: {
      attributes: {
         name: string;
         url: string;
      }
   }

}

// export interface IImageData {
//    id: number;
//    attributes: IImageAttributes;
// }

export interface IPost {
   id?: number;
   attributes: IPostAttributes;
   variant?: 'dark' | 'light';
   headerVariant?: 'pill' | 'author';
}
export interface ICreatePost {
      data: {
         title: string;
         subtitle: string;
         topic: string;
         author: string;
         readTime: number;
         coverImg: number;
         body: string;
      }

}
