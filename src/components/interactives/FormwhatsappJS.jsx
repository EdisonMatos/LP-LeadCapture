import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import emailjs from "@emailjs/browser";

function FormWhatsappJS() {
  const [Companyname, setCompanyName] = useState("");
  const [name, setName] = useState("");
  const [phone, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const navigate = useNavigate();

  function sendEmail(e) {
    e.preventDefault();

    if (
      Companyname === "" ||
      name === "" ||
      phone === "" ||
      email === "" ||
      lastname === "" ||
      message === ""
    ) {
      alert("Preencha todos os campos");
      return;
    }

    if (!agree) {
      alert("Você precisa concordar com os termos para enviar o formulário.");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_dbjb7ym",
        "template_2bu0xc5",
        templateParams,
        "HkoWapgpzEJhNjsHU"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          window.open("/email-enviado", "_blank");

          // Limpar campos do formulário
          setCompanyName("");
          setName("");
          setNumber("");
          setEmail("");
          setLastName("");
          setMessage("");
          setAgree(false); // Resetar checkbox
        },
        (err) => {
          console.log("ERRO", err);
          alert("Houve um erro ao enviar o email, tente novamente.");
        }
      );
  }

  return (
    <SectionArea>
      <SectionWrapper>
        <div className="flex flex-col items-center justify-center w-full bg-[#1E1E1E] p-6 font-mainFont rounded-md">
          <h1 className="text-title5 font-bold mb-6 text-white">Contato</h1>
          <form
            className="bg-transparente rounded-lg w-full"
            onSubmit={sendEmail}
          >
            <div className="flex  flex-col desktop1:flex-row w-full gap-4">
              <div className="w-full">
                <div className="mb-4 w-full">
                  <h6 className="text-gray-300">Nome da Empresa</h6>
                  <input
                    className="w-full p-3 border border-gray-300 rounded-[3px] focus:outline-none focus:ring-2 focus:ring-primary"
                    type="text"
                    placeholder="Digite o nome da Empresa"
                    onChange={(e) => setCompanyName(e.target.value)}
                    value={Companyname}
                  />
                </div>
                <div className="mb-4">
                  <h6 className="text-gray-300">Nome</h6>
                  <input
                    className="w-full p-3 border border-gray-300 rounded-[3px] focus:outline-none focus:ring-2 focus:ring-primary"
                    type="text"
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className="mb-4">
                  <h6 className="text-gray-300">Número de celular</h6>
                  <input
                    className="w-full p-3 border border-gray-300 rounded-[3px] focus:outline-none focus:ring-2 focus:ring-primary"
                    type="number"
                    placeholder="Digite seu número"
                    onChange={(e) => setNumber(e.target.value)}
                    value={phone}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="mb-4">
                  <h6 className="text-gray-300">E-mail Corporativo</h6>
                  <input
                    className="w-full p-3 border border-gray-300 rounded-[3px] focus:outline-none focus:ring-2 focus:ring-primary"
                    type="email"
                    placeholder="Digite seu email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="mb-4">
                  <h6 className="text-gray-300">Sobrenome</h6>
                  <input
                    className="w-full p-3 border border-gray-300 rounded-[3px] focus:outline-none focus:ring-2 focus:ring-primary"
                    type="text"
                    placeholder="Digite seu sobrenome"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastname}
                  />
                </div>
                <div className="mb-4">
                  <h6 className="text-gray-300">Mensagem</h6>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-[3px] focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Digite sua mensagem"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-300 text-paragraph2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            {/* Checkbox e texto de consentimento */}
            <div className="flex flex-col my-4  gap-4">
              <div className="flex">
                <input
                  type="checkbox"
                  id="consent"
                  className="mr-2 cursor-pointer"
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                />
                <label htmlFor="consent" className="text-white">
                  <h1 className="text-paragraph3">
                    Eu concordo em receber outras comunicações da MIGNOW.
                  </h1>
                </label>
              </div>
              <p className="text-gray-300 text-sm">
                Você pode cancelar o recebimento dessas comunicações quando
                quiser. Para obter mais informações sobre esse cancelamento,
                nossas práticas de privacidade e nosso compromisso em proteger e
                respeitar sua privacidade, confira nossa Política de
                Privacidade.
              </p>
              <p className="text-gray-300 text-paragraph2">
                Ao clicar em “enviar” abaixo, você concorda em permitir que a
                MIGNOW armazene e processe as informações pessoais enviadas
                acima para fornecer o conteúdo solicitado.
              </p>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[120px] justify-center bg-blue-600 text-white p-3 rounded-[3px] hover:bg-primary transition duration-300"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default FormWhatsappJS;
