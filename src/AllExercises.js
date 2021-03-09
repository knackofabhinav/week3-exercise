
function AllExercises() {
  return (
    <div className="App">
      <div className="exOne">
        <h1>Ex01</h1>
        <div className="item"><h2>Div1</h2></div>
        <div className="item"><h2>Div2</h2></div>
        <div className="item"><h2>Div3</h2></div>
      </div>
      <div className="exTwo">
        <h1>Ex02 & 3</h1>
        <div className="item"><h2>Div1</h2></div>
        <div className="item"><h2>Div2</h2></div>
        <div className="item item3"><h2>Div3</h2></div>
      </div>
      <div className="exFour">
        <h1>Ex04 & 5</h1>
        <div className="card">
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less norme Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by </p>
          <button>Primary Button</button>
        </div>
        <div className="card">
          <p>It is a long established fact that a reader will be distracted by the reader the years, sometimes by </p>
          <button>Primary Button</button>
        </div>
      </div>
      <div className="exSix">
          <h1>ex06 & 07 & 08</h1>
          <div className="card">
            <h1>this is heading 1</h1>
            <img src="https://via.placeholder.com/150" alt="thumbnail.png" />
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less norme Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by </p>
            <button className="btn-primary">Primary Button</button>
          </div>
          <div className="card">
            <h1>this is heading 2</h1>
            <img src="https://via.placeholder.com/150" alt="thumbnail.png" />
            <p>It is a long established fact that a reader will be distracted lorem vddf rger gtg ehgtg ertger erg ge eg e ggegeg rgrg g ggerg  fergrfeg by the reader the years, sometimes by </p>
            <button className="btn-primary">Primary Button</button>
          </div>
          <div className="card">
            <h1>this is heading 3</h1>
            <img src="https://via.placeholder.com/150" alt="thumbnail.png" />
            <p>It is a long established fact that a reader will be distracted lorem vddf rger gtg ehgtg ertger erg ge eg e ggegeg rgrg g ggerg  fergrfeg by the reader the years, sometit has a more-or-less norme Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,</p>
            <button className="btn-primary">Primary Button</button>
          </div>
      </div>
        <div className="positioning">
          <h1>positioning</h1>
          <h1>ex01</h1>
          <h1>This is heading <span className="superscript">superscript</span></h1>
          <div className="p-exTwo"><p>This is a notification for ex02 on positioning</p></div>
          {/* FIXME: fixing button + position */}
          <div className="btn-floating"><p>+</p></div>
        </div>
        <div className="exLast">
          <h1> cross over Modal</h1>
          <div className="card">
          {/* FIXME:  Position of X is getting out of parent. */}
            <div className="thumbnail">
              <img src="https://via.placeholder.com/150" alt="thumbnail.png" className="head-img"/>
              <button className="close-btn">X</button>
            </div>
            <h1>this is heading 3</h1>
            <p>It is a long established fact that a reader will be distracted lorem vddf rger gtg ehgtg ertger erg ge eg e ggegeg rgrg g ggerg  fergrfeg by the reader the years, sometit has a more-or-less norme Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,</p>
            <button className="btn-primary">Primary Button</button>
          </div>
        </div>
    </div>
  );
}

export {AllExercises};
