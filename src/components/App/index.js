import { ThemeProvider } from 'styled-components'

import { Container, Title, Row, ComponentContainer, TagTitle, Footer } from './styles';

import GlobalStyles from '../../styles/global';
import Button from '../Button';

import defaultTheme from '../../styles/themes/default';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Title>Buttons</Title>

        <Row>
          <ComponentContainer>
            <TagTitle>{'<Button />'}</TagTitle>
            <Button>
              Default
            </Button>
          </ComponentContainer>
          <ComponentContainer>
            <TagTitle>{'<Button disableShadow />'}</TagTitle>
            <Button disableShadow>
              Default
            </Button>
          </ComponentContainer>
        </Row>

        <Row>
          <ComponentContainer>
            <TagTitle>{'<Button size="sm"'}</TagTitle>
            <Button size="sm">
              Default
            </Button>
          </ComponentContainer>
          <ComponentContainer>
            <TagTitle>{'<Button size="md"'}</TagTitle>
            <Button size="md">
              Default
            </Button>
          </ComponentContainer>
          <ComponentContainer>
            <TagTitle>{'<Button size="lg"'}</TagTitle>
            <Button size="lg">
              Default
            </Button>
          </ComponentContainer>
        </Row>

        <Row>
          <ComponentContainer>
            <TagTitle>{'<Button startIcon="person" />'}</TagTitle>
            <Button startIcon="person">
              Default
            </Button>
          </ComponentContainer>
          <ComponentContainer>
            <TagTitle>{'<Button endIcon="person" />'}</TagTitle>
            <Button endIcon="person">
              Default
            </Button>
          </ComponentContainer>
        </Row>

        <Row>
          <ComponentContainer>
            <TagTitle>{'<Button color="gray"'}</TagTitle>
            <Button color="gray">
              Default
            </Button>
          </ComponentContainer>
          <ComponentContainer>
            <TagTitle>{'<Button color="primary"'}</TagTitle>
            <Button color="primary">
              Default
            </Button>
          </ComponentContainer>
          <ComponentContainer>
            <TagTitle>{'<Button color="secondary"'}</TagTitle>
            <Button color="secondary">
              Default
            </Button>
          </ComponentContainer>
          <ComponentContainer>
            <TagTitle>{'<Button color="danger"'}</TagTitle>
            <Button color="danger">
              Default
            </Button>
          </ComponentContainer>
        </Row>

        <Row>
          <ComponentContainer>
            <TagTitle>{'<Button variant="outline" />'}</TagTitle>
            <Button variant="outline">
              Default
            </Button>
          </ComponentContainer>
          <ComponentContainer>
            <TagTitle>{'<Button variant="text" />'}</TagTitle>
            <Button variant="text">
              Default
            </Button>
          </ComponentContainer>
        </Row>

        <Row>
          <ComponentContainer>
            <TagTitle>{'<Button disabled />'}</TagTitle>
            <Button disabled>
              Default
            </Button>
          </ComponentContainer>
          <ComponentContainer>
            <TagTitle>{'<Button variant="outline" disabled />'}</TagTitle>
            <Button variant="outline" disabled>
              Default
            </Button>
          </ComponentContainer>
          <ComponentContainer>
            <TagTitle>{'<Button variant="text" disabled />'}</TagTitle>
            <Button variant="text" disabled>
              Default
            </Button>
          </ComponentContainer>
        </Row>

        <p>
          Icons:
          <a href="https://fonts.google.com/icons" target="_blank" rel="noopener noreferrer">
            https://fonts.google.com/icons
          </a>
        </p>
      </Container>

      <Footer>
        <p>
          Created by
          <a href="https://devchallenges.io/portfolio/iranadryan" target="_blank" rel="noopener noreferrer">
            Iran Adryan
          </a>
          -
          <a href="https://devchallenges.io/challenges/ohgVTyJCbm5OZyTB2gNY" target="_blank" rel="noopener noreferrer">
            DevChallenges.io
          </a>
        </p>
      </Footer>
    </ThemeProvider>
  );
}
