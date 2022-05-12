import Card from "./components/Card";
import { Container, ContainerMessage } from "./components/Container";
import ImgStar from "./components/ImgStar";
import Title from "./components/Title";
import Text from "./components/Text";
import { SubmitButton, Button } from "./components/Button";
import Options from "./components/Options";
import { useState } from "react";
import Message from "./Message";
import { Link, useNavigate } from "react-router-dom";



const App = () => {
  const numbers = [1, 2, 3, 4, 5];
  const listNumbers = numbers.map((number) => <Button onClick={() => setRating(number)}>{number}</Button>);
  const [rating, setRating] = useState(numbers);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/message/");
    // console.log(rating)

  };
  console.log(numbers)
  console.log(listNumbers)

  return (
    <Container>
      <Card>
        <ImgStar />
        <Title>How did we do?</Title>
        <Text>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Text>
        <Options>{listNumbers}</Options>
        <SubmitButton onClick={handleClick}>SUBMIT</SubmitButton>
      </Card>
    </Container>
  );
};

export default App;
