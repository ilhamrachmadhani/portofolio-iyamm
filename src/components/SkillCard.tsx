interface SkillCardProps {
  name: string;
  icon: string;
  delay?: number;
}

export const SkillCard = ({ name, icon, delay = 0 }: SkillCardProps) => {
  return (
    <div 
      className="group bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-600"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-center">
        <div className="relative mb-4 mx-auto w-12 h-12 sm:w-16 sm:h-16">
          <img 
            src={icon} 
            alt={name} 
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <h4 className="font-medium text-sm sm:text-base text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {name}
        </h4>
      </div>
    </div>
  );
};