import { MapPin } from 'lucide-react';

export default function GeoBadge({ text }: { text: string }) {
  if (!text) return null;

  return (
    <div className="bg-eyecare-blue text-white text-sm text-center py-1.5 px-4 flex items-center justify-center gap-2">
      <MapPin className="w-3.5 h-3.5" />
      <span className="font-medium">{text}</span>
    </div>
  );
}
