import React from "react";

type ChuckCardProps = {
  joke: string;
  onNewJoke?: () => void;
};


export default function ChuckCard({ joke, onNewJoke}: ChuckCardProps){
  return(
    <div className="flex flex-col items-center gap6 max-w-xl p-6 border border-orange-200 rounded-lg shadow-md text-center">
      <p className='text-lg'>{joke}</p>
      {onNewJoke && (
        <button
        onClick={onNewJoke}
        className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition duration-200"
      >
        Another one, please!
      </button>
      )}
    </div>
  )
}