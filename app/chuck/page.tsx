'use client'

import {useEffect, useState} from 'react';
import ChuckCard from '@/components/ChuckCard';

export default function ChuckPage(){
  const [joke, setJoke] = useState('');

 
 async function getRandomJoke(){
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json()
    setJoke(data.value);
  } catch (error) {
    console.error("Could not fetch a new joke (maybe Chuck Norris thinks you shouldn't...", error);
  }
 }
 
  useEffect(()=>  {
    getRandomJoke();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
      <h1 className="text-3xl" font-bold text-center text-orange-600>
        Chuck Norris Joke!
      </h1>
      <ChuckCard joke={joke} onNewJoke={getRandomJoke} />

    </main>
  )

}