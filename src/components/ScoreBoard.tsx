import React from 'react';
import { Trophy, User, Users } from 'lucide-react';

interface BoardProps {
  s: {
    X: number;
    O: number;
    draws: number;
  };
}

const Board: React.FC<BoardProps> = ({ s }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
        <Trophy className="h-5 w-5 text-yellow-500" />
         Board
      </h2>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center p-2 bg-indigo-50 rounded">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-indigo-600" />
            <span className="font-medium"></span>
          </div>
          <span className="text-lg font-bold text-indigo-600">{s.X}</span>
        </div>
        
        <div className="flex justify-between items-center p-2 bg-purple-50 rounded">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-purple-600" />
            <span className="font-medium">Appanna swamy</span>
          </div>
          <span className="text-lg font-bold text-purple-600">{s.O}</span>
        </div>
        
        <div className="flex justify-between items-center p-2 bg-gray-100 rounded">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-gray-600" />
            <span className="font-medium">Draws</span>
          </div>
          <span className="text-lg font-bold text-gray-600">{s.draws}</span>
        </div>
      </div>
    </div>
  );
};

export default Board;
