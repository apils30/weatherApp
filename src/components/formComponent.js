import React from "react";
import { Button, Input } from "semantic-ui-react"

const FormComponent = props => (
    <form onSubmit={props.findWeather}>
        <Input type="text" name="city" placeholder="Choose your city"/>
        <Button>Show the weather</Button>
    </form>
);

export default FormComponent;
