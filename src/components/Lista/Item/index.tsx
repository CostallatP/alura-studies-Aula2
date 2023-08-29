import { ITarefa } from '../../../types/tarefa';
import style from '../Lista.module.scss';

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa)=> void
}

export default function Item({ tarefa, tempo, selecionada, completada, id, selecionaTarefa }: Props) {
  
  return (
    <li className={`${style.item} ${selecionada ? style.itemSelecionado : ''}`}
    onClick={()=> selecionaTarefa({
      tarefa,
      tempo,
      selecionada,
      completada,
      id
      })}
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}