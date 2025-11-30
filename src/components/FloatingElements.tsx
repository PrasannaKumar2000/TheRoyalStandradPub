import { Beer, Wine, Coffee, Pizza, Utensils } from 'lucide-react';
import { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [elements, setElements] = useState<Array<{ id: number; icon: JSX.Element; left: string; delay: number }>>([]);

  useEffect(() => {
    const icons = [Beer, Wine, Coffee, Pizza, Utensils];
    const newElements = Array.from({ length: 8 }, (_, i) => {
      const Icon = icons[Math.floor(Math.random() * icons.length)];
      return {
        id: i,
        icon: <Icon className="w-8 h-8 text-amber-400/30" />,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
      };
    });
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-float opacity-20"
          style={{
            left: element.left,
            bottom: '-100px',
            animationDelay: `${element.delay}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        >
          {element.icon}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
