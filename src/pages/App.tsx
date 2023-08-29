import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';
import Item from '../components/Lista/Item';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionada, setSelecionada] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa){
    setSelecionada(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionada: tarefa.id === tarefaSelecionada.id ? true : false})))
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista
       tarefas={tarefas}
       selecionaTarefa={selecionaTarefa}
       />
      <Cronometro />
    </div>
  );
}

export default App;
