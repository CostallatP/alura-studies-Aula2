import Botao from "../Botao";
import Relogio from "./Relogio";
import Style from "./Cronometro.module.scss";


export default function Cronometro()
{
    return (
      <div className={Style.cronometro}>
        <p className={Style.titulo}>escolha um card e inicie o cronometro</p>
        <div className={Style.relogioWrapper}><Relogio></Relogio>
        </div>
        <Botao>
            Começar!
        </Botao>
      </div>
    );
}