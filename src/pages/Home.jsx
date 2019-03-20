import React from 'react';
import Layout from '../components/Layout';
import './pstyles/Home.css';

const Home = () => (
  <Layout title="Bem Vindos">
    <div className="biografia">
      <div className="imgDiv">
        <img
          className="bioAvatar"
          src="https://scontent.frec31-1.fna.fbcdn.net/v/t1.0-9/38489394_2654233654602809_233558397411131392_n.jpg?_nc_cat=106&_nc_ht=scontent.frec31-1.fna&oh=575a44a1896d34280a46a2707cdf4a2b&oe=5D4CF92D"
          alt=""
        />
      </div>

      <p className="sobreMim">
        Empresa especializada em realizar atividades ligadas a saúde e a
        estética corporal e facial, e também, cursos e treinamentos. Temos um
        grande portfólio correlacionando a soluções de estética e melhoria da
        saúde utilizando Terapias naturais embasada cientificamente. Com o
        objetivo de proporcionar aos nossos clientes a satisfação de um trabalho
        com equipe interdisciplinar. Utilizando equipamentos modernos e
        tratamentos focados na transparência e verdade dos resultados, tratando,
        cuidando e respeitando cada um, dentro de suas necessidades individuais
        e exclusividade desejada promovendo assim saúde e bem-estar.
      </p>
    </div>
  </Layout>
);

export default Home;
