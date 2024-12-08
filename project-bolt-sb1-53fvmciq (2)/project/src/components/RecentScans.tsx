import React from 'react';
import { ChevronRight } from 'lucide-react';

const DEMO_SCANS = [
  {
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=300&h=200',
    date: '2024-03-15',
    type: 'Brain MRI',
  },
  {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?auto=format&fit=crop&q=80&w=300&h=200',
    date: '2024-03-14',
    type: 'Contrast MRI',
  },
  {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=300&h=200',
    date: '2024-03-13',
    type: 'Functional MRI',
  },
];

export default function RecentScans() {
  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">Recent Scans</h2>
        <button className="flex items-center text-sm text-gray-400 hover:text-white transition-colors">
          View All <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DEMO_SCANS.map((scan) => (
          <div
            key={scan.id}
            className="relative group cursor-pointer transition-transform duration-300 transform hover:scale-105"
          >
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src={scan.thumbnail}
                alt={`Scan from ${scan.date}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm font-medium">{scan.type}</p>
                <p className="text-xs text-gray-400">{scan.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}