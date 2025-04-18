
import { Card } from "@/components/ui/card";
import { CircleDollarSign } from "lucide-react";

interface PrizeCardProps {
  value: string;
  participants: number;
  endDate: string;
}

export function PrizeCard({ value, participants, endDate }: PrizeCardProps) {
  return (
    <Card className="relative overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105">
      <div className="p-6 bg-gradient-to-r from-[#FE2C55]/20 to-[#25F4EE]/20">
        <div className="flex items-center gap-2 mb-4">
          <CircleDollarSign className="w-6 h-6 text-[#FE2C55]" />
          <h3 className="text-2xl font-bold">R$ {value}</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-2">
          {participants} participantes
        </p>
        <p className="text-xs text-muted-foreground">Termina em: {endDate}</p>
      </div>
    </Card>
  );
}
