import "./hello.style.css";

function HelloWorld({ name, lesson }) {
  return (
    <div className="hello">
      <h1>Olá, sou o {name}</h1>
      <p>Estamos estudando: {lesson}</p>
    </div>
  );
}

export default HelloWorld;
