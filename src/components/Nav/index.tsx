import images from "../../assets/img/img";
import { Navebar } from "./styles";

export function Nav() {
  return (
    <Navebar>

      <div className="zoon-level">
        <div className="level-num">200%</div>
        <img src={images.more_than} alt="nivel do zoon" />
      </div>

      <div className="magnifying-glass">
        <img src={images.zoom_in} alt="Zoon in" />
        <img src={images.zoom_out} alt="Zoon out" />
      </div>

      <div className="undo-redo">
        <img src={images.undo} alt="Undo" />
        <img src={images.redo} alt="Redo" />
      </div>

      <div className="trash">
        <img src={images.delete_bin} alt="Trash" />
      </div>

      <div className="flip">
        <img src={images.bring_to_front} alt="flip-to-front" />
        <img src={images.send_to_back} alt="flip-to-back" />
      </div>

      <div className="hand">
        <img src={images.hand} alt="Hand" />
      </div>

      <div className="arrow">
        <img src={images.right_arrow} alt="Arrow-right" />
      </div>

      <div className="actions">
        <img src={images.save_close} alt="Save" />
        <img src={images.powershell} alt="Execute" />
      </div>

    </Navebar>
  )
}