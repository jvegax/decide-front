import styled from 'styled-components';

export const VotingFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
    padding: 2em;
    border-radius: 5px;
    background-color: #eee;
`;

export const Title = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    color: #000;
`;

export const LabelContainer = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    gap: 0.5em;
`;

export const Input = styled.input`
    padding: 0.5em 1em;
    border-radius: 5px;
    border: none;
    font-weight: 600;
    background-color: #fff;
    color: #000;
`;

export const NewOption = styled.button`
    padding: 0em 1em;
    border-radius: 5px;
    border: none;
    font-weight: 600;
    font-size: 2rem;
`
