import { useState } from "react";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import content from "../../content/content";
import Button from "../interactives/Button";
import imgAppStore from "../../assets/imgs/hero/appStore.png";
import imgGooglePlay from "../../assets/imgs/hero/googlePlay.png";
import imgLaw from "../../assets/imgs/hero/lawHero.jpg";
import imgPoints from "../../assets/imgs/about/points.png";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function HeroBgImg() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const onClick = () => {
    setModalTitle("Passeio de barco");
    setModalContent(
      <p>
        ROTEIRO:
        <br /> Prainhas do Pontal do Atalaia, que contém a Gruta do Amor e a
        escadaria (desembarque de 40 min)
        <br /> Ilha do Farol (desembarque de 20 min)
        <br /> Fenda de Nossa Senhora (passagem panorâmica)
        <br /> Perfil do Gorila (passagem panorâmica)
        <br /> Gruta Azul (passagem panorâmica)
        <br /> Impacto do Meteorito (passagem panorâmica)
        <br /> Praia do Forno (parada na enseada por 15 min)
        <br />
        <br />
        INFORMAÇÕES GERAIS:
        <br /> •Nosso passeio tem duração de 3:30/4h.
        <br /> •Nossas embarcações possuem banheiros masculino e feminino,
        música ambiente, bar à bordo.
        <br /> •De acordo com a lei 2.348/12nov de 2021 fica proibido a entrada
        de cooler e demais recipientes nas embarcações de turismo que utiliza a
        Marina dos pescadores.
        <br /> •Temos todos os equipamentos de salvatagem exigidos pela Marinha
        do Brasil. ( devidamente higienizados)
        <br /> •Caso não haja condições de desembarque ou visitação de algum
        local descrito acima, devido as condições do mar, compensaremos o tempo
        em outro ponto turístico se possível for.
        <br /> •O roteiro pode sofrer alterações sem aviso prévio, tendo o
        capitão da embarcação total liberdade para alterá-lo, sempre visando a
        segurança e bem estar de nossos passageiros. *Crianças até 3 anos não
        pagam (todas contam como passageiros)
        <br /> *Serviços de bordo pagos à parte: refrigerantes, cervejas, água
        de garrafinha, espetinhos, drinks.
        <br /> *Solicitamos que os passageiros venham com o mínimo de bolsas,
        não nos responsabilizamos pela mesma.
        <br />
        <br />
        HORÁRIO:
        <br /> Nosso passeio sai a partir das 09.30 Hs (favor confirmar o
        horário), tendo que estar para o check-in com 1 hora de antecedência,
        lembrando que a cidade fica lotada sempre, temos bastante trânsito,
        então pedimos que saiam cedo para evitar que percam o passeio, caso
        aconteça de perder o horário, o valor não é reembolsado, pois sairemos
        com as vagas em aberto, o valor só é devolvido em caso de cancelamento
        do passeio por motivos climáticos. PARA RESERVAR: Obs: a reserva só é
        feita mediante ao pagamento.
        <br />
        <br /> 🔴Cada passageiro deverá pagar uma taxa de embarque de R$ 10,00
        dentro do píer pra acesso a embarcação (pagamento somente em DINHEIRO no
        local) menores de 6 anos e maiores de 60 anos não pagam a taxa.🔴
        <br />
        <br /> Obs: É proíbido entrar com cooler, bolsa térmica ou semelhantes,
        garrafas ou copos de vidro também são proibidos. O check-in é feito na
        agência.
      </p>
    );
    setVisible(true);
  };

  return (
    <div
      className="w-full bg-center bg-no-repeat bg-cover font-mainFont"
      style={{
        backgroundImage: `url(${content.texts.hero.images.background})`,
      }}
      id="home"
    >
      <div className="relative z-10 flex w-full bg-black bg-opacity-40 desktop2:bg-opacity-10 items-left">
        <div className="w-full text-secondary justify-evenly">
          <div className="h-[125px] desktop3:h-[140px]" />
          <div className="flex flex-col mx-auto w-[90%] max-w-[1215px] items-center  pt-[46px] pb-[50px] desktop1:pt-[120px] desktop1:pb-[120px]">
            <div className=" flex flex-col w-full desktop1:w-[50%] desktop1:mr-[20px]">
              <MotionDivDownToUp>
                <div className="w-auto text-center font-secondFont text-paragraph4">
                  <p className="mb-[16px] bg-black bg-opacity-50 text-lighter rounded-2xl px-[16px] py-[6px] inline-block text-paragraph2">
                    {content.texts.hero.miniTag}
                  </p>
                </div>
              </MotionDivDownToUp>
              <MotionDivDownToUp>
                <div className="text-lighter flex justify-center tablet1:justify-center font-bold leading-[36px] phone3:leading-[40px] tablet1:leading-[60px] desktop1:leading-[60px] text-center text-title4 phone2:text-title5 phone3:text-title5 tablet1:text-title7">
                  <h1 className="[text-shadow:_2px_3px_0_rgb(0_0_0_/_50%)]">
                    {content.texts.hero.title}
                  </h1>
                </div>
              </MotionDivDownToUp>
              <MotionDivDownToUp>
                <div className="flex justify-center text-center w-full font-secondFont text-paragraph4 phone3:text-paragraph5">
                  <p className="text-lighter mb-[32px] opacity-100 [text-shadow:_2px_2px_10px_rgb(0_0_0_/_100%)]">
                    {content.texts.hero.subtitle}
                  </p>
                </div>
              </MotionDivDownToUp>
              <div className="w-full phone2:w-full tablet2:w-auto">
                <MotionDivDownToUp>
                  <div className="flex justify-center w-full">
                    <Button
                      aria-label={content.texts.hero.ctaButtonAriaLabel}
                      label={content.texts.hero.ctaButtonText}
                      buttonLink={whatsappContactLink}
                      className="w-[100%]"
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-whatsapp"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                        </svg>
                      }
                    />
                  </div>
                </MotionDivDownToUp>
                <MotionDivDownToUp className="mt-[40px] w-full ">
                  <a href="#" onClick={onClick}>
                    <p className="text-center text-white underline transition hover:scale-125 [text-shadow:_2px_2px_10px_rgb(0_0_0_/_100%)]">
                      {content.texts.hero.secondaryCta}
                    </p>
                  </a>
                </MotionDivDownToUp>
              </div>
              {/* <div className="">
                <MotionDivDownToUp>
                  <p className="mb-[20px]">Baixe nosso app:</p>
                  <div className="">
                    {" "}
                    <div className="flex items-start gap-[20px]">
                      <a
                        href="#"
                        target="_blank"
                        className="transition hover:scale-110"
                      >
                        <img
                          src={imgAppStore}
                          alt="Botão para a App Store"
                          className=""
                        />
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="transition hover:scale-110"
                      >
                        <img
                          src={imgGooglePlay}
                          alt="Botão para a Google Play"
                          className=""
                        />
                      </a>
                    </div>
                  </div>
                </MotionDivDownToUp>
              </div> */}
            </div>
            <div className="hidden">
              <MotionDivDownToUp className="relative flex justify-end">
                {/* <img
                  src={imgLaw}
                  alt="Foto de itens do direito"
                  className="bg-red-500 "
                /> */}
                <img
                  src={imgLaw}
                  alt="Foto de itens que representam a profissão de advogado"
                  className="w-[80%] rounded-3xl"
                ></img>
                <img
                  src={imgPoints}
                  alt="Imagem de efeito pontilhado"
                  className="absolute opacity-75 right-[-10px] top-[20px] desktop1:right-[-40px] desktop1:top-[40px]"
                ></img>
              </MotionDivDownToUp>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-40 desktop2:bg-opacity-10">
        <div class="custom-shape-divider-bottom-1722451194 ">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <Dialog
        className=" font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      >
        <p className="m-0 ">{modalContent}</p>
      </Dialog>
    </div>
  );
}
