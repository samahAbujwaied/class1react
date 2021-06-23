import React, { Component } from 'react'
import { Form ,DropdownButton,Dropdown} from 'react-bootstrap'
// import { Container, CardGroup } from 'react-bootstrap'

export class FilterForm extends Component {
    updateForm = (e) => {
        let filteredArr = []
        if (e != 'All') {
            filteredArr = this.props.hornsData.filter(value => {
                if (value.horns == e)
                    return value
            })
        } else
            filteredArr = this.props.hornsData; 
        this.props.filterData(filteredArr)
    }

    updateHornsNum = event => {
        let NumOfHourns = event.target.value;
        this.updateForm(NumOfHourns)
    }
 

    render() {
        return (
            <>
                <Form style={{textAlign:"center", marginTop:'10vh'}}>
                    <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
                        <Form.Label >Select the number of horns</Form.Label>
                        
                        <Form.Control style={{marginLeft:'5vh'}} as="select" custom name='hornsNum' onChange={this.updateHornsNum}>
                            <option value='All'>All</option>
                            <option value='1 '>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='100'>100</option>
                        </Form.Control>
                        {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button"  onClick={this.updateHornsNum}>
                            <Dropdown.Item value='All'>All</Dropdown.Item>
                            <Dropdown.Item value='1 '>1</Dropdown.Item>
                            <Dropdown.Item value='2'>2</Dropdown.Item>
                             <Dropdown.Item value='3'>3</Dropdown.Item>
                              <Dropdown.Item value='100'>100</Dropdown.Item>
                        </DropdownButton> */}
                    </Form.Group>
                </Form>
            </>
        )
    }
}

export default FilterForm
