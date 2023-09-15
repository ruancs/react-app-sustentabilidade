import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

const link = 'https://greeneletron.org.br/localizador'

const faqs = [
  {
    id: 1,
    header: "Realizando o descarte correto, ganho algo em troca?",
    text: `A parceria que temos com a Green Eletron não é uma promoção pontual. Esse é um sistema que facilita o descarte correto das ferramentas em mais de 1.200 pontos de coleta espalhados por todo o Brasil. Não jogue os resíduos das nossas ferramentas em lixo doméstico, destine-os da forma correta e ajude o meio ambiente.`
  },
  {
    id: 2,
    header: "O que é a parceria com a green eletron?",
    text: `A parceria entre a Bosch e a Green Eletron é de longa data. Nos preocupamos com o meio ambiente e como os resíduos produzidos por nossas ferramentas e baterias podem afetar a saúde do nosso planeta. A Green Eletron é responsável pela coleta dos resíduos, fazendo o descarte correto e destinando a matéria-prima possível de reuso para parceiros que reciclam esses materiais, dando novos usos aos mesmos. `
  },
  {
    id: 3,
    header: "Quais assistências técnicas da Bosch tem ponto de descarte?",
    text: `Todas as Assistências técnicas autorizadas Bosch estão aptas a receberem os nossos produtos em fim de vida para realização do descarte correto. Além disso, a Green Eletron também tem mais de 1.200 pontos de descarte espalhados por 25 estados brasileiros. Para saber qual o ponto mais próximo de você, acesse: `,
    url: 'https://greeneletron.org.br/localizador'
  },
  {
    id: 4,
    header: "Quais são os planos para o futuro sobre o tema?",
    text: `Temos muitos planos para deixar nossos processos ainda mais sustentáveis no futuro! Nossa meta é reduzir as emissões de CO₂ em 15% até 2030. Também temos prevista a instalação de uma usina de energia solar no teto da fábrica de Campinas, que vai ser responsável por 12% de toda a energia que a empresa consome nos próximos anos.`
  }
]

const AccordionItem = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { header, id, text, url } = faq;

  return (
    <div className="rc-accordion-card">
      <div className="rc-accordion-header">
        <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
          <h5 className="rc-accordion-title">{header}</h5>
          <i className="fa fa-chevron-down rc-accordion-icon"></i>
        </div>
      </div>
      <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={
        active === id
          ? { height: contentEl.current.scrollHeight }
          : { height: "0px" }
      }>
        <div className="rc-accordion-body">
          <p className='mb-0'>{text}</p>
          {url && (
            <a href={url} target="_blank">https://greeneletron.org.br/localizador</a>
          )}
        </div>
      </div>
    </div>
  )
}

const Accordion = () => {

  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  }

  return (
    <>
      <div className="container-fluid mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-8 mt-2">
            <div className="faq-card">
              <div className="card-body">
                <h3>Perguntas Frequentes <hr /></h3>

                {faqs.map((faq, index) => {
                  return (
                    <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                  )
                })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion
