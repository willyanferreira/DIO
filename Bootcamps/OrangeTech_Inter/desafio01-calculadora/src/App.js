import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Container, Content, Row } from "./styles";
import { useState } from "react";
import { FaPowerOff } from 'react-icons/fa';


export const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleOnClear = () => {
    setCurrentNumber('0');
  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label={"C"} onClick={() => handleOnClear()} />
          <Button label={"("}/>
          <Button label={")"}/>
          <Button label={<FaPowerOff/>} className={"power"} />
        </Row>
        <Row>
          <Button label={7} onClick={() => handleAddNumber('7')}/>
          <Button label={8} onClick={() => handleAddNumber('8')}/>
          <Button label={9} onClick={() => handleAddNumber('9')}/>
          <Button label={"/"}/>
        </Row>
        <Row>
          <Button label={4} onClick={() => handleAddNumber('4')}/>
          <Button label={5} onClick={() => handleAddNumber('5')}/>
          <Button label={6} onClick={() => handleAddNumber('6')}/>
          <Button label={"x"}/>
        </Row>
        <Row>
          <Button label={1} onClick={() => handleAddNumber('1')}/>
          <Button label={2} onClick={() => handleAddNumber('2')}/>
          <Button label={3} onClick={() => handleAddNumber('3')} />
          <Button label={"-"}/>
        </Row>
        <Row>
          <Button label={","}/>
          <Button label={0} onClick={() => handleAddNumber('0')}/>
          <Button label={"+"}/>
          <Button label={"="}/>
        </Row>
      </Content>
    </Container>
  );
}