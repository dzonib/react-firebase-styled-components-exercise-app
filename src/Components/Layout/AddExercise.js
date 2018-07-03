import React, { Fragment, Component } from 'react';
import { Form, Input, InputAndLabelContainer, Label, Select, Button, TextArea, Title } from '../../StyledComponents/Form';

class AddExercise extends Component {

  state = {
    muscleGroup: '',
    exercise: '',
    description: ''
  }


  exerciseHandler = (e) => {
    const exercise = e.target.value;
    this.setState(() => ({exercise}))
  }

  handleTextarea = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}))
  }

  handleSelect = e => {
    const muscleGroup = e.target.value;
    this.setState(() => ({muscleGroup}))
  }

  render() {
    console.log(this.state)
    return (
      <Fragment>
          <Form>
          <Title>Add Exercise</Title>
          <InputAndLabelContainer none={"none"}>
            <Label>Muscle Group</Label>
              <Select onChange={this.handleSelect}>
                <option disabled>-- Select muscles group --</option>
                <option value="back">Back</option>
                <option value="legs">Legs</option>
                <option value="chest">Chest</option>
                <option value="shounders">Shoulders</option>
                <option value="arms">Arms</option>
              </Select>
            </InputAndLabelContainer>

            <InputAndLabelContainer>
            <Label>Exercise name</Label>
            <Input onChange={this.exerciseHandler}/>
            </InputAndLabelContainer>

            <InputAndLabelContainer>
            <Label>Exercise Description</Label>
            <TextArea onChange={this.handleTextarea}/>
            </InputAndLabelContainer>

          <Button type="submit">Add Exercise</Button>

          </Form>
      </Fragment>
    )
  }
}
export default AddExercise