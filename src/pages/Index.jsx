import Navbar from "../components/sections/NavbarSocial";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import About from "../components/sections/About";
import AboutInstagram from "../components/sections/AboutInstagram";
import Cta from "../components/sections/Cta";
import Steps from "../components/sections/Steps";
import Faq from "../components/sections/Faq";
import FooterSocial from "../components/sections/FooterSocial";

import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import BackToTopButton from "../components/interactives/BackToTopButton";

// Para ativar o modal na Sessão Feature, copiar e colar: modal={true} e remover para desativar.
// Para ativar o modal na Sessão About, copiar e colar: modal={true} e remover para desativar.
// Para ativar as informações de observação no Footer, adicionar (obs={true}) para informações de observação e remover para desativar.
// Para ativar o endereço no Footer, adicionar (addres={true}) para informações de observação e remover para desativar.
// Para ativar o modo LightMode na Navbar copie e cole: LightMode={true} e para desativar o modo LightMode Remova.
// Para ativar o modo LightMode no Footer copie e cole: LightMode={true} e para desativar o modo LightMode Remova.

export default function Index() {
  return (
    <div>
      <Navbar LightMode={true} />
      <Hero />
      <Features />
      <About modal={true} />
      {/* <AboutInstagram /> */}
      <Cta />
      <Steps />
      <Faq />
      <FooterSocial obs={false} addres={true} />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </div>
  );
}
