import ComponentC from "./ComponentC.jsx"

function ComponentB(){

  return(<div>
          <div className="box">
            <h1>ComponentB</h1>
            <ComponentC></ComponentC>
          </div>
        </div>)
}

export default ComponentB