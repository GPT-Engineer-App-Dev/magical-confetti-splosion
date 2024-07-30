import ConfettiEffect from '../components/ConfettiEffect';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Wicked Confetti App</h1>
        <ConfettiEffect />
      </div>
    </div>
  );
};

export default Index;
