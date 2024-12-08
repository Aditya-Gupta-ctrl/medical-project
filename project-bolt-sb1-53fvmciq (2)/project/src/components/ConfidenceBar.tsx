import { Percent } from 'lucide-react';

interface Props {
  confidence: number;
}

export default function ConfidenceBar({ confidence }: Props) {
  const percentage = (confidence * 100).toFixed(1);
  const getColorClass = (value: number) => {
    if (value >= 90) return 'from-green-500 to-emerald-600';
    if (value >= 70) return 'from-red-500 to-rose-600';
    return 'from-yellow-500 to-amber-600';
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center">
        <span className="text-3xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
          {percentage}
        </span>
        <Percent className="h-5 w-5 text-gray-400 ml-1" />
      </div>
      <div className="h-3 w-full bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
        <div
          className={`h-full bg-gradient-to-r ${getColorClass(parseFloat(percentage))} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}