import { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '../components/Dialog'
import './Home.css'

const baseUrl = import.meta.env.BASE_URL
const getAsset = (assetPath) => `${baseUrl}${assetPath}`

const presentes = [
  {
    id: 1,
    nome: 'Vitrola',
    descricao: 'Para tocar as trilhas sonoras dos momentos especiais.',
    imagem: 'assets/vitrola.jpeg',
    pix: 'assets/pix-vitrola.png',
  },
  {
    id: 2,
    nome: 'Conjunto de Panelas',
    descricao: 'Para reproduzir as receitas secretas da família.',
    imagem: 'assets/panelas.jpeg',
    pix: 'assets/pix-panelas.png',
  },
  {
    id: 3,
    nome: 'Cobertor',
    descricao: 'Nada melhor que um cobertor quentinho para uma tarde de filmes.',
    imagem: 'assets/cobertor.jpeg',
    pix: 'assets/pix-cobertor.png',
  },
  {
    id: 4,
    nome: 'Piquenique',
    descricao: 'Para uma tarde romântica no parque.',
    imagem: 'assets/piquenique.jpeg',
    pix: 'assets/pix-piquenique.png',
  },
  {
    id: 5,
    nome: 'Lua de Mel',
    descricao: 'Para descansar da correria do dia a dia.',
    imagem: 'assets/lua_de_mel.jpeg',
    pix: 'assets/pix-lua-de-mel.png',
  },
  {
    id: 6,
    nome: 'Batedeira',
    descricao: 'Para preparar bolinhos gostosos quando nos visitarem.',
    imagem: 'assets/batedeira.jpeg',
    pix: 'assets/pix-batedeira.png',
  },
  {
    id: 7,
    nome: 'Sofá',
    descricao: 'Palco de muitas risadas e fofocas.',
    imagem: 'assets/sofa.jpeg',
    pix: 'assets/pix-sofa.png',
  },
  {
    id: 8,
    nome: 'Cortinas',
    descricao: 'Pra ninguém ficar bisbilhotando a vida alheia.',
    imagem: 'assets/cortinas.jpeg',
    pix: 'assets/pix-cortinas.png',
  },
  {
    id: 9,
    nome: 'Luminária',
    descricao: 'Para criar aquele clima aconchegante em casa.',
    imagem: 'assets/luminarias.jpeg',
    pix: 'assets/pix-luminaria.png',
  },
  {
    id: 10,
    nome: 'Talheres',
    descricao: 'Porque não rola comer com as mãos.',
    imagem: 'assets/talheres.jpeg',
    pix: 'assets/pix-talheres.png',
  },
  {
    id: 11,
    nome: 'Taças',
    descricao: 'Para brindar quando o salário cair na conta.',
    imagem: 'assets/tacas.jpeg',
    pix: 'assets/pix-tacas.png',
  },
  {
    id: 12,
    nome: 'Carro',
    descricao: 'Não custa nada sonhar, né?',
    imagem: 'assets/carro.jpeg',
    pix: 'assets/pix-carro.png',
  },
  {
    id: 13,
    nome: 'Sua opção de presente',
    descricao: 'O que seu coração mandar. (Fale com os noivos)',
    imagem: 'assets/Imagem-0.jpeg',
    pix: 'assets/pix-outro.png',
  },
].map((presente) => ({
  ...presente,
  imagem: getAsset(presente.imagem),
  pix: getAsset(presente.pix),
}))

const getMapsUrl = (endereco) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`

const igrejaEndereco =
  'Paróquia São Miguel, R. Padre Manuel da Nóbrega, 1575, Fanny, Curitiba - PR, 81030-330'

const jantarEndereco =
  'Castello Trevizzo, Av. Manoel Ribas, 4289, Santa Felicidade, Curitiba - PR'

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
              src={getAsset('assets/Imagem-0.jpeg')} 
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
      <section id="cerimonia" className="section cerimonia-section">
        <div className="container">
          <h2 className="section-title font-playfair">Cerimônia</h2>
          <div className="festa-grid">
            <div className="festa-card">
              <h3>Data e Hora</h3>
              <p>01 de maio de 2027</p>
              <p>16h30</p>
              <h3>📍 Local</h3>
              <p>
                <strong>Paróquia São Miguel Arcanjo</strong>
              </p>
              <p>R. Padre Manuel da Nóbrega, 1575</p>
              <p>Fanny, Curitiba - PR</p>
              <div className="map-container">
                <iframe
                  title="Mapa da Paróquia São Miguel Arcanjo"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    igrejaEndereco
                  )}&output=embed`}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                className="maps-button"
                href={getMapsUrl(igrejaEndereco)}
                target="_blank"
                rel="noopener noreferrer"
              >
                📍 Como chegar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Festa Section */}
      <section id="festa" className="section festa-section">
        <div className="container">
          <h2 className="section-title font-playfair">Jantar</h2>
          <div className="festa-grid">
            <div className="festa-card">
              <h3>Jantar de Recepção</h3>
              <p>
                <strong>Castello Trevizzo</strong>
              </p>
              <p>Av. Manoel Ribas, 4289</p>
              <p>Sta. Felicidade, Curitiba - PR</p>
              <div className="map-container">
                <iframe
                  title="Mapa do Castello Trevizzo"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    jantarEndereco
                  )}&output=embed`}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                className="maps-button"
                href={getMapsUrl(jantarEndereco)}
                target="_blank"
                rel="noopener noreferrer"
              >
                📍 Como chegar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Presentes Section */}
      <section id="presentes" className="section">
        <div className="container">
          <h2 className="section-title font-playfair">Presentes</h2>
          <p className="presentes-intro">Escolha um presente especial para celebrar conosco. Clique no presente para ver o QR code do PIX.</p>
          <p className="presentes-intro">Obs.: Os presentes são meramente ilustrativos.</p>
          
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
              <img src={getAsset('assets/Imagem-1.jpeg')} alt="Galeria 1" />
            </div>
            <div className="galeria-item">
              <img src={getAsset('assets/Imagem-2.jpeg')} alt="Galeria 2" />
            </div>
            <div className="galeria-item">
              <img src={getAsset('assets/Imagem-3.jpeg')} alt="Galeria 3" />
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
                <p className="modal-qr-title">
                  Escaneie o QR Code para presentear
                </p>

                <img
                  src={selectedPresente.pix}
                  alt={`QR Code PIX - ${selectedPresente.nome}`}
                  className="pix-image"
                />

                <p className="modal-qr-subtitle">
                  Aponte a câmera do celular para o QR Code.
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
