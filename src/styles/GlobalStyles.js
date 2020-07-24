import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    ::-webkit-scrollbar {
        width: 0.6rem;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 0.25rem;
        background: #909090;

        &:hover {
            background: #757575; 
        }
    }
    * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
    }

    html {
        min-height: 100%;
        scroll-behavior: smooth;
        overflow: hidden;
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: 'Roboto', -apple-system, system-ui, sans-serif;
    }

    ul {
        list-style: none;
        padding-left: 0;
    }

    .app {
        position: relative;
    }

    .send-to {
        &:hover {
            text-decoration: none;
        }
    }

    .interactive-btn {
        color: white !important;
        padding: 0.3rem;
        border-radius: 5px;
        width: 100px;
        transition: 0.2s ease-in;
        &:hover {
            
            transform: scale(1.1);
        }
        &:focus {
            outline: none;
        }
    }
    
`;