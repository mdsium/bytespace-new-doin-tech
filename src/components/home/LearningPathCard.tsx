import React from 'react';
import { Compass, Code2, Laptop, Building2, Megaphone, Camera } from 'lucide-react';
import { LearningPath } from '../../data/learningPaths';

interface LearningPathCardProps {
  path: LearningPath;
  onClick?: () => void;
}

export const LearningPathCard: React.FC<LearningPathCardProps> = ({ path, onClick }) => {
  const renderIcon = (name: string) => {
    const props = { className: 'w-6 h-6 text-slate-950 stroke-[2.2]' };
    switch (name) {
      case 'Compass':
        return <Compass {...props} />;
      case 'Code2':
        return <Code2 {...props} />;
      case 'Laptop':
        return <Laptop {...props} />;
      case 'Building2':
        return <Building2 {...props} />;
      case 'Megaphone':
        return <Megaphone {...props} />;
      case 'Camera':
        return <Camera {...props} />;
      default:
        return <Compass {...props} />;
    }
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className="group flex flex-col items-center justify-center p-3.5 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(12,74,235,0.09)] hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center w-[167px] h-[167px] shrink-0"
      style={{ width: '167px', height: '167px' }}
    >
      <div className="w-14 h-14 rounded-full bg-[#D4FC02] flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 shadow-sm shrink-0">
        {renderIcon(path.icon)}
      </div>

      <span className="text-sm font-bold text-slate-900 group-hover:text-[#0C4AEB] transition-colors leading-tight px-1 line-clamp-2">
        {path.name}
      </span>
    </button>
  );
};
