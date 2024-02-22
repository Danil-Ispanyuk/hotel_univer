import React from 'react'
import * as Styled from "./style";
import PoolImage from "../../assets/images/section_2_1.png";
import KitchenImage from "../../assets/images/section_2_2.png";
import SPAImage from "../../assets/images/section_2_3.png";
import CleaningImage from "../../assets/images/section_2_4.png";

export const GallerySection = () => {
  return (
    <Styled.Wrapper>
        <Styled.Container>
            <Styled.List>
                <Styled.Item>
                    <img src={PoolImage} alt="pool" />
                </Styled.Item>
                <Styled.Item>
                    <img src={KitchenImage} alt="kitchen" />
                </Styled.Item>
                <Styled.Item>
                    <img src={SPAImage} alt="spa" />
                </Styled.Item>
                <Styled.Item>
                    <img src={CleaningImage} alt="cleaning" />
                </Styled.Item>
            </Styled.List>
        </Styled.Container>
    </Styled.Wrapper>
  )
}
