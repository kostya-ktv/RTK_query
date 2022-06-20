import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IPost } from '../Model/post.interface'

export const postsAPI = createApi({
   reducerPath: 'postAPI',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://localhost:3000'
   }),
   tagTypes: ['Post'],
   endpoints: (build) => ({
      fetchAllPosts: build.query<IPost[], number>({
         query: (limit: number = 5) => ({
            url: '/posts',
            params: {
               _limit: limit
            }
         }),
         providesTags: res => ['Post']
      }),
      createPost: build.mutation<IPost, IPost>({
         query: (post) => ({
            url: '/posts',
            method: 'POST',
            body: post
         }),
         invalidatesTags: ['Post']
      }),
      updatePost: build.mutation<IPost, IPost>({
         query: (post) => ({
            url: `/posts/${post.id}`,
            method: 'PUT',
            body: post
         }),
         invalidatesTags: ['Post']
      }),
      deletePost: build.mutation<IPost, IPost>({
         query: (post) => ({
            url: `/posts/${post.id}`,
            method: 'DELETE',
         }),
         invalidatesTags: ['Post']
      }),

   })
})