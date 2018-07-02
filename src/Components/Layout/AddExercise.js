import React, { Fragment, Component } from 'react';
import { Form, Input, InputAndLabelContainer, Label, Select, Button, TextArea } from '../../StyledComponents/Form';

class AddExercise extends Component {

  state = {
    muscleGroup: '',
    exercise: '',
    description: ''
  }

  render() {
    return (
      <Fragment>
          <Form>
          <InputAndLabelContainer none={"none"}>
            <Label>Muscle Group</Label>
              <Select>
                <option>Uno</option>
                <option>Due</option>
                <option>Tree</option>
              </Select>
            </InputAndLabelContainer>

            <InputAndLabelContainer>
            <Label>Exercise name</Label>
            <Input/>
            </InputAndLabelContainer>

            <InputAndLabelContainer>
            <Label>Exercise Description</Label>
            <TextArea/>
          </InputAndLabelContainer>

          <Button type="submit">Submit</Button>

          </Form>
      </Fragment>
    )
  }
}
export default AddExercise