import picture from '../images/заглушки/products/заглушка-products-middle-white-2x.png'
import {IngItem, IngItemName, IngItemDeskr, IngInput, IngAmount} from './Recipes.styled'

export const IngredientList = () => {
   
    return (
        <ul>
            <IngItem>
                <IngItemName>
                    <img
                        alt="ingredient_photo"
                        width="128px"
                        height="128px"
                        src={picture}
                    />
                    <p>Ingredient's name</p>
                </IngItemName>
                <IngItemDeskr>
                    <IngAmount>
                        <p>500 g</p>
                    </IngAmount>
                    <div>
                        <IngInput type="checkbox"/>
                    </div>
                </IngItemDeskr>
            </IngItem>
            <IngItem>
                <IngItemName>
                    <img
                        alt="ingredient_photo"
                        width="128px"
                        height="128px"
                        src={picture}
                    />
                    <p>Ingredient's name</p>
                </IngItemName>
                <IngItemDeskr>
                    <IngAmount>
                        <p>500 g</p>
                    </IngAmount>
                    <div>
                        <IngInput type="checkbox"/>
                    </div>
                </IngItemDeskr>
            </IngItem>
            <IngItem>
                <IngItemName>
                    <img
                        alt="ingredient_photo"
                        width="128px"
                        height="128px"
                        src={picture}
                    />
                    <p>Ingredient's name</p>
                </IngItemName>
                <IngItemDeskr>
                    <IngAmount>
                        <p>500 g</p>
                    </IngAmount>
                    <div>
                        <IngInput type="checkbox"/>
                    </div>
                </IngItemDeskr>
            </IngItem>
        </ul>
    );
  };
  