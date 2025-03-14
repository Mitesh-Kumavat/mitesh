import React, { useState, useEffect } from 'react';

export const App: React.FC = () => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const countdownDate = new Date("2025-06-30T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col justify-center items-center p-4">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
          Coming Soon
        </h1>
        <p className="text-xl md:text-2xl mb-12 animate-slide-up">
          I'm working on my portfolio website currently!
          <br />
          <span className='text-xl'>Will launch this till 30 June 2025</span>
        </p>

        <div className="flex justify-center space-x-4 mb-12">
          {[
            { label: 'Days', value: days },
            { label: 'Hours', value: hours },
            { label: 'Minutes', value: minutes },
            { label: 'Seconds', value: seconds },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-4xl md:text-6xl font-bold mb-2 animate-pulse">
                {item.value}
              </div>
              <div className="text-sm uppercase">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      <footer className="mt-16 text-center">
        <p>&copy; {new Date().getFullYear()} Mitesh Kumavat. All rights reserved.</p>
      </footer>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animate-slide-up {
          animation: slideUp 1s ease-out;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
      `}</style>
    </div>
  );
};
