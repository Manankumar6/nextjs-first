import { CheckCircle } from "lucide-react"; // Import your preferred icon
import { GlareCard } from "@/components/ui/glare-card";

export function DynamicList({  list }) {
  return (
    <GlareCard className="flex flex-col items-start justify-start p-6">
      <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500">
      Features
      </h3>
      <ul className="grid grid-cols-2 gap-y-2 mt-4">
        {list.map((item, index) => (
          <li key={index} className="flex items-center space-x-2 text-gray-200">
            <CheckCircle className="text-blue-500 w-5 h-5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </GlareCard>
  );
}
