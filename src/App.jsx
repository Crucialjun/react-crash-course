import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Post from './components/post'

function App() {

  return (
  <>
  <Post author = "Maximilian" text="React.js is awesome"/>
  <Post author = "Manuel" text="Check out the full course"/>

  <Post></Post>
  <Post></Post>
  <Post></Post>
  </>
  )
 
}

export default App
