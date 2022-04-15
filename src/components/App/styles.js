import styled from 'styled-components';

export const Container = styled.div`
  margin: 48px auto;
  width: 100%;
  max-width: 800px;

  p {
    margin-top: 48px;

    a {
      color: ${({ theme }) => theme.primary.main};
      margin-left: 6px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 32px;
`;

export const Row = styled.div`
  display: flex;

  & + & {
    margin-top: 42px;
  }
`;

export const ComponentContainer = styled.div`
  display: block;

  & + & {
    margin-left: 48px;
  }
`;

export const TagTitle = styled.pre`
  font-family: 'Ubuntu Mono', monospace;
  font-size: 12px;
  margin-bottom: 12px;
  white-space: pre-line;
`;

export const Footer = styled.footer`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.gray.light};

  p {
    a {
      color: ${({ theme }) => theme.primary.main};
      margin: 6px;
    }
  }
`;
