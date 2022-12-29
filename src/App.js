import React from 'react'
import PhotoContainer from './components/photoContainer'

export default function App() {


  let photoArray = [
    {

      "name": "Valaria",
      "imageURL": "https://images.pexels.com/photos/14840714/pexels-photo-14840714.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {


      "name": "Jasmin",
      "imageURL": "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {

      "name": "Leah",
      "imageURL": "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {

      "name": "Pavel",
      "imageURL": "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {

      "name": "Nati",
      "imageURL": "https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
      "name": "Hatice",
      "imageURL": "https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      "avatar": "https://reqres.in/img/faces/12-image.jpg"
    },

    {
      "name": "Ali",
      "imageURL": "https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      "avatar": "https://reqres.in/img/faces/12-image.jpg"
    },

    {
      "name": "Hatice1",
      "imageURL": "https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      "avatar": "https://reqres.in/img/faces/12-image.jpg"
    },

    {
      "name": "Hatice2",
      "imageURL": "https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }
  ]

  return (
    <div style={{
      padding: 20,
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gridTemplateRows: "masonry",
      gap: 20
    }} >
      {
        photoArray.map((item) => <PhotoContainer data={item} />)
      }
    </div >
  )
}
