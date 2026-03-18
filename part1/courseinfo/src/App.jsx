const Header = (course) =>{
  return(
    <div>
      <h1>{course.course}</h1>
    </div>
  )
}

const Part = (part) =>{
  return(
    <div>
      <p>{part.name} {part.num}</p>
    </div>
  )
}
const Content = (part) => {
  return(
    <div>
      <Part name={part.name} num={part.num}/>
      <Part name={part.name} num={part.num}/>
      <Part name={part.name} num={part.num}/>
    </div>
  )
}

const Total = (total) => {
  return(
    <div>
      <p>{total.number}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>
      <Header course={course}/>
      <Content name={part1} num={exercises1}/>
      <Total number={exercises1}/>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App