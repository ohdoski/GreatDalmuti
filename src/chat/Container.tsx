import { FC } from 'react'

interface ContainerProps {
  chatLines: string[]
}
const Container: FC<ContainerProps> = ({ chatLines }) => {
  return (
    <div>
      {chatLines.map((line, index) => {
        return <div key={index}>{line}</div>
      })}
    </div>
  )
}

export default Container
