import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/createStore';
import { changeLanguage } from '../../store/language/actions';

const Flex = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledLanguageSelection = styled(Flex)`
    text-transform: uppercase;
`;

const LanguageSelect = styled.div<{ isSelected: boolean}>`
    margin-right: .5rem;
    border-top: 3px solid ${({ isSelected }) => isSelected ? 'white' : 'transparent'};
    font-size: 12px;
`;

const LanguageSelection = () => {
    const selectedLanguage = useSelector((state: RootState) => state.language)
    const dispatch = useDispatch();
    return (
        <StyledLanguageSelection>
        <LanguageSelect onClick={() => dispatch(changeLanguage({ code: 'fi'}))} isSelected={selectedLanguage.code === 'fi'}>
            suomeksi
        </LanguageSelect>
        <LanguageSelect onClick={() => dispatch(changeLanguage({ code: 'sv'} ))}isSelected={selectedLanguage.code === 'sv'}>
            svenska
        </LanguageSelect>
        </StyledLanguageSelection>
    );
};

export default LanguageSelection;