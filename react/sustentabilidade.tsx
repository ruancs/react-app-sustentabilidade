import React, { useState } from 'react';
import Slider from './slider';


const lpsustentabilidade: StorefrontFunctionComponent = () => {

  const [clickedElement, setClickedElement] = useState(null);

  const [displayText, setDisplayText] = useState('');


  const Hand = (event) => {

    const elementoClicado = event.target;
    console.log(event.target)


    if (elementoClicado.style.backgroundColor == '#CEE741' || elementoClicado.style.backgroundColor == 'rgb(206, 231, 65)') {
      elementoClicado.style.backgroundColor = '';

    } else {
      elementoClicado.style.backgroundColor = '#CEE741';
    }

    setClickedElement(clickedElement);

  };

  const removeAl = () => {
    const elementos = document.querySelectorAll('.history__years div h3');
    elementos.forEach(el => {

      (el as HTMLElement).style.backgroundColor = '';

    });
  }




  const handleClick = (element) => {
    // Define o texto a ser exibido com base no elemento clicado
    let newText = '';
    Hand(event)

    switch (element) {
      case 'element1':
        newText = 'Gestão ambiental é introduzida nas plantas da Bosch pelo mundo.';
        break;
      case 'element2':
        newText = 'Desenvolvimento da 1ª furadeira com carcaça de matéria-prima reciclada na cor preta.';
        break;
      case 'element3':
        newText = 'Lançamento dos produtos sustentáveis GSB 550, GSB 450 e GWS 850, com redução de mais de 200 toneladas de matéria-prima ao ano.';
        break;
      case 'element4':
        newText = '• Início da fabricação das ferramentas elétricas vigentes com carcaça de material reciclado. • Início da parceria com a Green Eletron, da ABINEE, para logística reversa e descarte sustentável.';
        break;
      case 'element5':
        newText = '• Bosch alcança em suas plantas a neutralidade de carbono em todo o mundo.     • Desenvolvimento de matéria-prima reciclada para uso em maletas plásticas das ferramentas elétricas.'
        break;
      case 'element6':
        newText = 'Aplicação de material reciclado na carcaça do motor da serra mármore, primeira ferramenta Heavy Duty a utilizar matéria-prima reciclada.';
        break;
      case 'element7':
        newText = 'Aplicação de material reciclado na carcaça do motor da serra mármore, primeira ferramenta Heavy Duty a utilizar matéria-prima reciclada.';
        break;

      case 'remove':
        newText = '';
        removeAl()
        break;

      default:
        newText = '';

    }

    // Define o novo texto a ser exibido na div
    setDisplayText(newText);
  };

  return (
    <>

      <link rel="stylesheet" href="https://boschferramentasbrasil.vtexassets.com/_v/public/assets/v1/bundle/css/asset.min.css?v=3&files=theme,boschferramentasbrasil.builderio@0.5.1$style.common,boschferramentasbrasil.builderio@0.5.1$style.small,boschferramentasbrasil.builderio@0.5.1$style.notsmall,boschferramentasbrasil.builderio@0.5.1$style.large,boschferramentasbrasil.builderio@0.5.1$style.xlarge&files=fonts,989db2448f309bfdd99b513f37c84b8f5794d2b5&files=npm,animate.css@3.7.0/animate.min.css&files=react~vtex.render-runtime@8.134.0-beta.0,common&files=react~vtex.store-components@3.169.0,Container,4,SearchBar,Logo,DiscountBadge&files=react~vtex.styleguide@9.146.9,0,1,Spinner&files=react~vtex.flex-layout@0.21.3,0&files=react~vtex.admin-pages@4.51.2,HighlightOverlay&files=react~vtex.rich-text@0.16.0,index&files=react~boschferramentasbrasil.components@0.3.0,LgpdCookie,HelpFloater,HeaderZipCode,SearchBarMobileToggle,MenuHeaderMobile&files=react~vtex.login@2.57.0,1&files=react~vtex.minicart@2.67.1,Minicart&files=react~vtex.search@2.16.4,Autocomplete&files=react~vtex.product-summary@2.83.1,ProductSummaryImage&files=overrides,vtex.product-list@0.37.1$overrides,vtex.product-comparison@0.18.0$overrides,vtex.minicart@2.67.1$overrides,boschferramentasbrasil.builderio@0.5.1$overrides,boschferramentasbrasil.builderio@0.5.1$fonts&workspace=master" />
      <link rel="stylesheet" href="https://boschferramentasbrasil.myvtex.com/files/vtex--app-lp.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css" />

      <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
      <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
      <script src="https://boschferramentasbrasil.vteximg.com.br/arquivos/slick.min.js"></script>
      <script src="https://boschferramentasbrasil.myvtex.com/files/vtex--app-lp.js"></script>

      <Slider />
      <section className='banner__main desktop'>

      </section>

      <section className='banner__main mobile'>

      </section>

      <section className='section__text-one'>
        <h1>Sustentabilidade</h1>
        <p>Na Bosch, temos um compromisso sério com o meio ambiente e acreditamos que<br /><strong>todos podem contribuir para tornar a sustentabilidade uma realidade.</strong></p>
        <span>Junte-se a nós nessa jornada rumo a um futuro mais verde!</span>
      </section >

      <section className='section__cards'>
        <div className='card'>
          <svg xmlns="http://www.w3.org/2000/svg" width="125" height="136" viewBox="0 0 125 136" fill="none">
            <path d="M124.079 67.685C124.079 105.025 96.2649 135.37 62.0397 135.37C27.8145 135.37 0 105.025 0 67.685C0 30.3454 27.8145 0 62.0397 0C65.8138 0 69.6395 0.394829 73.3102 1.12808C76.102 1.69213 77.9632 4.62514 77.4462 7.67097C76.9292 10.7168 74.2408 12.7473 71.449 12.1833C68.3987 11.5629 65.1934 11.2808 62.0397 11.2808C33.5531 11.2808 10.3399 36.6063 10.3399 67.685C10.3399 98.7637 33.5531 124.089 62.0397 124.089C90.5262 124.089 113.739 98.7637 113.739 67.685C113.739 64.2444 113.429 60.8037 112.912 57.4194C112.395 54.3736 114.256 51.4406 117.048 50.8766C119.892 50.3125 122.528 52.3431 123.045 55.3889C123.717 59.3936 124.079 63.5675 124.079 67.685ZM66.4858 34.1809C69.3293 34.6322 71.9143 32.4888 72.3279 29.3866C72.7415 26.2843 70.7769 23.4641 67.9334 23.0129C65.9688 22.7309 64.0043 22.5617 62.0397 22.5617C39.2401 22.5617 20.6799 42.8108 20.6799 67.685C20.6799 92.5592 39.2401 112.808 62.0397 112.808C84.8392 112.808 103.399 92.5592 103.399 67.685C103.399 65.5416 103.244 63.3983 102.986 61.2549C102.572 58.1527 99.9873 56.0093 97.1438 56.4606C94.3003 56.9118 92.3357 59.732 92.7493 62.8342C92.9561 64.4136 93.0595 66.0493 93.0595 67.685C93.0595 86.3548 79.1523 101.528 62.0397 101.528C44.9271 101.528 31.0198 86.3548 31.0198 67.685C31.0198 49.0152 44.9271 33.8425 62.0397 33.8425C63.539 33.8425 65.0383 33.9553 66.4858 34.1809ZM55.5772 51.3278C53.6643 49.0152 50.4072 48.7896 48.2875 50.8766C43.8931 55.1633 41.4115 61.3113 41.4115 67.685C41.4115 80.1503 50.6657 90.2467 62.0914 90.2467C67.9851 90.2467 73.5687 87.4829 77.4979 82.7449C79.4108 80.4324 79.204 76.8789 77.0843 74.7919C74.9646 72.705 71.7075 72.9306 69.7946 75.2432C67.83 77.6121 65.0383 79.0222 62.0914 79.0222C56.4044 79.0222 51.7514 73.9459 51.7514 67.7414C51.7514 64.5264 52.9922 61.4805 55.2153 59.3372C57.335 57.2502 57.5418 53.6968 55.6289 51.3842L55.5772 51.3278ZM63.5907 58.0963C61.5744 60.2961 61.5744 63.8495 63.5907 66.0493C64.6247 67.1774 65.9172 67.685 67.2613 67.685C68.6055 67.685 69.898 67.121 70.932 66.0493L95.2826 39.4829H108.673C110.069 39.4829 111.361 38.8625 112.343 37.8472L122.683 26.5664C124.183 24.9306 124.596 22.5053 123.821 20.4183C123.045 18.3314 121.132 16.9213 119.064 16.9213H108.725V5.64042C108.725 3.38425 107.484 1.2973 105.519 0.451233C103.555 -0.451233 101.383 0.0564043 99.8839 1.69213L89.5439 12.973C88.5616 14.0446 88.0446 15.4547 88.0446 16.9777V31.5863L63.6941 58.1527L63.5907 58.0963Z" fill="#CEE741" />
          </svg>

          <p>A estratégia de sustentabilidade da Bosch é trabalhada há muitos anos, e nosso principal objetivo é manter o compromisso de sermos uma empresa sustentável.</p>

        </div>

        <div className='card'>
          <svg xmlns="http://www.w3.org/2000/svg" width="123" height="122" viewBox="0 0 123 122" fill="none">
            <g clip-path="url(#clip0_107_165)">
              <path d="M117.101 44.6732C114.095 41.9342 110.219 40.5547 106.146 40.7214C102.083 40.9135 98.343 42.6771 95.604 45.6788L79.3522 63.5377C76.5677 58.9441 71.5194 55.8615 65.7635 55.8615H15.9467C7.5883 55.8615 0.786377 62.6635 0.786377 71.0218V106.396C0.786377 114.754 7.5883 121.556 15.9467 121.556H68.745L118.208 66.0442C123.731 59.8436 123.231 50.2573 117.101 44.6732ZM110.663 59.3231L64.2171 111.449H15.9467C13.1622 111.449 10.8933 109.185 10.8933 106.396V71.0218C10.8933 68.2323 13.1622 65.9684 15.9467 65.9684H65.7635C68.9472 65.9684 71.5345 68.5608 71.5345 71.7445C71.5345 74.5946 69.407 77.0557 66.5771 77.4549L40.4963 81.1793L41.9264 91.1851L68.0022 87.4607C73.94 86.6117 78.766 82.4729 80.7116 77.0556L103.078 52.4757C103.998 51.4701 105.251 50.8788 106.615 50.8131C107.99 50.7576 109.284 51.2225 110.294 52.1422C112.351 54.017 112.518 57.2411 110.663 59.3231ZM43.7406 45.7395C48.4656 45.7395 52.9075 43.9 56.2479 40.5597C63.1458 33.6618 63.1408 22.4381 56.2074 15.5048L43.7406 3.32092L31.2333 15.5502C24.3354 22.4431 24.3354 33.6719 31.2333 40.5648C34.5737 43.9051 39.0156 45.7395 43.7406 45.7395ZM38.3435 22.7261L43.7406 17.4453L49.1023 22.6857C52.0586 25.642 52.0586 30.4528 49.1023 33.4091C46.2471 36.2693 41.2493 36.2693 38.384 33.4091C35.4277 30.4528 35.4277 25.642 38.3435 22.7261Z" fill="#CEE741" />
            </g>
            <defs>
              <clipPath id="clip0_107_165">
                <rect x="0.786377" y="0.278809" width="121.283" height="121.283" rx="12" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <p>Acreditamos que é possível fazer a diferença, agindo com responsabilidade e preocupação com o meio ambiente, sem abrir mão da excelência em nossos produtos.</p>

        </div>

      </section>

      <section className='section__history desktop'>
        <h2>Conheça nossa história sustentável</h2>
        <hr></hr>
        <div className='history__years'>
          <div>
            <h3 onClick={() => handleClick('element1')}>2007</h3>

          </div>

          <div>
            <h3 onClick={() => handleClick('element2')}>2016</h3>

          </div>

          <div>
            <h3 onClick={() => handleClick('element3')}>2018</h3>

          </div>

          <div>
            <h3 onClick={() => handleClick('element4')}>2019</h3>

          </div>

          <div>
            <h3 onClick={() => handleClick('element5')}>2020</h3>

          </div>

          <div>
            <h3 onClick={() => handleClick('element6')}>2021</h3>

          </div>

          <div>
            <h3 onClick={() => handleClick('element7')}>2022</h3>


          </div>

        </div>

        <div className='history__data'>


          {displayText && <div className="data_h"><button onClick={() => handleClick('remove')}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 25 28" fill="none">
            <path d="M4.49045 0L0 4.85305L2.29299 7.33121L7.96178 13.561L2.29299 19.6876L0 22.0625L4.49045 27.0188L6.78344 24.5406L12.5478 18.3108L18.2166 24.5406L20.414 27.0188L25 22.0625L22.707 19.6876L16.9427 13.561L22.707 7.33121L25 4.85305L20.414 0L18.2166 2.47816L12.5478 8.60471L6.78344 2.47816L4.49045 0Z" fill="#084179" />
          </svg></button>
            {displayText}
          </div>}

        </div>

      </section>

      <section className='section__history mobile'>
        <h2>Conheça nossa história sustentável</h2>
        <hr></hr>
        <Slider>

          <div>
            <h2>2007</h2>
            <p>Gestão ambiental é introduzida nas plantas da Bosch pelo mundo.</p>

          </div>

          <div>
            <h2>2016</h2>
            <p>Desenvolvimento da 1ª furadeira com carcaça de matéria-prima reciclada.</p>

          </div>

          <div>
            <h2>2018</h2>
            <p>Lançamento dos produtos sustentáveis GSB 550-RE e GWS 850-RE, com redução de mais de 200 toneladas de matéria-prima.</p>

          </div>

          <div>
            <h2>2019</h2>
            <p>Início da fabricação das ferramentas elétricas vigentes com carcaça de material reciclado.</p>

          </div>

          <div>
            <h2>2019</h2>
            <p> Início da parceria com a Green Eletron, da ABINEE, para logística reversa e descarte sustentável.</p>

          </div>

          <div>
            <h2>2020</h2>
            <p>Bosch alcança em suas plantas a neutralidade de carbono em todo o mundo.</p>

          </div>

          <div>
            <h2>2020</h2>
            <p>Desenvolvimento de matéria-prima reciclada para uso em maletas plásticas das ferramentas elétricas.</p>


          </div>
          <div>
            <h2>2021</h2>
            <p>Aplicação de material reciclado na carcaça do motor da serra mármore, primeira ferramenta Heavy Duty a utilizar matéria-prima reciclada.</p>


          </div>
          <div>
            <h2>2022</h2>
            <p>Desenvolvimento da embalagem de plástico biodegradável para kits de acessórios.</p>


          </div>
          <div>
            <h2>2022</h2>
            <p>Metade de toda matéria-prima plástica da planta de Campinas vem de fonte reciclada.</p>


          </div>
        </Slider>

      </section>

      <section className="section__metas desktop">
        <h2>Metas Sustentáveis</h2>

        <div className="meta__cards">


          <div className="bg-lemon">
            <svg xmlns="http://www.w3.org/2000/svg" width="58" height="62" viewBox="0 0 58 62" fill="none">
              <path d="M0.80615 46.1739C2.73336 47.9301 5.21136 48.8511 7.74783 48.7541C10.2843 48.657 12.6936 47.5489 14.4971 45.65C16.4463 47.6379 19.0427 48.7478 21.7436 48.7478C24.4444 48.7478 27.0408 47.6379 28.99 45.65C30.9392 47.6379 33.5356 48.7478 36.2364 48.7478C38.9373 48.7478 41.5337 47.6379 43.4829 45.65C45.2876 47.5475 47.6976 48.6537 50.2341 48.7488C52.7705 48.844 55.2478 47.9212 57.1738 46.1637C57.4147 45.9399 57.6113 45.6676 57.7524 45.3624C57.8934 45.0572 57.9761 44.7253 57.9955 44.3859C58.015 44.0464 57.9709 43.7063 57.8657 43.3852C57.7606 43.064 57.5965 42.7683 57.383 42.5151C57.1695 42.2619 56.9109 42.0563 56.6221 41.9103C56.3333 41.7642 56.0201 41.6806 55.7006 41.6642C55.3812 41.6479 55.0619 41.6991 54.7612 41.815C54.4606 41.9309 54.1845 42.1092 53.9492 42.3394C53.3147 42.8821 52.5715 43.2625 51.7768 43.4513C50.9821 43.6401 50.1573 43.6321 49.3659 43.4281C48.5746 43.2241 47.8379 42.8294 47.2128 42.2746C46.5877 41.7198 46.0909 41.0196 45.7607 40.2282C45.588 39.7339 45.2772 39.3077 44.87 39.0067C44.4628 38.7057 43.9788 38.5444 43.4829 38.5444C42.987 38.5444 42.503 38.7057 42.0958 39.0067C41.6886 39.3077 41.3778 39.7339 41.2051 40.2282C40.7582 41.2269 40.0542 42.0704 39.1748 42.661C38.2954 43.2516 37.2766 43.565 36.2364 43.565C35.1963 43.565 34.1775 43.2516 33.2981 42.661C32.4187 42.0704 31.7147 41.2269 31.2678 40.2282C31.0951 39.7339 30.7843 39.3077 30.3771 39.0067C29.9699 38.7057 29.4859 38.5444 28.99 38.5444C28.4941 38.5444 28.0101 38.7057 27.6029 39.0067C27.1957 39.3077 26.8849 39.7339 26.7122 40.2282C26.2653 41.2269 25.5613 42.0704 24.6819 42.661C23.8025 43.2516 22.7837 43.565 21.7436 43.565C20.7034 43.565 19.6846 43.2516 18.8052 42.661C17.9258 42.0704 17.2218 41.2269 16.7749 40.2282C16.6022 39.7339 16.2914 39.3077 15.8842 39.0067C15.477 38.7057 14.993 38.5444 14.4971 38.5444C14.0012 38.5444 13.5172 38.7057 13.11 39.0067C12.7029 39.3077 12.392 39.7339 12.2193 40.2282C11.889 41.0192 11.3922 41.7189 10.7673 42.2735C10.1424 42.828 9.40605 43.2225 8.61504 43.4265C7.82404 43.6305 6.99953 43.6386 6.20512 43.4501C5.41072 43.2616 4.66765 42.8816 4.03324 42.3394C3.55501 41.8844 2.92637 41.65 2.28561 41.6878C1.64486 41.7256 1.04447 42.0325 0.616535 42.541C0.188597 43.0495 -0.0318387 43.7179 0.00372106 44.3992C0.0392808 45.0805 0.327923 45.7189 0.80615 46.1739ZM53.9468 55.1915C53.3123 55.7342 52.5691 56.1146 51.7744 56.3033C50.9797 56.4921 50.1549 56.4842 49.3635 56.2802C48.5722 56.0761 47.8355 55.6815 47.2104 55.1266C46.5853 54.5718 46.0885 53.8717 45.7583 53.0803C45.5855 52.586 45.2747 52.1598 44.8676 51.8588C44.4604 51.5578 43.9764 51.3965 43.4805 51.3965C42.9846 51.3965 42.5006 51.5578 42.0934 51.8588C41.6862 52.1598 41.3754 52.586 41.2027 53.0803C40.7558 54.0789 40.0518 54.9224 39.1724 55.513C38.293 56.1036 37.2742 56.4171 36.234 56.4171C35.1939 56.4171 34.1751 56.1036 33.2957 55.513C32.4163 54.9224 31.7123 54.0789 31.2654 53.0803C31.0927 52.586 30.7818 52.1598 30.3747 51.8588C29.9675 51.5578 29.4835 51.3965 28.9876 51.3965C28.4917 51.3965 28.0077 51.5578 27.6005 51.8588C27.1933 52.1598 26.8825 52.586 26.7098 53.0803C26.2629 54.0789 25.5589 54.9224 24.6795 55.513C23.8001 56.1036 22.7813 56.4171 21.7411 56.4171C20.701 56.4171 19.6822 56.1036 18.8028 55.513C17.9234 54.9224 17.2194 54.0789 16.7725 53.0803C16.5998 52.586 16.2889 52.1598 15.8818 51.8588C15.4746 51.5578 14.9906 51.3965 14.4947 51.3965C13.9988 51.3965 13.5148 51.5578 13.1076 51.8588C12.7004 52.1598 12.3896 52.586 12.2169 53.0803C11.8866 53.8713 11.3898 54.571 10.7649 55.1255C10.14 55.6801 9.40364 56.0745 8.61263 56.2785C7.82162 56.4825 6.99711 56.4906 6.20271 56.3021C5.4083 56.1137 4.66523 55.7337 4.03082 55.1915C3.55243 54.747 2.92864 54.5208 2.29454 54.5619C1.66044 54.603 1.06709 54.9081 0.643008 55.411C0.218926 55.9139 -0.00174444 56.5743 0.0287911 57.249C0.0593266 57.9237 0.33861 58.5584 0.80615 59.0157C2.73336 60.7719 5.21136 61.6929 7.74783 61.5959C10.2843 61.4988 12.6936 60.3907 14.4971 58.4918C16.4463 60.4797 19.0427 61.5896 21.7436 61.5896C24.4444 61.5896 27.0408 60.4797 28.99 58.4918C30.9392 60.4797 33.5356 61.5896 36.2364 61.5896C38.9373 61.5896 41.5337 60.4797 43.4829 58.4918C45.2876 60.3893 47.6976 61.4955 50.2341 61.5906C52.7705 61.6858 55.2478 60.763 57.1738 59.0055C57.4147 58.7817 57.6113 58.5094 57.7524 58.2042C57.8934 57.899 57.9761 57.5671 57.9955 57.2276C58.015 56.8882 57.9709 56.5481 57.8657 56.2269C57.7606 55.9058 57.5965 55.6101 57.383 55.3569C57.1695 55.1037 56.9109 54.8981 56.6221 54.752C56.3333 54.606 56.0201 54.5224 55.7006 54.506C55.3812 54.4897 55.0619 54.5409 54.7612 54.6568C54.4606 54.7727 54.1845 54.951 53.9492 55.1812L53.9468 55.1915ZM20.0527 22.3653L27.2992 30.0703C27.7521 30.5518 28.3664 30.8223 29.0069 30.8223C29.6474 30.8223 30.2617 30.5518 30.7147 30.0703L37.9611 22.3653C38.4143 21.8837 38.6691 21.2304 38.6693 20.5491C38.6696 19.8678 38.4152 19.2143 37.9623 18.7323C37.5094 18.2504 36.895 17.9795 36.2542 17.9793C35.6135 17.979 34.9989 18.2495 34.5456 18.731L31.4176 22.0519V2.56836C31.4176 1.88719 31.1631 1.23392 30.7101 0.752255C30.2571 0.270594 29.6427 0 29.0021 0C28.3615 0 27.7471 0.270594 27.2941 0.752255C26.8411 1.23392 26.5866 1.88719 26.5866 2.56836V22.0519L23.4465 18.731C22.9932 18.2495 22.3786 17.979 21.7379 17.9793C21.0971 17.9795 20.4827 18.2504 20.0298 18.7323C19.5768 19.2143 19.3225 19.8678 19.3227 20.5491C19.323 21.2304 19.5777 21.8837 20.031 22.3653H20.0527Z" fill="#084179" />
            </svg>
            <p>Redução de <strong>33%</strong> no <br />consumo de água<br />industrial até 2027</p>
          </div>

          <div className="bg-dblue">
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="60" viewBox="0 0 54 60" fill="none">
              <path d="M45.6885 45.3958C45.6885 45.3958 49.5 50.7728 49.5 53.2495C49.5 54.8346 48.951 56.4197 47.853 57.6284C46.755 58.837 45.315 59.4413 43.875 59.4413C42.435 59.4413 40.995 58.837 39.897 57.6284C38.799 56.4197 38.25 54.8272 38.25 53.2396C38.25 50.7728 42.0615 45.3933 42.0615 45.3933C43.0695 44.3085 44.6805 44.3085 45.6885 45.3933V45.3958ZM54 35.9125C54 39.3279 51.4755 42.1043 48.375 42.1043H39.375C36.2745 42.1043 33.75 39.3279 33.75 35.9125C33.75 35.2314 33.246 34.6741 32.625 34.6741H3.375C1.50975 34.6741 0 33.0097 0 30.959C0 28.9083 1.50975 27.2439 3.375 27.2439H18V19.8138H3.375C1.50975 19.8138 0 18.1494 0 16.0987C0 14.048 1.50975 12.3836 3.375 12.3836H18V7.43016H12.375C10.5098 7.43016 9 5.76581 9 3.71508C9 1.66436 10.5098 0 12.375 0H30.375C32.2402 0 33.75 1.66436 33.75 3.71508C33.75 5.76581 32.2402 7.43016 30.375 7.43016H24.75V12.3836H32.625C44.4105 12.3836 54 22.9394 54 35.9125ZM47.2073 34.6741C46.6313 26.3721 40.311 19.8138 32.625 19.8138H24.75V27.2439H32.625C36.585 27.2439 39.8723 30.4785 40.419 34.6741H47.2073Z" fill="white" />
            </svg>
            <p>Redução de <strong>29%</strong> <br />no consumo de água <br />portável até <strong>2027</strong> </p>
          </div>

          <div className="bg-lemon">
            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
              <g clip-path="url(#clip0_107_234)">
                <path d="M49.9238 11.6755C48.029 10.6972 45.7699 10.8628 44.0342 12.1017C43.9304 12.1745 37.5417 17.9405 37.5417 17.9405V16.7149C37.5417 14.6545 36.422 12.7553 34.6222 11.7572C32.8225 10.7612 30.6185 10.8142 28.8695 11.9073C28.7834 11.9603 19.8772 18.72 19.8772 18.72V6.43508C21.1625 5.98017 22.0855 4.75454 22.0855 3.3125C22.0855 1.48179 20.6015 0 18.773 0H3.3125C1.484 0 0 1.48179 0 3.3125C0 4.75454 0.923083 5.98017 2.20833 6.43508V40.8542C2.20833 47.552 7.6585 53 14.3542 53H40.8542C47.5498 53 53 47.552 53 40.8542V16.7149C53 14.5816 51.823 12.6493 49.9238 11.6732V11.6755ZM46.375 40.8542C46.375 43.8972 43.8995 46.375 40.8542 46.375H14.3542C11.3089 46.375 8.83333 43.8972 8.83333 40.8542V6.625H13.25V38.6458C13.25 40.4765 14.734 41.9583 16.5625 41.9583C18.391 41.9583 19.875 40.4765 19.875 38.6458V27.0388L30.9167 18.6538V25.3958C30.9167 26.7054 31.6896 27.8912 32.8843 28.4235C34.0834 28.9557 35.4791 28.7348 36.4507 27.8559L46.375 18.8879V40.8542ZM30.9167 37.5417V39.75C30.9167 40.969 29.9273 41.9583 28.7083 41.9583H26.5C25.281 41.9583 24.2917 40.969 24.2917 39.75V37.5417C24.2917 36.3227 25.281 35.3333 26.5 35.3333H28.7083C29.9273 35.3333 30.9167 36.3227 30.9167 37.5417ZM37.5417 35.3333H39.75C40.969 35.3333 41.9583 36.3227 41.9583 37.5417V39.75C41.9583 40.969 40.969 41.9583 39.75 41.9583H37.5417C36.3227 41.9583 35.3333 40.969 35.3333 39.75V37.5417C35.3333 36.3227 36.3227 35.3333 37.5417 35.3333Z" fill="#084179" />
              </g>
              <defs>
                <clipPath id="clip0_107_234">
                  <rect width="53" height="53" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>Redução de <strong>15%</strong> <br /> nas emissões de <br />CO2 até 2030.</p>
          </div>

          <div className="bg-dblue">
            <svg xmlns="http://www.w3.org/2000/svg" width="58" height="61" viewBox="0 0 58 61" fill="none">
              <path d="M38.0625 29.2775C38.9567 30.9923 38.86 33.0854 37.8208 34.7245L30.8608 46.1733C30.16 47.3081 29 47.9385 27.7917 47.9385C27.115 47.9385 26.4625 47.7368 25.8583 47.3585C24.1667 46.2489 23.6592 43.9037 24.7467 42.1385L29.6525 34.0689H24.4567C22.8375 34.0689 21.315 33.2619 20.3483 31.9254C19.3817 30.5636 19.0917 28.8236 19.5508 27.2097C19.6475 26.8819 19.7683 26.5793 19.9617 26.2767L27.1392 14.3992C28.2025 12.634 30.45 12.1044 32.1417 13.214C33.8333 14.3236 34.3408 16.6688 33.2775 18.434L28.3958 26.5036H33.5917C35.4767 26.5036 37.1925 27.5628 38.0625 29.3028V29.2775ZM58 13.8696V46.6524C58 54.2933 52.0308 60.5221 44.7083 60.5221H13.2917C5.96917 60.5221 0 54.2933 0 46.6524V13.8696C0 6.22873 5.96917 0 13.2917 0H44.7083C52.0308 0 58 6.22873 58 13.8696ZM50.75 13.8696C50.75 10.3896 48.0433 7.56526 44.7083 7.56526H13.2917C9.95667 7.56526 7.25 10.3896 7.25 13.8696V46.6524C7.25 50.1324 9.95667 52.9568 13.2917 52.9568H44.7083C48.0433 52.9568 50.75 50.1324 50.75 46.6524V13.8696Z" fill="white" />
            </svg>
            <p>Economia de <strong>1,7 <br />TWH</strong> de eletricidade por meio do aumento <br />de eficiência <br />energética até <strong>2030</strong>.</p>
          </div>

        </div>

      </section>


      <section className="section__metas mobile">
        <h2>Metas Sustentáveis</h2>
        <Slider>

          <div className="bg-lemon">
            <svg xmlns="http://www.w3.org/2000/svg" width="58" height="62" viewBox="0 0 58 62" fill="none">
              <path d="M0.80615 46.1739C2.73336 47.9301 5.21136 48.8511 7.74783 48.7541C10.2843 48.657 12.6936 47.5489 14.4971 45.65C16.4463 47.6379 19.0427 48.7478 21.7436 48.7478C24.4444 48.7478 27.0408 47.6379 28.99 45.65C30.9392 47.6379 33.5356 48.7478 36.2364 48.7478C38.9373 48.7478 41.5337 47.6379 43.4829 45.65C45.2876 47.5475 47.6976 48.6537 50.2341 48.7488C52.7705 48.844 55.2478 47.9212 57.1738 46.1637C57.4147 45.9399 57.6113 45.6676 57.7524 45.3624C57.8934 45.0572 57.9761 44.7253 57.9955 44.3859C58.015 44.0464 57.9709 43.7063 57.8657 43.3852C57.7606 43.064 57.5965 42.7683 57.383 42.5151C57.1695 42.2619 56.9109 42.0563 56.6221 41.9103C56.3333 41.7642 56.0201 41.6806 55.7006 41.6642C55.3812 41.6479 55.0619 41.6991 54.7612 41.815C54.4606 41.9309 54.1845 42.1092 53.9492 42.3394C53.3147 42.8821 52.5715 43.2625 51.7768 43.4513C50.9821 43.6401 50.1573 43.6321 49.3659 43.4281C48.5746 43.2241 47.8379 42.8294 47.2128 42.2746C46.5877 41.7198 46.0909 41.0196 45.7607 40.2282C45.588 39.7339 45.2772 39.3077 44.87 39.0067C44.4628 38.7057 43.9788 38.5444 43.4829 38.5444C42.987 38.5444 42.503 38.7057 42.0958 39.0067C41.6886 39.3077 41.3778 39.7339 41.2051 40.2282C40.7582 41.2269 40.0542 42.0704 39.1748 42.661C38.2954 43.2516 37.2766 43.565 36.2364 43.565C35.1963 43.565 34.1775 43.2516 33.2981 42.661C32.4187 42.0704 31.7147 41.2269 31.2678 40.2282C31.0951 39.7339 30.7843 39.3077 30.3771 39.0067C29.9699 38.7057 29.4859 38.5444 28.99 38.5444C28.4941 38.5444 28.0101 38.7057 27.6029 39.0067C27.1957 39.3077 26.8849 39.7339 26.7122 40.2282C26.2653 41.2269 25.5613 42.0704 24.6819 42.661C23.8025 43.2516 22.7837 43.565 21.7436 43.565C20.7034 43.565 19.6846 43.2516 18.8052 42.661C17.9258 42.0704 17.2218 41.2269 16.7749 40.2282C16.6022 39.7339 16.2914 39.3077 15.8842 39.0067C15.477 38.7057 14.993 38.5444 14.4971 38.5444C14.0012 38.5444 13.5172 38.7057 13.11 39.0067C12.7029 39.3077 12.392 39.7339 12.2193 40.2282C11.889 41.0192 11.3922 41.7189 10.7673 42.2735C10.1424 42.828 9.40605 43.2225 8.61504 43.4265C7.82404 43.6305 6.99953 43.6386 6.20512 43.4501C5.41072 43.2616 4.66765 42.8816 4.03324 42.3394C3.55501 41.8844 2.92637 41.65 2.28561 41.6878C1.64486 41.7256 1.04447 42.0325 0.616535 42.541C0.188597 43.0495 -0.0318387 43.7179 0.00372106 44.3992C0.0392808 45.0805 0.327923 45.7189 0.80615 46.1739ZM53.9468 55.1915C53.3123 55.7342 52.5691 56.1146 51.7744 56.3033C50.9797 56.4921 50.1549 56.4842 49.3635 56.2802C48.5722 56.0761 47.8355 55.6815 47.2104 55.1266C46.5853 54.5718 46.0885 53.8717 45.7583 53.0803C45.5855 52.586 45.2747 52.1598 44.8676 51.8588C44.4604 51.5578 43.9764 51.3965 43.4805 51.3965C42.9846 51.3965 42.5006 51.5578 42.0934 51.8588C41.6862 52.1598 41.3754 52.586 41.2027 53.0803C40.7558 54.0789 40.0518 54.9224 39.1724 55.513C38.293 56.1036 37.2742 56.4171 36.234 56.4171C35.1939 56.4171 34.1751 56.1036 33.2957 55.513C32.4163 54.9224 31.7123 54.0789 31.2654 53.0803C31.0927 52.586 30.7818 52.1598 30.3747 51.8588C29.9675 51.5578 29.4835 51.3965 28.9876 51.3965C28.4917 51.3965 28.0077 51.5578 27.6005 51.8588C27.1933 52.1598 26.8825 52.586 26.7098 53.0803C26.2629 54.0789 25.5589 54.9224 24.6795 55.513C23.8001 56.1036 22.7813 56.4171 21.7411 56.4171C20.701 56.4171 19.6822 56.1036 18.8028 55.513C17.9234 54.9224 17.2194 54.0789 16.7725 53.0803C16.5998 52.586 16.2889 52.1598 15.8818 51.8588C15.4746 51.5578 14.9906 51.3965 14.4947 51.3965C13.9988 51.3965 13.5148 51.5578 13.1076 51.8588C12.7004 52.1598 12.3896 52.586 12.2169 53.0803C11.8866 53.8713 11.3898 54.571 10.7649 55.1255C10.14 55.6801 9.40364 56.0745 8.61263 56.2785C7.82162 56.4825 6.99711 56.4906 6.20271 56.3021C5.4083 56.1137 4.66523 55.7337 4.03082 55.1915C3.55243 54.747 2.92864 54.5208 2.29454 54.5619C1.66044 54.603 1.06709 54.9081 0.643008 55.411C0.218926 55.9139 -0.00174444 56.5743 0.0287911 57.249C0.0593266 57.9237 0.33861 58.5584 0.80615 59.0157C2.73336 60.7719 5.21136 61.6929 7.74783 61.5959C10.2843 61.4988 12.6936 60.3907 14.4971 58.4918C16.4463 60.4797 19.0427 61.5896 21.7436 61.5896C24.4444 61.5896 27.0408 60.4797 28.99 58.4918C30.9392 60.4797 33.5356 61.5896 36.2364 61.5896C38.9373 61.5896 41.5337 60.4797 43.4829 58.4918C45.2876 60.3893 47.6976 61.4955 50.2341 61.5906C52.7705 61.6858 55.2478 60.763 57.1738 59.0055C57.4147 58.7817 57.6113 58.5094 57.7524 58.2042C57.8934 57.899 57.9761 57.5671 57.9955 57.2276C58.015 56.8882 57.9709 56.5481 57.8657 56.2269C57.7606 55.9058 57.5965 55.6101 57.383 55.3569C57.1695 55.1037 56.9109 54.8981 56.6221 54.752C56.3333 54.606 56.0201 54.5224 55.7006 54.506C55.3812 54.4897 55.0619 54.5409 54.7612 54.6568C54.4606 54.7727 54.1845 54.951 53.9492 55.1812L53.9468 55.1915ZM20.0527 22.3653L27.2992 30.0703C27.7521 30.5518 28.3664 30.8223 29.0069 30.8223C29.6474 30.8223 30.2617 30.5518 30.7147 30.0703L37.9611 22.3653C38.4143 21.8837 38.6691 21.2304 38.6693 20.5491C38.6696 19.8678 38.4152 19.2143 37.9623 18.7323C37.5094 18.2504 36.895 17.9795 36.2542 17.9793C35.6135 17.979 34.9989 18.2495 34.5456 18.731L31.4176 22.0519V2.56836C31.4176 1.88719 31.1631 1.23392 30.7101 0.752255C30.2571 0.270594 29.6427 0 29.0021 0C28.3615 0 27.7471 0.270594 27.2941 0.752255C26.8411 1.23392 26.5866 1.88719 26.5866 2.56836V22.0519L23.4465 18.731C22.9932 18.2495 22.3786 17.979 21.7379 17.9793C21.0971 17.9795 20.4827 18.2504 20.0298 18.7323C19.5768 19.2143 19.3225 19.8678 19.3227 20.5491C19.323 21.2304 19.5777 21.8837 20.031 22.3653H20.0527Z" fill="#084179" />
            </svg>
            <p>Redução de <strong>33%</strong> no <br />consumo de água<br />industrial até 2027</p>
          </div>

          <div className="bg-dblue">
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="60" viewBox="0 0 54 60" fill="none">
              <path d="M45.6885 45.3958C45.6885 45.3958 49.5 50.7728 49.5 53.2495C49.5 54.8346 48.951 56.4197 47.853 57.6284C46.755 58.837 45.315 59.4413 43.875 59.4413C42.435 59.4413 40.995 58.837 39.897 57.6284C38.799 56.4197 38.25 54.8272 38.25 53.2396C38.25 50.7728 42.0615 45.3933 42.0615 45.3933C43.0695 44.3085 44.6805 44.3085 45.6885 45.3933V45.3958ZM54 35.9125C54 39.3279 51.4755 42.1043 48.375 42.1043H39.375C36.2745 42.1043 33.75 39.3279 33.75 35.9125C33.75 35.2314 33.246 34.6741 32.625 34.6741H3.375C1.50975 34.6741 0 33.0097 0 30.959C0 28.9083 1.50975 27.2439 3.375 27.2439H18V19.8138H3.375C1.50975 19.8138 0 18.1494 0 16.0987C0 14.048 1.50975 12.3836 3.375 12.3836H18V7.43016H12.375C10.5098 7.43016 9 5.76581 9 3.71508C9 1.66436 10.5098 0 12.375 0H30.375C32.2402 0 33.75 1.66436 33.75 3.71508C33.75 5.76581 32.2402 7.43016 30.375 7.43016H24.75V12.3836H32.625C44.4105 12.3836 54 22.9394 54 35.9125ZM47.2073 34.6741C46.6313 26.3721 40.311 19.8138 32.625 19.8138H24.75V27.2439H32.625C36.585 27.2439 39.8723 30.4785 40.419 34.6741H47.2073Z" fill="white" />
            </svg>
            <p>Redução de <strong>29%</strong> <br />no consumo de água <br />portável até <strong>2027</strong> </p>
          </div>

          <div className="bg-lemon">
            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
              <g clip-path="url(#clip0_107_234)">
                <path d="M49.9238 11.6755C48.029 10.6972 45.7699 10.8628 44.0342 12.1017C43.9304 12.1745 37.5417 17.9405 37.5417 17.9405V16.7149C37.5417 14.6545 36.422 12.7553 34.6222 11.7572C32.8225 10.7612 30.6185 10.8142 28.8695 11.9073C28.7834 11.9603 19.8772 18.72 19.8772 18.72V6.43508C21.1625 5.98017 22.0855 4.75454 22.0855 3.3125C22.0855 1.48179 20.6015 0 18.773 0H3.3125C1.484 0 0 1.48179 0 3.3125C0 4.75454 0.923083 5.98017 2.20833 6.43508V40.8542C2.20833 47.552 7.6585 53 14.3542 53H40.8542C47.5498 53 53 47.552 53 40.8542V16.7149C53 14.5816 51.823 12.6493 49.9238 11.6732V11.6755ZM46.375 40.8542C46.375 43.8972 43.8995 46.375 40.8542 46.375H14.3542C11.3089 46.375 8.83333 43.8972 8.83333 40.8542V6.625H13.25V38.6458C13.25 40.4765 14.734 41.9583 16.5625 41.9583C18.391 41.9583 19.875 40.4765 19.875 38.6458V27.0388L30.9167 18.6538V25.3958C30.9167 26.7054 31.6896 27.8912 32.8843 28.4235C34.0834 28.9557 35.4791 28.7348 36.4507 27.8559L46.375 18.8879V40.8542ZM30.9167 37.5417V39.75C30.9167 40.969 29.9273 41.9583 28.7083 41.9583H26.5C25.281 41.9583 24.2917 40.969 24.2917 39.75V37.5417C24.2917 36.3227 25.281 35.3333 26.5 35.3333H28.7083C29.9273 35.3333 30.9167 36.3227 30.9167 37.5417ZM37.5417 35.3333H39.75C40.969 35.3333 41.9583 36.3227 41.9583 37.5417V39.75C41.9583 40.969 40.969 41.9583 39.75 41.9583H37.5417C36.3227 41.9583 35.3333 40.969 35.3333 39.75V37.5417C35.3333 36.3227 36.3227 35.3333 37.5417 35.3333Z" fill="#084179" />
              </g>
              <defs>
                <clipPath id="clip0_107_234">
                  <rect width="53" height="53" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>Redução de <strong>15%</strong> <br /> nas emissões de <br />CO2 até 2030.</p>
          </div>

          <div className="bg-dblue">
            <svg xmlns="http://www.w3.org/2000/svg" width="58" height="61" viewBox="0 0 58 61" fill="none">
              <path d="M38.0625 29.2775C38.9567 30.9923 38.86 33.0854 37.8208 34.7245L30.8608 46.1733C30.16 47.3081 29 47.9385 27.7917 47.9385C27.115 47.9385 26.4625 47.7368 25.8583 47.3585C24.1667 46.2489 23.6592 43.9037 24.7467 42.1385L29.6525 34.0689H24.4567C22.8375 34.0689 21.315 33.2619 20.3483 31.9254C19.3817 30.5636 19.0917 28.8236 19.5508 27.2097C19.6475 26.8819 19.7683 26.5793 19.9617 26.2767L27.1392 14.3992C28.2025 12.634 30.45 12.1044 32.1417 13.214C33.8333 14.3236 34.3408 16.6688 33.2775 18.434L28.3958 26.5036H33.5917C35.4767 26.5036 37.1925 27.5628 38.0625 29.3028V29.2775ZM58 13.8696V46.6524C58 54.2933 52.0308 60.5221 44.7083 60.5221H13.2917C5.96917 60.5221 0 54.2933 0 46.6524V13.8696C0 6.22873 5.96917 0 13.2917 0H44.7083C52.0308 0 58 6.22873 58 13.8696ZM50.75 13.8696C50.75 10.3896 48.0433 7.56526 44.7083 7.56526H13.2917C9.95667 7.56526 7.25 10.3896 7.25 13.8696V46.6524C7.25 50.1324 9.95667 52.9568 13.2917 52.9568H44.7083C48.0433 52.9568 50.75 50.1324 50.75 46.6524V13.8696Z" fill="white" />
            </svg>
            <p>Economia de <strong>1,7 <br />TWH</strong> de eletricidade por meio do aumento <br />de eficiência <br />energética até <strong>2030</strong>.</p>
          </div>
        </Slider>



      </section>

      <section className="section__know">
        <div>
          <h2>Conheça o <br /> <span>BOSCH RECICLA</span></h2>
          <p>Com a constante preocupação em manter o meio ambiente limpo, a Bosch criou uma parceria com a <strong>Green Eletron</strong>, da ABINEE, para promover o descarte sustentável das ferramentas e embalagens que circulam no mercado. <strong>Todo material descartado nos coletores da Green Eletron passa pelo processo de descarte consciente.</strong></p>
          <a href="#">Confira o passo a passo do programa</a>
        </div>

        <div>
          <img src="https://boschferramentasbrasil.vteximg.com.br/arquivos/img_know_bosch.png" alt="bosch recicla" />
        </div>

      </section>

      <section className="banner__green desktop"></section>
      <section className="banner__green mobile">
        <img src="https://boschferramentasbrasil.vteximg.com.br/arquivos/banner-green-eletron-mobile.jpg" alt="banner green" />
      </section>

      <section className="banner__projects desktop">
        <Slider>

          <img src="https://boschferramentasbrasil.vteximg.com.br/arquivos/banner_ferramentas_sustentaveis.png" alt="ferramentas_sustentaveis" />
          <img src="https://boschferramentasbrasil.vteximg.com.br/arquivos/banner_maletas_reciclaveis.png" alt="maletas_reciclaveis" />
          <img src="https://boschferramentasbrasil.vteximg.com.br/arquivos/banner_saco_biodegradavel.png" alt="saco_biodegradavel" />

        </Slider >


      </section>

      <section className="banner__projects mobile">
        <Slider>

          <img src="https://boschferramentasbrasil.vteximg.com.br/arquivos/banner-ferramentas-sustentaveis-mobile.jpg" alt="ferramentas_sustentaveis" />
          <img src="https://boschferramentasbrasil.vteximg.com.br/arquivos/banner-maletas-mobile.jpg" alt="maletas_reciclaveis" />
          <img src="https://boschferramentasbrasil.vteximg.com.br/arquivos/banner_saco_biodegradavel_mobile.jpg" alt="saco_biodegradavel" />

        </Slider >


      </section>




    </>
  )

}

export default lpsustentabilidade
