import './ScrollBtn.scss'

type Props = {
  handleScrollTop: () => void
}

const ScrollBtn: React.FC<Props> = ({ handleScrollTop }) => 
  <div className="scrolltop">
    <div className="scrolltop-btn" onClick={handleScrollTop}>
      <div className="scrolltop-icon"><i className="arrow-up"></i></div>
    </div>
  </div>
 
export default ScrollBtn;