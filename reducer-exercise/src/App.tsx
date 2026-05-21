import { useReducer } from "react";

const initialState = {
  isDark: false,
  fSize: 16,
};


function reducer(state: any, action: any) {
  switch (action.type) {

    case "TOGGLE_THEME":
      return {
        ...state,
        isDark: !state.isDark,
      };

    case "INCREASE_FONT":
      return {
        ...state,
        fSize: state.fSize + 1,
      };

    case "DECREASE_FONT":
      return {
        ...state,
        fSize: state.fSize - 1,
      };

    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      style={{
        backgroundColor: state.isDark ? "pink" : "black",
        color: state.isDark ? "black" : "pink",
        fontSize: `${state.fSize}px`,
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>useReducer Exercise</h1>

      <p>
        This is some dummy text for the exercise.
      </p>


<div 
style={{display:"flex",gap: "15px" }}>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Toggle Dark Mode
      </button>

      <button onClick={() => dispatch({ type: "INCREASE_FONT" })}>
        Increase Font Size
      </button>

      <button onClick={() => dispatch({ type: "DECREASE_FONT" })}>
        Decrease Font Size
      </button>
    </div>
      
</div>

  );
  }

export default App;