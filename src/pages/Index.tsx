
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { WinnerCard } from "@/components/ui/WinnerCard";
import { PrizeCard } from "@/components/ui/PrizeCard";
import { Instagram, Youtube, Link, Gift } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-2xl mx-auto px-4 py-16 space-y-10">
        {/* Profile Section */}
        <div className="text-center space-y-4">
          <Avatar className="w-24 h-24 mx-auto ring-4 ring-purple-500/50">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>SR</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold text-white">Super Sorteios</h1>
          <p className="text-gray-400">Sorteios semanais de prêmios em dinheiro! 🎉</p>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <Button variant="outline" className="w-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border-purple-500/20">
            <Instagram className="mr-2 h-5 w-5" /> Instagram
          </Button>
          <Button variant="outline" className="w-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border-purple-500/20">
            <Youtube className="mr-2 h-5 w-5" /> YouTube
          </Button>
          <Button variant="outline" className="w-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border-purple-500/20">
            <Link className="mr-2 h-5 w-5" /> Website
          </Button>
        </div>

        {/* Current Prize */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <Gift className="w-5 h-5" /> Sorteio Atual
          </h2>
          <PrizeCard 
            value="5.000"
            participants={1234}
            endDate="23/04/2024"
          />
        </div>

        {/* Recent Winners */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Últimos Ganhadores</h2>
          <div className="grid gap-4">
            <WinnerCard
              name="Maria Silva"
              prize="2.500"
              date="15/04/2024"
            />
            <WinnerCard
              name="João Santos"
              prize="1.000"
              date="08/04/2024"
            />
            <WinnerCard
              name="Ana Oliveira"
              prize="3.000"
              date="01/04/2024"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
