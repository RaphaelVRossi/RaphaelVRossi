import "./Portfolio.scss"

export default function Portfolio() {
  return (
    <>
      <h1 className="counter-clock-write portfolio">PORTFOLIO</h1>
      <div className="square-content">
        <div className="square-box upper">
          <div>
            <h1>Hello</h1>
            <h1>World</h1>
          </div>
        </div>
        <div className="square-box">
          <div className="inner">
            <h1 className="counter-clock-write medium-font">Design and code</h1>
          </div>
          <div className="inner" style={{ margin: 0 }}>
            <h1 className="small-font">&#123;&#125;</h1>
            <h1 className="small-font">[]</h1>
            <h1 className="small-font">()</h1>
            <h1 className="small-font">;</h1>
            <h1 className="small-font">&gt;</h1>
            <h1 className="small-font">&lt;</h1>
            <h1 className="small-font">=</h1>
            <h1 className="small-font">!</h1>
          </div>
        </div>
        <div className="square-box">
          <h1 className="counter-clock-write medium-font">Raphael Rossi</h1>
          <h1 className="counter-clock-write small-font">Fullstack Developer</h1>
        </div>
      </div>
    </>
  )
}
