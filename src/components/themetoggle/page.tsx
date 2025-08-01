'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`p-2 rounded-full ${
        isDark ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'
      }`}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}