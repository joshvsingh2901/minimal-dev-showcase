
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="flex flex-col items-center">
        <div className="loading-icon mb-6">
          <div className="code-part" />
          <div className="business-part" />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-1">Joshveer Singh Chhabra</h2>
          <p className="text-gradient font-mono">CS / BBA Student & Developer</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
