
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { WinnerCard } from "@/components/ui/WinnerCard";
import { PrizeCard } from "@/components/ui/PrizeCard";
import { Instagram, Youtube, Link, Gift } from "lucide-react";

export default function Index() {
  return (
    <>
      <div className="tiktok-pattern" />
      <div className="min-h-screen bg-gradient-to-b from-white to-[#f9f9f9] relative">
        <div className="max-w-2xl mx-auto px-4 py-16 space-y-10 relative z-10">
          {/* Profile Section */}
          <div className="text-center space-y-4 animate-fade-in">
            <Avatar className="w-24 h-24 mx-auto ring-4 ring-[#FE2C55] transition-transform duration-300 hover:scale-105">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-gradient-to-br from-[#FE2C55] to-[#25F4EE] text-white">
                SR
              </AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-bold">Super Sorteios</h1>
            <p className="text-muted-foreground">Sorteios semanais de prêmios em dinheiro! 🎉</p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            {[
              { icon: <Instagram />, text: "Instagram", special: true },
              { icon: <Youtube />, text: "YouTube" },
              { icon: <Link />, text: "Website" }
            ].map((link, i) => (
              <Button
                key={link.text}
                variant={link.special ? "default" : "outline"}
                className={`w-full gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                  link.special 
                    ? "bg-gradient-to-r from-[#FE2C55] to-[#25F4EE] hover:opacity-90" 
                    : "hover:border-[#FE2C55]"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {link.icon}
                {link.text}
              </Button>
            ))}
          </div>

          {/* Current Prize */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
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
            <h2 className="text-xl font-semibold">Últimos Ganhadores</h2>
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
    </>
  );
}
