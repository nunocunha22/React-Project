import React, { useState } from 'react'
import Conclusao from './Conclusao'

export default function Objetivos() {

  const [conclusao, setConclusao] = useState(false);

  return (
      <div id='objetivosText'>
    <p>O meu objetivo inicial era construir uma espécie de blogue onde as pessoas poderiam consultar informações relativas ás cidades que escolhessem visitar. Informações sobre, a melhor altura do ano, os melhores horários para ir aos pontos de interesse e um roteiro para se poderem organizar de modo a otimizarem o seu tempo . Terá um mapa da cidade com esses pontos de interesse. Terá alguns pontos de descanso / lazer, como cafés tipicos, parques para quem gosta de desfrutar da fauna e da flora local.  </p>
    <p>Terá também uma pesquisa para que possa ser encontrada a cidade / país / ponto de interesse, etc.</p>

    <button id='conclusionButton' onClick={()=>setConclusao(!conclusao)}>Conclusao</button>
    { conclusao &&  <Conclusao />}


    </div>
  )
}
