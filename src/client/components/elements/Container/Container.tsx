import styled from 'styled-components'

type ContainerProps = {
  className?: string
  children: React.ReactNode
}

const StyledContainer = styled.div``

export default function Container(props: Readonly<ContainerProps>) {
  return (
    <StyledContainer className={props.className}>
      {props.children}
    </StyledContainer>
  )
}
