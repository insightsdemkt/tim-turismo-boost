import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Diferenciais from "@/components/Diferenciais";
import Solucoes from "@/components/Solucoes";
import Frota from "@/components/Frota";
import ComoFunciona from "@/components/ComoFunciona";
import QuemSomos from "@/components/QuemSomos";
import PorQueEscolher from "@/components/PorQueEscolher";
import Depoimentos from "@/components/Depoimentos";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Solucoes />
        <Frota />
        <ComoFunciona />
        <QuemSomos />
        <PorQueEscolher />
        <Depoimentos />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
