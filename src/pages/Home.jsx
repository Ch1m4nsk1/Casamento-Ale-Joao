import { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '../components/Dialog'
import './Home.css'
import imagem0 from './assets/Imagem-0.jpeg'

const presentes = [
  {
    id: 1,
    nome: 'Vitrola',
    descricao: 'Para o noivo continuar dizendo que é item de colecionador',
    imagem: '/assets/vitrola.webp',
  },
  {
    id: 2,
    nome: 'PlayStation 5',
    descricao: 'Para deixar parado porque ninguem tem tempo de jogar',
    imagem: '/assets/playstation5.webp',
  },
  {
    id: 3,
    nome: 'Panela Le Creuset',
    descricao: 'Porque miojo gourmet também merece respeito',
    imagem: '/assets/panela-lecreuset.webp',
  },
  {
    id: 4,
    nome: 'Ataque do Tubarão',
    descricao: 'Para as crianças',
    imagem: '/assets/ataque-tubarao.webp',
  },
  {
    id: 5,
    nome: 'Kit Wella 1L',
    descricao: 'Porque casar é dividir a vida… e os produtos caros do banheiro',
    imagem: '/assets/kit-wella.webp',
  },
  {
    id: 6,
    nome: 'Cobertor',
    descricao: 'Um cobertor quentinho para uma tarde de filmes',
    imagem: '/assets/cobertor.webp',
  },
  {
    id: 7,
    nome: 'Piquenique',
    descricao: 'Para uma tarde romântica no parque',
    imagem: '/assets/piquenique.webp',
  },
  {
    id: 8,
    nome: 'Lua de Mel',
    descricao: 'Ajude os recém-casados a viverem sua fase blogueirinhos de viagem',
    imagem: '/assets/lua-de-mel.webp',
  },
  {
    id: 9,
    nome: 'Batedeira',
    descricao: 'Não precisa ser a KitchenAid, mas seria legal ter uma um dia',
    imagem: '/assets/batedeira.webp',
  },
  {
    id: 10,
    nome: 'Jogo de Jantar',
    descricao: 'Para receber visitas como adultos funcionais',
    imagem: '/assets/jogo-jantar.webp',
  },
  {
    id: 11,
    nome: 'Mesa de Jantar',
    descricao: 'Onde acontecerão cafés, risadas e fofocas',
    imagem: '/assets/mesa-jantar.webp',
  },
  {
    id: 12,
    nome: 'Sofá',
    descricao: 'Para maratonar séries até alguém dormir primeiro',
    imagem: '/assets/sofa.webp',
  },
  {
    id: 13,
    nome: 'Tapete Persa',
    descricao: 'Para o apartamento parecer rica sem precisar ser',
    imagem: '/assets/tapete-persa.webp',
  },
  {
    id: 14,
    nome: 'Cortinas Elegantes',
    descricao: 'Para os vizinhos não acompanharem a rotina do casal',
    imagem: '/assets/cortinas.webp',
  },
  {
    id: 15,
    nome: 'Luminária Moderna',
    descricao: 'Para criar aquele clima Pinterest em casa',
    imagem: '/assets/luminaria.webp',
  },
  {
    id: 16,
    nome: 'Jogo de Louça',
    descricao: 'Para impressionar nas refeições e pedir pizza no prato chique',
    imagem: '/assets/jogo-louca.webp',
  },
  {
    id: 17,
    nome: 'Talheres de Prata',
    descricao: 'Porque comer arroz e feijão também pode ser sofisticado',
    imagem: '/assets/talheres.webp',
  },
  {
    id: 18,
    nome: 'Copos de Cristal',
    descricao: 'Para brindar quando o salário cair na conta',
    imagem: '/assets/copos-cristal.webp',
  },
  {
    id: 19,
    nome: 'Jogo de Banho',
    descricao: 'Para transformar o banho num mini spa de apartamento',
    imagem: '/assets/jogo-banho.webp',
  },
  {
    id: 20,
    nome: 'Carro',
    descricao: 'Não custa nada sonhar, né?',
    imagem: '/assets/carro.webp',
  },
    {
    id: 21,
    nome: 'Sua opção de presente',
    descricao: 'O que seu coração mandar. (Fale com os noivos)',
    imagem: '/assets/sua-opcao.webp',
  },
]

export default function Home() {
  const [countdown, setCountdown] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 })
  const [selectedPresente, setSelectedPresente] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const updateCountdown = () => {
      const weddingDate = new Date('2027-05-01T00:00:00').getTime()
      const now = new Date().getTime()
      const difference = weddingDate - now

      if (difference > 0) {
        const dias = Math.floor(difference / (1000 * 60 * 60 * 24))
        const horas = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutos = Math.floor((difference / 1000 / 60) % 60)
        const segundos = Math.floor((difference / 1000) % 60)

        setCountdown({ dias, horas, minutos, segundos })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  const handlePresenteClick = (presente) => {
    setSelectedPresente(presente)
    setIsModalOpen(true)
  }

  return (
    <div className="home">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo font-playfair">Alexandra & João</div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#casal">O Casal</a></li>
            <li><a href="#cerimonia">Cerimônia</a></li>
            <li><a href="#festa">Festa</a></li>
            <li><a href="#presentes">Presentes</a></li>
            <li><a href="#galeria">Galeria</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg-1"></div>
        <div className="hero-bg-2"></div>
        
        <div className="hero-content">
          <h1 className="title font-playfair">
            Alexandra <span className="ampersand">&</span> João
          </h1>
          <p className="subtitle">Save the Date – 01/05/2027</p>

          {/* Foto Grande */}
          <div className="hero-image">
            <img 
              src="{Imagem0}" 
              alt="Alexandra & João"
            />
          </div>

          {/* Countdown */}
          <div className="countdown">
            <div className="countdown-item">
              <div className="countdown-number">{String(countdown.dias).padStart(2, '0')}</div>
              <div className="countdown-label">Dias</div>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <div className="countdown-number">{String(countdown.horas).padStart(2, '0')}</div>
              <div className="countdown-label">Horas</div>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <div className="countdown-number">{String(countdown.minutos).padStart(2, '0')}</div>
              <div className="countdown-label">Minutos</div>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <div className="countdown-number">{String(countdown.segundos).padStart(2, '0')}</div>
              <div className="countdown-label">Segundos</div>
            </div>
          </div>
        </div>
      </section>

      {/* O Casal Section */}
      <section id="casal" className="section casal-section">
        <div className="container">
          <h2 className="section-title font-playfair">O Casal</h2>
          <div className="casal-content">
            <p>texto</p>
            <p>texto</p>
            <p>texto</p>
          </div>
        </div>
      </section>

      {/* Cerimônia Section */}
      <section id="cerimonia" className="section">
        <div className="container">
          <h2 className="section-title font-playfair">Cerimônia</h2>
          <div className="cerimonia-grid">
            <div className="cerimonia-card">
              <h3>Data e Hora</h3>
              <p>01 de maio de 2027</p>
              <p>17h00</p>
            </div>
            <div className="cerimonia-card">
              <h3>📍 Local</h3>
              <p><strong>Paróquia São Miguel</strong></p>
              <p>R. Padre Manuel da Nóbrega, 1575</p>
              <p>Fanny, Curitiba - PR, 81030-330</p>
            </div>
          </div>
        </div>
      </section>

      {/* Festa Section */}
      <section id="festa" className="section festa-section">
        <div className="container">
          <h2 className="section-title font-playfair">Festa</h2>
          <div className="festa-card">
            <h3>Jantar de Recepção</h3>
            <p><strong>Castelo Trevizzo</strong></p>
            <p>local</p>
          </div>
        </div>
      </section>

      {/* Presentes Section */}
      <section id="presentes" className="section">
        <div className="container">
          <h2 className="section-title font-playfair">Presentes</h2>
          <p className="presentes-intro">Escolha um presente especial para celebrar conosco. Clique no presente para ver o QR code do PIX.</p>
          
          <div className="presentes-grid">
            {presentes.map((presente) => (
              <div
                key={presente.id}
                className="presente-card"
                onClick={() => handlePresenteClick(presente)}
              >
                <div className="presente-image">
                  <img src={presente.imagem} alt={presente.nome} />
                </div>
                <div className="presente-info">
                  <h3 className="presente-nome font-playfair">{presente.nome}</h3>
                  <p className="presente-descricao">{presente.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria Section */}
      <section id="galeria" className="section galeria-section">
        <div className="container">
          <h2 className="section-title font-playfair">Galeria de Fotos</h2>
          <div className="galeria-grid">
            <div className="galeria-item">
              <img src="assets/foto-galeria-1.webp" alt="Galeria 1" />
            </div>
            <div className="galeria-item">
              <img src="assets/foto-galeria-2.webp" alt="Galeria 2" />
            </div>
            <div className="galeria-item">
              <img src="assets/foto-galeria-3.webp" alt="Galeria 3" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-title font-playfair">Alexandra & João</p>
        <p>01 de maio de 2027</p>
      </footer>

      {/* Modal de Presente */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogHeader>
          <DialogTitle className="font-playfair">
            {selectedPresente?.nome}
          </DialogTitle>
          <DialogClose onClick={() => setIsModalOpen(false)} />
        </DialogHeader>
        <DialogContent>
          {selectedPresente && (
            <div className="modal-body">
              <img src={selectedPresente.imagem} alt={selectedPresente.nome} />
              <p className="modal-description">{selectedPresente.descricao}</p>
              
              <div className="modal-qr">
                <p className="modal-qr-title">Escanear QR code para PIX</p>
                <p className="modal-qr-subtitle">Adicione o QR code aqui</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
