import Card from "./components/Card";
import messageSVG from "./images/illustration-thank-you.svg";
import Title from "./components/Title";
import Text from "./components/Text";
import { SubmitButton, Button } from "./components/Button";
import Options from "./components/Options";
import SelectedNumber from "./components/SelectedNumber";
import { Container, ContainerMessage } from "./components/Container";
import { useParams } from "react-router-dom";
import App from "./App";

const Message = (props) => {
  return (
    <ContainerMessage>
      <Card>
        <img src={messageSVG} alt="thank you" />
        <Title>Thank You!</Title>
        <SelectedNumber>{`You selected ${props.rating} out of 5`}</SelectedNumber>
        <Text>
          We appreciate you taking time to give a rating. if you ever need more
          support, don't hesitate to get in touch!
        </Text>
      </Card>
    </ContainerMessage>
  );
};

export default Message;
