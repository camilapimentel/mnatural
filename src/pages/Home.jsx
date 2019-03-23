import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import './pstyles/Home.css';

const Home = () => (
  <Layout title="Bem Vindos">
    <div className="home">
      <div className="biografia">
        <div className="imgDiv">
          <img
            id="bioAvatar"
            src="https://scontent.frec31-1.fna.fbcdn.net/v/t1.0-9/38489394_2654233654602809_233558397411131392_n.jpg?_nc_cat=106&_nc_ht=scontent.frec31-1.fna&oh=575a44a1896d34280a46a2707cdf4a2b&oe=5D4CF92D"
            alt=""
          />
        </div>
        <div className="bioText">
          <h4>Sobre a Mnatural</h4>
          <p className="sobreMim">
            Empresa especializada em realizar atividades ligadas a saúde e a
            estética corporal e facial, e também, cursos e treinamentos. Temos
            um grande portfólio correlacionando a soluções de estética e
            melhoria da saúde utilizando Terapias naturais embasada
            cientificamente. Com o objetivo de proporcionar aos nossos clientes
            a satisfação de um trabalho com equipe interdisciplinar. Utilizando
            equipamentos modernos e tratamentos focados na transparência e
            verdade dos resultados, tratando, cuidando e respeitando cada um,
            dentro de suas necessidades individuais e exclusividade desejada
            promovendo assim saúde e bem-estar.
          </p>
        </div>
      </div>
      <div className="bemvindos">
        <div className="bemvindosText">
          <h4>Saudações</h4>
          <p className="sobreBemvindos">
            A Clínica Escola de Estética Mnatural dá-lhe as boas vindas, é com
            enorme prazer que o recebemos nesta visita virtual. Esperamos que a
            nossa página vá de encontro às suas expectativas.
          </p>
        </div>
      </div>
    </div>
    <div className="missao">
      <div className="missaoText">
        <h4>Missão e Visão</h4>
        <p className="sobreMissao">
          Fazer com que as pessoas consigam resgastar a autoestima e possam
          viver bem melhores, com mais saúde e beleza. com serviços de
          qualidade, em constante atualização,sempre focados na transparência e
          verdade nos resultados. Investir em capacitação profissional,
          infraestrutura, conforto, treinamentos e atendimentos relacionados a
          estética e a medicina alternativa, na área de saúde e bem estar, com o
          objetivo de sermos referência em educação profissional e tecnológica
          na Região Nordeste e posteriormente em âmbito nacional.
        </p>
      </div>
    </div>
    <div className="photoBox">
      <h4>Um pouco do nosso trabalho:</h4>
    </div>
    <div className="Cards">
      <Card
        iconUrl="http://mnatural.com.br/gallery_gen/4059751816115ed31bdefd05dd921d39.jpg"
        linkUrl=""
        cardTitles="Curso Básico de Argiloterapia"
        cardDescript="Conceito de Argiloterapia, sua importância e conservação. Funcionamento e 
          uso medicinal e estético, tipos de argila e composição química, propriedade e utilização das argilas."
      />
    </div>
  </Layout>
);

export default Home;
