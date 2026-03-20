const Header = (course) =>{
  console.log(course);
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
const Content = (parts) => {
  const part2 = parts.concat(5);
  return(
    <div>
      <Part name={part2[0].name} num={part2[0].exercises}/>
      <Part name={part2[1].name} num={part2[1].exercises}/>
      <Part name={part2[2].name} num={part2[2].exercises}/>
    </div>
  )
}

const Total = (parts) => {
  let tot = parts[0].exercises + parts[1].exercises + parts[2].exercises;
  return(
    <div>
      <p>The total number of exercises is {tot}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App