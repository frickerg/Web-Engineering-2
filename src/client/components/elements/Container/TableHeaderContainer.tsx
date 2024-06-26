import styled from 'styled-components'
import Container from './Container'

const TableHeaderContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 0.5fr 0.5fr;
  overflow: auto;
  column-gap: 15px;
  row-gap: 15px;
  padding: 15px 25px;
  padding-top: 10;
  padding-bottom: 0;
  align-items: center;
`

export default TableHeaderContainer
