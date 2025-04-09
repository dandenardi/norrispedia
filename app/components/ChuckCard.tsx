import React from "react";

type ChuckCardProps = {
  fact: string;
  onNewFact?: () => void;
};

export default function ChuckCard({ fact, onNewFact }: ChuckCardProps) {
  return (
    <div className="flex flex-col items-center gap6 max-w-xl p-6 border border-orange-200 rounded-lg shadow-md text-center">
      <p className="text-lg">{fact}</p>
      {onNewFact && (
        <button
          onClick={onNewFact}
          className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition duration-200"
        >
          Outra, por favor!
        </button>
      )}
    </div>
  );
}
