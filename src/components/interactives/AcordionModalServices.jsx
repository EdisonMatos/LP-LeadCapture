import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import content from "../../content/content";
import services from "../../content/services";
import ModalComponent from "./ModalComponent";
import ServiceDetailCard from "../cards/ServiceDetailCard";

export default function AcordionModalServices() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getPanelStyle = (panel) => {
    return {
      boxShadow:
        expanded === panel ? "0px 0px 10px -5px rgba(0, 0, 0, 0.1)" : "none",
      border:
        expanded === panel
          ? "1px solid rgba(0, 0, 0, 0.1)"
          : "1px solid rgba(0, 0, 0, 0.1)",
      borderTop:
        expanded === panel
          ? "1px solid rgba(0, 0, 0, 0.1)"
          : "1px solid rgba(0, 0, 0, 0.1)",
    };
  };

  return (
    <div className="w-full">
      {/* Accordion 1 */}
      <Accordion
        className="mb-[3%]"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={getPanelStyle("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <h1 className="font-bold font-secondFont">Harmonização Facial</h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="flex flex-col gap-[8px] font-secondFont text-paragraph4 text-paragraphLight">
              {/* Link 1 */}
              <ModalComponent
                header={services.moreServices.harmonizacao.service1.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.harmonizacao.service1.img.img}
                    subtitle={
                      services.moreServices.harmonizacao.service1.cardSubtitle
                    }
                    description={
                      services.moreServices.harmonizacao.service1
                        .cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.harmonizacao.service1.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {services.moreServices.harmonizacao.service1.name}
                  </span>
                </button>
              </ModalComponent>
              {/* Link 2 */}
              <ModalComponent
                header={services.moreServices.harmonizacao.service2.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.harmonizacao.service2.img.img}
                    subtitle={
                      services.moreServices.harmonizacao.service2.cardSubtitle
                    }
                    description={
                      services.moreServices.harmonizacao.service2
                        .cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.harmonizacao.service2.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {services.moreServices.harmonizacao.service2.name}
                  </span>
                </button>
              </ModalComponent>
              {/* Link 3 */}
              <ModalComponent
                header={services.moreServices.harmonizacao.service3.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.harmonizacao.service3.img.img}
                    subtitle={
                      services.moreServices.harmonizacao.service3.cardSubtitle
                    }
                    description={
                      services.moreServices.harmonizacao.service3
                        .cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.harmonizacao.service3.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {services.moreServices.harmonizacao.service3.name}
                  </span>
                </button>
              </ModalComponent>
              {/* Link 4 */}
              <ModalComponent
                header={services.moreServices.harmonizacao.service4.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.harmonizacao.service4.img.img}
                    subtitle={
                      services.moreServices.harmonizacao.service4.cardSubtitle
                    }
                    description={
                      services.moreServices.harmonizacao.service4
                        .cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.harmonizacao.service4.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {services.moreServices.harmonizacao.service4.name}
                  </span>
                </button>
              </ModalComponent>
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 2 */}
      <Accordion
        className="mb-[3%]"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        style={getPanelStyle("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            <h1 className="font-bold font-secondFont">Estética Dental</h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="flex flex-col gap-[8px] font-secondFont text-paragraph4 text-paragraphLight">
              {/* Link 1 */}
              <ModalComponent
                header={services.moreServices.estetica.service1.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.estetica.service1.img.img}
                    subtitle={
                      services.moreServices.estetica.service1.cardSubtitle
                    }
                    description={
                      services.moreServices.estetica.service1.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.estetica.service1.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {services.moreServices.estetica.service1.name}
                  </span>
                </button>
              </ModalComponent>
              {/* Link 2 */}
              <ModalComponent
                header={services.moreServices.estetica.service2.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.estetica.service2.img.img}
                    subtitle={
                      services.moreServices.estetica.service2.cardSubtitle
                    }
                    description={
                      services.moreServices.estetica.service2.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.estetica.service2.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {services.moreServices.estetica.service2.name}
                  </span>
                </button>
              </ModalComponent>
              {/* Link 3 */}
              <ModalComponent
                header={services.moreServices.estetica.service3.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.estetica.service3.img.img}
                    subtitle={
                      services.moreServices.estetica.service3.cardSubtitle
                    }
                    description={
                      services.moreServices.estetica.service3.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.estetica.service3.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {services.moreServices.estetica.service3.name}
                  </span>
                </button>
              </ModalComponent>
              {/* Link 4 */}
              <ModalComponent
                header={services.moreServices.estetica.service4.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.estetica.service4.img.img}
                    subtitle={
                      services.moreServices.estetica.service4.cardSubtitle
                    }
                    description={
                      services.moreServices.estetica.service4.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.estetica.service4.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {services.moreServices.estetica.service4.name}
                  </span>
                </button>
              </ModalComponent>
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 3 */}
      <Accordion
        className="mb-[3%]"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        style={getPanelStyle("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>
            <h1 className="font-bold font-secondFont">
              Reabilitação do Meio Bucal
            </h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="flex flex-col gap-[8px] font-secondFont text-paragraph4 text-paragraphLight">
              {/* Link 1 */}
              <ModalComponent
                header={services.moreServices.reabilitacao.service1.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.reabilitacao.service1.img.img}
                    subtitle={
                      services.moreServices.reabilitacao.service1.cardSubtitle
                    }
                    description={
                      services.moreServices.reabilitacao.service1
                        .cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.reabilitacao.service1.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {services.moreServices.reabilitacao.service1.name}
                  </span>
                </button>
              </ModalComponent>
              {/* Link 2 */}
              <ModalComponent
                header={services.moreServices.reabilitacao.service2.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.reabilitacao.service2.img.img}
                    subtitle={
                      services.moreServices.reabilitacao.service2.cardSubtitle
                    }
                    description={
                      services.moreServices.reabilitacao.service2
                        .cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.reabilitacao.service2.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {services.moreServices.reabilitacao.service2.name}
                  </span>
                </button>
              </ModalComponent>
              {/* Link 3 */}
              <ModalComponent
                header={services.moreServices.reabilitacao.service3.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.reabilitacao.service3.img.img}
                    subtitle={
                      services.moreServices.reabilitacao.service3.cardSubtitle
                    }
                    description={
                      services.moreServices.reabilitacao.service3
                        .cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.reabilitacao.service3.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {services.moreServices.reabilitacao.service3.name}
                  </span>
                </button>
              </ModalComponent>
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 4 */}
      <Accordion
        className="mb-[3%]"
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        style={getPanelStyle("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography>
            <h1 className="font-bold font-secondFont">Odontopediatria</h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="flex flex-col gap-[8px] font-secondFont text-paragraph4 text-paragraphLight">
              {/* Link 1 */}
              <ModalComponent
                header={services.moreServices.pediatrica.service1.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pediatrica.service1.img.img}
                    subtitle={
                      services.moreServices.pediatrica.service1.cardSubtitle
                    }
                    description={
                      services.moreServices.pediatrica.service1.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pediatrica.service1.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {services.moreServices.pediatrica.service1.name}
                  </span>
                </button>
              </ModalComponent>
              {/* Link 2 */}
              <ModalComponent
                header={services.moreServices.pediatrica.service2.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pediatrica.service2.img.img}
                    subtitle={
                      services.moreServices.pediatrica.service2.cardSubtitle
                    }
                    description={
                      services.moreServices.pediatrica.service2.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pediatrica.service2.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {services.moreServices.pediatrica.service2.name}
                  </span>
                </button>
              </ModalComponent>
              {/* Link 3 */}
              <ModalComponent
                header={services.moreServices.pediatrica.service3.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pediatrica.service3.img.img}
                    subtitle={
                      services.moreServices.pediatrica.service3.cardSubtitle
                    }
                    description={
                      services.moreServices.pediatrica.service3.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pediatrica.service3.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {services.moreServices.pediatrica.service3.name}
                  </span>
                </button>
              </ModalComponent>
              {/* Link 4 */}
              <ModalComponent
                header={services.moreServices.pediatrica.service4.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pediatrica.service4.img.img}
                    subtitle={
                      services.moreServices.pediatrica.service4.cardSubtitle
                    }
                    description={
                      services.moreServices.pediatrica.service4.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pediatrica.service4.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {services.moreServices.pediatrica.service4.name}
                  </span>
                </button>
              </ModalComponent>
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
