import styled from "styled-components";
import { theme } from "../../../../theme";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { formatPrice } from "../../../../utils/maths"

export default function Product({ title, price, imageSource }) {
    return (
        <ProductStyled>
            <div className="image">
                <img src={imageSource} alt={title} />
            </div>
            <div className="info-text">
                <div className="title">{title}</div>
                <div className="description">
                    <div className="left-description">{formatPrice(price)}</div>
                    <div className="right-description">
                        <PrimaryButton className="primary-button" label={"Ajouter"} />
                    </div>
                </div>
            </div>
        </ProductStyled >
    )
}

const ProductStyled = styled.div`
    background: ${theme.colors.white};
    width: 240px;
    height: 300px;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
     border-radius: ${theme.borderRadius.extraRound};
        
        .image {
            width: 100%;
            height: auto;
            margin-top: 30px;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        .info-text {
            display: grid;
            grid-template-rows: 30% 70%;
            padding: 5px;

          .title {
            margin: auto 0;
            font-size: ${theme.fonts.P4};
            position: relative;
            bottom: 10px;
            font-weight: ${theme.weights.bold};
            color: ${theme.colors.dark};
            text-align: left;
            white-space: nowrap;
            overflow: hidden;
            width: 100%;
            text-overflow: ellipsis;
            font-family: "Amatic SC", cursive;
            }

          .description {
            display: grid;
            grid-template-columns: 1fr 1fr;

            .left-description {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                font-weight: ${theme.weights.medium};
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-weight: ${theme.weights.medium};
                color: ${theme.colors.primary};
            }

            .right-description {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                font-size: ${theme.fonts.P1};

                .primary-button {
                font-size: ${theme.fonts.XS};
                cursor: pointer;
                padding: 12px;
                }
            }
        }
    }
`;