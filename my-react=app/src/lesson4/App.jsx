import Student from './Student'

function App() {


  return(
    <>
      <Student name="Spongebob" age={30} isStudent={true}></Student>
      <Student name="Patrick" age={42}></Student>
      <Student name="Squidward" age={50}></Student>
      <Student name="Sandy" age={27} isStudent={true}></Student>
      <Student></Student>
    </>
  );
}

export default App
