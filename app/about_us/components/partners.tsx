import ResponsiveLayout from "./responsive-layout";
import Image from "next/image";

export default function Partners() {
  const partners = [
    { name: "TechCorp", logo: "/images/partners/techcorp.svg" },
    { name: "InnovateLab", logo: "/images/partners/innovatelab.svg" },
    { name: "FutureVentures", logo: "/images/partners/futureventures.svg" },
    { name: "AIFoundry", logo: "/images/partners/aifoundry.svg" },
    { name: "DevStudio", logo: "/images/partners/devstudio.svg" },
    { name: "CreativeHub", logo: "/images/partners/creativehub.svg" },
    { name: "StartupBoost", logo: "/images/partners/startupboost.svg" },
    { name: "CodeLabs", logo: "/images/partners/codelabs.svg" },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <ResponsiveLayout>
        <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16">
          {/* Header */}
          <div className="mb-8 md:mb-12 lg:mb-16 text-center">
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-xs md:text-sm mb-4">
              合作伙伴
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              携手共建创新生态
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              感谢这些优秀的合作伙伴与我们一起支持创新者社区，提供资源、指导和机会
            </p>
          </div>

          {/* Partners grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 flex items-center justify-center aspect-square transition-all duration-300 hover:shadow-md hover:border-primary/20"
              >
                {/* Placeholder for partner logo - in production, use actual images */}
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-3">
                    <span className="text-xl font-bold text-muted-foreground">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-center">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Become a partner */}
          <div className="mt-12 md:mt-16 text-center">
            <a 
              href="#" 
              className="inline-flex items-center justify-center rounded-md border border-primary bg-background px-4 py-2 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/5"
            >
              成为合作伙伴
            </a>
          </div>
        </div>
      </ResponsiveLayout>
    </section>
  );
} 