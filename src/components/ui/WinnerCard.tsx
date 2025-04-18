
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

interface WinnerCardProps {
  name: string;
  prize: string;
  date: string;
}

export function WinnerCard({ name, prize, date }: WinnerCardProps) {
  return (
    <Card className="relative overflow-hidden group transform transition-all duration-300 hover:scale-105">
      <div className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <Trophy className="w-8 h-8 text-yellow-500 mb-3" />
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <Badge variant="secondary" className="bg-green-500/20 text-green-400">
          R$ {prize}
        </Badge>
        <p className="text-sm text-muted-foreground mt-3">{date}</p>
      </div>
    </Card>
  );
}
