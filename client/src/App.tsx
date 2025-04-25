import React from 'react'
import './App.css'
import Button from './assets/button'

export default function Home() {
  return (
    <main className='min-h-screen flex justify-center items-center'>
      <Button type="submit" autoFocus={true}/>
    </main>
  );
}

