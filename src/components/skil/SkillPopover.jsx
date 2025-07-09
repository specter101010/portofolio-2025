import { Popover, PopoverContent, PopoverTrigger } from '@/components/animate-ui/base/popover';

export default function SkillPopover({
  iconSrc,
  skillName,
  description,
  level,
}) {
  return (
    <Popover>
      <PopoverTrigger
        render={
          <div
            className="w-15 h-15 flex justify-center items-center p-3 bg-white hover:bg-[#60B5FF] cursor-pointer rounded-md transition"
          >
            <img
              src={iconSrc}
              alt={skillName}
              className="w-12 h-12 object-contain hover:scale-105 transition "
            />
          </div>
        }
      />
      <PopoverContent className="w-64 bg-white text-black p-4 shadow-lg rounded-lg">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <img src={iconSrc} alt={skillName} className="w-8 h-8 object-contain " />
            <h4 className="font-semibold text-lg">{skillName}</h4>
          </div>
          <p className="text-sm text-gray-600">{description}</p>
          <div className="text-xs text-gray-500">Level: {level}</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
