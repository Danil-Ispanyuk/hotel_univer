import React from "react";
import * as Styled from "./style";
import ComfortImage from "../../assets/images/section_1_1.png";
import KitchenImage from "../../assets/images/section_1_2.png";
import OfficeImage from "../../assets/images/section_1_3.png";

export const Advantages = () => {
  return (
    <Styled.Wrapper id="advantages">
      <Styled.Container>
        <Styled.AdvantageList>
          <Styled.AdvantageItem>
            <Styled.AdvantagePhoto>
              <img src={ComfortImage} alt="comfort" />
            </Styled.AdvantagePhoto>
            <Styled.AdvantageContent>
              <Styled.AdvantageItemTitle>
                Ексклюзивний дизайн і комфортність номерів
              </Styled.AdvantageItemTitle>
              <Styled.AdvantageItemContent>
                Premier Hotel в Харкові славиться своїми стильними та зручними
                номерами. Вони оформлені з використанням високоякісних
                матеріалів, створюючи атмосферу розкоші та забезпечуючи високий
                рівень комфорту для гостей.
              </Styled.AdvantageItemContent>
            </Styled.AdvantageContent>
          </Styled.AdvantageItem>
          <Styled.AdvantageItem>
            <Styled.AdvantageContent isDark>
              <Styled.AdvantageItemTitle>
                Широкий спектр гастрономічних можливостей
              </Styled.AdvantageItemTitle>
              <Styled.AdvantageItemContent>
                Готель пропонує різноманітні ресторани та бари, де гості можуть
                насолоджуватися вишуканими стравами та напоями. Від сніданків до
                вечері, готель робить акцент на високій якості кулінарного
                досвіду.
              </Styled.AdvantageItemContent>
            </Styled.AdvantageContent>
            <Styled.AdvantagePhoto>
              <img src={KitchenImage} alt="kitchen" />
            </Styled.AdvantagePhoto>
          </Styled.AdvantageItem>
          <Styled.AdvantageItem>
            <Styled.AdvantagePhoto>
              <img src={OfficeImage} alt="office" />
            </Styled.AdvantagePhoto>
            <Styled.AdvantageContent>
              <Styled.AdvantageItemTitle>
                Сучасні конференц-зали та бізнес-зручності
              </Styled.AdvantageItemTitle>
              <Styled.AdvantageItemContent>
                Для корпоративних подій та конференцій Premier Hotel надає
                сучасні конференц-зали та високотехнологічне обладнання, що
                робить його ідеальним вибором для бізнес-подій та зустрічей
              </Styled.AdvantageItemContent>
            </Styled.AdvantageContent>
          </Styled.AdvantageItem>
        </Styled.AdvantageList>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
