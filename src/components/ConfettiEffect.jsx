import { useState, useCallback, useEffect } from 'react';
import ReactConfetti from 'react-confetti';

const ConfettiEffect = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const handleExplode = useCallback(() => {
    setIsExploding(true);
    setTimeout(() => setIsExploding(false), 5000);
  }, []);

  return (
    <div className="relative h-screen">
      <ReactConfetti
        width={dimensions.width}
        height={dimensions.height}
        numberOfPieces={isExploding ? 500 : 0}
        recycle={false}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={handleExplode}
          className="px-6 py-3 text-lg font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition-colors duration-200"
        >
          Explode Confetti!
        </button>
      </div>
    </div>
  );
};

export default ConfettiEffect;
