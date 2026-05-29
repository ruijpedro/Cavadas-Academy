import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Home, Users, ClipboardList, Star, Euro, PlaySquare, CalendarDays, Menu,
  Bell, UserCircle, Plus, Search, Clock, MapPin, ChevronRight, Trophy, BarChart3
} from 'lucide-react'
import './styles.css'

const athletes = [
  {nome:'Alexandre Sousa', esc:'Sub-13', mod:'Futsal', pos:'Ala', pag:'Em atraso'},
  {nome:'Diogo Marques', esc:'Sub-13', mod:'Futebol', pos:'Médio', pag:'Pago'},
  {nome:'Gonçalo Ferreira', esc:'Sub-15', mod:'Futsal', pos:'Fixo', pag:'Pago'},
  {nome:'Miguel Santos', esc:'Sub-15', mod:'Voleibol', pos:'Zona 4', pag:'Em atraso'},
  {nome:'Rodrigo Almeida', esc:'Sub-17', mod:'Futsal', pos:'Pivot', pag:'Pago'}
]

const videos = [
  ['Passe e desmarcação','Futsal','Técnica'],
  ['Finalização após apoio','Futsal','Finalização'],
  ['Receção orientada','Futebol','Técnica'],
  ['Manchete e deslocamento','Voleibol','Técnica']
]

function App(){
  const [tab,setTab] = useState('inicio')

  const pages = {
    inicio:<Inicio/>,
    atletas:<Atletas/>,
    treinos:<Treinos/>,
    avaliacao:<Avaliacao/>,
    pagamentos:<Pagamentos/>,
    videos:<Videos/>,
    calendario:<Calendario/>,
    mais:<Mais/>
  }

  return (
    <div className="phone">
      <Header/>
      <main>{pages[tab]}</main>

      <nav>
        <Tab id="inicio" tab={tab} setTab={setTab} icon={<Home/>} label="Início"/>
        <Tab id="atletas" tab={tab} setTab={setTab} icon={<Users/>} label="Atletas"/>
        <Tab id="treinos" tab={tab} setTab={setTab} icon={<ClipboardList/>} label="Treinos"/>
        <Tab id="avaliacao" tab={tab} setTab={setTab} icon={<Star/>} label="Avaliação"/>
        <Tab id="mais" tab={tab} setTab={setTab} icon={<Menu/>} label="Mais"/>
      </nav>
    </div>
  )
}

function Header(){
  return (
    <header>
      <div className="header-brand">
        <img src="/icon-192.png"/>
        <div>
          <h1>CAVADAS ACADEMY</h1>
          <p>TREINA · EVOLUI · SUPERA · VENCE</p>
        </div>
      </div>
      <div className="header-icons">
        <Bell size={20}/>
        <UserCircle size={23}/>
      </div>
    </header>
  )
}

function Inicio(){
  return (
    <section>
      <div className="hello">
        <div>
          <h2>Olá, Treinador! 👋</h2>
          <p>Bem-vindo de volta à Cavadas Academy</p>
        </div>
        <span>20 MAI 2024</span>
      </div>

      <h3 className="section-title">Visão geral</h3>

      <div className="cards4">
        <Metric icon={<Users/>} value="24" label="Atletas ativos"/>
        <Metric icon={<ClipboardList/>} value="8" label="Treinos semana"/>
        <Metric icon={<Star/>} value="3" label="Avaliações pendentes"/>
        <Metric icon={<Euro/>} value="2" label="Pagamentos atraso"/>
      </div>

      <h3 className="section-title">Próximo treino</h3>

      <div className="training-card yellow">
        <CalendarDays/>
        <div>
          <b>Terça, 21 Mai · 19:00</b>
          <strong>Treino Técnico</strong>
          <p><MapPin size={14}/> Pavilhão Municipal</p>
        </div>
        <span>SUB-13</span>
      </div>

      <h3 className="section-title">Notificações</h3>

      <Notice title="Avaliação física pendente" desc="5 atletas por avaliar"/>
      <Notice title="Pagamento de Maio em atraso" desc="2 atletas com pagamento em atraso"/>
    </section>
  )
}

function Atletas(){
  return (
    <section>
      <TopPage title="Atletas"/>
      <SearchBox/>

      {athletes.map((a)=>(
        <div className="list-row" key={a.nome}>
          <div className="avatar">
            {a.nome.split(' ').map(x=>x[0]).slice(0,2).join('')}
          </div>
          <div>
            <b>{a.nome}</b>
            <p>{a.mod} · {a.pos}</p>
          </div>
          <span>{a.esc}</span>
          <ChevronRight size={18}/>
        </div>
      ))}
    </section>
  )
}

function Treinos(){
  return (
    <section>
      <TopPage title="Treinos"/>

      <div className="subtabs">
        <b>SEMANA</b>
        <span>MÊS</span>
        <span>LISTA</span>
      </div>

      <div className="week">
        <b>SEG<br/>20</b>
        <b className="active">TER<br/>21</b>
        <b>QUA<br/>22</b>
        <b>QUI<br/>23</b>
        <b>SEX<br/>24</b>
        <b>SÁB<br/>25</b>
        <b>DOM<br/>26</b>
      </div>

      <Training title="Treino Técnico" esc="SUB-13" time="19:00 - 20:30"/>
      <Training title="Treino Tático" esc="SUB-15" time="19:00 - 21:30"/>
      <Training title="Treino Físico" esc="SUB-17" time="20:30 - 21:30"/>

      <button className="fab"><Plus/></button>
    </section>
  )
}

function Avaliacao(){
  return (
    <section>
      <TopPage title="Avaliação"/>

      <div className="subtabs">
        <b>TÉCNICA</b>
        <span>TÁTICA</span>
        <span>FÍSICA</span>
        <span>COMP.</span>
      </div>

      <div className="profile-card">
        <div className="avatar big">AS</div>
        <div>
          <b>Alexandre Sousa</b>
          <p>Sub-13 · Futsal</p>
        </div>
      </div>

      <div className="radar">
        <div className="poly"></div>
        <span className="t">Técnica</span>
        <span className="d">Física</span>
        <span className="b">Mental</span>
        <span className="e">Tática</span>
      </div>

      <div className="progress">
        <p>Evolução geral <b>72%</b></p>
        <i><em style={{width:'72%'}}></em></i>
      </div>
    </section>
  )
}

function Pagamentos(){
  return (
    <section>
      <TopPage title="Pagamentos"/>

      {athletes.map((a)=>(
        <div className="pay-row" key={a.nome}>
          <div className="avatar">
            {a.nome.split(' ').map(x=>x[0]).slice(0,2).join('')}
          </div>
          <div>
            <b>{a.nome}</b>
            <p>Mensalidade Maio</p>
          </div>
          <div>
            <strong>€20,00</strong>
            <em className={a.pag === 'Pago' ? 'ok' : 'bad'}>{a.pag}</em>
          </div>
        </div>
      ))}
    </section>
  )
}

function Videos(){
  return (
    <section>
      <TopPage title="Vídeos / Animações"/>
      <SearchBox placeholder="Pesquisar vídeos..."/>

      <div className="chips">
        <b>Todos</b>
        <span>Futsal</span>
        <span>Futebol</span>
        <span>Voleibol</span>
      </div>

      {videos.map((v)=>(
        <div className="video-row" key={v[0]}>
          <div className="thumb">
            <PlaySquare/>
          </div>
          <div>
            <b>{v[0]}</b>
            <p>{v[1]} · {v[2]}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

function Calendario(){
  return (
    <section>
      <TopPage title="Calendário"/>

      <div className="calendar">
        MAIO / 2024
        <br/><br/>
        20 21 22 23 24 25 26
      </div>

      <Training title="Treino Técnico" esc="SUB-13" time="19:00 - 20:30"/>
      <Training title="Jogo vs Academia FC" esc="SUB-15" time="10:00"/>
    </section>
  )
}

function Mais(){
  return (
    <section>
      <TopPage title="Mais"/>

      <MenuButton icon={<Euro/>} text="Pagamentos"/>
      <MenuButton icon={<PlaySquare/>} text="Vídeos / Animações"/>
      <MenuButton icon={<CalendarDays/>} text="Calendário"/>
      <MenuButton icon={<Users/>} text="Portal dos Pais"/>
      <MenuButton icon={<BarChart3/>} text="Relatórios"/>
      <MenuButton icon={<Trophy/>} text="Treina · Evolui · Supera · Vence"/>
    </section>
  )
}

function Metric({icon,value,label}){
  return (
    <div className="metric">
      {React.cloneElement(icon,{size:31})}
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  )
}

function Notice({title,desc}){
  return (
    <div className="notice">
      <Bell/>
      <div>
        <b>{title}</b>
        <p>{desc}</p>
      </div>
      <span>10:30</span>
    </div>
  )
}

function TopPage({title}){
  return (
    <div className="page-title">
      <h2>{title}</h2>
      <button><Plus size={19}/></button>
    </div>
  )
}

function SearchBox({placeholder='Pesquisar atleta...'}){
  return (
    <div className="search">
      <Search size={16}/>
      <input placeholder={placeholder}/>
    </div>
  )
}

function Training({title,esc,time}){
  return (
    <div className="training-card">
      <div>
        <b>{title}</b>
        <p><Clock size={14}/> {time}</p>
        <p><MapPin size={14}/> Pavilhão Municipal</p>
      </div>
      <span>{esc}</span>
    </div>
  )
}

function MenuButton({icon,text}){
  return (
    <div className="menu-button">
      {icon}
      <b>{text}</b>
      <ChevronRight/>
    </div>
  )
}

function Tab({id,tab,setTab,icon,label}){
  return (
    <button className={tab===id ? 'active' : ''} onClick={()=>setTab(id)}>
      {React.cloneElement(icon,{size:20})}
      <span>{label}</span>
    </button>
  )
}

createRoot(document.getElementById('root')).render(<App />)
