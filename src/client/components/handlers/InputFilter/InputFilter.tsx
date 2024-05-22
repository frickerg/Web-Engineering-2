import './InputFilter.css'
import Input from '../../elements/Input/Input'
import Button from '../../elements/Button/Button'
import Checkbox from '../../elements/Checkbox/Checkbox'
import { InputType } from '../../../../api/CardContext'

type InputFilterProps = {
  front: string
  back: string
  filterChecked: boolean
  handleInputChange: (inputType: InputType, value: string) => void
  handleAddNewCard: (front: string, back: string) => void
  handleCheckboxChange: (checked: boolean) => void
}

function InputFilter(props: Readonly<InputFilterProps>) {
  return (
    <div className="input-container">
      <Input
        className="input-front"
        key="front"
        value={props.front}
        placeholder="Front"
        handleInputChange={value => props.handleInputChange('front', value)}
      />
      <Input
        className="input-back"
        key="back"
        value={props.back}
        placeholder="Back"
        handleInputChange={value => props.handleInputChange('back', value)}
      />
      <Button
        className="input-button"
        label="Add"
        onClick={() => props.handleAddNewCard(props.front, props.back)}
      />
      <Checkbox // TODO fjv: delete or keep
        className="input-checkbox"
        id="filter"
        label="Filter Table"
        checked={props.filterChecked}
        onChange={props.handleCheckboxChange}
      />
    </div>
  )
}

export default InputFilter
