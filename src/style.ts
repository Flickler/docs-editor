import styled from "styled-components";

export const Editor = styled.div`
  .ql-editor {
    width: 8.5in;
    min-height: 11in;
    padding: 1in;
    margin: 1rem;
    margin-top: 2rem;
    box-shadow: var(--shadow);
    background-color: var(--white);
  }

  .ql-container.ql-snow {
    border: none;
    display: flex;
    justify-content: center;
  }

  .ql-toolbar.ql-snow {
    display: flex;
    justify-content: center;
    position: sticky;
    top: 1rem;
    z-index: 1;
    background-color: var(--gray-200);
    margin-inline: 2rem;
    border-radius: 1.5rem;
  }

  .ql-toolbar:hover {
    box-shadow: var(--shadow);
    transition: all 0.4s ease;
  }

  .ql-formats {
    padding: 2px;
    border-radius: 4px;
    position: relative;
  }

  .ql-formats:hover::after {
    font-size: 0.675rem;
    color: var(--white);
    background-color: var(--black);
    padding: 0.25rem;
    border-radius: 0.25rem;

    position: absolute;
    top: 125%;
    left: 25%;
    z-index: 2;
    animation: slide 0.3s ease;
  }

  .ql-formats:nth-child(1):hover::after {
    content: "Tamanho";
  }
  .ql-formats:nth-child(2):hover::after {
    content: "Fonte";
  }
  .ql-formats:nth-child(3):hover::after {
    content: "Lista";
  }
  .ql-formats:nth-child(4):hover::after {
    content: "Formatação";
  }
  .ql-formats:nth-child(5):hover::after {
    content: "Cores";
  }
  .ql-formats:nth-child(6):hover::after {
    content: "Indicadores";
  }
  .ql-formats:nth-child(7):hover::after {
    content: "Alinhamento";
  }
  .ql-formats:nth-child(8):hover::after {
    content: "Especiais";
  }
  .ql-formats:nth-child(9):hover::after {
    content: "Limpar";
  }

  .ql-formats:hover {
    background-color: var(--gray-300);
  }
`;
