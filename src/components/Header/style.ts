import styled from "styled-components";
import {ReactComponent as AppLogo} from '../../assets/svg/full_logo.svg';

export const Container = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    padding-top: 30px;
`
export const Logo = styled(AppLogo) `
    width: 125px;
    height: 55px;
    object-fit: contain;
`
export const Navigation = styled.ul `
    display: flex;
    gap: 47px;
    justify-content: center;
    align-items: center;
    & li {
        font-size: 20px;
        cursor: pointer;
        color: #fff;
        list-style: none;
    }
`
export const ReserveButton = styled.a `
    padding: 8px 24px;
    background-color: #F7F7F7;
    font-size: 20px;
    font-weight: 400;
    cursor: pointer;
`