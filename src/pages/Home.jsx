import { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '../components/Dialog'
import './Home.css'

const baseUrl = import.meta.env.BASE_URL
const getAsset = (assetPath) => `${baseUrl}${assetPath}`

const presentes = [
  {
    id: 1,
    nome: 'Vitrola',
    descricao: 'Para o noivo dizer que é item de colecionador',
  },
  {
    id: 2,
    nome: 'Conjunto de Panelas',
    descricao: 'Para receber os convidados com ótimas comidinhas',
  },
  {
    id: 3,
    nome: 'Cobertor',
    descricao: 'Um cobertor quentinho para uma tarde de filmes',
  },
  {
    id: 4,
    nome: 'Piquenique',
    descricao: 'Para uma tarde romântica no parque',
  },
  {
    id: 5,
    nome: 'Lua de Mel',
    descricao: 'Ajude os recém-casados a viverem um sonho',
  },
  {
    id: 6,
    nome: 'Batedeira',
    descricao: 'Não precisa ser a KitchenAid, mas seria legal ter uma um dia',
  },
  {
    id: 7,
    nome: 'Jogo de Jantar',
    descricao: 'Para receber as visitas com elegância',
  },
  {
    id: 8,
    nome: 'Mesa de Jantar',
    descricao: 'Onde acontecerão cafés, risadas e fofocas',
  },
  {
    id: 9,
    nome: 'Sofá',
    descricao: 'Pro caso das visitas não caberem ao redor da mesa',
  },
  {
    id: 10,
    nome: 'Cortinas Elegantes',
    descricao: 'Pra ninguem ficar bisbilhotando a vida alheia',
  },
  {
    id: 11,
    nome: 'Luminária Moderna',
    descricao: 'Para criar aquele clima aconchegante em casa',
  },
  {
    id: 12,
    nome: 'Talheres',
    descricao: 'Porque não rola comer com as mãos',
  },
  {
    id: 13,
    nome: 'Taças',
    descricao: 'Para brindar quando o salário cair na conta',
  },
  {
    id: 14,
    nome: 'Jogo de Banho',
    descricao: 'Para transformar o banho num mini spa de apartamento',
  },
  {
    id: 15,
    nome: 'Carro',
    descricao: 'Não custa nada sonhar, né?',
  },
  {
    id: 16,
    nome: 'Sua opção de presente',
    descricao: 'O que seu coração mandar. (Fale com os noivos)',
  },
].map((presente, index) => ({
  ...presente,
  imagem: getAsset(`assets/Imagem-${(index % 4)}.jpeg`),
}))

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
              src={getAsset('/src/assets/Imagem-0.jpeg')} 
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

      {/* Cerimônia Section */}
      <section id="cerimonia" className="section">
        <div className="container">
          <h2 className="section-title font-playfair">Cerimônia</h2>
          <div className="cerimonia-grid">
            <div className="cerimonia-card">
              <h3>Data e Hora</h3>
              <p>01 de maio de 2027</p>
              <p>16h30</p>
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
          <h2 className="section-title font-playfair">Jantar</h2>
          <div className='festa-grid'>
            <div className="festa-card">
              <h3>Jantar de Recepção </h3>
              <p><strong>Castello Trevizzo</strong></p>
              <p>Av. Manoel Ribas, 4289</p>
              <p>Sta. Felicidade, Curitiba - PR, 822025-160</p>
            </div>
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
              <img src={getAsset('/src/assets/Imagem-1.jpeg')} alt="Galeria 1" />
            </div>
            <div className="galeria-item">
              <img src={getAsset('/src/assets/Imagem-2.jpeg')} alt="Galeria 2" />
            </div>
            <div className="galeria-item">
              <img src={getAsset('/src/assets/Imagem-3.jpeg')} alt="Galeria 3" />
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
