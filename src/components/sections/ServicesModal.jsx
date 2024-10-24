import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import TabComponent from "../sectionElements/TabComponent";
import PropTypes from "prop-types";
// import CardModal from "../sectionElements/CardModal";
import ModalComponent from "../interactives/ModalComponent";
import services from "../../content/services";
import ServiceDetailCard from "../cards/ServiceDetailCard";
import content from "../../content/content";
import AcordionModalServices from "../interactives/AcordionModalServices";
import Button from "../interactives/Button";

const ServicesModal = () => {
  const [visible, setVisible] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  const tabs = [
    {
      label: "Harmonização Orofacial",
      content: (
        <div className="flex justify-center py-[5%]">
          <div className="flex w-full px-[5%] h-auto flex-col gap-[18px]">
            <div className="text-[12px] font-secondFont">
              <p className="text-paragraph3">
                Clique no seguro para saber mais:
              </p>
            </div>
            {/* link1 */}
            <div className="text-[12px] flex flex-col gap-[8px] text-blue-700 font-secondFont">
              <ModalComponent
                header={services.moreServices.pessoal.service1.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service1.img.img}
                    subtitle={
                      services.moreServices.pessoal.service1.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service1.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service1.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.pessoal.service1.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link2 */}
              <ModalComponent
                header={services.moreServices.pessoal.service2.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service2.img.img}
                    subtitle={
                      services.moreServices.pessoal.service2.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service2.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service2.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.pessoal.service2.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 3 */}
              <ModalComponent
                header={services.moreServices.pessoal.service3.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service3.img.img}
                    subtitle={
                      services.moreServices.pessoal.service3.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service3.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service3.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.pessoal.service3.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 4 */}
              <ModalComponent
                header={services.moreServices.pessoal.service4.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service4.img.img}
                    subtitle={
                      services.moreServices.pessoal.service4.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service4.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service4.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.pessoal.service4.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 5 */}
              <ModalComponent
                header={services.moreServices.pessoal.service5.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service5.img.img}
                    subtitle={
                      services.moreServices.pessoal.service5.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service5.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service5.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.pessoal.service5.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 6 */}
              <ModalComponent
                header={services.moreServices.pessoal.service6.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service6.img.img}
                    subtitle={
                      services.moreServices.pessoal.service6.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service6.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service6.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.pessoal.service6.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 7 */}
              <ModalComponent
                header={services.moreServices.pessoal.service7.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service7.img.img}
                    subtitle={
                      services.moreServices.pessoal.service7.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service7.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service7.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.pessoal.service7.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 8 */}
              <ModalComponent
                header={services.moreServices.pessoal.service8.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service8.img.img}
                    subtitle={
                      services.moreServices.pessoal.service8.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service8.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service8.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.pessoal.service8.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 9 */}
              <ModalComponent
                header={services.moreServices.pessoal.service9.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service9.img.img}
                    subtitle={
                      services.moreServices.pessoal.service9.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service9.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service9.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.pessoal.service9.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 10 */}
              <ModalComponent
                header={services.moreServices.pessoal.service10.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service10.img.img}
                    subtitle={
                      services.moreServices.pessoal.service10.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service10.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service10.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.pessoal.service10.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 11 */}
              <ModalComponent
                header={services.moreServices.pessoal.service11.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service11.img.img}
                    subtitle={
                      services.moreServices.pessoal.service11.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service11.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service11.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.pessoal.service11.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 12 */}
              <ModalComponent
                header={services.moreServices.pessoal.service12.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service12.img.img}
                    subtitle={
                      services.moreServices.pessoal.service12.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service12.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service12.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.pessoal.service12.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 13 */}
              <ModalComponent
                header={services.moreServices.pessoal.service13.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service13.img.img}
                    subtitle={
                      services.moreServices.pessoal.service13.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service13.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service13.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.pessoal.service13.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 14 */}
              <ModalComponent
                header={services.moreServices.pessoal.service14.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service14.img.img}
                    subtitle={
                      services.moreServices.pessoal.service14.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service14.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service14.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.pessoal.service14.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 15 */}
              <ModalComponent
                header={services.moreServices.pessoal.service15.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service15.img.img}
                    subtitle={
                      services.moreServices.pessoal.service15.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service15.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service15.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.pessoal.service15.name}
                  </span>
                </button>
              </ModalComponent>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Estética Dental",
      content: (
        <div className="flex justify-center py-[5%]">
          <div className="flex w-full px-[5%] h-auto flex-col gap-[18px]">
            <div className="text-[12px] font-secondFont">
              <p className="text-paragraph3">
                Clique no seguro para saber mais:
              </p>
            </div>
            <div className="text-[12px] flex flex-col gap-[8px] text-blue-700 font-secondFont">
              {/* link1 */}
              <ModalComponent
                header={services.moreServices.empresarial.service1.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.empresarial.service1.img.img}
                    subtitle={
                      services.moreServices.empresarial.service1.cardSubtitle
                    }
                    description={
                      services.moreServices.empresarial.service1.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.empresarial.service1.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.empresarial.service1.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link2 */}
              <ModalComponent
                header={services.moreServices.empresarial.service2.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.empresarial.service2.img.img}
                    subtitle={
                      services.moreServices.empresarial.service2.cardSubtitle
                    }
                    description={
                      services.moreServices.empresarial.service2.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.empresarial.service2.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.empresarial.service2.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link3 */}
              <ModalComponent
                header={services.moreServices.empresarial.service3.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.empresarial.service3.img.img}
                    subtitle={
                      services.moreServices.empresarial.service3.cardSubtitle
                    }
                    description={
                      services.moreServices.empresarial.service3.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.empresarial.service3.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.empresarial.service3.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 4 */}
              <ModalComponent
                header={services.moreServices.empresarial.service4.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.empresarial.service4.img.img}
                    subtitle={
                      services.moreServices.empresarial.service4.cardSubtitle
                    }
                    description={
                      services.moreServices.empresarial.service4.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.empresarial.service4.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.empresarial.service4.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 5 */}
              <ModalComponent
                header={services.moreServices.empresarial.service5.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.empresarial.service5.img.img}
                    subtitle={
                      services.moreServices.empresarial.service5.cardSubtitle
                    }
                    description={
                      services.moreServices.empresarial.service5.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.empresarial.service5.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.empresarial.service5.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 6 */}
              <ModalComponent
                header={services.moreServices.empresarial.service6.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.empresarial.service6.img.img}
                    subtitle={
                      services.moreServices.empresarial.service6.cardSubtitle
                    }
                    description={
                      services.moreServices.empresarial.service6.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.empresarial.service6.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.empresarial.service6.name}
                  </span>
                </button>
              </ModalComponent>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Reabilitação do meio Bucal",
      content: (
        <div className="flex justify-center py-[5%]">
          <div className="flex w-full px-[5%] h-auto flex-col gap-[18px]">
            <div className="text-[12px] font-secondFont">
              <p className="text-paragraph3">
                Clique no seguro para saber mais:
              </p>
            </div>
            <div className="text-[12px] flex flex-col gap-[8px] text-blue-700 font-secondFont">
              {/* link1 */}
              <ModalComponent
                header={services.moreServices.patrimonial.service1.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.patrimonial.service1.img.img}
                    subtitle={
                      services.moreServices.patrimonial.service1.cardSubtitle
                    }
                    description={
                      services.moreServices.patrimonial.service1.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.patrimonial.service1.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.patrimonial.service1.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link2 */}
              <ModalComponent
                header={services.moreServices.patrimonial.service2.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.patrimonial.service2.img.img}
                    subtitle={
                      services.moreServices.patrimonial.service2.cardSubtitle
                    }
                    description={
                      services.moreServices.patrimonial.service2.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.patrimonial.service2.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.patrimonial.service2.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link3 */}
              <ModalComponent
                header={services.moreServices.patrimonial.service3.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.patrimonial.service3.img.img}
                    subtitle={
                      services.moreServices.patrimonial.service3.cardSubtitle
                    }
                    description={
                      services.moreServices.patrimonial.service3.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.patrimonial.service3.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.patrimonial.service3.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 4 */}
              <ModalComponent
                header={services.moreServices.patrimonial.service4.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.patrimonial.service4.img.img}
                    subtitle={
                      services.moreServices.patrimonial.service4.cardSubtitle
                    }
                    description={
                      services.moreServices.patrimonial.service4.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.patrimonial.service4.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.patrimonial.service4.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 5 */}
              <ModalComponent
                header={services.moreServices.patrimonial.service5.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.patrimonial.service5.img.img}
                    subtitle={
                      services.moreServices.patrimonial.service5.cardSubtitle
                    }
                    description={
                      services.moreServices.patrimonial.service5.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.patrimonial.service5.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.patrimonial.service5.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 6 */}
              <ModalComponent
                header={services.moreServices.patrimonial.service6.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.patrimonial.service6.img.img}
                    subtitle={
                      services.moreServices.patrimonial.service6.cardSubtitle
                    }
                    description={
                      services.moreServices.patrimonial.service6.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.patrimonial.service6.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.patrimonial.service6.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 7 */}
              <ModalComponent
                header={services.moreServices.patrimonial.service7.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.patrimonial.service7.img.img}
                    subtitle={
                      services.moreServices.patrimonial.service7.cardSubtitle
                    }
                    description={
                      services.moreServices.patrimonial.service7.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.patrimonial.service7.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.patrimonial.service7.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 8 */}
              <ModalComponent
                header={services.moreServices.patrimonial.service8.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.patrimonial.service8.img.img}
                    subtitle={
                      services.moreServices.patrimonial.service8.cardSubtitle
                    }
                    description={
                      services.moreServices.patrimonial.service8.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.patrimonial.service8.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.patrimonial.service8.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 9 */}
              <ModalComponent
                header={services.moreServices.patrimonial.service9.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.patrimonial.service9.img.img}
                    subtitle={
                      services.moreServices.patrimonial.service9.cardSubtitle
                    }
                    description={
                      services.moreServices.patrimonial.service9.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.patrimonial.service9.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.patrimonial.service9.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 10 */}
              <ModalComponent
                header={services.moreServices.patrimonial.service10.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.patrimonial.service10.img.img}
                    subtitle={
                      services.moreServices.patrimonial.service10.cardSubtitle
                    }
                    description={
                      services.moreServices.patrimonial.service10
                        .cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.patrimonial.service10.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.patrimonial.service10.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 11 */}
              <ModalComponent
                header={services.moreServices.patrimonial.service11.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.patrimonial.service11.img.img}
                    subtitle={
                      services.moreServices.patrimonial.service11.cardSubtitle
                    }
                    description={
                      services.moreServices.patrimonial.service11
                        .cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.patrimonial.service11.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.patrimonial.service11.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 12 */}
              <ModalComponent
                header={services.moreServices.patrimonial.service12.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.patrimonial.service12.img.img}
                    subtitle={
                      services.moreServices.patrimonial.service12.cardSubtitle
                    }
                    description={
                      services.moreServices.patrimonial.service12
                        .cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.patrimonial.service12.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.patrimonial.service12.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 13 */}
              <ModalComponent
                header={services.moreServices.patrimonial.service13.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.patrimonial.service13.img.img}
                    subtitle={
                      services.moreServices.patrimonial.service13.cardSubtitle
                    }
                    description={
                      services.moreServices.patrimonial.service13
                        .cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.patrimonial.service13.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.patrimonial.service13.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 14 */}
              <ModalComponent
                header={services.moreServices.patrimonial.service14.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.patrimonial.service14.img.img}
                    subtitle={
                      services.moreServices.patrimonial.service14.cardSubtitle
                    }
                    description={
                      services.moreServices.patrimonial.service14
                        .cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.patrimonial.service14.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.patrimonial.service14.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 15 */}
              <ModalComponent
                header={services.moreServices.patrimonial.service15.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.patrimonial.service15.img.img}
                    subtitle={
                      services.moreServices.patrimonial.service15.cardSubtitle
                    }
                    description={
                      services.moreServices.patrimonial.service15
                        .cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.patrimonial.service15.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.patrimonial.service15.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 16 */}
              <ModalComponent
                header={services.moreServices.patrimonial.service16.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.patrimonial.service16.img.img}
                    subtitle={
                      services.moreServices.patrimonial.service16.cardSubtitle
                    }
                    description={
                      services.moreServices.patrimonial.service16
                        .cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.patrimonial.service16.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.patrimonial.service16.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 17 */}
              <ModalComponent
                header={services.moreServices.patrimonial.service17.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.patrimonial.service17.img.img}
                    subtitle={
                      services.moreServices.patrimonial.service17.cardSubtitle
                    }
                    description={
                      services.moreServices.patrimonial.service17
                        .cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.patrimonial.service17.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.patrimonial.service17.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 18 */}
              <ModalComponent
                header={services.moreServices.patrimonial.service18.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.patrimonial.service18.img.img}
                    subtitle={
                      services.moreServices.patrimonial.service18.cardSubtitle
                    }
                    description={
                      services.moreServices.patrimonial.service18
                        .cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.patrimonial.service18.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.patrimonial.service18.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 19 */}
              <ModalComponent
                header={services.moreServices.patrimonial.service19.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.patrimonial.service19.img.img}
                    subtitle={
                      services.moreServices.patrimonial.service19.cardSubtitle
                    }
                    description={
                      services.moreServices.patrimonial.service19
                        .cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.patrimonial.service19.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.patrimonial.service19.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 20 */}
              <ModalComponent
                header={services.moreServices.patrimonial.service20.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.patrimonial.service20.img.img}
                    subtitle={
                      services.moreServices.patrimonial.service20.cardSubtitle
                    }
                    description={
                      services.moreServices.patrimonial.service20
                        .cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.patrimonial.service20.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-primary">
                  {services.moreServices.arrowIcon}
                  <span className="ml-2 text-left text-paragraph3 text-primary">
                    {services.moreServices.patrimonial.service20.name}
                  </span>
                </button>
              </ModalComponent>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Odontologia Pediátrica",
      content: <div></div>,
    },
  ];

  return (
    <div>
      <Button
        removeAnchor={true}
        removeTarget={true}
        tagName="div"
        label="Ver todos"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-plus"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
        }
        onClick={() => setVisible(true)}
        className="text-secondary bg-black px-[2%] py-[0.8%]"
      />

      <Dialog
        header="Nossos Procedimentos"
        headerStyle={{ paddingBottom: "3px" }}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "384px", "426px": "90vw" }}
        contentStyle={{ padding: "1rem", paddingLeft: "", paddingRight: "" }}
      >
        <div className="flex flex-col w-full gap-[12px]">
          <div>
            <p className="text-paragraph4 font-secondFont">
              Selecione a área que deseja saber mais sobre:
            </p>
          </div>
          <div className="flex justify-center w-full">
            {/* <TabComponent tabs={tabs} /> */}
            <AcordionModalServices />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

ServicesModal.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default ServicesModal;
