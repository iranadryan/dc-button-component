import styled, { css } from 'styled-components';

export const Container = styled.button`
  color: ${({ color, theme }) => color === 'gray' ? theme.black : theme.white};
  border: none;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease-in-out;

  &:disabled {
    background: ${({ theme }) => theme.gray.main};
    color: #9E9E9E;
    pointer-events: none;
    box-shadow: ${({ theme }) => theme.gray.shadow};
  }

  .startIcon {
    margin-right: 8px;
  }

  .endIcon {
    margin-left: 8px;
  }

  ${({ color, theme }) => css`
    background: ${theme[color].main};
    box-shadow: ${theme[color].shadow};

    &:hover, &:focus {
      background: ${theme[color].dark};
    }
  `}

  ${({ variant, color, theme }) => variant === 'outline' && css`
    background: transparent;
    border: 1px solid ${theme[color].main};
    box-shadow: none !important;
    color: ${theme[color].main};

    &:hover, &:focus {
      background: ${theme[color].light};
    }

    &:disabled {
      background: transparent;
      border: 1px solid #9E9E9E;
    }
  `}

  ${({ variant, color, theme }) => variant === 'text' && css`
    background: transparent;
    box-shadow: none !important;
    color: ${theme[color].main};

    &:hover, &:focus {
      background: ${theme[color].light};
    }

    &:disabled {
      background: transparent;
    }
  `}

  ${({ disableShadow }) => disableShadow && css`
    box-shadow: none;
  `}

  ${({ size }) => size === 'sm' && css`
    height: 32px;
    padding: 0 12px;
  `}

  ${({ size }) => size === 'md' && css`
    height: 36px;
    padding: 0 16px;
  `}

  ${({ size }) => size === 'lg' && css`
    height: 42px;
    padding: 0 22px;
  `}
`;
